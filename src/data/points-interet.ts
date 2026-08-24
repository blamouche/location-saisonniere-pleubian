/**
 * 12 points d'intérêt du territoire (US-045, PRD §1.2 / §8.1 section 8). Sert de
 * substitut léger à une carte MapLibre (non implémentée) — liste reliée aux fiches
 * `/decouvrir/` et `/experiences/`. Temps de trajet : à vérifier porte-à-porte avant
 * publication définitive (aucune durée n'est inventée ici).
 */
export interface PointInteret {
  nom: string;
  categorie: string;
  lien: string;
}

export const pointsInteret: PointInteret[] = [
  { nom: 'Sillon de Talbert', categorie: 'Nature', lien: '/decouvrir/sillon-de-talbert/' },
  { nom: 'Plage de Kermagen', categorie: 'Plage', lien: '/decouvrir/plages-pleubian/' },
  { nom: 'Port-la-Chaîne, Port-Béni, Pors Rand', categorie: 'Criques', lien: '/decouvrir/plages-pleubian/' },
  { nom: 'Sémaphore de Creac’h Maout', categorie: 'Panorama', lien: '/decouvrir/presquile-sauvage/' },
  { nom: 'Église Saint-Georges', categorie: 'Patrimoine', lien: '/experiences/culture-patrimoine/' },
  { nom: 'Église Notre-Dame de l’Armor', categorie: 'Patrimoine', lien: '/experiences/culture-patrimoine/' },
  { nom: 'Distillerie Glann ar Mor', categorie: 'Culture', lien: '/experiences/culture-patrimoine/' },
  { nom: 'Centre culturel Le Sillon', categorie: 'Culture', lien: '/experiences/culture-patrimoine/' },
  { nom: 'Tréguier', categorie: 'Cité de caractère', lien: '/decouvrir/treguier/' },
  { nom: 'Paimpol & Abbaye de Beauport', categorie: 'Patrimoine', lien: '/decouvrir/paimpol-beauport/' },
  { nom: 'Île de Bréhat', categorie: 'Archipel', lien: '/decouvrir/ile-de-brehat/' },
  { nom: 'Côte de Granit Rose', categorie: 'Paysage', lien: '/decouvrir/cote-de-granit-rose/' },
];
