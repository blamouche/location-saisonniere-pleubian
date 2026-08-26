export interface Proposition {
  titre: string;
  duree: string;
  difficulte: string;
  saisonIdeale: string;
  cout: string;
  /** Source externe vérifiée (office de tourisme, mairie…) pour l'itinéraire. */
  source?: string;
}

export interface Experience {
  slug: string;
  pilier: 'Sport' | 'Bien-être' | 'Déconnexion' | 'Culture' | 'Famille';
  titre: string;
  /** Encadré « L'essentiel » (US-051) : 40-60 mots, autonome hors contexte. */
  essentiel: string;
  promesse: string;
  depuisLaMaison: string;
  propositions: Proposition[];
  encadrePratique: { materiel: string[]; reservations: string; prestataires: string };
  faq: { q: string; r: string }[];
  decouvrirLies: string[];
  heroSlug: string;
}

/**
 * Pages « Expériences » (US-039/US-040, PRD §8.4, §10.1). Contenu ancré dans les
 * faits du PRD (§1.2, §10.4) — durées estimées explicitement signalées comme telles,
 * prestataires non confirmés marqués honnêtement plutôt qu'inventés.
 */
export const experiences: Experience[] = [
  {
    slug: 'randonnee-gr34',
    pilier: 'Sport',
    titre: 'Randonnée sur le GR34',
    essentiel:
      'Le GR34, sentier des douaniers, longe l\'intégralité du littoral de la Presqu\'île sauvage à Pleubian (Côtes-d\'Armor). Depuis la Maison Od Joge, cinq boucles balisées du GR34 permettent de le découvrir sans voiture, de 3,2 km (Sillon de Talbert) à 13,6 km (Port-la-Chaîne), sans difficulté technique majeure.',
    promesse: "Le sentier des douaniers longe l'intégralité du littoral de la Presqu'île sauvage. Depuis la maison, cinq boucles balisées permettent de le découvrir sans voiture, de 3,2 à 13,6 km.",
    depuisLaMaison: "Le GR34 passe à proximité de Pleubian — départ à pied possible pour plusieurs boucles (distance exacte à vérifier porte-à-porte).",
    propositions: [
      {
        titre: 'Boucle du Sillon de Talbert',
        duree: '~1h (estimée)',
        difficulte: 'Facile, plat',
        saisonIdeale: "Toute l'année, selon marée",
        cout: 'Gratuit',
        source: 'https://www.cotesdarmor.com/fr/fiche/itineraires-touristiques/boucle-du-sillon-de-talbert-pleubian_TFOITIBRE022V50QNZJ/',
      },
      {
        titre: 'Circuit des Phares (8,6 km)',
        duree: '~2h10 (estimée)',
        difficulte: 'Facile à modéré',
        saisonIdeale: 'Printemps, automne',
        cout: 'Gratuit',
        source: 'https://www.mairie-pleubian.fr/decouvrir/circuit-des-phares',
      },
      {
        titre: 'Circuit de Port-Béni (8,7 km)',
        duree: '~2h10 (estimée)',
        difficulte: 'Facile à modéré',
        saisonIdeale: 'Toute saison',
        cout: 'Gratuit',
        source: 'https://www.mairie-pleubian.fr/decouvrir/randonnee-port-beni-en-boucle-depuis-pleubian',
      },
      {
        titre: 'Circuit de Brestan (8,8 km)',
        duree: '~2h15 (estimée)',
        difficulte: 'Facile à modéré',
        saisonIdeale: 'Toute saison',
        cout: 'Gratuit',
        source: 'https://www.mairie-pleubian.fr/decouvrir/circuit-de-brestan',
      },
      {
        titre: 'Circuit de Port-la-Chaîne (13,6 km)',
        duree: '~3h30 (estimée)',
        difficulte: 'Modéré',
        saisonIdeale: 'Printemps, automne',
        cout: 'Gratuit',
        source: 'https://www.presquile-de-lezardrieux.com/circuit-de-port-la-chaine',
      },
    ],
    encadrePratique: {
      materiel: ['Chaussures de marche', 'Coupe-vent (le vent côtier est constant)', 'Eau'],
      reservations: 'Aucune réservation nécessaire — accès libre toute l’année.',
      prestataires: 'Aucun prestataire requis pour la randonnée libre.',
    },
    faq: [
      { q: 'Le GR34 est-il accessible toute l’année ?', r: 'Oui, mais certains passages (dont le Sillon de Talbert) sont submersibles aux grandes marées.' },
      { q: 'Faut-il être un randonneur expérimenté ?', r: 'Non — les boucles proposées sont faciles à modérées, sans dénivelé important.' },
      { q: 'Où se garer pour partir en boucle ?', r: 'Parkings à préciser avant publication définitive.' },
      { q: 'Peut-on faire ces boucles avec des enfants ?', r: 'Oui pour les plus courtes (Sillon de Talbert, Circuit des Phares).' },
      { q: 'Y a-t-il des points d’eau sur le parcours ?', r: 'À vérifier selon la boucle — prévoir de l’eau par précaution.' },
    ],
    decouvrirLies: ['sillon-de-talbert', 'presquile-sauvage', 'cote-de-granit-rose'],
    heroSlug: 'saison-automne-3',
  },
  {
    slug: 'velo-velomaritime',
    pilier: 'Sport',
    titre: 'Vélo — La Vélomaritime (EuroVelo 4)',
    essentiel:
      'La Vélomaritime (EuroVelo 4) est un itinéraire cyclable qui longe la Manche et l\'Atlantique ; il traverse la Presqu\'île sauvage entre Paimpol et Tréguier (Côtes-d\'Armor). Depuis la Maison Od Joge, un local à vélo est disponible pour préparer une étape de la Vélomaritime, idéalement de mai à septembre.',
    promesse: "L'EuroVelo 4 (Vélomaritime) longe la Manche et l'Atlantique. La Presqu'île sauvage en constitue une étape, entre Paimpol et Tréguier.",
    depuisLaMaison: "L'itinéraire passe à proximité de Pleubian — jonction exacte et distance à vérifier avant publication.",
    propositions: [
      { titre: 'Étape courte vers Tréguier', duree: 'À confirmer', difficulte: 'Facile à modéré', saisonIdeale: 'Mai à septembre', cout: 'Gratuit (hors location)' },
      { titre: 'Étape vers Paimpol', duree: 'À confirmer', difficulte: 'Modéré', saisonIdeale: 'Mai à septembre', cout: 'Gratuit (hors location)' },
    ],
    encadrePratique: {
      materiel: ['Vélo (local à vélo disponible à la maison)', 'Antivol', 'Kit de réparation'],
      reservations: 'Aucune réservation pour l’itinéraire ; location de vélo à organiser séparément si besoin.',
      prestataires: 'Loueur de vélos local à confirmer avant publication.',
    },
    faq: [
      { q: 'Faut-il apporter son vélo ?', r: 'Un local à vélo est disponible à la maison ; la location locale reste à confirmer.' },
      { q: 'L’itinéraire est-il balisé ?', r: 'Oui, l’EuroVelo 4 est balisée sur l’ensemble de son tracé.' },
      { q: 'Convient-il aux familles ?', r: 'Certains tronçons oui — niveau exact à préciser par section.' },
    ],
    decouvrirLies: ['treguier', 'paimpol-beauport', 'presquile-sauvage'],
    heroSlug: 'saison-ete-1',
  },
  {
    slug: 'nautisme-kayak-voile',
    pilier: 'Sport',
    titre: 'Nautisme — kayak & voile',
    essentiel:
      'Le nautisme (kayak et voile) se pratique entre les estuaires du Trieux et du Jaudy, face à l\'archipel de Bréhat, sur la Presqu\'île sauvage (Côtes-d\'Armor). Depuis la Maison Od Joge, plusieurs criques permettent la mise à l\'eau ; le kayak et la voile se planifient selon les marées et le vent.',
    promesse: "Entre les estuaires du Trieux et du Jaudy, et face à l'archipel de Bréhat, le nautisme se pratique au rythme des marées et du vent.",
    depuisLaMaison: 'Plusieurs points de mise à l’eau (Kermagen, criques locales) à proximité — distance exacte à vérifier.',
    propositions: [
      {
        titre: 'Voile à Port-Blanc (Penvénan) — Centre Nautique de Port-Blanc',
        duree: '2h à la semaine (cours/stages)',
        difficulte: 'Tous niveaux — jardin des mers dès 4 ans, stages 4 à 97 ans',
        saisonIdeale: 'Avril à septembre',
        cout: 'Location dès 14 € · stages dès 133 € (tarifs du prestataire)',
        source: 'https://www.cnportblanc.fr/',
      },
      {
        titre: 'Voile & kayak de mer à Paimpol — Pôle Nautique Paimpol-Goëlo',
        duree: 'Séance ou stage à la semaine',
        difficulte: 'Tous niveaux — club loisir, hors compétition',
        saisonIdeale: 'Toute l’année, vacances scolaires notamment',
        cout: 'Voir tarifs du prestataire',
        source: 'http://polenautique.paimpol-goelo.com/',
      },
      {
        titre: 'Kayak/canoë sur le Trieux à Pontrieux — Club Nautique Pontrivien',
        duree: '1h à la demi-journée (rivière, estuaire ou pleine mer vers Bréhat)',
        difficulte: 'Facile en rivière (eau calme) à modéré en mer',
        saisonIdeale: 'Avril à fin août (club ouvert sur cette période, sur demande le reste de l’année)',
        cout: 'Leçon individuelle 30 €/h · location libre en rivière selon disponibilité',
        source: 'https://www.canoe-kayak-pontrieux.fr/riviere',
      },
      {
        titre: 'Location de bateau à moteur à Lézardrieux — Gourenez Nautic',
        duree: 'Journée ou demi-journée',
        difficulte: 'Facile — flotte variée, familles et pêche',
        saisonIdeale: 'Avril à septembre',
        cout: 'Voir tarifs du prestataire (conditions de permis selon modèle)',
        source: 'https://www.gourenez-nautic.fr/',
      },
    ],
    encadrePratique: {
      materiel: ['Vêtements adaptés à l’eau', 'Gilet de flottaison (fourni en location encadrée)'],
      reservations: 'Réservation recommandée en haute saison directement auprès de chaque prestataire.',
      prestataires:
        'Centre Nautique de Port-Blanc (Penvénan), Pôle Nautique Paimpol-Goëlo, Club Nautique Pontrivien (Pontrieux) et Gourenez Nautic (Lézardrieux) — voir liens ci-dessus. Distances depuis la maison à vérifier porte-à-porte. Aucun prestataire de location de bateau confirmé à Tréguier même à ce jour (le chantier naval du port vend et entretient des bateaux, mais ne loue pas).',
    },
    faq: [
      { q: 'Faut-il une expérience préalable pour le kayak ?', r: 'Non pour les sorties encadrées en crique abritée.' },
      { q: 'Le courant est-il fort autour de Bréhat ?', r: 'Le courant dépend fortement de la marée — sortie encadrée recommandée pour les débutants.' },
      { q: 'Peut-on louer le matériel sur place ?', r: 'Oui, auprès de plusieurs prestataires du territoire (Port-Blanc, Paimpol, Pontrieux, Lézardrieux) — voir le tableau ci-dessus.' },
    ],
    decouvrirLies: ['ile-de-brehat', 'plages-pleubian', 'presquile-sauvage'],
    heroSlug: 'saison-ete-2',
  },
  {
    slug: 'accrobranche',
    pilier: 'Sport',
    titre: 'Accrobranche à Pleumeur-Bodou',
    essentiel:
      "L'accrobranche Vivons Perchés, à Pleumeur-Bodou (Côtes-d'Armor, près du Radôme), propose 4 parcours dans les arbres, du plus accessible (Mini Forêt, dès 2 ans) au plus vertigineux (Grande Forêt, jusqu'à 17 m de haut avec vue mer). Vivons Perchés est ouvert du lundi au samedi, réservation recommandée.",
    promesse:
      "Vivons Perchés, à Pleumeur-Bodou, propose 4 parcours accrobranche dans les arbres, du tout-petit dès 2 ans jusqu'aux sensations fortes à 17 m de haut avec vue sur la mer.",
    depuisLaMaison: 'Le parc est situé à Pleumeur-Bodou, sur la Côte de Granit Rose — distance et temps de trajet exacts depuis la maison à vérifier porte-à-porte avant publication.',
    propositions: [
      {
        titre: 'Mini Forêt',
        duree: '1h',
        difficulte: 'Très facile (dès 2 ans, 80 cm de haut max)',
        saisonIdeale: "Toute l'année (ouvert du lundi au samedi)",
        cout: 'Voir tarifs sur le site',
        source: 'https://www.vivons-perches.bzh/accrobranche/',
      },
      {
        titre: 'Parcours Découverte (3 parcours)',
        duree: '1h',
        difficulte: 'Facile (dès 4 ans et 1 m, jusqu’à 5 m de haut)',
        saisonIdeale: "Toute l'année",
        cout: 'Voir tarifs sur le site',
        source: 'https://www.vivons-perches.bzh/accrobranche/',
      },
      {
        titre: 'Moyenne Forêt (5 parcours)',
        duree: '2h',
        difficulte: 'Modéré (dès 7 ans et 1,15 m, jusqu’à 8 m de haut)',
        saisonIdeale: "Toute l'année",
        cout: 'Voir tarifs sur le site',
        source: 'https://www.vivons-perches.bzh/accrobranche/',
      },
      {
        titre: 'Grande Forêt (5 parcours, dont saut de Tarzan et Skyfall)',
        duree: '2h30',
        difficulte: 'Sportif (dès 10 ans et 1,40 m, jusqu’à 17 m de haut)',
        saisonIdeale: "Toute l'année",
        cout: 'Voir tarifs sur le site',
        source: 'https://www.vivons-perches.bzh/accrobranche/',
      },
    ],
    encadrePratique: {
      materiel: ['Chaussures fermées', 'Tenue confortable, pas de vêtements amples'],
      reservations: 'Réservation recommandée en ligne sur le site de Vivons Perchés.',
      prestataires: 'Vivons Perchés, Pleumeur-Bodou (entité réelle, source ci-dessous).',
    },
    faq: [
      { q: 'À partir de quel âge peut-on faire de l’accrobranche à Vivons Perchés ?', r: 'Dès 2 ans sur la Mini Forêt (80 cm de haut maximum) ; l’accès aux parcours plus hauts dépend ensuite de l’âge et de la taille de l’enfant.' },
      { q: 'Faut-il réserver à l’avance ?', r: 'Réservation recommandée, en ligne sur le site de Vivons Perchés.' },
      { q: 'Quels sont les horaires d’ouverture ?', r: 'Le parc est ouvert du lundi au samedi — horaires précis à vérifier sur le site avant de s’y rendre.' },
    ],
    decouvrirLies: ['cote-de-granit-rose', 'presquile-sauvage'],
    heroSlug: 'saison-printemps-3',
  },
  {
    slug: 'bien-etre-air-marin',
    pilier: 'Bien-être',
    titre: 'Bien-être & air marin',
    essentiel:
      'Le bien-être et l\'air marin de la Presqu\'île sauvage (Pleubian, Côtes-d\'Armor) reposent sur la marche lente, les bains de mer et l\'air iodé du littoral. Depuis la Maison Od Joge, la mer est à 5 minutes à pied ; le Sillon de Talbert offre un parcours idéal pour la marche méditative.',
    promesse: "L'air iodé du littoral et la marche lente sur l'estran sont au cœur de l'expérience bien-être de la Presqu'île sauvage.",
    depuisLaMaison: 'La mer est à 5 minutes à pied de la maison — l’air marin se ressent dès la sortie du jardin.',
    propositions: [
      { titre: 'Marche méditative sur le Sillon de Talbert', duree: '1h', difficulte: 'Facile', saisonIdeale: "Toute l'année", cout: 'Gratuit' },
      { titre: 'Bain de mer (hors saison inclus)', duree: '15-30 min', difficulte: 'Facile à modéré selon saison', saisonIdeale: "Toute l'année pour les initiés", cout: 'Gratuit' },
      { titre: 'Séance de sommeil réparateur au poêle à bois', duree: 'Une soirée', difficulte: 'Aucune', saisonIdeale: 'Automne, hiver', cout: 'Inclus dans le séjour' },
    ],
    encadrePratique: {
      materiel: ['Vêtements chauds pour les bains hors saison', 'Serviette'],
      reservations: 'Aucune réservation nécessaire pour la marche ou la baignade libre.',
      prestataires: 'Centre de thalassothérapie à proximité à confirmer avant publication.',
    },
    faq: [
      { q: 'Peut-on se baigner toute l’année ?', r: 'Oui pour les habitués, avec les précautions d’usage (température de l’eau).' },
      { q: 'Pourquoi je me sens fatigué·e les premiers jours ?', r: 'Voir l’article du journal : Pourquoi l’air marin fatigue.' },
      { q: 'Y a-t-il un centre de thalasso à proximité ?', r: 'À confirmer avant publication définitive.' },
    ],
    decouvrirLies: ['sillon-de-talbert', 'plages-pleubian', 'presquile-sauvage'],
    heroSlug: 'saison-printemps-1',
  },
  {
    slug: 'deconnexion-slow',
    pilier: 'Déconnexion',
    titre: 'Déconnexion & slow living',
    essentiel:
      'La déconnexion et le slow living sur la Presqu\'île sauvage (Pleubian, Côtes-d\'Armor) reposent sur l\'absence de foule, le rythme des marées et le poêle à bois de la Maison Od Joge. Idéale en automne et en hiver, cette expérience de déconnexion ne demande aucun matériel particulier.',
    promesse: 'Pas de foule, un rythme dicté par les marées, un poêle à bois pour seule notification : la déconnexion ici n’est pas un concept marketing.',
    depuisLaMaison: 'La maison est pensée pour ça : poêle à bois, jardin clos, silence, ciel dégagé de pollution lumineuse.',
    propositions: [
      { titre: '72h sans écran', duree: '3 jours', difficulte: 'Aucune (mentale)', saisonIdeale: 'Automne, hiver', cout: 'Inclus dans le séjour' },
      { titre: 'Observation du ciel étoilé', duree: '1h', difficulte: 'Aucune', saisonIdeale: 'Hiver', cout: 'Gratuit' },
      { titre: 'Marche au rythme des marées', duree: 'Variable', difficulte: 'Facile', saisonIdeale: "Toute l'année", cout: 'Gratuit' },
    ],
    encadrePratique: {
      materiel: ['Un vrai livre', 'Vêtements chauds l’hiver'],
      reservations: 'Aucune.',
      prestataires: 'Aucun prestataire nécessaire.',
    },
    faq: [
      { q: 'Comment se préparer à 72h sans écran ?', r: 'Voir l’article du journal : 72h sans écran à Pleubian.' },
      { q: 'Y a-t-il du réseau mobile sur place ?', r: 'À confirmer — prévoir de prévenir ses proches en amont par précaution.' },
      { q: 'La déconnexion convient-elle aux familles ?', r: 'Oui, le jardin clos permet de laisser les enfants jouer sans écran.' },
    ],
    decouvrirLies: ['sillon-de-talbert', 'presquile-sauvage', 'plages-pleubian'],
    heroSlug: 'saison-hiver-1',
  },
  {
    slug: 'teletravail-workation',
    pilier: 'Déconnexion',
    titre: 'Télétravail & workation',
    essentiel:
      'Le télétravail et la workation à la Maison Od Joge (Pleubian, Côtes-d\'Armor) s\'appuient sur un espace de travail dédié, une connexion internet et la mer à 5 minutes. Idéale hors saison pour des séjours d\'une à trois semaines, cette formule de workation reste à finaliser sur les tarifs longue durée.',
    promesse: 'Un espace de travail dédié, une bonne connexion, et la mer à 5 minutes pour la pause de midi.',
    depuisLaMaison: 'L’espace de travail est intégré à la maison — pas de trajet nécessaire.',
    propositions: [
      { titre: 'Semaine de workation', duree: '1 à 3 semaines', difficulte: 'Aucune', saisonIdeale: 'Hors saison (tarifs et disponibilité)', cout: 'Tarif longue durée à confirmer' },
      { titre: 'Pause déjeuner face à la mer', duree: '30-45 min', difficulte: 'Aucune', saisonIdeale: "Toute l'année", cout: 'Gratuit' },
    ],
    encadrePratique: {
      materiel: ['Ordinateur portable', 'Adaptateur si besoin'],
      reservations: 'Aucune, hors réservation du séjour lui-même.',
      prestataires: 'Débit internet exact et fournisseur à préciser avant publication définitive.',
    },
    faq: [
      { q: 'Quel est le débit internet disponible ?', r: 'À mesurer et publier avant mise en ligne définitive.' },
      { q: 'Y a-t-il des tarifs pour les longs séjours ?', r: 'Fourchettes tarifaires en cours de définition (PRD §19, Q4).' },
      { q: 'L’espace de travail est-il séparé des chambres ?', r: 'Oui, il s’agit d’un espace dédié dans la maison.' },
    ],
    decouvrirLies: ['presquile-sauvage', 'sillon-de-talbert', 'plages-pleubian'],
    heroSlug: 'saison-hiver-2',
  },
  {
    slug: 'culture-patrimoine',
    pilier: 'Culture',
    titre: 'Culture & patrimoine',
    essentiel:
      'Le patrimoine culturel autour de la Maison Od Joge (Pleubian, Côtes-d\'Armor) comprend la cathédrale Saint-Tugdual de Tréguier, l\'Abbaye de Beauport à Paimpol, et la distillerie de whisky breton Glann ar Mor à Pleubian même. Ces sites de culture et patrimoine se visitent en moins d\'une demi-journée depuis la maison.',
    promesse: 'Cathédrales, abbayes, whisky breton : le patrimoine du Trégor se découvre à moins d’une demi-heure de la maison.',
    depuisLaMaison: 'Tréguier, Paimpol et la distillerie Glann ar Mor sont accessibles en voiture — distances exactes à vérifier porte-à-porte.',
    propositions: [
      { titre: 'Tréguier et sa cathédrale Saint-Tugdual', duree: 'Demi-journée à journée', difficulte: 'Facile (à pied)', saisonIdeale: "Toute l'année", cout: 'Gratuit pour la cité' },
      { titre: 'Abbaye de Beauport à Paimpol', duree: '1 à 2h', difficulte: 'Facile', saisonIdeale: "Toute l'année", cout: 'Payant (tarif à confirmer)' },
      { titre: 'Distillerie Glann ar Mor (whisky breton)', duree: '1h (visite)', difficulte: 'Aucune', saisonIdeale: "Toute l'année", cout: 'À confirmer' },
      { titre: 'Église Saint-Georges (clocher-mur)', duree: '30 min', difficulte: 'Aucune', saisonIdeale: "Toute l'année", cout: 'Gratuit' },
    ],
    encadrePratique: {
      materiel: ['Aucun matériel spécifique'],
      reservations: 'Visite de la distillerie : réservation recommandée (à confirmer).',
      prestataires: 'Distillerie Glann ar Mor, Pleubian (entité réelle citée au PRD §1.2).',
    },
    faq: [
      { q: 'Peut-on visiter la distillerie Glann ar Mor ?', r: 'Oui, modalités exactes de visite à confirmer avant publication.' },
      { q: 'La cathédrale de Tréguier est-elle payante ?', r: 'La cité est en accès libre ; certains sites annexes peuvent être payants (à confirmer).' },
      { q: 'Combien de temps pour visiter Tréguier et Paimpol le même jour ?', r: 'Une journée complète est raisonnable pour combiner les deux.' },
    ],
    decouvrirLies: ['treguier', 'paimpol-beauport', 'presquile-sauvage'],
    heroSlug: 'saison-automne-2',
  },
  {
    slug: 'gastronomie',
    pilier: 'Culture',
    titre: 'Gastronomie & dégustations locales',
    essentiel:
      "Autour de Pleubian, deux adresses gourmandes du Trégor valent le détour : l'Auberge du Trieux à Lézardrieux, restaurant Maître Restaurateur porté par Maudez Le Corre (4,6/5 sur environ 590 avis), et la Brasserie artisanale Philomenn à Tréguier, une ancienne gare reconvertie en brasserie de bières locales, ouverte à la dégustation et à la visite d'avril à septembre.",
    promesse:
      "Deux adresses gourmandes du Trégor à quelques minutes de la maison : la table soignée de l'Auberge du Trieux à Lézardrieux, et la brasserie artisanale Philomenn à Tréguier, installée dans une ancienne gare au bord du Jaudy.",
    depuisLaMaison: 'Lézardrieux et Tréguier sont à quelques minutes de voiture de Pleubian — distances exactes à vérifier porte-à-porte avant publication.',
    propositions: [
      {
        titre: "Dîner à l'Auberge du Trieux (Lézardrieux)",
        duree: '1h30 à 2h (repas)',
        difficulte: 'Aucune',
        saisonIdeale: "Toute l'année (fermé le mercredi)",
        cout: 'Sur réservation, voir la carte',
        source: 'https://www.presquile-de-lezardrieux.com/index.php?codepage=3511',
      },
      {
        titre: 'Dégustation & visite à la Brasserie Philomenn (Tréguier)',
        duree: '1h (visite + dégustation)',
        difficulte: 'Aucune',
        saisonIdeale: 'Avril à septembre pour le tap room',
        cout: 'Voir tarifs sur le site',
        source: 'https://philomenn.fr/',
      },
    ],
    encadrePratique: {
      materiel: ['Aucun matériel spécifique'],
      reservations: 'Réservation recommandée pour l’Auberge du Trieux ; visite libre ou guidée pour Philomenn selon les jours.',
      prestataires: 'Auberge du Trieux (Lézardrieux, Maître Restaurateur) et Brasserie Philomenn (Tréguier) — entités réelles, sources ci-dessous.',
    },
    faq: [
      { q: 'Faut-il réserver à l’Auberge du Trieux ?', r: 'Réservation recommandée — le restaurant est fermé le mercredi.' },
      { q: 'Peut-on visiter la Brasserie Philomenn ?', r: 'Oui, dégustations et visites sont proposées, avec un tap room ouvert d’avril à septembre.' },
      { q: 'Ces adresses sont-elles loin de la maison ?', r: 'Lézardrieux et Tréguier sont proches de Pleubian — distances exactes à vérifier porte-à-porte avant publication.' },
    ],
    decouvrirLies: ['treguier', 'presquile-sauvage'],
    heroSlug: 'saison-automne-1',
  },
  {
    slug: 'famille-enfants',
    pilier: 'Famille',
    titre: 'Activités en famille',
    essentiel:
      "Les activités en famille les plus simples autour de la Maison Od Joge sont gratuites et à deux pas : le jardin clos de la maison, la plage de Kermagen, une balade sur le Sillon de Talbert. Pour les sorties à la journée (fermes, zoo, village gaulois, planétarium, accrobranche), chacune a sa propre fiche détaillée dans le pilier Famille.",
    promesse: "Jardin clos, plage familiale à 5 minutes, et tout un choix de sorties à la journée détaillées chacune dans sa propre fiche.",
    depuisLaMaison: 'La maison elle-même est pensée pour les familles : jardin clos sans vis-à-vis, une chambre et une salle de bain de plain-pied au rez-de-chaussée, mer à 5 minutes à pied.',
    propositions: [
      { titre: 'Plage de Kermagen', duree: 'Une demi-journée', difficulte: 'Facile', saisonIdeale: 'Été', cout: 'Gratuit' },
      { titre: 'Balade courte sur le Sillon de Talbert', duree: '~1h', difficulte: 'Facile, plat', saisonIdeale: "Toute l'année, selon marée", cout: 'Gratuit' },
    ],
    encadrePratique: {
      materiel: ['Vêtements de rechange'],
      reservations: 'Aucune réservation nécessaire pour la plage et le Sillon. Pour les sorties à la journée, voir la fiche dédiée à chacune.',
      prestataires: 'Voir les fiches dédiées : accrobranche, fermes pédagogiques, zoo, village gaulois, planétarium, sortie nature du Sillon de Talbert.',
    },
    faq: [
      { q: 'La maison est-elle adaptée aux jeunes enfants ?', r: 'Oui : jardin clos sans vis-à-vis, une chambre et une salle de bain de plain-pied au rez-de-chaussée.' },
      {
        q: 'Où trouver le détail des sorties à la journée (ferme, zoo, village gaulois, planétarium) ?',
        r: 'Chacune a sa propre page dans le pilier Famille des expériences, avec tarifs, horaires et lien vers le site officiel.',
      },
    ],
    decouvrirLies: ['plages-pleubian', 'sillon-de-talbert', 'cote-de-granit-rose'],
    heroSlug: 'saison-ete-3',
  },
  {
    slug: 'fermes-pedagogiques',
    pilier: 'Famille',
    titre: 'Fermes pédagogiques près de Pleubian',
    essentiel:
      "Deux fermes à vocation pédagogique près de la Maison Od Joge : la ferme équestre Les Chevaux du Coat à Plourivo (balades à poney/cheval dès 3 ans) et la Ferme Marine du Trieux à Paimpol (élevage ostréicole, visite et vente directe). Deux sorties courtes, complémentaires, pour des enfants en bas âge.",
    promesse: 'Deux fermes réelles à quelques minutes — une équestre, une marine — pour découvrir des animaux et un savoir-faire local.',
    depuisLaMaison: 'Les Chevaux du Coat (Plourivo) et la Ferme Marine du Trieux (Paimpol) — distances exactes à vérifier porte-à-porte.',
    propositions: [
      {
        titre: 'Ferme équestre Les Chevaux du Coat (Plourivo, Paimpol)',
        duree: 'Balade ~1h',
        difficulte: 'Facile (dès 3 ans)',
        saisonIdeale: "Toute l'année, sur réservation",
        cout: 'Voir tarifs sur le site',
        source: 'https://www.leschevauxducoat.com/',
      },
      {
        titre: 'Ferme Marine du Trieux (Paimpol)',
        duree: '30-45 min (visite/vente directe)',
        difficulte: 'Facile',
        saisonIdeale: 'Mardi à samedi, 14h-18h (à confirmer)',
        cout: 'Gratuit',
        source: 'https://www.bretagnealaferme.com/cotes-d-armor/paimpol/ferme/ferme-marine-du-trieux/148275',
      },
    ],
    encadrePratique: {
      materiel: ['Chaussures fermées', 'Vêtements de rechange'],
      reservations: 'Réservation recommandée pour la ferme équestre ; visite libre à la Ferme Marine du Trieux aux horaires indiqués.',
      prestataires: 'Les Chevaux du Coat, Ferme Marine du Trieux — entités réelles, sources ci-dessus.',
    },
    faq: [
      { q: 'Les balades à poney conviennent-elles aux tout-petits ?', r: 'Les Chevaux du Coat accueille dès 3 ans, sur réservation.' },
      { q: 'La Ferme Marine du Trieux se visite-t-elle librement ?', r: 'Oui, aux horaires indiqués (mardi à samedi, 14h-18h, à confirmer avant de s’y rendre).' },
    ],
    decouvrirLies: ['paimpol-beauport', 'presquile-sauvage'],
    heroSlug: 'saison-printemps-1',
  },
  {
    slug: 'zoo-tregomeur',
    pilier: 'Famille',
    titre: 'Zooparc de Trégomeur',
    essentiel:
      'Le Zooparc de Trégomeur, parc zoologique et botanique des Côtes-d’Armor, présente une grande variété d’espèces sur un parcours boisé pensé pour les familles. Ouvert toute l’année (horaires réduits hors saison), à une sortie à la journée depuis la Maison Od Joge — distance exacte à vérifier porte-à-porte.',
    promesse: 'Un vrai parc zoologique régional, accessible en sortie à la journée depuis la Presqu’île sauvage.',
    depuisLaMaison: 'Trégomeur — distance exacte à vérifier porte-à-porte, compter une sortie à la journée.',
    propositions: [
      {
        titre: 'Zooparc de Trégomeur',
        duree: 'Une demi-journée à une journée',
        difficulte: 'Facile',
        saisonIdeale: "Toute l'année (horaires réduits hors saison)",
        cout: '22,90 € adulte / 16,50 € enfant (tarifs 2026, à confirmer)',
        source: 'https://www.zoo-tregomeur.com/',
      },
    ],
    encadrePratique: {
      materiel: ['Chaussures confortables (parcours à pied)', 'Pique-nique ou restauration sur place selon disponibilité'],
      reservations: 'Billetterie sur place ou en ligne selon la période — voir le site officiel.',
      prestataires: 'Zooparc de Trégomeur — entité réelle, source ci-dessus.',
    },
    faq: [{ q: 'Le zoo est-il ouvert toute l’année ?', r: 'Oui, avec des horaires réduits hors saison — à vérifier sur le site officiel avant de s’y rendre.' }],
    decouvrirLies: ['presquile-sauvage'],
    heroSlug: 'saison-printemps-2',
  },
  {
    slug: 'village-gaulois',
    pilier: 'Famille',
    titre: 'Le Village Gaulois (Pleumeur-Bodou)',
    essentiel:
      'Le Village Gaulois de Pleumeur-Bodou, parc à thème familial, a rouvert après deux ans de fermeture consécutifs à un incendie en 2024, avec une ouverture annoncée en juillet-août 2026 — à confirmer sur place avant de s’y rendre. Une sortie à la journée depuis la Maison Od Joge.',
    promesse: 'Un parc à thème familial dans les Côtes-d’Armor — vérifier l’ouverture saisonnière avant de vous déplacer.',
    depuisLaMaison: 'Pleumeur-Bodou — distance exacte à vérifier porte-à-porte, compter une sortie à la journée.',
    propositions: [
      {
        titre: 'Le Village Gaulois (Pleumeur-Bodou)',
        duree: 'Une demi-journée',
        difficulte: 'Facile',
        saisonIdeale: 'Juillet-août (réouverture 2026 après 2 ans de fermeture — à confirmer)',
        cout: 'Billetterie sur place uniquement',
        source: 'https://www.levillagegaulois.org/php/home.php',
      },
    ],
    encadrePratique: {
      materiel: ['Chaussures confortables'],
      reservations: 'Billetterie sur place uniquement — vérifier les dates d’ouverture 2026 avant de s’y rendre.',
      prestataires: 'Le Village Gaulois — entité réelle, source ci-dessus.',
    },
    faq: [
      {
        q: 'Le Village Gaulois est-il ouvert ?',
        r: 'Le parc a rouvert après deux ans de fermeture, avec une ouverture annoncée en juillet-août 2026 — à confirmer sur place avant de s’y rendre.',
      },
    ],
    decouvrirLies: ['presquile-sauvage'],
    heroSlug: 'saison-automne-1',
  },
  {
    slug: 'planetarium-bretagne',
    pilier: 'Famille',
    titre: 'Planétarium de Bretagne (Pleumeur-Bodou)',
    essentiel:
      'Le Planétarium de Bretagne à Pleumeur-Bodou propose des séances de découverte du ciel et de l’espace, dès 5 ans, sur réservation. Une sortie à la journée depuis la Maison Od Joge, à combiner avec le Village Gaulois ou la Cité des Télécoms tout proches.',
    promesse: 'Une séance de planétarium accessible dès 5 ans, dans les Côtes-d’Armor.',
    depuisLaMaison: 'Pleumeur-Bodou — distance exacte à vérifier porte-à-porte.',
    propositions: [
      {
        titre: 'Planétarium de Bretagne (Pleumeur-Bodou)',
        duree: '~45 min (séance)',
        difficulte: 'Facile (séances dès 5 ans)',
        saisonIdeale: "Toute l'année, sur réservation",
        cout: 'Voir tarifs sur le site',
        source: 'https://planetarium-bretagne.bzh/',
      },
    ],
    encadrePratique: {
      materiel: [],
      reservations: 'Réservation recommandée, séances à horaires fixes.',
      prestataires: 'Planétarium de Bretagne — entité réelle, source ci-dessus.',
    },
    faq: [{ q: 'Le planétarium convient-il aux jeunes enfants ?', r: 'Oui, des séances sont proposées dès 5 ans.' }],
    decouvrirLies: ['presquile-sauvage'],
    heroSlug: 'saison-hiver-1',
  },
  {
    slug: 'sillon-talbert-oiseaux',
    pilier: 'Famille',
    titre: 'Visite guidée du Sillon de Talbert et de ses oiseaux',
    essentiel:
      "La Maison du Sillon, point d'accueil de la Réserve naturelle du Sillon de Talbert à Pleubian (à quelques minutes de la Maison Od Joge), propose toute l'année des sorties nature encadrées par un agent de la réserve : excursion commentée, observation des oiseaux migrateurs, parcours botanique. Programme et tarifs communiqués sur place ou par la Maison du Sillon.",
    promesse: 'Une sortie nature encadrée, sur la réserve naturelle la plus proche de la maison, réputée pour sa richesse ornithologique.',
    depuisLaMaison: 'La Maison du Sillon, 48 rue du Sillon de Talbert, Pleubian — à quelques minutes de la maison.',
    propositions: [
      {
        titre: 'Excursion commentée du Sillon de Talbert',
        duree: 'Variable selon programme',
        difficulte: 'Facile, plat',
        saisonIdeale: "Toute l'année, programme renforcé au printemps/été",
        cout: 'Voir programme (Maison du Sillon)',
        source: 'https://www.reserve-sillondetalbert.bzh/agenda',
      },
      {
        titre: 'Observation des oiseaux migrateurs',
        duree: 'Variable selon programme',
        difficulte: 'Facile',
        saisonIdeale: 'Migrations de printemps et d’automne',
        cout: 'Voir programme (Maison du Sillon)',
        source: 'https://www.reserve-sillondetalbert.bzh/agenda',
      },
    ],
    encadrePratique: {
      materiel: ['Jumelles', 'Vêtements adaptés au vent et à la marée'],
      reservations: "Programme annuel disponible à la Maison du Sillon, à la mairie de Pleubian ou dans les offices de tourisme — contact 02 96 16 54 67 / maison.sillon@mairie-pleubian.fr.",
      prestataires: 'La Maison du Sillon (Réserve naturelle du Sillon de Talbert) — entité réelle, source ci-dessus.',
    },
    faq: [
      {
        q: 'Faut-il réserver pour une sortie nature ?',
        r: 'Le programme et les modalités (réservation ou non selon la sortie) sont communiqués par la Maison du Sillon — contacter directement pour confirmer.',
      },
      { q: 'Ces sorties conviennent-elles aux enfants ?', r: 'Le site ne précise pas d’âge minimum pour les sorties grand public — se renseigner auprès de la Maison du Sillon selon l’activité choisie.' },
    ],
    decouvrirLies: ['sillon-de-talbert', 'presquile-sauvage'],
    heroSlug: 'saison-automne-3',
  },
  {
    slug: 'festival-chant-de-marin',
    pilier: 'Culture',
    titre: 'Festival du Chant de Marin (Paimpol, 2027)',
    essentiel:
      "Le Festival du Chant de Marin de Paimpol, l'un des plus grands rassemblements de musiques marines d'Europe (jusqu'à 170 000 festivaliers lors de l'édition 2025), revient à Paimpol les 6, 7 et 8 août 2027 pour sa 17ᵉ édition, sur le thème « De la Mer Noire à la Baltique ». Paimpol est à quelques minutes de la Maison Od Joge — réserver tôt est recommandé pour un tel événement.",
    promesse:
      "Les 6, 7 et 8 août 2027, le port de Paimpol accueille la 17ᵉ édition du Festival du Chant de Marin — l'un des plus grands festivals de musiques marines d'Europe, à quelques minutes de la maison.",
    depuisLaMaison:
      "Paimpol est à quelques minutes de la Maison Od Joge — distance exacte à vérifier porte-à-porte. La maison peut servir de camp de base pour le festival, en évitant la forte tension sur l'hébergement à Paimpol même pendant l'événement.",
    propositions: [
      {
        titre: 'Vendredi 6 août 2027 — Ouverture',
        duree: 'Soirée',
        difficulte: 'Aucune',
        saisonIdeale: '6 août 2027',
        cout: 'Voir billetterie officielle',
        source: 'https://www.paimpol-festival.bzh/',
      },
      {
        titre: 'Samedi 7 août 2027 — Journée complète',
        duree: 'Journée',
        difficulte: 'Aucune',
        saisonIdeale: '7 août 2027',
        cout: 'Voir billetterie officielle',
        source: 'https://www.paimpol-festival.bzh/',
      },
      {
        titre: 'Dimanche 8 août 2027 — Clôture',
        duree: 'Journée',
        difficulte: 'Aucune',
        saisonIdeale: '8 août 2027',
        cout: 'Voir billetterie officielle',
        source: 'https://www.paimpol-festival.bzh/',
      },
      {
        titre: 'Défilé des bateaux traditionnels sur les quais',
        duree: 'Quelques heures',
        difficulte: 'Aucune',
        saisonIdeale: 'Sur les 3 jours (environ 200 bateaux lors de l’édition 2025)',
        cout: 'Gratuit (déambulation sur les quais)',
        source: 'https://www.paimpol-festival.bzh/le-festival/decouvrir-le-festival/',
      },
    ],
    encadrePratique: {
      materiel: ['Vêtements adaptés à la météo (événement en extérieur, sur les quais)', 'Chaussures confortables'],
      reservations:
        "Réserver l'hébergement très en avance — l'édition 2025 a rassemblé jusqu'à 170 000 festivaliers sur 3 jours. Billetterie des concerts sur le site officiel du festival.",
      prestataires: 'Festival du Chant de Marin, Paimpol (association organisatrice, entité réelle — source ci-dessous).',
    },
    faq: [
      { q: 'Quelles sont les dates du festival en 2027 ?', r: 'Les 6, 7 et 8 août 2027, pour la 17ᵉ édition.' },
      { q: 'Quel est le thème de l’édition 2027 ?', r: '« De la Mer Noire à la Baltique » — le festival met cap à l’Est : Balkans, Pays Baltes, Turquie, Roumanie, Ukraine, Pologne.' },
      { q: 'Faut-il réserver l’hébergement longtemps à l’avance ?', r: 'Oui — l’édition 2025 a rassemblé jusqu’à 170 000 festivaliers sur 3 jours ; réserver plusieurs mois à l’avance est recommandé, en particulier sur Paimpol même.' },
      { q: 'Le festival est-il gratuit ?', r: 'La déambulation sur les quais et une partie de la programmation sont accessibles librement ; certains concerts et animations sont payants — voir la billetterie officielle.' },
      { q: 'Combien de temps dure le festival ?', r: 'Trois jours, du vendredi au dimanche.' },
    ],
    decouvrirLies: ['paimpol-beauport', 'presquile-sauvage'],
    heroSlug: 'saison-ete-1',
  },
];
