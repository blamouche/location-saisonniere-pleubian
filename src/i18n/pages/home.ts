import type { Locale } from '@/i18n/locales';

export interface HomeContent {
  /** Titre H1 — traduction du slogan `maison.slogan` (FR, source unique dans
   * `maison.json`). Le slogan FR reste la référence factuelle ; ceci est la
   * transposition marketing en EN/DE, pas une donnée dupliquée. */
  heroTitle: string;
  heroKicker: (saisonLabel: string, commune: string, departement: string) => string;
  heroPitch: (voyageurs: number, commune: string, lieuDit: string, dureeMer: string) => string;
  mareesIndisponibles: string;
  mareesLabel: string;
  pleineMer: string;
  basseMer: string;
  coeff: string;
  donneePrecedente: string;
  sourceShom: string;
  festivalKicker: string;
  festivalTitre: string;
  festivalDetails: string;
  festivalCta: string;
  pitchTexte: (nom: string, voyageurs: number, commune: string, codePostal: string) => string;
  chiffresTitre: string;
  chiffres: { voyageurs: string; chambres: string; sallesDeBain: string; jardin: string; jardinValue: string; merAPied: string; statut: string; superhost: string; hote: string };
  apercuTitre: string;
  apercuGalerie: string;
  apercuPhotos: { slug: string; label: string }[];
  raisonsTitre: string;
  raisonsIntro: string;
  raisons: { titre: string; description: string; frSlug: string }[];
  territoireTitre: string;
  territoireIntro: string;
  avisTitre: string;
  avisTexte: string;
  conversionTitre: string;
  conversionTexte: string;
  conversionBouton: string;
  reserverSticky: string;
  metaDescription: (slogan: string, voyageurs: number, commune: string, codePostal: string) => string;
}

