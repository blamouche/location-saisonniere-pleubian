import type { Locale } from '@/i18n/locales';

export type Categorie = 'interieur' | 'exterieur' | 'confort' | 'saison';

export interface GaleriePhoto {
  slug: string;
  titre: string;
  categorie: Categorie;
}

export interface GalerieContent {
  titre: string;
  metaDescription: string;
  intro: string;
  categories: Record<Categorie, string>;
  filtreTout: string;
  filtrerParPiece: string;
  fermer: string;
  precedente: string;
  suivante: string;
  photosMaison: GaleriePhoto[];
  territoireEnSaison: (saisonLabel: string, n: number) => string;
}

export const galerieContent: Record<Locale, GalerieContent> = {
  fr: {
    titre: 'Galerie photo',
    metaDescription: 'Toutes les photos de la Maison Od Joge, filtrables par pièce — visuels provisoires en attendant le shooting saisonnier.',
    intro: 'Visuels provisoires génériques (voir la note ci-dessous) — remplacés au fil des shootings saisonniers.',
    categories: { interieur: 'Intérieur', exterieur: 'Extérieur', confort: 'Confort', saison: 'Le territoire par saison' },
    filtreTout: 'Tout',
    filtrerParPiece: 'Filtrer par pièce',
    fermer: 'Fermer',
    precedente: '← Précédente',
    suivante: 'Suivante →',
    photosMaison: [
      { slug: 'facade', titre: 'Façade', categorie: 'exterieur' },
      { slug: 'jardin', titre: 'Jardin clos', categorie: 'exterieur' },
      { slug: 'terrasse', titre: 'Terrasse', categorie: 'exterieur' },
      { slug: 'salon', titre: 'Salon', categorie: 'interieur' },
      { slug: 'salon-coin-poele', titre: 'Salon — coin poêle', categorie: 'interieur' },
      { slug: 'salle-a-manger', titre: 'Salle à manger', categorie: 'interieur' },
      { slug: 'cuisine', titre: 'Cuisine', categorie: 'interieur' },
      { slug: 'chambre-1-etage', titre: 'Suite parentale — étage', categorie: 'interieur' },
      { slug: 'chambre-2-etage', titre: 'Chambre 2 — étage', categorie: 'interieur' },
      { slug: 'chambre-3-etage', titre: 'Chambre avec deux lits simples', categorie: 'interieur' },
      { slug: 'chambre-4-rdc', titre: 'Chambre RDC', categorie: 'interieur' },
      { slug: 'salle-de-bain-rdc', titre: 'Salle de bain RDC', categorie: 'interieur' },
      { slug: 'salle-de-bain-rdc-douche', titre: 'Salle de bain RDC — douche', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage', titre: 'Salle de bain & WC — étage', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage-douche', titre: 'Salle de bain étage — douche', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage-vue', titre: "Salle de bain étage — vue d'ensemble", categorie: 'interieur' },
      { slug: 'poele-a-bois', titre: 'Poêle à bois', categorie: 'confort' },
      { slug: 'espace-travail', titre: 'Espace de travail', categorie: 'confort' },
    ],
    territoireEnSaison: (saisonLabel, n) => `Le territoire en ${saisonLabel.toLowerCase()} (${n}/3)`,
  },
  en: {
    titre: 'Photo gallery',
    metaDescription: 'All the photos of Maison Od Joge, filterable by room — provisional visuals until the seasonal photoshoot.',
    intro: 'Provisional, generic visuals (see the note below) — replaced as the seasonal photoshoots happen.',
    categories: { interieur: 'Inside', exterieur: 'Outside', confort: 'Comfort', saison: 'The area, by season' },
    filtreTout: 'All',
    filtrerParPiece: 'Filter by room',
    fermer: 'Close',
    precedente: '← Previous',
    suivante: 'Next →',
    photosMaison: [
      { slug: 'facade', titre: 'Façade', categorie: 'exterieur' },
      { slug: 'jardin', titre: 'Enclosed garden', categorie: 'exterieur' },
      { slug: 'terrasse', titre: 'Terrace', categorie: 'exterieur' },
      { slug: 'salon', titre: 'Living room', categorie: 'interieur' },
      { slug: 'salon-coin-poele', titre: 'Living room — stove corner', categorie: 'interieur' },
      { slug: 'salle-a-manger', titre: 'Dining room', categorie: 'interieur' },
      { slug: 'cuisine', titre: 'Kitchen', categorie: 'interieur' },
      { slug: 'chambre-1-etage', titre: 'Main suite — upstairs', categorie: 'interieur' },
      { slug: 'chambre-2-etage', titre: 'Bedroom 2 — upstairs', categorie: 'interieur' },
      { slug: 'chambre-3-etage', titre: 'Twin-bed bedroom', categorie: 'interieur' },
      { slug: 'chambre-4-rdc', titre: 'Ground-floor bedroom', categorie: 'interieur' },
      { slug: 'salle-de-bain-rdc', titre: 'Ground-floor bathroom', categorie: 'interieur' },
      { slug: 'salle-de-bain-rdc-douche', titre: 'Ground-floor bathroom — shower', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage', titre: 'Bathroom & WC — upstairs', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage-douche', titre: 'Upstairs bathroom — shower', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage-vue', titre: 'Upstairs bathroom — overview', categorie: 'interieur' },
      { slug: 'poele-a-bois', titre: 'Wood stove', categorie: 'confort' },
      { slug: 'espace-travail', titre: 'Dedicated desk', categorie: 'confort' },
    ],
    territoireEnSaison: (saisonLabel, n) => `The area in ${saisonLabel.toLowerCase()} (${n}/3)`,
  },
  de: {
    titre: 'Fotogalerie',
    metaDescription: 'Alle Fotos von Maison Od Joge, filterbar nach Raum — vorläufige Bilder bis zum saisonalen Fotoshooting.',
    intro: 'Vorläufige, generische Bilder (siehe Hinweis unten) — werden im Zuge der saisonalen Fotoshootings ersetzt.',
    categories: { interieur: 'Innen', exterieur: 'Außen', confort: 'Komfort', saison: 'Die Umgebung nach Jahreszeit' },
    filtreTout: 'Alle',
    filtrerParPiece: 'Nach Raum filtern',
    fermer: 'Schließen',
    precedente: '← Vorherige',
    suivante: 'Nächste →',
    photosMaison: [
      { slug: 'facade', titre: 'Fassade', categorie: 'exterieur' },
      { slug: 'jardin', titre: 'Umzäunter Garten', categorie: 'exterieur' },
      { slug: 'terrasse', titre: 'Terrasse', categorie: 'exterieur' },
      { slug: 'salon', titre: 'Wohnzimmer', categorie: 'interieur' },
      { slug: 'salon-coin-poele', titre: 'Wohnzimmer — Ofenecke', categorie: 'interieur' },
      { slug: 'salle-a-manger', titre: 'Esszimmer', categorie: 'interieur' },
      { slug: 'cuisine', titre: 'Küche', categorie: 'interieur' },
      { slug: 'chambre-1-etage', titre: 'Hauptschlafzimmer — Obergeschoss', categorie: 'interieur' },
      { slug: 'chambre-2-etage', titre: 'Schlafzimmer 2 — Obergeschoss', categorie: 'interieur' },
      { slug: 'chambre-3-etage', titre: 'Zimmer mit zwei Einzelbetten', categorie: 'interieur' },
      { slug: 'chambre-4-rdc', titre: 'Schlafzimmer im Erdgeschoss', categorie: 'interieur' },
      { slug: 'salle-de-bain-rdc', titre: 'Badezimmer im Erdgeschoss', categorie: 'interieur' },
      { slug: 'salle-de-bain-rdc-douche', titre: 'Badezimmer Erdgeschoss — Dusche', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage', titre: 'Bad & WC — Obergeschoss', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage-douche', titre: 'Bad Obergeschoss — Dusche', categorie: 'interieur' },
      { slug: 'salle-de-bain-etage-vue', titre: 'Bad Obergeschoss — Übersicht', categorie: 'interieur' },
      { slug: 'poele-a-bois', titre: 'Holzofen', categorie: 'confort' },
      { slug: 'espace-travail', titre: 'Eigener Arbeitsplatz', categorie: 'confort' },
    ],
    territoireEnSaison: (saisonLabel, n) => `Die Umgebung im ${saisonLabel.toLowerCase()} (${n}/3)`,
  },
};
