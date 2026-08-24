export interface FicheLieu {
  slug: string;
  nom: string;
  resume: {
    ou: string;
    dureeVisite: string;
    gratuitPayant: string;
    meilleureSaison: string;
    accessiblePMR: string;
  };
  geo: { latitude: number; longitude: number; verifie: boolean };
  corps: string[];
  conseilPratique: string;
  aCombinerAvec: string[];
  /** Page /experiences/ la plus pertinente, ajoutée à l'encart "à combiner avec" (≥ 3 liens au total). */
  experienceLiee: string;
  heroSlug: string;
}

/**
 * Fiches « Découvrir » (US-041/US-042, PRD §8.5). Contenu ancré dans les faits déjà
 * réunis au PRD §1.2. Coordonnées GPS **approximatives, non vérifiées** — à préciser
 * avant publication définitive. Distances porte-à-porte : jamais indiquées ici tant
 * qu'elles n'ont pas été mesurées réellement (convention du dépôt, `CLAUDE.md`).
 */
export const fichesLieux: FicheLieu[] = [
  {
    slug: 'sillon-de-talbert',
    nom: 'Le Sillon de Talbert',
    resume: {
      ou: "Pleubian, entre les estuaires du Trieux et du Jaudy",
      dureeVisite: '1h à 1h30 aller-retour',
      gratuitPayant: 'Gratuit',
      meilleureSaison: "Toute l'année — selon l'horaire de marée",
      accessiblePMR: 'Non (sol de galets, non stabilisé)',
    },
    geo: { latitude: 48.8703, longitude: -3.0847, verifie: false },
    corps: [
      "Le Sillon de Talbert est une flèche de galets de 3,2 km qui s'avance dans la mer, entre les estuaires du Trieux et du Jaudy. Classée réserve naturelle régionale, c'est l'un des sites géologiques les plus singuliers du littoral breton.",
      "La flèche est **submersible aux grandes marées** : se renseigner sur l'horaire de marée avant de s'y engager, en particulier en vives-eaux. C'est un point de sécurité, pas un détail.",
      "Le site abrite une faune d'oiseaux migrateurs et nicheurs, particulièrement visible au printemps et à l'automne.",
    ],
    conseilPratique: 'Vérifier l’horaire de marée avant de partir — le sillon change complètement d’aspect entre marée haute et marée basse.',
    aCombinerAvec: ['presquile-sauvage', 'plages-pleubian'],
    experienceLiee: 'randonnee-gr34',
    heroSlug: 'saison-ete-1',
  },
  {
    slug: 'presquile-sauvage',
    nom: 'La Presqu\'île sauvage',
    resume: {
      ou: 'Presqu\'île de Lézardrieux, Côtes-d\'Armor',
      dureeVisite: 'Plusieurs jours pour en faire le tour',
      gratuitPayant: 'Gratuit (territoire en accès libre)',
      meilleureSaison: "Toute l'année — ambiance différente à chaque saison",
      accessiblePMR: 'Variable selon les sites',
    },
    geo: { latitude: 48.83, longitude: -3.13, verifie: false },
    corps: [
      "La Presqu'île sauvage désigne l'ensemble du territoire entre les estuaires du Trieux et du Jaudy, dont Pleubian et son hameau de l'Armor font partie. Le nom vient de son caractère peu urbanisé, dominé par la lande, les criques et le granit.",
      "Le GR34 (sentier des douaniers) longe l'intégralité du littoral, reliant les hameaux de Kermagen, Port-la-Chaîne, Port-Béni et Creac'h Maout.",
      "C'est un territoire à vivre au rythme des marées, pas à cocher en une journée.",
    ],
    conseilPratique: 'Le meilleur moyen de découvrir le territoire reste la marche — le GR34 dessert la quasi-totalité des points d’intérêt.',
    aCombinerAvec: ['sillon-de-talbert', 'plages-pleubian', 'cote-de-granit-rose'],
    experienceLiee: 'randonnee-gr34',
    heroSlug: 'saison-automne-1',
  },
  {
    slug: 'plages-pleubian',
    nom: 'Les plages de Pleubian',
    resume: {
      ou: 'Pleubian et ses environs',
      dureeVisite: 'Une demi-journée',
      gratuitPayant: 'Gratuit',
      meilleureSaison: 'Été pour la baignade, toute l’année pour la marche',
      accessiblePMR: 'Kermagen : cale de mise à l’eau — à confirmer pour le reste',
    },
    geo: { latitude: 48.845, longitude: -3.13, verifie: false },
    corps: [
      "La plage de Kermagen est la plage familiale de référence à Pleubian, avec sa cale de mise à l'eau. Au-delà, plusieurs criques plus discrètes (Port-la-Chaîne, Port-Béni, Pors Rand) offrent des mouillages abrités.",
      "Ces criques changent radicalement d'aspect entre marée haute et marée basse — voir « Comprendre les marées » dans le journal.",
    ],
    conseilPratique: 'Les criques (Port-la-Chaîne, Port-Béni) sont moins fréquentées que la plage de Kermagen en haute saison.',
    aCombinerAvec: ['sillon-de-talbert', 'presquile-sauvage'],
    experienceLiee: 'nautisme-kayak-voile',
    heroSlug: 'saison-ete-2',
  },
  {
    slug: 'ile-de-brehat',
    nom: 'Île de Bréhat',
    resume: {
      ou: "Archipel de Bréhat, embarquement à la Pointe de l'Arcouest",
      dureeVisite: 'Une journée',
      gratuitPayant: 'Payant (traversée en bateau)',
      meilleureSaison: 'Printemps à automne',
      accessiblePMR: 'À vérifier avant publication',
    },
    geo: { latitude: 48.8447, longitude: -2.9767, verifie: false },
    corps: [
      "L'île de Bréhat, accessible en bateau depuis la Pointe de l'Arcouest, est un archipel sans voiture, connu pour son climat doux, ses jardins et son granit rose.",
      "La traversée se fait par bateau depuis la Pointe de l'Arcouest — horaires et tarifs à vérifier et publier avant mise en ligne définitive (dépendent de la compagnie et de la saison).",
    ],
    conseilPratique: 'Réserver la traversée en haute saison — les départs peuvent afficher complet.',
    aCombinerAvec: ['cote-de-granit-rose', 'presquile-sauvage'],
    experienceLiee: 'nautisme-kayak-voile',
    heroSlug: 'saison-ete-3',
  },
  {
    slug: 'treguier',
    nom: 'Tréguier',
    resume: {
      ou: 'Tréguier, Côtes-d\'Armor',
      dureeVisite: 'Une demi-journée à une journée',
      gratuitPayant: 'Gratuit pour la cité, payant pour certains sites (à confirmer)',
      meilleureSaison: "Toute l'année",
      accessiblePMR: 'Variable selon les sites',
    },
    geo: { latitude: 48.7833, longitude: -3.2333, verifie: false },
    corps: [
      "Tréguier est l'une des cités de caractère du Trégor, connue pour sa cathédrale gothique Saint-Tugdual et son tissu médiéval de maisons à pans de bois.",
      "La ville est aussi liée à Ernest Renan, écrivain et philologue né à Tréguier, dont la maison natale se visite.",
    ],
    conseilPratique: 'Voir l’itinéraire complet à pied dans le journal : Tréguier en une journée.',
    aCombinerAvec: ['paimpol-beauport', 'presquile-sauvage'],
    experienceLiee: 'culture-patrimoine',
    heroSlug: 'saison-printemps-2',
  },
  {
    slug: 'paimpol-beauport',
    nom: 'Paimpol & l\'Abbaye de Beauport',
    resume: {
      ou: 'Paimpol, Côtes-d\'Armor (via Lézardrieux)',
      dureeVisite: 'Une demi-journée à une journée',
      gratuitPayant: 'Port gratuit, abbaye payante (tarif à confirmer)',
      meilleureSaison: "Toute l'année",
      accessiblePMR: 'À vérifier',
    },
    geo: { latitude: 48.7833, longitude: -3.05, verifie: false },
    corps: [
      "Paimpol est un port breton historique, marqué par la pêche à la morue en Islande au XIXe siècle. Le port et son bassin restent le cœur de la ville.",
      "L'Abbaye de Beauport, à proximité, est un site cistercien en ruines partiellement restaurées, dans un cadre naturel préservé en bord d'estuaire.",
    ],
    conseilPratique: 'Combiner Paimpol et l’Abbaye de Beauport sur la même sortie — les deux sites sont proches l’un de l’autre.',
    aCombinerAvec: ['treguier', 'ile-de-brehat'],
    experienceLiee: 'culture-patrimoine',
    heroSlug: 'saison-automne-2',
  },
  {
    slug: 'cote-de-granit-rose',
    nom: 'La Côte de Granit Rose',
    resume: {
      ou: 'Ploumanac\'h, Perros-Guirec, Trégastel',
      dureeVisite: 'Une journée',
      gratuitPayant: 'Gratuit (sentier des douaniers)',
      meilleureSaison: 'Printemps à automne pour la lumière',
      accessiblePMR: 'Variable selon les tronçons',
    },
    geo: { latitude: 48.8267, longitude: -3.4767, verifie: false },
    corps: [
      "La Côte de Granit Rose regroupe Ploumanac'h, Perros-Guirec et Trégastel, célèbres pour leurs formations rocheuses roses sculptées par l'érosion — parmi les paysages les plus photographiés de Bretagne.",
      "Le sentier des douaniers (GR34) longe la côte et permet de découvrir les rochers à pied, notamment autour du phare de Ploumanac'h.",
    ],
    conseilPratique: 'La lumière du matin ou de fin de journée met le mieux en valeur la couleur rose du granit.',
    aCombinerAvec: ['ile-de-brehat', 'presquile-sauvage'],
    experienceLiee: 'randonnee-gr34',
    heroSlug: 'saison-printemps-3',
  },
  {
    slug: 'ou-manger-boire',
    nom: 'Où manger et boire',
    resume: {
      ou: 'Pleubian et environs',
      dureeVisite: '—',
      gratuitPayant: 'Variable',
      meilleureSaison: "Toute l'année",
      accessiblePMR: 'À vérifier par établissement',
    },
    geo: { latitude: 48.84, longitude: -3.13, verifie: false },
    corps: [
      "Cette page est volontairement incomplète : plutôt que de citer des adresses non vérifiées, nous préférons attendre d'avoir testé et confirmé chaque recommandation — c'est l'engagement d'honnêteté du site (voir CLAUDE.md du projet).",
      "Une adresse réelle et vérifiable : la **distillerie Glann ar Mor**, à Pleubian, qui produit du whisky breton et se visite.",
      "Les crêperies, marchés et autres adresses locales seront ajoutés au fil des tests personnels — voir le calendrier éditorial (US-068).",
    ],
    conseilPratique: 'Revenir régulièrement : cette page s’enrichit au fil des visites réellement testées.',
    aCombinerAvec: ['presquile-sauvage', 'sillon-de-talbert'],
    experienceLiee: 'culture-patrimoine',
    heroSlug: 'saison-hiver-3',
  },
];
