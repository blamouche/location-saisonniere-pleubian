import type { Locale } from '@/i18n/locales';

export interface LegalContent {
  titre: string;
  metaDescription: string;
  avertissement: string;
  mentionsTitre: string;
  editeur: string;
  editeurValue: (prenoms: string) => string;
  directeur: string;
  directeurValue: string;
  hebergeur: string;
  hebergeurValue: string;
  numeroEnregistrement: string;
  numeroEnregistrementFallback: string;
  contact: string;
  confidentialiteTitre: string;
  confidentialite: string[];
  cookiesTitre: string;
  cookiesTexte: string;
}

export const legalContent: Record<Locale, LegalContent> = {
  fr: {
    titre: 'Mentions légales & confidentialité',
    metaDescription: 'Mentions légales, politique de confidentialité et informations réglementaires de Maison Od Joge.',
    avertissement:
      "⚠️ Page en cours de finalisation — certaines informations réglementaires (numéro d'enregistrement, éditeur, hébergeur) doivent être complétées avant toute mise en ligne réelle (PRD §15.2, §19 Q5, risque R9).",
    mentionsTitre: 'Mentions légales',
    editeur: 'Éditeur du site',
    editeurValue: (prenoms) => `${prenoms} — coordonnées complètes à renseigner (TODO)`,
    directeur: 'Directeur de publication',
    directeurValue: 'À renseigner (TODO)',
    hebergeur: 'Hébergeur du site',
    hebergeurValue: 'À renseigner une fois la plateforme choisie — Vercel ou Netlify (PRD §19 Q1, US-009)',
    numeroEnregistrement: "Numéro d'enregistrement meublé de tourisme",
    numeroEnregistrementFallback: 'En cours d’obtention en mairie de Pleubian (obligatoire avant mise en ligne réelle)',
    contact: 'Contact',
    confidentialiteTitre: 'Politique de confidentialité',
    confidentialite: [
      "Ce site ne dépose aucun cookie tiers. La mesure d'audience (Plausible) fonctionne sans cookie et sans donnée personnelle identifiante.",
      "Le formulaire de contact transmet les informations saisies (nom, email, message) directement aux hôtes, pour la seule finalité de répondre à votre demande.",
      "L'inscription à la newsletter repose sur votre consentement explicite (double opt-in) ; vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email.",
      'Base légale, durée de conservation et registre des traitements complets à finaliser avant mise en ligne réelle (PRD §15.2).',
    ],
    cookiesTitre: 'Cookies',
    cookiesTexte: "Aucun cookie de mesure d'audience ou publicitaire n'est utilisé sur ce site. Aucun bandeau de consentement n'est donc nécessaire.",
  },
  en: {
    titre: 'Legal notice & privacy',
    metaDescription: 'Legal notice, privacy policy and regulatory information for Maison Od Joge.',
    avertissement:
      '⚠️ Page still being finalised — some regulatory information (registration number, publisher, host) must be completed before this goes live for real (PRD §15.2, §19 Q5, risk R9).',
    mentionsTitre: 'Legal notice',
    editeur: 'Site publisher',
    editeurValue: (prenoms) => `${prenoms} — full contact details to be added (TODO)`,
    directeur: 'Publication director',
    directeurValue: 'To be added (TODO)',
    hebergeur: 'Web host',
    hebergeurValue: 'To be added once the platform is chosen — Vercel or Netlify (PRD §19 Q1, US-009)',
    numeroEnregistrement: 'Furnished tourist accommodation registration number',
    numeroEnregistrementFallback: 'Being obtained from Pleubian town hall (mandatory before this goes live for real)',
    contact: 'Contact',
    confidentialiteTitre: 'Privacy policy',
    confidentialite: [
      'This site does not set any third-party cookies. Audience measurement (Plausible) works without cookies and without identifying personal data.',
      'The contact form sends the information you enter (name, email, message) directly to the hosts, for the sole purpose of replying to your request.',
      'Newsletter sign-up relies on your explicit consent (double opt-in); you can unsubscribe at any time via the link in every email.',
      'Legal basis, retention period and the complete processing register are to be finalised before this goes live for real (PRD §15.2).',
    ],
    cookiesTitre: 'Cookies',
    cookiesTexte: 'No audience-measurement or advertising cookie is used on this site. No consent banner is therefore required.',
  },
  de: {
    titre: 'Impressum & Datenschutz',
    metaDescription: 'Impressum, Datenschutzerklärung und rechtliche Informationen zu Maison Od Joge.',
    avertissement:
      '⚠️ Seite wird noch fertiggestellt — einige rechtliche Angaben (Registrierungsnummer, Anbieter, Hosting) müssen vor dem tatsächlichen Livegang ergänzt werden (PRD §15.2, §19 Q5, Risiko R9).',
    mentionsTitre: 'Impressum',
    editeur: 'Anbieter der Website',
    editeurValue: (prenoms) => `${prenoms} — vollständige Kontaktdaten folgen (TODO)`,
    directeur: 'Verantwortlich für den Inhalt',
    directeurValue: 'Wird ergänzt (TODO)',
    hebergeur: 'Hosting-Anbieter',
    hebergeurValue: 'Wird ergänzt, sobald die Plattform feststeht — Vercel oder Netlify (PRD §19 Q1, US-009)',
    numeroEnregistrement: 'Registrierungsnummer als Ferienunterkunft (meublé de tourisme)',
    numeroEnregistrementFallback: 'Wird beim Rathaus Pleubian beantragt (Pflicht vor dem tatsächlichen Livegang)',
    contact: 'Kontakt',
    confidentialiteTitre: 'Datenschutzerklärung',
    confidentialite: [
      'Diese Website setzt keine Cookies von Drittanbietern. Die Reichweitenmessung (Plausible) funktioniert ohne Cookies und ohne identifizierende personenbezogene Daten.',
      'Das Kontaktformular übermittelt die eingegebenen Daten (Name, E-Mail, Nachricht) direkt an die Gastgeber, ausschließlich um Ihre Anfrage zu beantworten.',
      'Die Newsletter-Anmeldung erfolgt mit Ihrer ausdrücklichen Einwilligung (Double-Opt-in); Sie können sich jederzeit über den Link in jeder E-Mail abmelden.',
      'Rechtsgrundlage, Aufbewahrungsfrist und das vollständige Verarbeitungsverzeichnis werden vor dem tatsächlichen Livegang fertiggestellt (PRD §15.2).',
    ],
    cookiesTitre: 'Cookies',
    cookiesTexte: 'Auf dieser Website werden keine Reichweitenmessungs- oder Werbecookies verwendet. Ein Einwilligungsbanner ist daher nicht erforderlich.',
  },
};
