import type { Locale } from '@/i18n/locales';

export interface FaqItem {
  q: string;
  r: string;
}

export interface ReserverContent {
  metaDescription: (nom: string, voyageurs: number, commune: string) => string;
  titre: string;
  intro: string;
  dispoTitre: string;
  dispoTexte: string;
  dispoContact: string;
  tarifsTitre: string;
  tarifsNote: string;
  tarifsAVenir: string;
  saisonLabels: Record<string, string>;
  conditionsTitre: string;
  conditions: (arriveeBasse: string, arriveeHaute: string, depart: string) => string[];
  faqTitre: string;
  faq: (arriveeBasse: string, arriveeHaute: string, depart: string, animauxAcceptes: boolean) => FaqItem[];
  conversionTitre: string;
}

export const reserverContent: Record<Locale, ReserverContent> = {
  fr: {
    metaDescription: (nom, voyageurs, commune) => `Tarifs indicatifs, disponibilités et liens de réservation pour ${nom} — ${voyageurs} personnes à ${commune}.`,
    titre: 'Réserver',
    intro: 'Tarifs indicatifs par saison, conditions de séjour et liens directs vers les plateformes de réservation.',
    dispoTitre: 'Disponibilités',
    dispoTexte: 'Le calendrier de disponibilité en temps réel (import automatique depuis Airbnb/Booking) arrive au Lot 1 avancé — voir US-020. En attendant, merci de vérifier les disponibilités exactes directement sur Airbnb, ou de nous écrire via le',
    dispoContact: 'formulaire de contact',
    tarifsTitre: 'Tarifs indicatifs par saison',
    tarifsNote: '',
    tarifsAVenir: 'À venir',
    saisonLabels: { printemps: 'Printemps', ete: 'Été', automne: 'Automne', hiver: 'Hiver' },
    conditionsTitre: 'Conditions',
    conditions: (arriveeBasse, arriveeHaute, depart) => [
      'Durée minimale de séjour : à confirmer',
      `Arrivée ${arriveeBasse} (basse saison) / ${arriveeHaute} (haute saison) · Départ avant ${depart}`,
      'Caution : modalités fournies lors de la réservation',
      'Ménage de fin de séjour : inclus',
      'Taxe de séjour : montant à indiquer avant mise en ligne',
    ],
    faqTitre: 'Questions fréquentes',
    faq: (arriveeBasse, arriveeHaute, depart, animauxAcceptes) => [
      { q: 'Quelle est la durée minimale de séjour ?', r: "À confirmer avec les hôtes — généralement plus courte hors haute saison." },
      { q: "Quelles sont les heures d'arrivée et de départ ?", r: `Arrivée à ${arriveeBasse} (basse saison) ou ${arriveeHaute} (haute saison), départ avant ${depart} (à confirmer).` },
      { q: 'Une caution est-elle demandée ?', r: 'Modalités de caution fournies lors de la réservation.' },
      { q: 'Le ménage de fin de séjour est-il inclus dans le tarif ?', r: 'Oui, le ménage de fin de séjour est inclus.' },
      { q: 'La taxe de séjour est-elle incluse ?', r: 'Montant et mode de collecte à indiquer avant mise en ligne (obligation légale, PRD §15.2).' },
      { q: 'Comment réserver concrètement ?', r: "Via les boutons Airbnb / Booking ci-dessus, qui renvoient vers la plateforme de réservation officielle." },
      { q: 'Puis-je annuler ma réservation ?', r: "Les conditions d'annulation sont celles de la plateforme utilisée pour réserver (Airbnb ou Booking)." },
      { q: 'Les animaux sont-ils acceptés ?', r: animauxAcceptes ? 'Oui.' : 'Non, les animaux ne sont pas acceptés.' },
    ],
    conversionTitre: 'Prêt·e à réserver ?',
  },
  en: {
    metaDescription: (nom, voyageurs, commune) => `Indicative rates, availability and booking links for ${nom} — sleeps ${voyageurs} in ${commune}.`,
    titre: 'Book',
    intro: 'Indicative rates by season, stay conditions, and direct links to the booking platforms.',
    dispoTitre: 'Availability',
    dispoTexte: 'A real-time availability calendar (auto-imported from Airbnb/Booking) is coming later in Lot 1 — see US-020. In the meantime, please check exact availability directly on Airbnb, or write to us via the',
    dispoContact: 'contact form',
    tarifsTitre: 'Indicative rates by season',
    tarifsNote: '',
    tarifsAVenir: 'Coming soon',
    saisonLabels: { printemps: 'Spring', ete: 'Summer', automne: 'Autumn', hiver: 'Winter' },
    conditionsTitre: 'Conditions',
    conditions: (arriveeBasse, arriveeHaute, depart) => [
      'Minimum stay: to be confirmed',
      `Check-in ${arriveeBasse} (low season) / ${arriveeHaute} (high season) · Check-out before ${depart}`,
      'Security deposit: details provided at booking',
      'End-of-stay cleaning: included',
      'Tourist tax: amount to be published before launch',
    ],
    faqTitre: 'Frequently asked questions',
    faq: (arriveeBasse, arriveeHaute, depart, animauxAcceptes) => [
      { q: 'What is the minimum length of stay?', r: 'To be confirmed with the hosts — generally shorter outside peak season.' },
      { q: 'What are the check-in and check-out times?', r: `Check-in at ${arriveeBasse} (low season) or ${arriveeHaute} (high season), check-out before ${depart} (to be confirmed).` },
      { q: 'Is a security deposit required?', r: 'Deposit details are provided at the time of booking.' },
      { q: 'Is end-of-stay cleaning included in the rate?', r: 'Yes, end-of-stay cleaning is included.' },
      { q: 'Is the tourist tax included?', r: 'Amount and collection method to be published before launch (legal requirement, PRD §15.2).' },
      { q: 'How do I actually book?', r: 'Via the Airbnb / Booking buttons above, which link to the official booking platform.' },
      { q: 'Can I cancel my booking?', r: 'Cancellation terms are those of the platform used to book (Airbnb or Booking).' },
      { q: 'Are pets allowed?', r: animauxAcceptes ? 'Yes.' : 'No, pets are not allowed.' },
    ],
    conversionTitre: 'Ready to book?',
  },
  de: {
    metaDescription: (nom, voyageurs, commune) => `Richtpreise, Verfügbarkeit und Buchungslinks für ${nom} — ${voyageurs} Personen in ${commune}.`,
    titre: 'Buchen',
    intro: 'Richtpreise nach Saison, Aufenthaltsbedingungen und direkte Links zu den Buchungsplattformen.',
    dispoTitre: 'Verfügbarkeit',
    dispoTexte: 'Ein Echtzeit-Verfügbarkeitskalender (automatischer Import von Airbnb/Booking) folgt später in Lot 1 — siehe US-020. Bitte prüfen Sie die genaue Verfügbarkeit in der Zwischenzeit direkt auf Airbnb oder schreiben Sie uns über das',
    dispoContact: 'Kontaktformular',
    tarifsTitre: 'Richtpreise nach Saison',
    tarifsNote: '',
    tarifsAVenir: 'Demnächst',
    saisonLabels: { printemps: 'Frühling', ete: 'Sommer', automne: 'Herbst', hiver: 'Winter' },
    conditionsTitre: 'Bedingungen',
    conditions: (arriveeBasse, arriveeHaute, depart) => [
      'Mindestaufenthalt: noch zu bestätigen',
      `Anreise ${arriveeBasse} (Nebensaison) / ${arriveeHaute} (Hauptsaison) · Abreise vor ${depart}`,
      'Kaution: Details werden bei der Buchung mitgeteilt',
      'Endreinigung: inbegriffen',
      'Kurtaxe: Betrag wird vor Veröffentlichung ergänzt',
    ],
    faqTitre: 'Häufige Fragen',
    faq: (arriveeBasse, arriveeHaute, depart, animauxAcceptes) => [
      { q: 'Wie lang ist der Mindestaufenthalt?', r: 'Noch mit den Gastgebern zu bestätigen — außerhalb der Hauptsaison in der Regel kürzer.' },
      { q: 'Wann ist Anreise und Abreise?', r: `Anreise um ${arriveeBasse} (Nebensaison) oder ${arriveeHaute} (Hauptsaison), Abreise vor ${depart} (noch zu bestätigen).` },
      { q: 'Wird eine Kaution verlangt?', r: 'Details zur Kaution werden bei der Buchung mitgeteilt.' },
      { q: 'Ist die Endreinigung im Preis inbegriffen?', r: 'Ja, die Endreinigung ist inbegriffen.' },
      { q: 'Ist die Kurtaxe inbegriffen?', r: 'Betrag und Erhebungsart werden vor Veröffentlichung ergänzt (gesetzliche Pflicht, PRD §15.2).' },
      { q: 'Wie buche ich konkret?', r: 'Über die Airbnb-/Booking-Buttons oben, die zur offiziellen Buchungsplattform führen.' },
      { q: 'Kann ich meine Buchung stornieren?', r: 'Es gelten die Stornobedingungen der zur Buchung genutzten Plattform (Airbnb oder Booking).' },
      { q: 'Sind Haustiere erlaubt?', r: animauxAcceptes ? 'Ja.' : 'Nein, Haustiere sind nicht erlaubt.' },
    ],
    conversionTitre: 'Bereit zu buchen?',
  },
};
