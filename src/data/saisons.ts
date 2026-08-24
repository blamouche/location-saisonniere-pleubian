/**
 * Définition des 4 saisons (PRD §6.2). En Lot 0/1, seule la saison en cours est
 * pleinement outillée visuellement (palette réelle) — les 3 autres existent déjà en
 * données pour ne pas avoir à retoucher le typage au Lot 2, mais réutilisent
 * temporairement la palette de la saison en cours (voir `src/styles/global.css`).
 */
export type SaisonId = 'printemps' | 'ete' | 'automne' | 'hiver';

export interface Saison {
  id: SaisonId;
  label: string;
  promesse: string;
  periode: string;
  /** Mois (1-12) de début et fin inclus, pour le calcul de la saison courante. */
  moisDebut: number;
  moisFin: number;
}

export const saisons: Saison[] = [
  {
    id: 'printemps',
    label: 'Printemps',
    promesse: 'La lumière revient',
    periode: '1 mars – 31 mai',
    moisDebut: 3,
    moisFin: 5,
  },
  {
    id: 'ete',
    label: 'Été',
    promesse: 'Huit autour d’une table, la mer à cinq minutes',
    periode: '1 juin – 31 août',
    moisDebut: 6,
    moisFin: 8,
  },
  {
    id: 'automne',
    label: 'Automne',
    promesse: 'Le vent, le feu, le silence',
    periode: '1 sept. – 30 nov.',
    moisDebut: 9,
    moisFin: 11,
  },
  {
    id: 'hiver',
    label: 'Hiver',
    promesse: 'Se mettre au chaud, très loin de tout',
    periode: '1 déc. – fin février',
    moisDebut: 12,
    moisFin: 2,
  },
];

/** Détermine la saison en cours à partir d'une date (§6.1, règle par défaut). */
export function getSaisonCourante(date: Date = new Date()): Saison {
  const mois = date.getMonth() + 1;
  const trouvee = saisons.find((s) =>
    s.moisDebut <= s.moisFin
      ? mois >= s.moisDebut && mois <= s.moisFin
      : mois >= s.moisDebut || mois <= s.moisFin
  );
  // Toujours vrai (les 4 plages couvrent l'année) — fallback défensif uniquement.
  return trouvee ?? saisons[1];
}

export function getSaison(id: SaisonId): Saison {
  const s = saisons.find((s) => s.id === id);
  if (!s) throw new Error(`Saison inconnue : ${id}`);
  return s;
}
