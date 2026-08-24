import type { SaisonId } from './saisons';

export interface Suggestion {
  titre: string;
  description: string;
}

/**
 * Bloc « En ce moment à Pleubian » (US-033, PRD §6.2/§6.3). Contenu réel, ancré
 * dans les faits du territoire déjà réunis au PRD §1.2 — pas de données chiffrées
 * inventées (météo/marées réelles restent branchées au Lot 2 avancé, US-032).
 */
export const enCeMoment: Record<SaisonId, Suggestion[]> = {
  printemps: [
    { titre: 'Suivre les grandes marées au Sillon de Talbert', description: 'La réserve naturelle révèle tout son estran à marée basse — l’un des meilleurs moments pour la parcourir.' },
    { titre: 'Observer les oiseaux migrateurs', description: 'La Presqu’île sauvage est une halte sur la route des migrations printanières.' },
    { titre: 'Marcher le GR34 avant la foule de l’été', description: 'Le sentier des douaniers, encore tranquille, avec la lumière qui revient.' },
    { titre: 'Profiter des tarifs de basse saison', description: 'Avant la haute saison, les disponibilités et les prix sont plus souples.' },
    { titre: 'Voir les ajoncs en fleur sur la lande', description: 'Le jaune vif de l’ajonc marque le paysage breton au printemps.' },
  ],
  ete: [
    { titre: 'Se baigner à la plage de Kermagen', description: 'Plage familiale avec cale de mise à l’eau, à quelques minutes de la maison.' },
    { titre: 'Manger dehors dans le jardin clos', description: 'Huit autour d’une table, à l’abri, à quelques pas de la cuisine.' },
    { titre: 'Pagayer du côté de l’archipel de Bréhat', description: 'Kayak ou voile, en fonction des marées et du vent du jour.' },
    { titre: 'Découvrir le Sillon de Talbert au petit matin', description: 'Avant la chaleur et l’affluence, la flèche de galets se mérite tôt.' },
    { titre: 'Enchaîner les criques', description: 'Port-la-Chaîne, Port-Béni, Pors Rand : des mouillages plus discrets que les grandes plages.' },
  ],
  automne: [
    { titre: 'Regarder la mer se lever pendant les tempêtes d’équinoxe', description: 'Le spectacle des grandes marées d’automne, depuis la côte.' },
    { titre: 'Marcher le GR34 sans croiser personne', description: 'La Presqu’île retrouve son calme — le sentier des douaniers pour soi seul.' },
    { titre: 'Allumer le poêle à bois au retour d’une balade', description: 'L’argument phare de la maison hors saison.' },
    { titre: 'Profiter des tarifs bas de l’arrière-saison', description: 'La période la moins chargée de l’année pour réserver.' },
    { titre: 'Visiter Tréguier au calme', description: 'La cathédrale Saint-Tugdual et la cité de caractère, sans la cohue estivale.' },
  ],
  hiver: [
    { titre: 'Se déconnecter complètement', description: 'Pas de notifications, juste le poêle, la mer et le rythme des marées.' },
    { titre: 'Travailler à distance depuis l’espace dédié', description: 'WiFi et bureau au calme — la maison est pensée pour la workation.' },
    { titre: 'Observer le ciel étoilé', description: 'Loin de la pollution lumineuse des grandes villes.' },
    { titre: 'Passer les fêtes en famille au coin du feu', description: 'La configuration de la maison (4 chambres, jardin clos) se prête aux réunions familiales.' },
    { titre: 'Visiter la distillerie Glann ar Mor un jour de pluie', description: 'Le whisky breton de Pleubian, une sortie abritée à quelques minutes.' },
  ],
};
