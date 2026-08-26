/**
 * Cœur du routing i18n (Lot 5, US-061). Astro gère nativement le préfixe d'URL
 * (`i18n.routing.prefixDefaultLocale: false` dans astro.config.mjs → FR à la racine,
 * EN sous `/en/`, DE sous `/de/`) ; ce module ajoute la couche que Astro ne fournit
 * pas nativement : slugs traduits par section et par fiche, pour ne jamais exposer
 * un mot-clé français dans une URL anglaise ou allemande.
 */
import { withBase } from '@/lib/base-path';

export type Locale = 'fr' | 'en' | 'de';

export const locales: Locale[] = ['fr', 'en', 'de'];
export const defaultLocale: Locale = 'fr';

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
};

/** BCP 47 complet, pour `<html lang>` et `og:locale`. */
export const localeTags: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-GB',
  de: 'de-DE',
};

/** Préfixe d'URL — vide pour le FR (langue par défaut, non préfixée). */
export function localePrefix(locale: Locale): string {
  return locale === 'fr' ? '' : `/${locale}`;
}

/**
 * Slugs traduits des sections de l'arborescence (US-061). Le FR reste la clé de
 * référence utilisée dans tout le code existant (routing, données, maillage) ; EN/DE
 * ne sont utilisés que pour construire les chemins publics.
 */
export const sectionSlugs: Record<string, Record<Locale, string>> = {
  'la-maison': { fr: 'la-maison', en: 'the-house', de: 'das-haus' },
  galerie: { fr: 'galerie', en: 'gallery', de: 'galerie' },
  pratique: { fr: 'pratique', en: 'practical-info', de: 'praktische-infos' },
  reserver: { fr: 'reserver', en: 'book', de: 'buchen' },
  experiences: { fr: 'experiences', en: 'experiences', de: 'erlebnisse' },
  decouvrir: { fr: 'decouvrir', en: 'discover', de: 'entdecken' },
  saisons: { fr: 'saisons', en: 'seasons', de: 'jahreszeiten' },
  contact: { fr: 'contact', en: 'contact', de: 'kontakt' },
  legal: { fr: 'legal', en: 'legal', de: 'impressum' },
  avis: { fr: 'avis', en: 'reviews', de: 'bewertungen' },
  journal: { fr: 'journal', en: 'journal', de: 'journal' },
  agenda: { fr: 'agenda', en: 'events', de: 'veranstaltungen' },
};

export function sectionSlug(section: keyof typeof sectionSlugs, locale: Locale): string {
  return sectionSlugs[section][locale];
}

/** Slugs traduits des saisons (utilisés dans `/saisons/[saison]/`). */
export const saisonSlugs: Record<string, Record<Locale, string>> = {
  printemps: { fr: 'printemps', en: 'spring', de: 'fruehling' },
  ete: { fr: 'ete', en: 'summer', de: 'sommer' },
  automne: { fr: 'automne', en: 'autumn', de: 'herbst' },
  hiver: { fr: 'hiver', en: 'winter', de: 'winter' },
};

/** Libellés affichés des 4 saisons (pages saisons, bandeau « En ce moment ») — distincts des slugs d'URL. */
export const saisonLabels: Record<string, Record<Locale, string>> = {
  printemps: { fr: 'Printemps', en: 'Spring', de: 'Frühling' },
  ete: { fr: 'Été', en: 'Summer', de: 'Sommer' },
  automne: { fr: 'Automne', en: 'Autumn', de: 'Herbst' },
  hiver: { fr: 'Hiver', en: 'Winter', de: 'Winter' },
};

/** Accroche marketing de chaque saison (utilisée en hero `/saisons/[saison]/` et ailleurs). */
export const saisonPromesses: Record<string, Record<Locale, string>> = {
  printemps: { fr: 'La lumière revient', en: 'The light returns', de: 'Das Licht kehrt zurück' },
  ete: {
    fr: 'Huit autour d’une table, la mer à cinq minutes',
    en: 'Eight around a table, the sea five minutes away',
    de: 'Acht am Tisch, das Meer fünf Minuten entfernt',
  },
  automne: { fr: 'Le vent, le feu, le silence', en: 'The wind, the fire, the silence', de: 'Der Wind, das Feuer, die Stille' },
  hiver: { fr: 'Se mettre au chaud, très loin de tout', en: 'Warm and cosy, far from everything', de: 'Warm und geborgen, weit weg von allem' },
};

