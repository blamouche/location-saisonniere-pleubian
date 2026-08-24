/**
 * Lieux à moins d'une heure de route de la Presqu'île sauvage (PRD §1.2, rayon
 * 30-60 min). Certains ont déjà une fiche `/decouvrir/` complète (voir `lien`),
 * d'autres sont listés ici avec un lien externe vérifié en attendant une fiche
 * dédiée. Durées de trajet à vérifier porte-à-porte avant publication définitive
 * (convention du dépôt) — aucune n'est affichée en minutes précises ici.
 */
export interface LieuAProximite {
  nom: string;
  description: string;
  /** Slug d'une fiche /decouvrir/ existante, si disponible. */
  lien?: string;
  /** Lien externe vérifié, utilisé seulement en l'absence de fiche dédiée. */
  lienExterne?: string;
}

export const lieuxAProximite: LieuAProximite[] = [
  { nom: 'Tréguier', description: "Cathédrale Saint-Tugdual, cité de caractère du Trégor.", lien: 'treguier' },
  { nom: 'Paimpol & Abbaye de Beauport', description: 'Port historique et abbaye cistercienne en bord d’estuaire.', lien: 'paimpol-beauport' },
  { nom: 'Île de Bréhat', description: 'Archipel sans voiture, granit rose et jardins, via la Pointe de l’Arcouest.', lien: 'ile-de-brehat' },
  { nom: 'Côte de Granit Rose', description: 'Ploumanac’h, Perros-Guirec, Trégastel — rochers roses sculptés par l’érosion.', lien: 'cote-de-granit-rose' },
  {
    nom: 'Lannion',
    description: 'Ville du Trégor sur le Léguer, commerces, cinéma, bureau d’information touristique.',
    lienExterne: 'https://www.cotesdarmor.com/a-voir-a-faire/patrimoine/villes-et-villages-classes/les-autres-villes-et-villages/lannion/',
  },
  {
    nom: 'Guingamp',
    description: 'Gare desservie par le TGV — accès direct vers Paris et Rennes.',
    lienExterne: 'https://www.cotesdarmor.com/a-voir-a-faire/patrimoine/villes-et-villages-classes/guingamp/',
  },
];
