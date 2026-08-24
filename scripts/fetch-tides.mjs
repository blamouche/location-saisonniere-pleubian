#!/usr/bin/env node
/**
 * Récupère les horaires de marée du jour (et des 10 prochains jours) pour Pleubian,
 * pour la barre de contexte de l'accueil (US-032, PRD §8.1 section 2, §14.5).
 *
 * Source : horaire-maree.fr (scraping HTML — pas d'API officielle disponible sur ce
 * site). ⚠️ Les CGU de horaire-maree.fr réservent l'usage du service à un « usage
 * strictement personnel » ; ce script l'utilise malgré cette clause, décision
 * assumée par le porteur du projet (voir discussion du 24/08/2026). Attribution de
 * la source conservée dans les données produites, par cohérence avec la charte de
 * factualité datée du site (US-059 : « toute statistique cite sa source »).
 *
 * TODO éventuel : basculer vers l'API officielle du SHOM (data.shom.fr) si cette
 * clause devient bloquante ou si le scraping casse trop souvent (site non prévu
 * pour l'usage automatisé, structure HTML fragile).
 *
 * Dégradation gracieuse : un échec (site down, structure HTML changée) ne bloque
 * jamais le build — retombe sur la dernière donnée connue, ou un état
 * "indisponible" explicite (critère d'acceptation US-032).
 *
 * Usage : npm run fetch-tides (ou automatiquement via `npm run build`)
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '..', 'src', 'data', 'meteo-marees.generated.json');
const SOURCE_URL = 'https://www.horaire-maree.fr/maree/Pleubian/';

/** Extrait { heure, hauteur } d'une cellule "<strong>11h18</strong><br/> 4,22 m". */
function parseCelluleMaree($, td) {
  const strong = $(td).find('strong').first().text().trim();
  const texte = $(td).text().trim();
  const hauteurMatch = texte.match(/[\d,]+\s*m/);
  return {
    heure: strong || null,
    hauteur: hauteurMatch ? hauteurMatch[0].replace(/\s+/, ' ') : null,
  };
}

/** Extrait { coefficient, basseMer, pleineMer } d'un triplet de <td> consécutifs. */
function parseDemiJournee($, tds, offset) {
  const coeffText = $(tds[offset]).text().trim();
  const coefficient = coeffText ? Number.parseInt(coeffText, 10) : null;
  return {
    coefficient: Number.isFinite(coefficient) ? coefficient : null,
    basseMer: parseCelluleMaree($, tds[offset + 1]),
    pleineMer: parseCelluleMaree($, tds[offset + 2]),
  };
}

async function recuperer() {
  const res = await fetch(SOURCE_URL, {
    signal: AbortSignal.timeout(15000),
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MaisonOdJogeBuildBot/1.0)' },
  });
  if (!res.ok) throw new Error(`Réponse ${res.status} de ${SOURCE_URL}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  const dateAujourdhui = $('#i_header_tbl_droite h3')
    .first()
    .contents()
    .filter((_, el) => el.type === 'text')
    .last()
    .text()
    .trim();

  const ligneJour = $('#i_donnesJour table tr').eq(2);
  const tdsJour = ligneJour.find('td').toArray();
  if (tdsJour.length < 6) throw new Error("Structure inattendue pour la marée du jour (site source modifié ?)");

  const aujourdhui = {
    date: dateAujourdhui || null,
    matin: parseDemiJournee($, tdsJour, 0),
    apresMidi: parseDemiJournee($, tdsJour, 3),
  };

  const dixProchainsJours = [];
  $('#i_donnesLongue table tr').each((_i, tr) => {
    const tds = $(tr).find('td').toArray();
    if (tds.length < 7) return; // lignes d'en-tête
    const date = $(tds[0]).text().trim();
    dixProchainsJours.push({
      date,
      matin: parseDemiJournee($, tds, 1),
      apresMidi: parseDemiJournee($, tds, 4),
    });
  });

  if (dixProchainsJours.length === 0) throw new Error('Aucune ligne de prévision trouvée (site source modifié ?)');

  return { port: 'Pleubian', aujourdhui, dixProchainsJours };
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
  sortie = { statut: 'ok', misAJour: new Date().toISOString(), source: SOURCE_URL, donnees };
  console.log(`✅ fetch-tides : marée du jour récupérée (coeff. ${donnees.aujourdhui.matin.coefficient}/${donnees.aujourdhui.apresMidi.coefficient}).`);
} catch (err) {
  // Dégradation gracieuse (US-032) : dernière donnée connue si elle existe, sinon
  // état "indisponible" explicite — dans les deux cas le build continue.
  const derniere = derniereDonneeConnue();
  sortie = derniere
    ? { ...derniere, statut: 'perime', erreur: String(err.message ?? err) }
    : { statut: 'indisponible', misAJour: new Date().toISOString(), source: SOURCE_URL, donnees: null, erreur: String(err.message ?? err) };
  console.warn(`⚠️  fetch-tides : ${err.message ?? err} — le build continue (dégradation gracieuse).`);
}

writeFileSync(OUT_FILE, JSON.stringify(sortie, null, 2) + '\n', 'utf8');