/** Période calendaire de chaque saison, formulée nativement par langue. */
export const saisonPeriodes: Record<string, Record<Locale, string>> = {
  printemps: { fr: '1 mars – 31 mai', en: '1 March – 31 May', de: '1. März – 31. Mai' },
  ete: { fr: '1 juin – 31 août', en: '1 June – 31 August', de: '1. Juni – 31. August' },
  automne: { fr: '1 sept. – 30 nov.', en: '1 Sept – 30 Nov', de: '1. Sept. – 30. Nov.' },
  hiver: { fr: '1 déc. – fin février', en: '1 Dec – end of February', de: '1. Dez. – Ende Februar' },
};

/** Slugs traduits des 11 pages `/experiences/[pilier]/` (clé = slug FR canonique). */
export const experienceSlugs: Record<string, Record<Locale, string>> = {
  'randonnee-gr34': { fr: 'randonnee-gr34', en: 'gr34-coastal-trail', de: 'gr34-kuestenwanderweg' },
  'velo-velomaritime': { fr: 'velo-velomaritime', en: 'cycling-velomaritime', de: 'radfahren-velomaritime' },
  'nautisme-kayak-voile': { fr: 'nautisme-kayak-voile', en: 'kayaking-sailing', de: 'kajak-segeln' },
  accrobranche: { fr: 'accrobranche', en: 'treetop-adventure-park', de: 'kletterwald' },
  'bien-etre-air-marin': { fr: 'bien-etre-air-marin', en: 'sea-air-wellbeing', de: 'seeluft-wohlbefinden' },
  'deconnexion-slow': { fr: 'deconnexion-slow', en: 'slow-living-disconnect', de: 'digital-detox' },
  'teletravail-workation': { fr: 'teletravail-workation', en: 'workation-remote-work', de: 'workation-homeoffice' },
  'culture-patrimoine': { fr: 'culture-patrimoine', en: 'culture-heritage', de: 'kultur-erbe' },
  gastronomie: { fr: 'gastronomie', en: 'local-food-drink', de: 'essen-trinken' },
  'famille-enfants': { fr: 'famille-enfants', en: 'family-kids', de: 'familie-kinder' },
  'festival-chant-de-marin': { fr: 'festival-chant-de-marin', en: 'sea-shanty-festival', de: 'shanty-festival' },
};

/** Slugs traduits des 8 fiches `/decouvrir/[lieu]/` (clé = slug FR canonique). */
export const decouvrirSlugs: Record<string, Record<Locale, string>> = {
  'sillon-de-talbert': { fr: 'sillon-de-talbert', en: 'talbert-spit', de: 'sillon-de-talbert' },
  'presquile-sauvage': { fr: 'presquile-sauvage', en: 'wild-peninsula', de: 'wilde-halbinsel' },
  'plages-pleubian': { fr: 'plages-pleubian', en: 'pleubian-beaches', de: 'straende-von-pleubian' },
  'ile-de-brehat': { fr: 'ile-de-brehat', en: 'brehat-island', de: 'insel-brehat' },
  treguier: { fr: 'treguier', en: 'treguier', de: 'treguier' },
  'paimpol-beauport': { fr: 'paimpol-beauport', en: 'paimpol-beauport-abbey', de: 'paimpol-beauport-abtei' },
  'cote-de-granit-rose': { fr: 'cote-de-granit-rose', en: 'pink-granite-coast', de: 'rosa-granitkueste' },
  'ou-manger-boire': { fr: 'ou-manger-boire', en: 'where-to-eat-drink', de: 'essen-und-trinken' },
};

/** Chemin absolu (avec préfixe langue + slash final + `base`) vers la racine d'une langue. */
export function homePath(locale: Locale): string {
  return withBase(locale === 'fr' ? '/' : `${localePrefix(locale)}/`);
}

/** Chemin absolu (avec `base`) vers la page d'index d'une section (ex. `/en/discover/`). */
export function sectionPath(section: keyof typeof sectionSlugs, locale: Locale): string {
  return withBase(`${localePrefix(locale)}/${sectionSlug(section, locale)}/`);
}

/** Chemin absolu vers une fiche traduite (expérience, lieu, saison…). */
export function entryPath(
  section: keyof typeof sectionSlugs,
  map: Record<string, Record<Locale, string>>,
  frSlug: string,
  locale: Locale
): string {
  const translated = map[frSlug]?.[locale] ?? frSlug;
  return `${sectionPath(section, locale)}${translated}/`;
}
