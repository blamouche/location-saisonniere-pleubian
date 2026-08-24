import type { Locale } from '@/i18n/locales';

export interface FaqItem {
  q: string;
  r: string;
}

export interface PratiqueContent {
  titre: string;
  metaDescription: string;
  intro: string;
  arriveeTitre: string;
  arriveeBasse: string;
  arriveeHaute: string;
  depart: string;
  modalite: string;
  reglementTitre: string;
  reglement: string[];
  reglementNote: string;
  reglementLien: string;
  faqTitre: string;
  faq: (arriveeBasse: string, arriveeHaute: string, depart: string, animauxAcceptes: boolean, emplacements: string) => FaqItem[];
}

export const pratiqueContent: Record<Locale, PratiqueContent> = {
  fr: {
    titre: 'Infos pratiques',
    metaDescription: 'Arrivée, règlement intérieur et questions fréquentes pour préparer votre séjour à la Maison Od Joge.',
    intro: "Tout ce qu'il faut savoir avant et pendant le séjour.",
    arriveeTitre: 'Arrivée & départ',
    arriveeBasse: 'Arrivée (basse saison)',
    arriveeHaute: 'Arrivée (haute saison)',
    depart: 'Départ',
    modalite: 'Modalité',
    reglementTitre: 'Règlement intérieur',
    reglement: ['Animaux non acceptés', 'Merci de respecter le voisinage (maison en hameau résidentiel)', "Fumer à l'extérieur uniquement", 'Ménage de fin de séjour inclus'],
    reglementNote: 'Règlement complet (taxe de séjour) à finaliser avec les hôtes avant mise en ligne — voir',
    reglementLien: 'page réservation',
    faqTitre: 'Questions fréquentes',
    faq: (arriveeBasse, arriveeHaute, depart, animauxAcceptes, emplacements) => [
      { q: 'À quelle heure puis-je arriver ?', r: `L'arrivée est prévue à ${arriveeBasse} en basse saison et ${arriveeHaute} en haute saison. Le départ se fait avant ${depart} (horaire à confirmer).` },
      { q: 'Comment se passe l’arrivée ?', r: `L'arrivée est autonome, via une boîte à clés sécurisée — pas besoin d'attendre les hôtes sur place.` },
      { q: 'Les animaux sont-ils acceptés ?', r: animauxAcceptes ? 'Oui, les animaux sont acceptés.' : "Non, les animaux ne sont pas acceptés dans la maison." },
      { q: 'Le stationnement est-il gratuit ?', r: `Oui, le stationnement est gratuit : ${emplacements}.` },
      { q: 'Y a-t-il du WiFi et un espace de travail ?', r: "Oui, la maison dispose du WiFi et d'un espace de travail dédié, pensé pour le télétravail ou la workation. La maison est à la campagne : le signal (WiFi comme mobile) peut varier selon les opérateurs et les conditions." },
      { q: 'Le ménage de fin de séjour est-il inclus ?', r: 'Oui, le ménage de fin de séjour est inclus. Modalités de caution fournies lors de la réservation.' },
      { q: 'Que faire en cas de problème pendant le séjour ?', r: 'Contactez Pauline & Maeva via les coordonnées communiquées à la réservation.' },
      { q: 'La maison est-elle accessible sans escalier ?', r: 'Une chambre et une salle de bain avec douche à l’italienne sont de plain-pied au rez-de-chaussée, sans escalier.' },
    ],
  },
  en: {
    titre: 'Practical info',
    metaDescription: 'Arrival, house rules and frequently asked questions to prepare your stay at Maison Od Joge.',
    intro: 'Everything you need to know before and during your stay.',
    arriveeTitre: 'Arrival & departure',
    arriveeBasse: 'Check-in (low season)',
    arriveeHaute: 'Check-in (high season)',
    depart: 'Check-out',
    modalite: 'How it works',
    reglementTitre: 'House rules',
    reglement: ['No pets', 'Please respect the neighbours (the house is in a residential hamlet)', 'Smoking outside only', 'End-of-stay cleaning included'],
    reglementNote: 'Full house rules (including the tourist tax) to be finalised with the hosts before launch — see the',
    reglementLien: 'booking page',
    faqTitre: 'Frequently asked questions',
    faq: (arriveeBasse, arriveeHaute, depart, animauxAcceptes, emplacements) => [
      { q: 'What time can I arrive?', r: `Check-in is at ${arriveeBasse} in low season and ${arriveeHaute} in high season. Check-out is before ${depart} (time to be confirmed).` },
      { q: 'How does check-in work?', r: 'Check-in is self-service, via a secure key box — no need to wait for the hosts on site.' },
      { q: 'Are pets allowed?', r: animauxAcceptes ? 'Yes, pets are allowed.' : 'No, pets are not allowed in the house.' },
      { q: 'Is parking free?', r: `Yes, parking is free: ${emplacements}.` },
      { q: 'Is there WiFi and a desk?', r: 'Yes, the house has WiFi and a dedicated desk, built for remote work or a workation. The house is in the countryside: signal (WiFi and mobile alike) can vary by carrier and conditions.' },
      { q: 'Is end-of-stay cleaning included?', r: 'Yes, end-of-stay cleaning is included. Deposit details are provided at the time of booking.' },
      { q: 'What should I do if there is a problem during my stay?', r: 'Contact Pauline & Maeva using the details provided at booking.' },
      { q: 'Is the house step-free?', r: 'One bedroom and a bathroom with a walk-in shower are on the ground floor, step-free.' },
    ],
  },
  de: {
    titre: 'Praktische Infos',
    metaDescription: 'Anreise, Hausordnung und häufige Fragen zur Vorbereitung Ihres Aufenthalts in Maison Od Joge.',
    intro: 'Alles, was Sie vor und während des Aufenthalts wissen müssen.',
    arriveeTitre: 'Anreise & Abreise',
    arriveeBasse: 'Anreise (Nebensaison)',
    arriveeHaute: 'Anreise (Hauptsaison)',
    depart: 'Abreise',
    modalite: 'Ablauf',
    reglementTitre: 'Hausordnung',
    reglement: ['Keine Haustiere', 'Bitte Rücksicht auf die Nachbarn nehmen (das Haus liegt in einem Wohnweiler)', 'Rauchen nur draußen', 'Endreinigung inbegriffen'],
    reglementNote: 'Vollständige Hausordnung (inkl. Kurtaxe) wird mit den Gastgebern vor dem Livegang finalisiert — siehe',
    reglementLien: 'Buchungsseite',
    faqTitre: 'Häufige Fragen',
    faq: (arriveeBasse, arriveeHaute, depart, animauxAcceptes, emplacements) => [
      { q: 'Um wie viel Uhr kann ich ankommen?', r: `Die Anreise ist um ${arriveeBasse} in der Nebensaison und ${arriveeHaute} in der Hauptsaison vorgesehen. Die Abreise erfolgt vor ${depart} (Uhrzeit noch zu bestätigen).` },
      { q: 'Wie läuft die Anreise ab?', r: 'Die Anreise erfolgt selbstständig über einen sicheren Schlüsseltresor — die Gastgeber müssen nicht vor Ort abgewartet werden.' },
      { q: 'Sind Haustiere erlaubt?', r: animauxAcceptes ? 'Ja, Haustiere sind erlaubt.' : 'Nein, Haustiere sind im Haus nicht erlaubt.' },
      { q: 'Ist das Parken kostenlos?', r: `Ja, das Parken ist kostenlos: ${emplacements}.` },
      { q: 'Gibt es WLAN und einen Arbeitsplatz?', r: 'Ja, das Haus verfügt über WLAN und einen eigenen Arbeitsplatz, ideal für Homeoffice oder Workation. Das Haus liegt auf dem Land: Das Signal (WLAN wie Mobilfunk) kann je nach Anbieter und Bedingungen schwanken.' },
      { q: 'Ist die Endreinigung inbegriffen?', r: 'Ja, die Endreinigung ist inbegriffen. Details zur Kaution werden bei der Buchung mitgeteilt.' },
      { q: 'Was tun bei einem Problem während des Aufenthalts?', r: 'Kontaktieren Sie Pauline & Maeva über die bei der Buchung mitgeteilten Kontaktdaten.' },
      { q: 'Ist das Haus ohne Treppe zugänglich?', r: 'Ein Schlafzimmer und ein Bad mit ebenerdiger Dusche befinden sich ebenerdig im Erdgeschoss.' },
    ],
  },
};
