#!/usr/bin/env node
/**
 * Vérifie que tous les liens internes du build statique (`docs/`) pointent vers une
 * page réellement générée (US-008, US-047, PRD §14.5). Ne vérifie pas encore les
 * liens externes (à ajouter au Lot 3+ quand le volume de contenu le justifie).
 *
 * Usage : npm run build && node scripts/check-links.mjs
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE } from '../site.config.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'docs');

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

function resolvesToFile(hrefPath) {
  let clean = hrefPath.split('#')[0].split('?')[0];
  if (clean === '') return true;
  // Le HTML généré doit préfixer chaque lien interne avec `base`
  // (astro.config.mjs) — un lien racine-relatif qui ne l'a pas est cassé une fois
  // déployé sous ce sous-dossier, même s'il « existe » ici par coïncidence
  // structurelle : on le rejette explicitement plutôt que de le laisser passer.
  if (clean === BASE) clean = '/';
  else if (clean.startsWith(`${BASE}/`)) clean = clean.slice(BASE.length);
  else return false;
  const target = join(DIST, clean);
  if (existsSync(target) && statSync(target).isFile()) return true;
  const asIndex = join(DIST, clean, 'index.html');
  if (existsSync(asIndex)) return true;
  const asHtml = target.endsWith('.html') ? target : `${target}.html`;
  return existsSync(asHtml);
}

const htmlFiles = listHtmlFiles(DIST);
const hrefRegex = /href="(\/[^"]*)"/g;
let brokenCount = 0;
let checkedCount = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(hrefRegex)) {
    const href = match[1];
    checkedCount += 1;
    if (!resolvesToFile(href)) {
      brokenCount += 1;
      console.error(`✖ Lien cassé dans ${file.replace(DIST, 'docs')} → ${href}`);
    }
  }
}

if (brokenCount > 0) {
  console.error(`\n${brokenCount} lien(s) interne(s) cassé(s) sur ${checkedCount} vérifiés.`);
  process.exit(1);
}

console.log(`✅ ${checkedCount} lien(s) interne(s) vérifié(s), aucun lien cassé.`);
