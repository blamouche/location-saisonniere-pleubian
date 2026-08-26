/**
 * Horodatage du build (US-059, PRD §12.2.C) : toutes les pages générées par ce
 * même `astro build` partagent la même date « Mis à jour le » — honnête tant que
 * le contenu de ces pages est entièrement recalculé à chaque build (ce qui est le
 * cas ici : aucune page de contenu n'est éditée hors build).
 */
export const buildDate = new Date();

export function formatDateFR(date: Date): string {
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Formatage de date localisé (US-065) — un seul format par langue, pas de bascule impérial/métrique caché. */
export function formatDateLocale(date: Date, locale: 'fr' | 'en' | 'de'): string {
  const tags: Record<typeof locale, string> = { fr: 'fr-FR', en: 'en-GB', de: 'de-DE' };
  return date.toLocaleDateString(tags[locale], { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Date courte numérique pour un `YYYY-MM-DD` brut (ex. dates de marée SHOM) — DD/MM/YYYY (DE : DD.MM.YYYY). */
export function formatDateCourte(isoDate: string, locale: 'fr' | 'en' | 'de'): string {
  const [y, m, d] = isoDate.split('-');
  return locale === 'de' ? `${d}.${m}.${y}` : `${d}/${m}/${y}`;
}
