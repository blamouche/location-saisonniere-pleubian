import type { Locale } from '@/i18n/locales';

/**
 * `maison.json` reste la source unique de vérité pour les FAITS (équipements,
 * scénarios de couchage…) — voir CLAUDE.md. Ces tables ne traduisent que le
 * libellé, indexées par le texte FR exact : un item ajouté à `maison.json` sans
 * entrée ici retombe simplement sur son libellé FR (dégradation gracieuse, jamais
 * de texte inventé), à corriger au prochain passage de traduction.
 */
export function translateItem(frText: string, map: Record<string, { en: string; de: string }>, locale: Locale): string {
  if (locale === 'fr') return frText;
  return map[frText]?.[locale] ?? frText;
}

export const equipementItems: Record<string, { en: string; de: string }> = {
  'Poêle à bois': { en: 'Wood stove', de: 'Holzofen' },
  WiFi: { en: 'WiFi', de: 'WLAN' },
  'Espace de travail dédié': { en: 'Dedicated desk', de: 'Eigener Arbeitsplatz' },
  'Machine à espresso': { en: 'Espresso machine', de: 'Espressomaschine' },
  'Cafetière manuelle': { en: 'Manual coffee maker', de: 'Handfilter-Kaffeemaschine' },
  'Cuisine équipée': { en: 'Fully equipped kitchen', de: 'Voll ausgestattete Küche' },
  'Lave-vaisselle': { en: 'Dishwasher', de: 'Geschirrspüler' },
  Réfrigérateur: { en: 'Fridge', de: 'Kühlschrank' },
  Four: { en: 'Oven', de: 'Backofen' },
  'Four à micro-ondes': { en: 'Microwave oven', de: 'Mikrowelle' },
  'Robot de cuisine': { en: 'Food processor', de: 'Küchenmaschine' },
  'Jardin clos': { en: 'Enclosed garden', de: 'Umzäunter Garten' },
  'Stationnement gratuit': { en: 'Free parking', de: 'Kostenlose Parkplätze' },
  Barbecue: { en: 'Barbecue', de: 'Grill' },
  'Table et chaises': { en: 'Outdoor table and chairs', de: 'Tisch und Stühle' },
  'Chaises longues': { en: 'Sun loungers', de: 'Liegestühle' },
  'Boîte à clés sécurisée': { en: 'Secure key box', de: 'Sicherer Schlüsseltresor' },
  'Détecteur de fumée': { en: 'Smoke detector', de: 'Rauchmelder' },
  "Chambre et salle de bain de plain-pied au RDC (pas d'escalier)": {
    en: 'Ground-floor bedroom and bathroom, step-free (no stairs)',
    de: 'Ebenerdiges Schlafzimmer und Bad im Erdgeschoss (keine Treppe)',
  },
  Cour: { en: 'Courtyard', de: 'Hof' },
  'Devant la maison': { en: 'In front of the house', de: 'Vor dem Haus' },
};

export const scenarioItems: Record<string, { en: string; de: string }> = {
  "2 familles avec enfants (chambres séparées à l'étage + RDC)": {
    en: '2 families with children (separate bedrooms upstairs + ground floor)',
    de: '2 Familien mit Kindern (getrennte Schlafzimmer im Obergeschoss + Erdgeschoss)',
  },
  '4 couples (une chambre chacun)': { en: '4 couples (one bedroom each)', de: '4 Paare (je ein Schlafzimmer)' },
  '1 famille + grands-parents (chambre RDC sans escalier pour les grands-parents)': {
    en: '1 family + grandparents (ground-floor bedroom, no stairs, for the grandparents)',
    de: '1 Familie + Großeltern (ebenerdiges Schlafzimmer ohne Treppe für die Großeltern)',
  },
};

export const cePasCestItems: Record<string, { en: string; de: string }> = {
  "Pas d'animaux acceptés": { en: 'No pets allowed', de: 'Keine Haustiere erlaubt' },
  'Pas de piscine': { en: 'No swimming pool', de: 'Kein Swimmingpool' },
  'Pas de vue mer panoramique depuis la maison': { en: 'No panoramic sea view from the house', de: 'Kein Panorama-Meerblick vom Haus aus' },
};

export interface Piece {
  slug: string;
  titre: string;
  description: string;
}

