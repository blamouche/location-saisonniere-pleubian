#!/usr/bin/env node
/**
 * Récupère météo / marées / lever-coucher du soleil pour la barre de contexte de
 * l'accueil (US-032, PRD §8.1 section 2, §14.5).
 *
 * TODO (Lot 2 avancé) : l'API réelle (SHOM pour les marées, Météo-France ou
 * Open-Meteo pour la météo) n'est pas encore choisie. En attendant, ce script
 * démontre le contrat attendu : tenter l'appel, écrire le résultat si succès,
 * et **dégrader proprement** vers la dernière donnée connue (ou un état
 * "indisponible" explicite) si l'appel échoue — jamais casser le build
 * (critère d'acceptation US-032).
 *
 * Usage : npm run fetch-tides (ou automatiquement via `npm run build`)
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '..', 'src', 'data', 'meteo-marees.generated.json');
const API_URL = process.env.TIDES_API_URL; // TODO : renseigner une fois l'API choisie.

async function recuperer() {
  if (!API_URL) {
    throw new Error('TIDES_API_URL non configurée — API météo/marées pas encore choisie (voir TODO en tête de fichier).');
  }
  const res = await fetch(API_URL, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`Réponse ${res.status} de l'API météo/marées`);
  return res.json();
}

function derniereDonneeConnue() {
  if (!existsSync(OUT_FILE)) return null;
  try {
    return JSON.parse(readFileSync(OUT_FILE, 'utf8'));
  } catch {
    return null;
  }
}

let sortie;
try {
  const data = await recuperer();
  sortie = { statut: 'ok', misAJour: new Date().toISOString(), donnees: data };
  console.log('✅ fetch-tides : données récupérées.');
} catch (err) {
  // Dégradation gracieuse : on retombe sur la dernière donnée connue si elle
  // existe, sinon on écrit un état explicitement "indisponible" — dans les deux
  // cas le build continue (critère d'acceptation US-032).
  const derniere = derniereDonneeConnue();
  sortie = derniere
    ? { ...derniere, statut: 'perime', erreur: String(err.message ?? err) }
    : { statut: 'indisponible', misAJour: new Date().toISOString(), donnees: null, erreur: String(err.message ?? err) };
  console.warn(`⚠️  fetch-tides : ${err.message ?? err} — le build continue (dégradation gracieuse).`);
}

writeFileSync(OUT_FILE, JSON.stringify(sortie, null, 2) + '\n', 'utf8');
