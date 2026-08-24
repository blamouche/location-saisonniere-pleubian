#!/usr/bin/env node
/**
 * Calcule la saison du jour et horodate le build (US-032, PRD §14.2/§14.5).
 * Écrit `src/data/build-meta.generated.json`, consommé au build suivant si besoin
 * d'un point de vérité unique côté outillage (le rendu des pages calcule aussi la
 * saison en direct via `src/data/saisons.ts` — les deux restent cohérents car issus
 * de la même logique de dates).
 *
 * Prévu comme step `prebuild` (voir package.json) : tourne avant `astro build`,
 * y compris lors du rebuild quotidien programmé une fois l'hébergement branché
 * (US-009) et le cron configuré côté Vercel/Netlify.
 *
 * Usage : npm run build-season (ou automatiquement via `npm run build`)
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '..', 'src', 'data', 'build-meta.generated.json');

const SAISONS = [
  { id: 'printemps', debut: 3, fin: 5 },
  { id: 'ete', debut: 6, fin: 8 },
  { id: 'automne', debut: 9, fin: 11 },
  { id: 'hiver', debut: 12, fin: 2 },
];

function saisonDuMois(mois) {
  const trouvee = SAISONS.find((s) => (s.debut <= s.fin ? mois >= s.debut && mois <= s.fin : mois >= s.debut || mois <= s.fin));
  return trouvee?.id ?? 'ete';
}

const now = new Date();
const meta = {
  builtAt: now.toISOString(),
  saisonId: saisonDuMois(now.getMonth() + 1),
};

writeFileSync(OUT_FILE, JSON.stringify(meta, null, 2) + '\n', 'utf8');
console.log(`✅ build-season : ${meta.saisonId} (${meta.builtAt}) → ${OUT_FILE}`);
