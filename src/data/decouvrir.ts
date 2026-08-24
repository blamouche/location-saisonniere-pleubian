export interface FicheLieu {
  slug: string;
  nom: string;
  /** Encadré « L'essentiel » (US-051) : 40-60 mots, autonome hors contexte. */
  essentiel: string;
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
  /** Identifiants Wikidata (QID) vérifiés via l'API wbsearchentities (US-057). */
  wikidata?: string[];
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
    essentiel:
      'Le Sillon de Talbert est une flèche de galets de 3,2 km à Pleubian (Côtes-d\'Armor), classée réserve naturelle régionale, qui s\'avance dans la mer entre les estuaires du Trieux et du Jaudy. Accessible gratuitement toute l\'année, le Sillon de Talbert est partiellement submersible aux grandes marées : vérifier l\'horaire de marée avant la visite.',
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
    wikidata: ['Q3483905'],
    heroSlug: 'saison-ete-1',
  },
  {
    slug: 'presquile-sauvage',
    nom: 'La Presqu\'île sauvage',
    essentiel:
      'La Presqu\'île sauvage désigne le territoire littoral de la commune de Pleubian, entre les estuaires du Trieux et du Jaudy, dans les Côtes-d\'Armor. Peu urbanisée, la Presqu\'île sauvage est dominée par la lande, les criques et le granit, et se découvre principalement à pied via le GR34, le sentier des douaniers qui longe tout le littoral.',
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
    essentiel:
      'Pleubian, sur la Presqu\'île sauvage (Côtes-d\'Armor), compte plusieurs plages et criques : la plage de Kermagen, familiale et équipée d\'une cale de mise à l\'eau, ainsi que les criques plus discrètes de Port-la-Chaîne, Port-Béni et Pors Rand. L\'accès aux plages de Pleubian est gratuit toute l\'année.',
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
    essentiel:
      'L\'île de Bréhat est un archipel breton sans voiture, situé au large de la Presqu\'île de Lézardrieux (Côtes-d\'Armor), accessible en bateau depuis la Pointe de l\'Arcouest. L\'île de Bréhat est connue pour son climat doux, ses jardins fleuris et son granit rose, et se visite idéalement du printemps à l\'automne.',
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
    wikidata: ['Q2083316'],
    heroSlug: 'saison-ete-3',
  },
  {
    slug: 'treguier',
    nom: 'Tréguier',
    essentiel:
      'Tréguier est une cité de caractère du Trégor (Côtes-d\'Armor), connue pour sa cathédrale gothique Saint-Tugdual et son tissu médiéval de maisons à pans de bois. Tréguier est aussi la ville natale de l\'écrivain Ernest Renan, dont la maison natale se visite. La cité de Tréguier se découvre entièrement à pied.',
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
    wikidata: ['Q235297'],
    heroSlug: 'saison-printemps-2',
  },
  {
    slug: 'paimpol-beauport',
    nom: 'Paimpol & l\'Abbaye de Beauport',
    essentiel:
      'Paimpol est un port breton historique des Côtes-d\'Armor, marqué par la pêche à la morue en Islande au XIXe siècle. À proximité de Paimpol, l\'Abbaye de Beauport est un site cistercien en ruines partiellement restaurées, dans un cadre naturel préservé en bord d\'estuaire. Les deux sites se combinent sur une même sortie.',
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
    wikidata: ['Q322453', 'Q333837'],
    heroSlug: 'saison-automne-2',
  },
  {
    slug: 'cote-de-granit-rose',
    nom: 'La Côte de Granit Rose',
    essentiel:
      'La Côte de Granit Rose regroupe les communes de Ploumanac\'h, Perros-Guirec et Trégastel, dans les Côtes-d\'Armor, célèbres pour leurs formations rocheuses roses sculptées par l\'érosion. Le sentier des douaniers (GR34) longe la Côte de Granit Rose et permet de découvrir les rochers à pied, près du phare de Ploumanac\'h.',
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
    wikidata: ['Q1150945'],
    heroSlug: 'saison-printemps-3',
  },
  {
    slug: 'ou-manger-boire',
    nom: 'Où manger et boire',
    essentiel:
      'Cette page recense les adresses pour manger et boire autour de Pleubian (Côtes-d\'Armor). Par souci d\'honnêteté, seules les adresses réellement testées y figurent : à ce stade, uniquement la distillerie Glann ar Mor, à Pleubian, qui produit du whisky breton et se visite. D\'autres adresses seront ajoutées au fil des tests.',
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
