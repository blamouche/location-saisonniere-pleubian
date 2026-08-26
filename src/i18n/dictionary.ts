import type { Locale } from './locales';

/**
 * Chaînes d'interface communes (nav, footer, breadcrumb, boutons) — hors contenu
 * éditorial des pages, qui vit dans les gabarits traduits eux-mêmes (US-062/063).
 */
export interface Dictionary {
  nav: {
    accueil: string;
    laMaison: string;
    experiences: string;
    decouvrir: string;
    agenda: string;
    saisons: string;
    journal: string;
    reserver: string;
    contact: string;
    ctaDisponibilites: string;
    ouvrirMenu: string;
  };
  breadcrumb: {
    accueil: string;
  };
  misAJourLe: string;
  skipLink: string;
  footer: {
    accueilPar: string;
    liensUtiles: string;
    avis: string;
    legal: string;
    newsletterTitre: string;
    newsletterTexte: string;
    newsletterPlaceholder: string;
    newsletterBouton: string;
    newsletterStatut: string;
    mentionsLegales: string;
  };
  cta: {
    voirAirbnb: string;
    voirBooking: string;
    bientot: string;
  };
  languageSwitcher: {
    label: string;
  };
  languageBanner: {
    text: (targetLabel: string) => string;
    action: string;
    dismiss: string;
  };
  seasonSwitcher: {
    intro: string;
    current: string;
    today: (date: string, season: string) => string;
    checkCalendar: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      accueil: 'Accueil',
      laMaison: 'La maison',
      experiences: 'Expériences',
      decouvrir: 'Découvrir',
      agenda: 'Agenda',
      saisons: 'Saisons',
      journal: 'Journal',
      reserver: 'Réserver',
      contact: 'Contact',
      ctaDisponibilites: 'Vérifier les disponibilités',
      ouvrirMenu: 'Ouvrir le menu',
    },
    breadcrumb: { accueil: 'Accueil' },
    misAJourLe: 'Mis à jour le',
    skipLink: 'Aller au contenu principal',
    footer: {
      accueilPar: 'Accueil par',
      liensUtiles: 'Liens utiles',
      avis: 'Avis voyageurs',
      legal: 'Mentions légales & confidentialité',
      newsletterTitre: "Les 4 saisons de la Presqu'île",
      newsletterTexte: 'Un email par saison, jamais plus. Pas de spam, désinscription en un clic.',
      newsletterPlaceholder: 'vous@exemple.com',
      newsletterBouton: "S'inscrire",
      newsletterStatut: "Inscription bientôt disponible — l'intégration newsletter arrive prochainement.",
      mentionsLegales: 'Mentions légales',
    },
    cta: { voirAirbnb: 'Voir sur Airbnb', voirBooking: 'Voir sur Booking', bientot: '(bientôt)' },
    languageSwitcher: { label: 'Langue' },
    languageBanner: {
      text: (targetLabel) => `Il semble que vous lisiez en ${targetLabel}.`,
      action: 'Voir cette page dans cette langue',
      dismiss: 'Ignorer',
    },
    seasonSwitcher: {
      intro: 'Voir la maison en',
      current: 'Actuelle',
      today: (date, season) => `Nous sommes le ${date} (${season}). Explorer une autre saison ne change pas les disponibilités réelles —`,
      checkCalendar: 'vérifier le calendrier',
    },
  },
  en: {
    nav: {
      accueil: 'Home',
      laMaison: 'The house',
      experiences: 'Experiences',
      decouvrir: 'Discover',
      agenda: 'Events',
      saisons: 'Seasons',
      journal: 'Journal',
      reserver: 'Book',
      contact: 'Contact',
      ctaDisponibilites: 'Check availability',
      ouvrirMenu: 'Open menu',
    },
    breadcrumb: { accueil: 'Home' },
    misAJourLe: 'Updated on',
    skipLink: 'Skip to main content',
    footer: {
      accueilPar: 'Hosted by',
      liensUtiles: 'Useful links',
      avis: 'Guest reviews',
      legal: 'Legal notice & privacy',
      newsletterTitre: "The four seasons of the peninsula",
      newsletterTexte: 'One email per season, never more. No spam, unsubscribe in one click.',
      newsletterPlaceholder: 'you@example.com',
      newsletterBouton: 'Subscribe',
      newsletterStatut: 'Sign-up coming soon — the newsletter integration is on its way.',
      mentionsLegales: 'Legal notice',
    },
    cta: { voirAirbnb: 'View on Airbnb', voirBooking: 'View on Booking', bientot: '(coming soon)' },
    languageSwitcher: { label: 'Language' },
    languageBanner: {
      text: (targetLabel) => `It looks like you read ${targetLabel}.`,
      action: 'View this page in that language',
      dismiss: 'Dismiss',
    },
    seasonSwitcher: {
      intro: 'View the house in',
      current: 'Current',
      today: (date, season) => `Today is ${date} (${season}). Browsing another season does not change real availability —`,
      checkCalendar: 'check the calendar',
    },
  },
  de: {
    nav: {
      accueil: 'Startseite',
      laMaison: 'Das Haus',
      experiences: 'Erlebnisse',
      decouvrir: 'Entdecken',
      agenda: 'Veranstaltungen',
      saisons: 'Jahreszeiten',
      journal: 'Journal',
      reserver: 'Buchen',
      contact: 'Kontakt',
      ctaDisponibilites: 'Verfügbarkeit prüfen',
      ouvrirMenu: 'Menü öffnen',
    },
    breadcrumb: { accueil: 'Startseite' },
    misAJourLe: 'Aktualisiert am',
    skipLink: 'Zum Hauptinhalt springen',
    footer: {
      accueilPar: 'Gastgeber',
      liensUtiles: 'Nützliche Links',
      avis: 'Gästebewertungen',
      legal: 'Impressum & Datenschutz',
      newsletterTitre: 'Die vier Jahreszeiten der Halbinsel',
      newsletterTexte: 'Eine E-Mail pro Jahreszeit, nicht mehr. Kein Spam, jederzeit abbestellbar.',
      newsletterPlaceholder: 'sie@beispiel.de',
      newsletterBouton: 'Anmelden',
      newsletterStatut: 'Anmeldung bald verfügbar — die Newsletter-Anbindung folgt in Kürze.',
      mentionsLegales: 'Impressum',
    },
    cta: { voirAirbnb: 'Auf Airbnb ansehen', voirBooking: 'Auf Booking ansehen', bientot: '(bald verfügbar)' },
    languageSwitcher: { label: 'Sprache' },
    languageBanner: {
      text: (targetLabel) => `Es sieht so aus, als würden Sie ${targetLabel} lesen.`,
      action: 'Diese Seite in dieser Sprache ansehen',
      dismiss: 'Schließen',
    },
    seasonSwitcher: {
      intro: 'Haus ansehen im',
      current: 'Aktuell',
      today: (date, season) => `Heute ist der ${date} (${season}). Eine andere Jahreszeit anzusehen ändert nichts an der echten Verfügbarkeit —`,
      checkCalendar: 'Kalender prüfen',
    },
  },
};

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}
