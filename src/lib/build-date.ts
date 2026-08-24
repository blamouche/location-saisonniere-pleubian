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
