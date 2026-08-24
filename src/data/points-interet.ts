import type { Locale } from '@/i18n/locales';

/**
 * 12 points d'intérêt du territoire (US-045, PRD §1.2 / §8.1 section 8). Sert de
 * substitut léger à une carte MapLibre (non implémentée) — liste reliée aux fiches
 * `/decouvrir/` et `/experiences/`. Temps de trajet : à vérifier porte-à-porte avant
 * publication définitive (aucune durée n'est inventée ici). `section`/`frSlug`
 * permettent de recalculer le lien traduit (US-061) sans dupliquer les URLs.
 */
export interface PointInteret {
  nom: Record<Locale, string>;
  categorie: Record<Locale, string>;
  section: 'decouvrir' | 'experiences';
  frSlug: string;
}

export const pointsInteret: PointInteret[] = [
  {
    nom: { fr: 'Sillon de Talbert', en: 'Sillon de Talbert', de: 'Sillon de Talbert' },
    categorie: { fr: 'Nature', en: 'Nature', de: 'Natur' },
    section: 'decouvrir',
    frSlug: 'sillon-de-talbert',
  },
  {
    nom: { fr: 'Plage de Kermagen', en: 'Kermagen beach', de: 'Strand Kermagen' },
    categorie: { fr: 'Plage', en: 'Beach', de: 'Strand' },
    section: 'decouvrir',
    frSlug: 'plages-pleubian',
  },
  {
    nom: { fr: 'Port-la-Chaîne, Port-Béni, Pors Rand', en: 'Port-la-Chaîne, Port-Béni, Pors Rand', de: 'Port-la-Chaîne, Port-Béni, Pors Rand' },
    categorie: { fr: 'Criques', en: 'Coves', de: 'Buchten' },
    section: 'decouvrir',
    frSlug: 'plages-pleubian',
  },
  {
    nom: { fr: 'Sémaphore de Creac’h Maout', en: 'Creac’h Maout semaphore', de: 'Semaphor Creac’h Maout' },
    categorie: { fr: 'Panorama', en: 'Viewpoint', de: 'Aussichtspunkt' },
    section: 'decouvrir',
    frSlug: 'presquile-sauvage',
  },
  {
    nom: { fr: 'Église Saint-Georges', en: 'Saint-Georges church', de: 'Kirche Saint-Georges' },
    categorie: { fr: 'Patrimoine', en: 'Heritage', de: 'Kulturerbe' },
    section: 'experiences',
    frSlug: 'culture-patrimoine',
  },
  {
    nom: { fr: 'Église Notre-Dame de l’Armor', en: 'Notre-Dame de l’Armor church', de: 'Kirche Notre-Dame de l’Armor' },
    categorie: { fr: 'Patrimoine', en: 'Heritage', de: 'Kulturerbe' },
    section: 'experiences',
    frSlug: 'culture-patrimoine',
  },
  {
    nom: { fr: 'Distillerie Glann ar Mor', en: 'Glann ar Mor distillery', de: 'Destillerie Glann ar Mor' },
    categorie: { fr: 'Culture', en: 'Culture', de: 'Kultur' },
    section: 'experiences',
    frSlug: 'culture-patrimoine',
  },
  {
    nom: { fr: 'Centre culturel Le Sillon', en: 'Le Sillon cultural centre', de: 'Kulturzentrum Le Sillon' },
    categorie: { fr: 'Culture', en: 'Culture', de: 'Kultur' },
    section: 'experiences',
    frSlug: 'culture-patrimoine',
  },
  {
    nom: { fr: 'Tréguier', en: 'Tréguier', de: 'Tréguier' },
    categorie: { fr: 'Cité de caractère', en: 'Historic town', de: 'Historisches Städtchen' },
    section: 'decouvrir',
    frSlug: 'treguier',
  },
  {
    nom: { fr: 'Paimpol & Abbaye de Beauport', en: 'Paimpol & Beauport Abbey', de: 'Paimpol & Abtei Beauport' },
    categorie: { fr: 'Patrimoine', en: 'Heritage', de: 'Kulturerbe' },
    section: 'decouvrir',
    frSlug: 'paimpol-beauport',
  },
  {
    nom: { fr: 'Île de Bréhat', en: 'Bréhat Island', de: 'Insel Bréhat' },
    categorie: { fr: 'Archipel', en: 'Archipelago', de: 'Archipel' },
    section: 'decouvrir',
    frSlug: 'ile-de-brehat',
  },
  {
    nom: { fr: 'Côte de Granit Rose', en: 'Pink Granite Coast', de: 'Rosa Granitküste' },
    categorie: { fr: 'Paysage', en: 'Landscape', de: 'Landschaft' },
    section: 'decouvrir',
    frSlug: 'cote-de-granit-rose',
  },
];
