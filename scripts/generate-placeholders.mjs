#!/usr/bin/env node
/**
 * Génère des visuels placeholder génériques (SVG) pour le développement du site,
 * en attendant les 4 shootings saisonniers réels (voir docs/user-stories.md §0 et §7).
 *
 * Aucune dépendance réseau ni licence à vérifier : ce sont des à-plats colorés avec
 * un libellé, pas des photos. Convention de nommage : `placeholder-<slug>.svg`.
 *
 * Usage : npm run placeholders
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'medias', 'placeholder');

const RATIOS = {
  '16x9': [1600, 900],
  '4x5': [1000, 1250],
  '1x1': [1000, 1000],
};

// Une palette par saison (§6.2 du PRD, mêmes teintes que src/styles/global.css —
// US-029) : les placeholders de chaque saison sont visuellement distincts.
const PALETTES = {
  printemps: { from: '#3f6e2e', to: '#6b9c4f', ink: '#1a2614', paper: '#f7f5ee' },
  ete: { from: '#0b5f6b', to: '#12897a', ink: '#0a2b2c', paper: '#faf8f4' },
  automne: { from: '#a34a17', to: '#c96a2e', ink: '#2b1d12', paper: '#f7f1e6' },
  hiver: { from: '#2a3550', to: '#5a6a86', ink: '#0a0d14', paper: '#f4f6f8' },
};

/** @type {{ slug: string, label: string, ratio: keyof typeof RATIOS, saison?: keyof typeof PALETTES }[]} */
const ASSETS = [
  { slug: 'hero-ete-16x9', label: 'Hero — Été', ratio: '16x9', saison: 'ete' },
  { slug: 'hero-ete-4x5', label: 'Hero — Été', ratio: '4x5', saison: 'ete' },
  { slug: 'hero-ete-1x1', label: 'Hero — Été', ratio: '1x1', saison: 'ete' },
  { slug: 'hero-printemps-16x9', label: 'Hero — Printemps', ratio: '16x9', saison: 'printemps' },
  { slug: 'hero-automne-16x9', label: 'Hero — Automne', ratio: '16x9', saison: 'automne' },
  { slug: 'hero-hiver-16x9', label: 'Hero — Hiver', ratio: '16x9', saison: 'hiver' },
  { slug: 'saison-printemps-1', label: 'Printemps sur la Presqu’île', ratio: '4x5', saison: 'printemps' },
  { slug: 'saison-printemps-2', label: 'Printemps — Sillon de Talbert', ratio: '4x5', saison: 'printemps' },
  { slug: 'saison-printemps-3', label: 'Printemps — jardin', ratio: '4x5', saison: 'printemps' },
  { slug: 'saison-ete-1', label: 'Été sur la Presqu’île', ratio: '4x5', saison: 'ete' },
  { slug: 'saison-ete-2', label: 'Été — plage de Kermagen', ratio: '4x5', saison: 'ete' },
  { slug: 'saison-ete-3', label: 'Été — jardin', ratio: '4x5', saison: 'ete' },
  { slug: 'saison-automne-1', label: 'Automne sur la Presqu’île', ratio: '4x5', saison: 'automne' },
  { slug: 'saison-automne-2', label: 'Automne — GR34', ratio: '4x5', saison: 'automne' },
  { slug: 'saison-automne-3', label: 'Automne — poêle à bois', ratio: '4x5', saison: 'automne' },
  { slug: 'saison-hiver-1', label: 'Hiver sur la Presqu’île', ratio: '4x5', saison: 'hiver' },
  { slug: 'saison-hiver-2', label: 'Hiver — ciel étoilé', ratio: '4x5', saison: 'hiver' },
  { slug: 'saison-hiver-3', label: 'Hiver — poêle à bois', ratio: '4x5', saison: 'hiver' },
  { slug: 'carte-territoire', label: 'Carte du territoire', ratio: '16x9' },
  { slug: 'salon', label: 'Salon', ratio: '4x5' },
  { slug: 'cuisine', label: 'Cuisine', ratio: '4x5' },
  { slug: 'chambre-1-etage', label: 'Chambre 1 — étage', ratio: '4x5' },
  { slug: 'chambre-2-etage', label: 'Chambre 2 — étage', ratio: '4x5' },
  { slug: 'chambre-3-etage', label: 'Chambre 3 — étage', ratio: '4x5' },
  { slug: 'chambre-4-rdc', label: 'Chambre 4 — RDC', ratio: '4x5' },
  { slug: 'salle-de-bain-rdc', label: 'Salle de bain — RDC', ratio: '4x5' },
  { slug: 'salle-de-bain-etage', label: 'Salle de bain — étage', ratio: '4x5' },
  { slug: 'jardin', label: 'Jardin clos', ratio: '4x5' },
  { slug: 'facade', label: 'Façade', ratio: '4x5' },
  { slug: 'poele-a-bois', label: 'Poêle à bois', ratio: '4x5' },
  { slug: 'espace-travail', label: 'Espace de travail', ratio: '4x5' },
  { slug: 'plan-rdc', label: 'Plan — RDC', ratio: '1x1' },
  { slug: 'plan-etage', label: 'Plan — étage', ratio: '1x1' },
];

function svg(label, ratioKey, seed, palette) {
  const [w, h] = RATIOS[ratioKey];
  const angle = (seed * 37) % 360;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label} — visuel provisoire">
  <defs>
    <linearGradient id="g" gradientTransform="rotate(${angle})">
      <stop offset="0%" stop-color="${palette.from}"/>
      <stop offset="100%" stop-color="${palette.to}"/>
    </linearGradient>
    <pattern id="p" width="64" height="64" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <rect width="64" height="64" fill="transparent"/>
      <line x1="0" y1="0" x2="0" y2="64" stroke="${palette.paper}" stroke-opacity="0.06" stroke-width="32"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#p)"/>
  <rect x="24" y="24" width="${Math.round(w * 0.42)}" height="44" rx="8" fill="${palette.ink}" fill-opacity="0.55"/>
  <text x="40" y="54" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" fill="${palette.paper}" font-weight="600">PLACEHOLDER</text>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="ui-serif, Georgia, serif" font-size="${Math.round(w * 0.05)}" fill="${palette.paper}" fill-opacity="0.95">${label}</text>
  <text x="50%" y="${h - 36}" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="18" fill="${palette.paper}" fill-opacity="0.75">Visuel générique — remplacé au shooting réel</text>
</svg>
`;
}

mkdirSync(OUT_DIR, { recursive: true });

ASSETS.forEach((asset, i) => {
  const palette = PALETTES[asset.saison ?? 'ete'];
  const file = join(OUT_DIR, `placeholder-${asset.slug}.svg`);
  writeFileSync(file, svg(asset.label, asset.ratio, i, palette), 'utf8');
});

console.log(`✅ ${ASSETS.length} visuels placeholder générés dans ${OUT_DIR}`);
