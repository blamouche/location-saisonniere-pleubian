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
  proprieteTitre: string;
  proprieteTexte: string[];
  confidentialiteTitre: string;
  confidentialite: string[];
  rgpdDroitsTitre: string;
  rgpdDroits: string[];
  cookiesTitre: string;
  cookiesTexte: string;
  droitTitre: string;
  droitTexte: string[];
  mediationTitre: string;
  mediationTexte: string;
}

export const legalContent: Record<Locale, LegalContent> = {
  fr: {
    titre: 'Mentions légales & confidentialité',
    metaDescription: 'Mentions légales, politique de confidentialité et informations réglementaires de Maison Od Joge.',
    avertissement:
      "⚠️ Page en cours de finalisation — certaines informations réglementaires (numéro d'enregistrement, éditeur, hébergeur) doivent être complétées avant toute mise en ligne réelle (PRD §15.2, §19 Q5, risque R9).",
    mentionsTitre: 'Mentions légales',
    editeur: 'Éditeur du site',
    editeurValue: () => '[À COMPLÉTER] Nom ou raison sociale, statut (particulier loueur / société), adresse postale, email de contact.',
    directeur: 'Directeur de publication',
    directeurValue: '[À COMPLÉTER] Nom de la personne responsable de la publication (généralement l’éditeur lui-même s’il s’agit d’un particulier).',
    hebergeur: 'Hébergeur du site',
    hebergeurValue: 'GitHub, Inc. — 88 Colin P Kelly Jr Street, San Francisco, CA 94107, États-Unis (hébergement GitHub Pages).',
    numeroEnregistrement: "Numéro d'enregistrement meublé de tourisme",
    numeroEnregistrementFallback: '[À COMPLÉTER] Numéro à obtenir en mairie de Pleubian — obligatoire avant toute mise en location réelle (déclaration meublé de tourisme).',
    contact: 'Contact',
    proprieteTitre: 'Propriété intellectuelle',
    proprieteTexte: [
      'L’ensemble des textes, photographies, illustrations et éléments graphiques de ce site sont la propriété de l’éditeur ou de leurs auteurs respectifs (crédités le cas échéant) et sont protégés par le droit d’auteur.',
      'Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable, est interdite et constituerait une contrefaçon.',
    ],
    confidentialiteTitre: 'Politique de confidentialité',
    confidentialite: [
      "Ce site ne dépose aucun cookie tiers. La mesure d'audience (Plausible) fonctionne sans cookie et sans donnée personnelle identifiante.",
      "Le formulaire de contact transmet les informations saisies (nom, email, message) directement aux hôtes, pour la seule finalité de répondre à votre demande. Ces données ne sont ni vendues ni cédées à des tiers.",
      "L'inscription à la newsletter repose sur votre consentement explicite (double opt-in) ; vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email.",
      '[À COMPLÉTER] Responsable du traitement, durée de conservation précise et registre des traitements complets (RGPD, PRD §15.2).',
    ],
    rgpdDroitsTitre: 'Vos droits (RGPD)',
    rgpdDroits: [
      'Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition sur vos données personnelles.',
      `Pour exercer ces droits, contactez : ${'[À COMPLÉTER : email dédié RGPD, ou email de contact ci-dessus]'}`,
      'Vous disposez également du droit d’introduire une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.',
    ],
    cookiesTitre: 'Cookies',
    cookiesTexte: "Aucun cookie de mesure d'audience ou publicitaire n'est utilisé sur ce site. Aucun bandeau de consentement n'est donc nécessaire.",
    droitTitre: 'Droit applicable et litiges',
    droitTexte: [
      'Le présent site et les présentes mentions légales sont soumis au droit français.',
      'En cas de litige, et à défaut de résolution amiable, les tribunaux français compétents seront seuls saisis.',
    ],
    mediationTitre: 'Médiation de la consommation',
    mediationTexte:
      '[À COMPLÉTER] Conformément à l’article L.616-1 du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d’un litige. Le médiateur compétent doit être désigné ici avant toute mise en ligne réelle (adhésion à un service de médiation à souscrire).',
  },
  en: {
    titre: 'Legal notice & privacy',
    metaDescription: 'Legal notice, privacy policy and regulatory information for Maison Od Joge.',
    avertissement:
      '⚠️ Page still being finalised — some regulatory information (registration number, publisher, host) must be completed before this goes live for real (PRD §15.2, §19 Q5, risk R9).',
    mentionsTitre: 'Legal notice',
    editeur: 'Site publisher',
    editeurValue: () => '[TO BE COMPLETED] Name or company name, status (private landlord / company), postal address, contact email.',
    directeur: 'Publication director',
    directeurValue: '[TO BE COMPLETED] Name of the person responsible for publication (usually the publisher themself if a private individual).',
    hebergeur: 'Web host',
    hebergeurValue: 'GitHub, Inc. — 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA (hosted on GitHub Pages).',
    numeroEnregistrement: 'Furnished tourist accommodation registration number',
    numeroEnregistrementFallback: '[TO BE COMPLETED] Number to be obtained from Pleubian town hall — mandatory before any real letting (French "meublé de tourisme" declaration).',
    contact: 'Contact',
    proprieteTitre: 'Intellectual property',
    proprieteTexte: [
      'All text, photographs, illustrations and graphic elements on this site are the property of the publisher or their respective authors (credited where applicable) and are protected by copyright.',
      'Any reproduction, representation or distribution, in whole or in part, without prior authorisation, is prohibited and would constitute infringement.',
    ],
    confidentialiteTitre: 'Privacy policy',
    confidentialite: [
      'This site does not set any third-party cookies. Audience measurement (Plausible) works without cookies and without identifying personal data.',
      'The contact form sends the information you enter (name, email, message) directly to the hosts, for the sole purpose of replying to your request. This data is neither sold nor shared with third parties.',
      'Newsletter sign-up relies on your explicit consent (double opt-in); you can unsubscribe at any time via the link in every email.',
      '[TO BE COMPLETED] Data controller, precise retention period and complete processing register (GDPR, PRD §15.2).',
    ],
    rgpdDroitsTitre: 'Your rights (GDPR)',
    rgpdDroits: [
      'Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase and object to the processing of your personal data.',
      `To exercise these rights, contact: ${'[TO BE COMPLETED: dedicated GDPR email, or the contact email above]'}`,
      'You also have the right to lodge a complaint with the relevant data protection authority if you believe your rights are not being respected.',
    ],
    cookiesTitre: 'Cookies',
    cookiesTexte: 'No audience-measurement or advertising cookie is used on this site. No consent banner is therefore required.',
    droitTitre: 'Governing law and disputes',
    droitTexte: [
      'This site and this legal notice are governed by French law.',
      'In the event of a dispute, and failing an amicable resolution, the competent French courts shall have sole jurisdiction.',
    ],
    mediationTitre: 'Consumer mediation',
    mediationTexte:
      '[TO BE COMPLETED] Under French consumer law (article L.616-1), consumers are entitled to free recourse to a consumer mediator for the amicable resolution of a dispute. The relevant mediator must be named here before this goes live for real (a mediation service subscription is required).',
  },
  de: {
    titre: 'Impressum & Datenschutz',
    metaDescription: 'Impressum, Datenschutzerklärung und rechtliche Informationen zu Maison Od Joge.',
    avertissement:
      '⚠️ Seite wird noch fertiggestellt — einige rechtliche Angaben (Registrierungsnummer, Anbieter, Hosting) müssen vor dem tatsächlichen Livegang ergänzt werden (PRD §15.2, §19 Q5, Risiko R9).',
    mentionsTitre: 'Impressum',
    editeur: 'Anbieter der Website',
    editeurValue: () => '[ZU ERGÄNZEN] Name bzw. Firmenname, Status (Privatperson / Unternehmen), Postanschrift, Kontakt-E-Mail.',
    directeur: 'Verantwortlich für den Inhalt',
    directeurValue: '[ZU ERGÄNZEN] Name der für die Veröffentlichung verantwortlichen Person (bei Privatpersonen in der Regel der Anbieter selbst).',
    hebergeur: 'Hosting-Anbieter',
    hebergeurValue: 'GitHub, Inc. — 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA (gehostet über GitHub Pages).',
    numeroEnregistrement: 'Registrierungsnummer als Ferienunterkunft (meublé de tourisme)',
    numeroEnregistrementFallback: '[ZU ERGÄNZEN] Nummer beim Rathaus Pleubian zu beantragen — Pflicht vor jeder tatsächlichen Vermietung (französische Meldepflicht „meublé de tourisme").',
    contact: 'Kontakt',
    proprieteTitre: 'Geistiges Eigentum',
    proprieteTexte: [
      'Alle Texte, Fotografien, Illustrationen und grafischen Elemente dieser Website sind Eigentum des Anbieters oder der jeweiligen Urheber (soweit angegeben) und urheberrechtlich geschützt.',
      'Jede Vervielfältigung, Darstellung oder Verbreitung, ganz oder teilweise, ohne vorherige Genehmigung ist untersagt und stellt eine Urheberrechtsverletzung dar.',
    ],
    confidentialiteTitre: 'Datenschutzerklärung',
    confidentialite: [
      'Diese Website setzt keine Cookies von Drittanbietern. Die Reichweitenmessung (Plausible) funktioniert ohne Cookies und ohne identifizierende personenbezogene Daten.',
      'Das Kontaktformular übermittelt die eingegebenen Daten (Name, E-Mail, Nachricht) direkt an die Gastgeber, ausschließlich um Ihre Anfrage zu beantworten. Diese Daten werden nicht verkauft oder an Dritte weitergegeben.',
      'Die Newsletter-Anmeldung erfolgt mit Ihrer ausdrücklichen Einwilligung (Double-Opt-in); Sie können sich jederzeit über den Link in jeder E-Mail abmelden.',
      '[ZU ERGÄNZEN] Verantwortlicher für die Verarbeitung, genaue Aufbewahrungsfrist und vollständiges Verarbeitungsverzeichnis (DSGVO, PRD §15.2).',
    ],
    rgpdDroitsTitre: 'Ihre Rechte (DSGVO)',
    rgpdDroits: [
      'Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie ein Recht auf Auskunft, Berichtigung, Löschung und Widerspruch bezüglich Ihrer personenbezogenen Daten.',
      `Zur Ausübung dieser Rechte kontaktieren Sie: ${'[ZU ERGÄNZEN: dedizierte DSGVO-E-Mail oder die obige Kontakt-E-Mail]'}`,
      'Sie haben zudem das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren, wenn Sie der Ansicht sind, dass Ihre Rechte nicht eingehalten werden.',
    ],
    cookiesTitre: 'Cookies',
    cookiesTexte: 'Auf dieser Website werden keine Reichweitenmessungs- oder Werbecookies verwendet. Ein Einwilligungsbanner ist daher nicht erforderlich.',
    droitTitre: 'Anwendbares Recht und Streitigkeiten',
    droitTexte: [
      'Diese Website und dieses Impressum unterliegen französischem Recht.',
      'Im Streitfall sind, sofern keine gütliche Einigung erzielt wird, ausschließlich die zuständigen französischen Gerichte zuständig.',
    ],
    mediationTitre: 'Verbraucherschlichtung',
    mediationTexte:
      '[ZU ERGÄNZEN] Nach französischem Verbraucherrecht (Artikel L.616-1) haben Verbraucher das Recht, kostenlos einen Verbraucherschlichter zur gütlichen Beilegung eines Streits in Anspruch zu nehmen. Der zuständige Schlichter muss hier vor dem tatsächlichen Livegang benannt werden (Anmeldung bei einem Schlichtungsdienst erforderlich).',
  },
};
