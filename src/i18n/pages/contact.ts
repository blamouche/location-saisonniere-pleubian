import type { Locale } from '@/i18n/locales';

export interface ContactContent {
  metaDescription: (nom: string, prenoms: string) => string;
  titre: string;
  intro: (prenoms: string) => string;
  labelNom: string;
  erreurNom: string;
  labelEmail: string;
  erreurEmail: string;
  labelMessage: string;
  erreurMessage: string;
  envoyer: string;
  ecrireDirectement: string;
  erreurGenerique: string;
  honeypotLabel: string;
}

export const contactContent: Record<Locale, ContactContent> = {
  fr: {
    metaDescription: (nom, prenoms) => `Une question sur ${nom} ou votre séjour ? Écrivez directement à ${prenoms}.`,
    titre: 'Contact',
    intro: (prenoms) => `Une question avant de réserver, ou pendant votre séjour ? Écrivez à ${prenoms} directement.`,
    labelNom: 'Nom',
    erreurNom: "Merci d'indiquer votre nom.",
    labelEmail: 'Email',
    erreurEmail: 'Merci d’indiquer une adresse email valide.',
    labelMessage: 'Message',
    erreurMessage: 'Merci d’ajouter un message.',
    envoyer: 'Envoyer',
    ecrireDirectement: 'Vous pouvez aussi écrire directement à',
    erreurGenerique: 'Merci de corriger les champs en rouge.',
    honeypotLabel: 'Ne pas remplir si vous êtes humain :',
  },
  en: {
    metaDescription: (nom, prenoms) => `A question about ${nom} or your stay? Write directly to ${prenoms}.`,
    titre: 'Contact',
    intro: (prenoms) => `A question before booking, or during your stay? Write directly to ${prenoms}.`,
    labelNom: 'Name',
    erreurNom: 'Please enter your name.',
    labelEmail: 'Email',
    erreurEmail: 'Please enter a valid email address.',
    labelMessage: 'Message',
    erreurMessage: 'Please add a message.',
    envoyer: 'Send',
    ecrireDirectement: 'You can also write directly to',
    erreurGenerique: 'Please correct the fields in red.',
    honeypotLabel: 'Leave blank if you are human:',
  },
  de: {
    metaDescription: (nom, prenoms) => `Eine Frage zu ${nom} oder Ihrem Aufenthalt? Schreiben Sie direkt an ${prenoms}.`,
    titre: 'Kontakt',
    intro: (prenoms) => `Eine Frage vor der Buchung oder während Ihres Aufenthalts? Schreiben Sie direkt an ${prenoms}.`,
    labelNom: 'Name',
    erreurNom: 'Bitte geben Sie Ihren Namen an.',
    labelEmail: 'E-Mail',
    erreurEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
    labelMessage: 'Nachricht',
    erreurMessage: 'Bitte fügen Sie eine Nachricht hinzu.',
    envoyer: 'Senden',
    ecrireDirectement: 'Sie können auch direkt schreiben an',
    erreurGenerique: 'Bitte korrigieren Sie die rot markierten Felder.',
    honeypotLabel: 'Bitte freilassen, wenn Sie ein Mensch sind:',
  },
};