export interface LaMaisonContent {
  metaDescription: (nom: string, chambres: number, sallesDeBain: number, voyageurs: number) => string;
  titre: string;
  statLine: (voyageurs: number, chambres: number, couchages: number, convertible: number | undefined, sallesDeBain: number, wcSepare: boolean) => string;
  voirGalerie: string;
  infosPratiques: string;
  visiteTitre: string;
  pieces: Piece[];
  couchageTitre: string;
  equipementsTitre: string;
  equipementsLabels: Record<string, string>;
  honneteteTitre: string;
  honneteteIntro: string;
}

export const laMaisonContent: Record<Locale, LaMaisonContent> = {
  fr: {
    metaDescription: (nom, chambres, sallesDeBain, voyageurs) =>
      `Visite guidée de ${nom} : ${chambres} chambres, ${sallesDeBain} salles de bain, jardin clos, équipements complets et configurations de couchage pour ${voyageurs} personnes.`,
    titre: 'La maison',
    statLine: (voyageurs, chambres, couchages, convertible, sallesDeBain, wcSepare) =>
      `${voyageurs} voyageurs · ${chambres} chambres · ${couchages} lits${convertible ? ` (convertible ${convertible} lits)` : ''} · ${sallesDeBain} salles de bain${wcSepare ? ' + WC séparé' : ''}.`,
    voirGalerie: 'Voir la galerie complète',
    infosPratiques: 'Infos pratiques & arrivée',
    visiteTitre: 'Visite, pièce par pièce',
    pieces: [
      { slug: 'salon', titre: 'Le salon', description: 'Poêle à bois, canapés, lumière naturelle.' },
      { slug: 'cuisine', titre: 'La cuisine', description: 'Équipée, lave-vaisselle, cafetière manuelle et machine à espresso.' },
      { slug: 'chambre-4-rdc', titre: 'Chambre RDC', description: 'Lit double, accessible sans escalier — salle de bain avec douche à l’italienne au rdc.' },
      { slug: 'chambre-1-etage', titre: 'Suite parentale — étage', description: 'Suite parentale, lit double, sous les combles.' },
      { slug: 'chambre-3-etage', titre: 'Chambre avec deux lits simples', description: 'Idéale pour deux enfants ou deux adultes.' },
      { slug: 'chambre-2-etage', titre: 'Chambre 2 — étage', description: 'Lit double, séparable en lits simples.' },
      { slug: 'espace-travail', titre: 'Espace de travail dédié', description: 'WiFi, bureau au calme — pensé pour le télétravail.' },
      { slug: 'jardin', titre: 'Le jardin', description: 'Jardin privatif clos, sans vis-à-vis, adapté aux enfants en bas âge.' },
      { slug: 'facade', titre: 'Extérieur & stationnement', description: 'Stationnement gratuit en cour et devant la maison.' },
    ],
    couchageTitre: 'Qui dort où ?',
    equipementsTitre: 'Tous les équipements',
    equipementsLabels: { confort: 'Confort', cuisine: 'Cuisine', exterieur: 'Extérieur', securite: 'Sécurité', accessibilite: 'Accessibilité' },
    honneteteTitre: "Ce que la maison n'est pas",
    honneteteIntro: "Par souci d'honnêteté (et pour éviter les mauvaises surprises) :",
  },
  en: {
    metaDescription: (nom, chambres, sallesDeBain, voyageurs) =>
      `A guided tour of ${nom}: ${chambres} bedrooms, ${sallesDeBain} bathrooms, an enclosed garden, full amenities and sleeping arrangements for ${voyageurs} guests.`,
    titre: 'The house',
    statLine: (voyageurs, chambres, couchages, convertible, sallesDeBain, wcSepare) =>
      `${voyageurs} guests · ${chambres} bedrooms · ${couchages} beds${convertible ? ` (convertible to ${convertible} beds)` : ''} · ${sallesDeBain} bathrooms${wcSepare ? ' + separate WC' : ''}.`,
    voirGalerie: 'See the full gallery',
    infosPratiques: 'Practical info & arrival',
    visiteTitre: 'A room-by-room tour',
    pieces: [
      { slug: 'salon', titre: 'The living room', description: 'Wood stove, sofas, natural light.' },
      { slug: 'cuisine', titre: 'The kitchen', description: 'Fully equipped, dishwasher, manual coffee maker and espresso machine.' },
      { slug: 'chambre-4-rdc', titre: 'Ground-floor bedroom', description: 'Double bed, step-free access — bathroom with walk-in shower on the ground floor.' },
      { slug: 'chambre-1-etage', titre: 'Main suite — upstairs', description: 'Main suite with a double bed, under the eaves.' },
      { slug: 'chambre-3-etage', titre: 'Twin-bed bedroom', description: 'Ideal for two children or two adults.' },
      { slug: 'chambre-2-etage', titre: 'Bedroom 2 — upstairs', description: 'Double bed, can be split into two singles.' },
      { slug: 'espace-travail', titre: 'A dedicated desk', description: 'WiFi, a quiet desk — built for remote work.' },
      { slug: 'jardin', titre: 'The garden', description: 'Enclosed private garden, no overlook, suitable for young children.' },
      { slug: 'facade', titre: 'Outside & parking', description: 'Free parking in the courtyard and in front of the house.' },
    ],
    couchageTitre: 'Who sleeps where?',
    equipementsTitre: 'All amenities',
    equipementsLabels: { confort: 'Comfort', cuisine: 'Kitchen', exterieur: 'Outdoors', securite: 'Safety', accessibilite: 'Accessibility' },
    honneteteTitre: 'What the house is not',
    honneteteIntro: 'In the interest of honesty (and to avoid bad surprises):',
  },
  de: {
    metaDescription: (nom, chambres, sallesDeBain, voyageurs) =>
      `Rundgang durch ${nom}: ${chambres} Schlafzimmer, ${sallesDeBain} Badezimmer, umzäunter Garten, vollständige Ausstattung und Schlafmöglichkeiten für ${voyageurs} Gäste.`,
    titre: 'Das Haus',
    statLine: (voyageurs, chambres, couchages, convertible, sallesDeBain, wcSepare) =>
      `${voyageurs} Gäste · ${chambres} Schlafzimmer · ${couchages} Betten${convertible ? ` (umbaubar auf ${convertible} Betten)` : ''} · ${sallesDeBain} Badezimmer${wcSepare ? ' + separates WC' : ''}.`,
    voirGalerie: 'Ganze Galerie ansehen',
    infosPratiques: 'Praktische Infos & Anreise',
    visiteTitre: 'Rundgang, Raum für Raum',
    pieces: [
      { slug: 'salon', titre: 'Das Wohnzimmer', description: 'Holzofen, Sofas, natürliches Licht.' },
      { slug: 'cuisine', titre: 'Die Küche', description: 'Voll ausgestattet, Geschirrspüler, Handfilter-Kaffeemaschine und Espressomaschine.' },
      { slug: 'chambre-4-rdc', titre: 'Schlafzimmer im Erdgeschoss', description: 'Doppelbett, ebenerdig zugänglich — Bad mit ebenerdiger Dusche im Erdgeschoss.' },
      { slug: 'chambre-1-etage', titre: 'Hauptschlafzimmer — Obergeschoss', description: 'Hauptschlafzimmer mit Doppelbett, unter dem Dach.' },
      { slug: 'chambre-3-etage', titre: 'Zimmer mit zwei Einzelbetten', description: 'Ideal für zwei Kinder oder zwei Erwachsene.' },
      { slug: 'chambre-2-etage', titre: 'Schlafzimmer 2 — Obergeschoss', description: 'Doppelbett, in zwei Einzelbetten teilbar.' },
      { slug: 'espace-travail', titre: 'Eigener Arbeitsplatz', description: 'WLAN, ruhiger Schreibtisch — ideal für Homeoffice.' },
      { slug: 'jardin', titre: 'Der Garten', description: 'Umzäunter Privatgarten ohne Einsicht, geeignet für kleine Kinder.' },
      { slug: 'facade', titre: 'Außenbereich & Parkplatz', description: 'Kostenlose Parkplätze im Hof und vor dem Haus.' },
    ],
    couchageTitre: 'Wer schläft wo?',
    equipementsTitre: 'Alle Ausstattungsmerkmale',
    equipementsLabels: { confort: 'Komfort', cuisine: 'Küche', exterieur: 'Außenbereich', securite: 'Sicherheit', accessibilite: 'Barrierefreiheit' },
    honneteteTitre: 'Was das Haus nicht ist',
    honneteteIntro: 'Der Ehrlichkeit halber (und um böse Überraschungen zu vermeiden):',
  },
};
