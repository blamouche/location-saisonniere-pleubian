#!/usr/bin/env node
/**
 * Récupère les horaires de marée officiels du SHOM (Service Hydrographique et
 * Océanographique de la Marine) pour Port-Béni, le port de référence le plus
 * proche de Pleubian, pour la barre de contexte de l'accueil (US-032, PRD §8.1
 * section 2, §14.5).
 *
 * Source : l'API interne du site officiel maree.shom.fr (pas de documentation
 * publique — reconstituée en inspectant le bundle JS de l'application). Utilisée
 * ici comme le SHOM lui-même l'utilise dans son propre site, avec le même en-tête
 * `Referer` — c'est une source publique, gouvernementale, gratuite. Remplace le
 * scraping de horaire-maree.fr (dont les CGU réservaient le service à un usage
 * personnel).
 *
 * Dégradation gracieuse : un échec (service indisponible, structure de réponse
 * changée) ne bloque jamais le build — retombe sur la dernière donnée connue, ou
 * un état "indisponible" explicite (critère d'acceptation US-032).
 *
 * Usage : npm run fetch-tides (ou automatiquement via `npm run build`)
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '..', 'src', 'data', 'meteo-marees.generated.json');

const PORT = { nom: 'Port-Béni', cst: 'PORT-BENI', lat: 48.847167, lon: -3.172333 };
const PAGE_URL = `https://maree.shom.fr/harbor/${PORT.cst}/hlt/0`;
const API_URL = 'https://services.data.shom.fr/b2q8lrcdl4s04cbabsj4nhcb/hdm/spm/hlt';
const DUREE_JOURS = 7; // borne haute acceptée par l'API pour ce type de requête.

/** Décalage horaire légal français (Europe/Paris) pour une date donnée, en heures
 * entières — gère automatiquement l'heure d'été/hiver via l'ICU de Node. */
function decalageParis(date) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', timeZoneName: 'shortOffset' }).formatToParts(date);
  const brut = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'GMT+0';
  const match = brut.match(/GMT([+-]\d+)/);
  return match ? Number(match[1]) : 0;
}

function formatDateISO(date) {
  return date.toISOString().slice(0, 10);
}

async function recuperer() {
  const aujourdhui = new Date();
  const utc = decalageParis(aujourdhui);
  const url = new URL(API_URL);
  url.searchParams.set('harborName', PORT.cst);
  url.searchParams.set('duration', String(DUREE_JOURS));
  url.searchParams.set('date', formatDateISO(aujourdhui));
  url.searchParams.set('utc', String(utc));
  url.searchParams.set('correlation', '1');

  const res = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; MaisonOdJogeBuildBot/1.0)',
      // Requis par l'API du SHOM (protection anti-hotlink) — même Referer que la
      // page officielle qui appelle ce même service.
      Referer: PAGE_URL,
    },
  });
  if (!res.ok) throw new Error(`Réponse ${res.status} de l'API SHOM`);
  const brut = await res.json();
  if (brut.error_code) throw new Error(`API SHOM : ${brut.error_message ?? brut.error_code}`);

  const TYPES = { 'tide.high': 'pleine_mer', 'tide.low': 'basse_mer' };
  const jours = Object.entries(brut)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, evenements]) => ({
      date,
      evenements: evenements.map(([type, heure, hauteur, coefficient]) => ({
        type: TYPES[type] ?? type,
        heure,
        hauteurMetres: Number.parseFloat(hauteur),
        coefficient: coefficient && coefficient !== '---' ? Number.parseInt(coefficient, 10) : null,
      })),
    }));

  if (jours.length === 0) throw new Error('Réponse SHOM vide (structure changée ?)');

  return { port: PORT, jours };
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
  const donnees = await recuperer();
  sortie = { statut: 'ok', misAJour: new Date().toISOString(), source: PAGE_URL, donnees };
  const premier = donnees.jours[0];
  console.log(`✅ fetch-tides (SHOM, ${PORT.nom}) : ${premier.evenements.length} événement(s) pour ${premier.date}.`);
} catch (err) {
  // Dégradation gracieuse (US-032) : dernière donnée connue si elle existe, sinon
  // état "indisponible" explicite — dans les deux cas le build continue.
  const derniere = derniereDonneeConnue();
  sortie = derniere
    ? { ...derniere, statut: 'perime', erreur: String(err.message ?? err) }
    : { statut: 'indisponible', misAJour: new Date().toISOString(), source: PAGE_URL, donnees: null, erreur: String(err.message ?? err) };
  console.warn(`⚠️  fetch-tides : ${err.message ?? err} — le build continue (dégradation gracieuse).`);
}

writeFileSync(OUT_FILE, JSON.stringify(sortie, null, 2) + '\n', 'utf8');
