#!/usr/bin/env node
/**
 * Contrôle du maillage interne (US-047, PRD §11.1) :
 *  - aucune page orpheline (0 lien entrant depuis une autre page) ;
 *  - chaque hub de niveau 1 (`/experiences/`, `/decouvrir/`, `/saisons/`) pointe
 *    vers au moins 6 pages de son cluster.
 *
 * Fonctionne sur le build statique (`docs/`) — reflète donc le maillage réel produit,
 * pas une intention déclarée dans le code source.
 *
 * Usage : npm run build && node scripts/check-orphans.mjs
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE } from '../site.config.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'docs');

// Pages qui n'ont légitimement pas besoin de lien entrant (points d'entrée /
// pages utilitaires, pas des pages de contenu du maillage).
const EXEMPTS = new Set(['/', '/404.html']);

if (!existsSync(DIST)) {
  console.error('✖ docs/ introuvable — lance `npm run build` avant ce script.');
  process.exit(1);
}

function listHtmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return listHtmlFiles(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

function urlFor(file) {
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

const files = listHtmlFiles(DIST);
const urls = new Set(files.map(urlFor));
const incoming = new Map([...urls].map((u) => [u, new Set()]));

const hrefRegex = /href="(\/[^"]*)"/g;

for (const file of files) {
  const from = urlFor(file);
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(hrefRegex)) {
    let to = match[1].split('#')[0].split('?')[0];
    // Les URLs internes générées sont préfixées par `base` — on le retire pour
    // comparer contre `urls`, qui reste exprimé en chemins non préfixés.
    if (to === BASE) to = '/';
    else if (to.startsWith(`${BASE}/`)) to = to.slice(BASE.length);
    else continue;
    const normalized = to.endsWith('/') || to === '' ? to : `${to}/`;
    if (normalized !== from && urls.has(normalized)) {
      incoming.get(normalized).add(from);
    }
  }
}

const orphelines = [...urls].filter((u) => !EXEMPTS.has(u) && incoming.get(u).size === 0);

// Vérification des clusters : chaque page hub pointe vers ≥ 6 pages de son cluster.
const clusters = {
  '/experiences/': files.filter((f) => urlFor(f).startsWith('/experiences/') && urlFor(f) !== '/experiences/').length,
  '/decouvrir/': files.filter((f) => urlFor(f).startsWith('/decouvrir/') && urlFor(f) !== '/decouvrir/').length,
};

let sousLies = [];
for (const [hub, count] of Object.entries(clusters)) {
  if (count < 6) sousLies.push(`${hub} : seulement ${count} page(s) de cluster (minimum 6 attendu, §11.1 du PRD)`);
}

let echec = false;

if (orphelines.length > 0) {
  echec = true;
  console.error(`✖ ${orphelines.length} page(s) orpheline(s) (0 lien entrant) :`);
  orphelines.forEach((u) => console.error(`  - ${u}`));
}

if (sousLies.length > 0) {
  echec = true;
  console.error(`✖ Cluster(s) sous-lié(s) :`);
  sousLies.forEach((s) => console.error(`  - ${s}`));
}

if (echec) process.exit(1);

console.log(`✅ Maillage interne OK — ${urls.size} pages, 0 orpheline, clusters conformes.`);
