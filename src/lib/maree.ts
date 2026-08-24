import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Lit `src/data/meteo-marees.generated.json` (produit par `scripts/fetch-tides.mjs`
 * en `prebuild`, US-032). Lecture défensive plutôt qu'un `import` statique : le
 * fichier n'existe pas forcément (première fois, `astro dev` sans avoir lancé le
 * script) — dans ce cas on dégrade vers "indisponible" sans casser le build/dev.
 */
export interface DemiJournee {
  coefficient: number | null;
  basseMer: { heure: string | null; hauteur: string | null };
  pleineMer: { heure: string | null; hauteur: string | null };
}

export interface DonneesMaree {
  port: string;
  aujourdhui: { date: string | null; matin: DemiJournee; apresMidi: DemiJournee };
  dixProchainsJours: { date: string; matin: DemiJournee; apresMidi: DemiJournee }[];
}

export interface FichierMaree {
  statut: 'ok' | 'perime' | 'indisponible';
  misAJour: string;
  source?: string;
  donnees: DonneesMaree | null;
  erreur?: string;
}

// `process.cwd()` plutôt qu'un chemin relatif à `import.meta.url` : Astro/Vite
// transforme ce module au build, ce qui déplace sa localisation effective et
// casserait un `new URL('../data/...', import.meta.url)`. Le build tourne toujours
// depuis la racine du projet.
const FILE_PATH = join(process.cwd(), 'src', 'data', 'meteo-marees.generated.json');

export function lireMaree(): FichierMaree {
  if (!existsSync(FILE_PATH)) {
    return { statut: 'indisponible', misAJour: new Date().toISOString(), donnees: null, erreur: 'Fichier non généré (lancer npm run fetch-tides).' };
  }
  try {
    return JSON.parse(readFileSync(FILE_PATH, 'utf8'));
  } catch (err) {
    return { statut: 'indisponible', misAJour: new Date().toISOString(), donnees: null, erreur: String(err) };
  }
}
