import type { SaisonId } from './saisons';

/**
 * « 10 choses à faire » par saison, pour les pages piliers `/saisons/[saison]/`
 * (US-034, PRD §8.6). Ancré dans les faits du territoire réunis au PRD §1.2 —
 * pas d'horaires/tarifs inventés (à vérifier avant publication définitive, voir
 * l'avertissement du PRD §1.2).
 */
export const dixChoses: Record<SaisonId, string[]> = {
  printemps: [
    'Suivre les grandes marées au Sillon de Talbert',
    'Observer les oiseaux migrateurs sur la réserve naturelle',
    'Marcher une boucle du GR34 sans la foule de l’été',
    'Pédaler une étape de la Vélomaritime (EuroVelo 4)',
    'Visiter Tréguier et sa cathédrale Saint-Tugdual',
    'Découvrir l’Abbaye de Beauport à Paimpol',
    'Voir les ajoncs en fleur sur la lande',
    'Profiter des tarifs de basse saison',
    'Marcher jusqu’à la plage de Kermagen',
    'Faire une pause à la distillerie Glann ar Mor',
  ],
  ete: [
    'Se baigner à la plage de Kermagen',
    'Manger dehors dans le jardin clos',
    'Pagayer en kayak ou en voile vers l’archipel de Bréhat',
    'Parcourir le Sillon de Talbert tôt le matin',
    'Explorer les criques : Port-la-Chaîne, Port-Béni, Pors Rand',
    'Pédaler l’EuroVelo 4 en famille',
    'Visiter la Côte de Granit Rose (Ploumanac’h, Perros-Guirec, Trégastel)',
    'Prendre le bateau pour l’Île de Bréhat depuis la Pointe de l’Arcouest',
    'Marcher une boucle du GR34 au lever ou au coucher du soleil',
    'Découvrir le Centre culturel Le Sillon (spectacles d’été)',
  ],
  automne: [
    'Regarder la mer se lever pendant les tempêtes d’équinoxe',
    'Marcher le GR34 sans croiser personne',
    'Allumer le poêle à bois au retour d’une balade',
    'Visiter Tréguier au calme',
    'Observer le panorama depuis le sémaphore de Creac’h Maout',
    'Profiter des tarifs bas de l’arrière-saison',
    'Faire le Circuit des Phares (8,6 km)',
    'Découvrir le goémon et son histoire sur la Presqu’île',
    'Visiter l’église Notre-Dame de l’Armor et son granit rose',
    'Se ressourcer à l’air marin, iodé et vivifiant',
  ],
  hiver: [
    'Se déconnecter complètement, sans écran',
    'Travailler à distance depuis l’espace dédié',
    'Observer le ciel étoilé, loin de la pollution lumineuse',
    'Passer les fêtes en famille au coin du feu',
    'Visiter la distillerie Glann ar Mor un jour de pluie',
    'Marcher une courte boucle du GR34 avant la nuit',
    'Découvrir l’église Saint-Georges et son clocher-mur',
    'Observer les tempêtes hivernales depuis la côte',
    'Lire au coin du poêle, jardin clos sous la pluie',
    'Préparer le prochain été en étudiant les cartes de randonnée',
  ],
};