export const homeContent: Record<Locale, HomeContent> = {
  fr: {
    heroTitle: "Huit autour d'une table, la mer à cinq minutes",
    heroKicker: (saisonLabel, commune, departement) => `${saisonLabel} · ${commune}, ${departement}`,
    heroPitch: (voyageurs, commune, lieuDit, dureeMer) =>
      `Maison familiale de ${voyageurs} personnes entre ${commune} et ${lieuDit}, à ${dureeMer} de la mer, sur la Presqu'île sauvage.`,
    mareesIndisponibles: 'Marées du jour : indisponibles pour ce build — météo à connecter (US-032)',
    mareesLabel: 'Marées à Pleubian',
    pleineMer: 'pleine mer',
    basseMer: 'basse mer',
    coeff: 'coeff.',
    donneePrecedente: 'donnée d’une précédente mise à jour',
    sourceShom: 'source SHOM',
    festivalKicker: 'Gros événement 2027',
    festivalTitre: 'Festival du Chant de Marin — Paimpol',
    festivalDetails: "6, 7 et 8 août 2027 · 17ᵉ édition · jusqu'à 170 000 festivaliers en 2025 · Paimpol à quelques minutes de la maison",
    festivalCta: 'En savoir plus →',
    pitchTexte: (nom, voyageurs, commune, codePostal) =>
      `${nom} est une maison bretonne pour ${voyageurs} personnes, à ${commune} (${codePostal}), sur la Presqu'île sauvage entre les estuaires du Trieux et du Jaudy. Jardin clos, poêle à bois, espace de travail dédié, et le Sillon de Talbert à quelques minutes.`,
    chiffresTitre: "La maison en un coup d'œil",
    chiffres: { voyageurs: 'Voyageurs', chambres: 'Chambres', sallesDeBain: 'Salles de bain', jardin: 'Jardin', jardinValue: 'Clos, privatif, sans vis-à-vis', merAPied: 'Mer à pied', statut: 'Statut', superhost: 'Superhost', hote: 'Hôte' },
    apercuTitre: 'Visite en images',
    apercuGalerie: 'Voir toute la galerie →',
    apercuPhotos: [
      { slug: 'facade', label: 'Façade de la maison' },
      { slug: 'salon', label: 'Le salon' },
      { slug: 'cuisine', label: 'La cuisine équipée' },
      { slug: 'chambre-1-etage', label: 'Une des chambres' },
      { slug: 'jardin', label: 'Le jardin clos' },
      { slug: 'poele-a-bois', label: 'Le poêle à bois' },
    ],
    raisonsTitre: '5 raisons de venir',
    raisonsIntro: 'Sport, bien-être, déconnexion, air pur, culture — cinq angles pour préparer un séjour.',
    raisons: [
      { titre: 'Sport', description: 'GR34, EuroVelo 4, kayak et voile à quelques minutes.', frSlug: 'randonnee-gr34' },
      { titre: 'Bien-être', description: 'Air marin iodé, marche méditative, bains de mer.', frSlug: 'bien-etre-air-marin' },
      { titre: 'Déconnexion', description: 'Silence, ciel étoilé, poêle à bois, rythme des marées.', frSlug: 'deconnexion-slow' },
      { titre: 'Air pur', description: 'Le littoral breton, un argument respiratoire concret.', frSlug: 'bien-etre-air-marin' },
      { titre: 'Culture', description: 'Tréguier, Beauport, whisky breton, distillerie.', frSlug: 'culture-patrimoine' },
    ],
    territoireTitre: 'Le territoire, à quelques minutes',
    territoireIntro:
      "12 points d'intérêt du territoire — carte interactive MapLibre non encore implémentée (voir US-045) ; liste reliée aux fiches détaillées en attendant. Temps de trajet à vérifier porte-à-porte avant publication définitive.",
    avisTitre: 'Avis voyageurs',
    avisTexte: "Les avis publiés ici seront uniquement des avis réels et attribués, importés des plateformes de réservation (US-046). Aucun avis fictif n'est affiché en attendant.",
    conversionTitre: 'Envie de réserver ?',
    conversionTexte: 'Tarifs indicatifs et conditions complètes sur la page réservation.',
    conversionBouton: 'Voir les tarifs & disponibilités',
    reserverSticky: 'Réserver',
    metaDescription: (slogan, voyageurs, commune, codePostal) =>
      `${slogan} — maison familiale ${voyageurs} personnes à ${commune} (${codePostal}), Presqu'île sauvage, Côtes-d'Armor.`,
  },
  en: {
    heroTitle: 'Eight around a table, the sea five minutes away',
    heroKicker: (saisonLabel, commune, departement) => `${saisonLabel} · ${commune}, ${departement}, France`,
    heroPitch: (voyageurs, commune, lieuDit, dureeMer) =>
      `A family holiday home for ${voyageurs}, between ${commune} and ${lieuDit}, ${dureeMer} from the sea, on Brittany's wild peninsula.`,
    mareesIndisponibles: 'Today’s tides: unavailable for this build — live feed to be connected (US-032)',
    mareesLabel: 'Tides at Pleubian',
    pleineMer: 'high tide',
    basseMer: 'low tide',
    coeff: 'coeff.',
    donneePrecedente: 'data from a previous update',
    sourceShom: 'source: SHOM',
    festivalKicker: 'Major event, 2027',
    festivalTitre: 'Sea Shanty Festival — Paimpol',
    festivalDetails: '6–8 August 2027 · 17th edition · up to 170,000 visitors in 2025 · Paimpol a few minutes from the house',
    festivalCta: 'Learn more →',
    pitchTexte: (nom, voyageurs, commune, codePostal) =>
      `${nom} is a Breton stone house for ${voyageurs} people, in ${commune} (${codePostal}), on the wild peninsula between the Trieux and Jaudy estuaries. Enclosed garden, wood stove, a dedicated desk, and the Talbert sand spit a few minutes away.`,
    chiffresTitre: 'The house at a glance',
    chiffres: { voyageurs: 'Guests', chambres: 'Bedrooms', sallesDeBain: 'Bathrooms', jardin: 'Garden', jardinValue: 'Enclosed, private, no overlook', merAPied: 'Sea on foot', statut: 'Status', superhost: 'Superhost', hote: 'Host' },
    apercuTitre: 'A visual tour',
    apercuGalerie: 'See the full gallery →',
    apercuPhotos: [
      { slug: 'facade', label: 'The house façade' },
      { slug: 'salon', label: 'The living room' },
      { slug: 'cuisine', label: 'The fitted kitchen' },
      { slug: 'chambre-1-etage', label: 'One of the bedrooms' },
      { slug: 'jardin', label: 'The enclosed garden' },
      { slug: 'poele-a-bois', label: 'The wood stove' },
    ],
    raisonsTitre: '5 reasons to come',
    raisonsIntro: 'Sport, wellbeing, disconnection, fresh air, culture — five angles for planning a stay.',
    raisons: [
      { titre: 'Sport', description: 'The GR34 coastal path, EuroVelo 4, kayaking and sailing minutes away.', frSlug: 'randonnee-gr34' },
      { titre: 'Wellbeing', description: 'Iodine-rich sea air, mindful walking, sea bathing.', frSlug: 'bien-etre-air-marin' },
      { titre: 'Disconnection', description: 'Silence, starry skies, a wood stove, the rhythm of the tides.', frSlug: 'deconnexion-slow' },
      { titre: 'Fresh air', description: 'The Breton coastline — a concrete argument for your lungs.', frSlug: 'bien-etre-air-marin' },
      { titre: 'Culture', description: 'Tréguier, Beauport Abbey, Breton whisky, a local distillery.', frSlug: 'culture-patrimoine' },
    ],
    territoireTitre: 'The area, minutes away',
    territoireIntro:
      '12 places of interest nearby — an interactive map is not yet implemented (see US-045); this list links to detailed guides in the meantime. Travel times to be verified door-to-door before final publication.',
    avisTitre: 'Guest reviews',
    avisTexte: 'Reviews shown here will only ever be real, attributed reviews imported from booking platforms (US-046). No fictional review is displayed in the meantime.',
    conversionTitre: 'Ready to book?',
    conversionTexte: 'Indicative rates and full conditions on the booking page.',
    conversionBouton: 'See rates & availability',
    reserverSticky: 'Book',
    metaDescription: (slogan, voyageurs, commune, codePostal) =>
      `${slogan} — a family holiday home for ${voyageurs} in ${commune} (${codePostal}), on Brittany's wild peninsula, Côtes-d'Armor.`,
  },
  de: {
    heroTitle: 'Acht am Tisch, das Meer fünf Minuten entfernt',
    heroKicker: (saisonLabel, commune, departement) => `${saisonLabel} · ${commune}, ${departement}, Frankreich`,
    heroPitch: (voyageurs, commune, lieuDit, dureeMer) =>
      `Ferienhaus für ${voyageurs} Personen zwischen ${commune} und ${lieuDit}, ${dureeMer} vom Meer entfernt, auf der wilden Halbinsel der Bretagne.`,
    mareesIndisponibles: 'Gezeiten heute: für diesen Build nicht verfügbar — Live-Anbindung folgt (US-032)',
    mareesLabel: 'Gezeiten bei Pleubian',
    pleineMer: 'Flut',
    basseMer: 'Ebbe',
    coeff: 'Koeff.',
    donneePrecedente: 'Daten einer früheren Aktualisierung',
    sourceShom: 'Quelle: SHOM',
    festivalKicker: 'Großes Ereignis 2027',
    festivalTitre: 'Shanty-Festival — Paimpol',
    festivalDetails: '6.–8. August 2027 · 17. Ausgabe · bis zu 170.000 Besucher 2025 · Paimpol nur wenige Minuten vom Haus entfernt',
    festivalCta: 'Mehr erfahren →',
    pitchTexte: (nom, voyageurs, commune, codePostal) =>
      `${nom} ist ein bretonisches Steinhaus für ${voyageurs} Personen in ${commune} (${codePostal}), auf der wilden Halbinsel zwischen den Flussmündungen von Trieux und Jaudy. Umzäunter Garten, Holzofen, ein eigener Arbeitsplatz und der Sillon de Talbert nur wenige Minuten entfernt.`,
    chiffresTitre: 'Das Haus auf einen Blick',
    chiffres: { voyageurs: 'Gäste', chambres: 'Schlafzimmer', sallesDeBain: 'Badezimmer', jardin: 'Garten', jardinValue: 'Umzäunt, privat, ohne Einsicht', merAPied: 'Meer zu Fuß', statut: 'Status', superhost: 'Superhost', hote: 'Gastgeber' },
    apercuTitre: 'Rundgang in Bildern',
    apercuGalerie: 'Ganze Galerie ansehen →',
    apercuPhotos: [
      { slug: 'facade', label: 'Die Fassade des Hauses' },
      { slug: 'salon', label: 'Das Wohnzimmer' },
      { slug: 'cuisine', label: 'Die ausgestattete Küche' },
      { slug: 'chambre-1-etage', label: 'Eines der Schlafzimmer' },
      { slug: 'jardin', label: 'Der umzäunte Garten' },
      { slug: 'poele-a-bois', label: 'Der Holzofen' },
    ],
    raisonsTitre: '5 Gründe zu kommen',
    raisonsIntro: 'Sport, Wohlbefinden, Digital Detox, frische Luft, Kultur — fünf Blickwinkel für die Reiseplanung.',
    raisons: [
      { titre: 'Sport', description: 'GR34-Küstenweg, EuroVelo 4, Kajak und Segeln nur wenige Minuten entfernt.', frSlug: 'randonnee-gr34' },
      { titre: 'Wohlbefinden', description: 'Jodhaltige Meeresluft, achtsames Wandern, Baden im Meer.', frSlug: 'bien-etre-air-marin' },
      { titre: 'Digital Detox', description: 'Stille, Sternenhimmel, Holzofen, der Rhythmus der Gezeiten.', frSlug: 'deconnexion-slow' },
      { titre: 'Frische Luft', description: 'Die bretonische Küste — ein handfestes Argument für die Lunge.', frSlug: 'bien-etre-air-marin' },
      { titre: 'Kultur', description: 'Tréguier, Abtei Beauport, bretonischer Whisky, eine Destillerie.', frSlug: 'culture-patrimoine' },
    ],
    territoireTitre: 'Die Umgebung, nur Minuten entfernt',
    territoireIntro:
      '12 Sehenswürdigkeiten der Umgebung — eine interaktive Karte ist noch nicht umgesetzt (siehe US-045); diese Liste verweist bis dahin auf die ausführlichen Seiten. Fahrzeiten vor der endgültigen Veröffentlichung von Tür zu Tür zu prüfen.',
    avisTitre: 'Gästebewertungen',
    avisTexte: 'Hier werden ausschließlich echte, zugeordnete Bewertungen von Buchungsplattformen angezeigt (US-046). Bis dahin wird keine fiktive Bewertung dargestellt.',
    conversionTitre: 'Lust zu buchen?',
    conversionTexte: 'Richtpreise und vollständige Bedingungen auf der Buchungsseite.',
    conversionBouton: 'Preise & Verfügbarkeit ansehen',
    reserverSticky: 'Buchen',
    metaDescription: (slogan, voyageurs, commune, codePostal) =>
      `${slogan} — Ferienhaus für ${voyageurs} Personen in ${commune} (${codePostal}), wilde Halbinsel, Côtes-d'Armor.`,
  },
};
