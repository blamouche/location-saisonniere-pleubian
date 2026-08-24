import type { Locale } from '@/i18n/locales';

export interface SaisonsIndexContent {
  titre: string;
  metaDescription: string;
  intro: string;
}

export const saisonsIndexContent: Record<Locale, SaisonsIndexContent> = {
  fr: {
    titre: "Les 4 saisons de la Presqu'île sauvage",
    metaDescription: "Découvrez la Maison Od Joge et la Presqu'île sauvage au fil des 4 saisons : printemps, été, automne, hiver — activités, tarifs et galerie.",
    intro: "Le site change de visage au fil de l'année — choisissez une saison pour découvrir la maison et le territoire tels qu'ils s'y vivent.",
  },
  en: {
    titre: 'The four seasons of the wild peninsula',
    metaDescription: "Discover Maison Od Joge and Brittany's wild peninsula through the four seasons: spring, summer, autumn, winter — activities, rates and gallery.",
    intro: 'The site changes look throughout the year — pick a season to discover the house and the area the way they are actually lived.',
  },
  de: {
    titre: 'Die vier Jahreszeiten der wilden Halbinsel',
    metaDescription: 'Entdecken Sie Maison Od Joge und die wilde Halbinsel der Bretagne im Wandel der vier Jahreszeiten: Frühling, Sommer, Herbst, Winter — Aktivitäten, Preise und Galerie.',
    intro: 'Die Website wandelt ihr Gesicht im Laufe des Jahres — wählen Sie eine Jahreszeit, um Haus und Umgebung so zu entdecken, wie sie dort gelebt werden.',
  },
};

export interface SaisonContent {
  metaDescription: (promesse: string, saisonLabel: string) => string;
  titrePage: (saisonLabel: string) => string;
  faq: (saisonLabel: string, tarif: string | null) => { q: string; r: string }[];
  essentielTitre: string;
  essentielTexte: (saisonLabel: string, periode: string, nbActivites: number, dureeMer: string) => string;
  meteoTitre: (saisonLabel: string) => string;
  meteoTexte: string;
  momentTitre: string;
  dixTitre: (saisonLabel: string) => string;
  ouvertTitre: string;
  ouvertTexte: string;
  tarifsTitre: (saisonLabel: string) => string;
  tarifsAVenir: string;
  galerieTitre: (saisonLabel: string) => string;
  voirGalerie: string;
  temoignagesTitre: string;
  temoignagesTexte: string;
  faqTitre: string;
  autresSaisonsTitre: string;
}

export const saisonContent: Record<Locale, SaisonContent> = {
  fr: {
    metaDescription: (promesse, saisonLabel) => `${promesse} — que faire, tarifs indicatifs et galerie de la Maison Od Joge à Pleubian pour la saison ${saisonLabel.toLowerCase()}.`,
    titrePage: (saisonLabel) => `La Presqu'île sauvage en ${saisonLabel.toLowerCase()}`,
    faq: (saisonLabel, tarif) => [
      { q: `Fait-il froid dans la maison en ${saisonLabel.toLowerCase()} ?`, r: 'La maison dispose d’un poêle à bois — l’argument confort principal hors saison estivale.' },
      { q: `Le Sillon de Talbert est-il accessible en ${saisonLabel.toLowerCase()} ?`, r: "Oui, la réserve naturelle est accessible toute l'année. Horaires de marée et conditions à vérifier avant la visite." },
      { q: `Quels sont les tarifs indicatifs en ${saisonLabel.toLowerCase()} ?`, r: tarif ?? 'Fourchette tarifaire non encore publiée pour cette saison — nous consulter via le formulaire de contact.' },
    ],
    essentielTitre: "L'essentiel",
    essentielTexte: (saisonLabel, periode, nbActivites, dureeMer) =>
      `En ${saisonLabel.toLowerCase()} (${periode}), la Presqu'île sauvage de Pleubian propose ${nbActivites} activités principales autour du Sillon de Talbert et du GR34. La Maison Od Joge (8 personnes, poêle à bois, jardin clos) sert de camp de base à ${dureeMer} de la mer.`,
    meteoTitre: (saisonLabel) => `Quel temps fait-il en ${saisonLabel.toLowerCase()} sur la Presqu'île sauvage ?`,
    meteoTexte: "Données moyennes Météo-France (1991–2020) à intégrer avant publication définitive — voir US-032 (rebuild quotidien) et la contrainte de factualité datée du PRD §12.2.C. Aucun chiffre inventé n'est affiché ici en attendant.",
    momentTitre: 'En ce moment',
    dixTitre: (saisonLabel) => `Que faire en ${saisonLabel.toLowerCase()} sur la Presqu'île sauvage ?`,
    ouvertTitre: 'Ouvert ou fermé ?',
    ouvertTexte: "Horaires et périodes d'ouverture des commerces et sites du territoire à vérifier et publier avant mise en ligne définitive (audit semestriel prévu, US-069).",
    tarifsTitre: (saisonLabel) => `Combien coûte un séjour en ${saisonLabel.toLowerCase()} ?`,
    tarifsAVenir: 'Tarifs à venir.',
    galerieTitre: (saisonLabel) => `La maison en ${saisonLabel.toLowerCase()}`,
    voirGalerie: 'Voir toute la galerie →',
    temoignagesTitre: 'Témoignages',
    temoignagesTexte: "Comme sur l'accueil, seuls des avis réels et attribués seront publiés ici (voir US-046). Aucun témoignage fictif en attendant.",
    faqTitre: 'Questions fréquentes',
    autresSaisonsTitre: 'Découvrir les autres saisons',
  },
  en: {
    metaDescription: (promesse, saisonLabel) => `${promesse} — things to do, indicative rates and gallery for Maison Od Joge in Pleubian, ${saisonLabel.toLowerCase()}.`,
    titrePage: (saisonLabel) => `The wild peninsula in ${saisonLabel.toLowerCase()}`,
    faq: (saisonLabel, tarif) => [
      { q: `Is the house cold in ${saisonLabel.toLowerCase()}?`, r: 'The house has a wood stove — the main comfort feature outside summer.' },
      { q: `Is the Talbert sand spit accessible in ${saisonLabel.toLowerCase()}?`, r: 'Yes, the nature reserve is accessible year-round. Check tide times and conditions before visiting.' },
      { q: `What are the indicative rates in ${saisonLabel.toLowerCase()}?`, r: tarif ?? 'Rate range not yet published for this season — please contact us via the contact form.' },
    ],
    essentielTitre: 'The essentials',
    essentielTexte: (saisonLabel, periode, nbActivites, dureeMer) =>
      `In ${saisonLabel.toLowerCase()} (${periode}), Pleubian's wild peninsula offers ${nbActivites} main activities around the Talbert sand spit and the GR34 trail. Maison Od Joge (8 guests, wood stove, enclosed garden) serves as a base camp ${dureeMer} from the sea.`,
    meteoTitre: (saisonLabel) => `What's the weather like on the wild peninsula in ${saisonLabel.toLowerCase()}?`,
    meteoTexte: 'Average Météo-France data (1991–2020) to be integrated before final publication — see US-032 (daily rebuild) and the dated-factuality requirement in PRD §12.2.C. No invented figures are shown here in the meantime.',
    momentTitre: 'Right now',
    dixTitre: (saisonLabel) => `What to do on the wild peninsula in ${saisonLabel.toLowerCase()}?`,
    ouvertTitre: 'Open or closed?',
    ouvertTexte: 'Opening hours for local shops and sites to be verified and published before final launch (biannual audit planned, US-069).',
    tarifsTitre: (saisonLabel) => `How much does a stay cost in ${saisonLabel.toLowerCase()}?`,
    tarifsAVenir: 'Rates coming soon.',
    galerieTitre: (saisonLabel) => `The house in ${saisonLabel.toLowerCase()}`,
    voirGalerie: 'See the full gallery →',
    temoignagesTitre: 'Testimonials',
    temoignagesTexte: 'As on the homepage, only real, attributed reviews will be published here (see US-046). No fictional testimonial in the meantime.',
    faqTitre: 'Frequently asked questions',
    autresSaisonsTitre: 'Discover the other seasons',
  },
  de: {
    metaDescription: (promesse, saisonLabel) => `${promesse} — Aktivitäten, Richtpreise und Galerie für Maison Od Joge in Pleubian, ${saisonLabel.toLowerCase()}.`,
    titrePage: (saisonLabel) => `Die wilde Halbinsel im ${saisonLabel.toLowerCase()}`,
    faq: (saisonLabel, tarif) => [
      { q: `Ist es im Haus im ${saisonLabel.toLowerCase()} kalt?`, r: 'Das Haus verfügt über einen Holzofen — das wichtigste Komfortmerkmal außerhalb des Sommers.' },
      { q: `Ist der Sillon de Talbert im ${saisonLabel.toLowerCase()} zugänglich?`, r: 'Ja, das Naturschutzgebiet ist ganzjährig zugänglich. Gezeitenzeiten und Bedingungen vor dem Besuch prüfen.' },
      { q: `Wie hoch sind die Richtpreise im ${saisonLabel.toLowerCase()}?`, r: tarif ?? 'Preisspanne für diese Jahreszeit noch nicht veröffentlicht — bitte über das Kontaktformular anfragen.' },
    ],
    essentielTitre: 'Das Wichtigste',
    essentielTexte: (saisonLabel, periode, nbActivites, dureeMer) =>
      `Im ${saisonLabel.toLowerCase()} (${periode}) bietet die wilde Halbinsel von Pleubian ${nbActivites} Hauptaktivitäten rund um den Sillon de Talbert und den GR34. Maison Od Joge (8 Gäste, Holzofen, umzäunter Garten) dient als Basislager ${dureeMer} vom Meer entfernt.`,
    meteoTitre: (saisonLabel) => `Wie ist das Wetter im ${saisonLabel.toLowerCase()} auf der wilden Halbinsel?`,
    meteoTexte: 'Durchschnittsdaten von Météo-France (1991–2020), vor der endgültigen Veröffentlichung zu ergänzen — siehe US-032 (tägliches Rebuild) und die Anforderung an datierte Fakten aus PRD §12.2.C. Bis dahin werden hier keine erfundenen Zahlen angezeigt.',
    momentTitre: 'Gerade jetzt',
    dixTitre: (saisonLabel) => `Was tun im ${saisonLabel.toLowerCase()} auf der wilden Halbinsel?`,
    ouvertTitre: 'Geöffnet oder geschlossen?',
    ouvertTexte: 'Öffnungszeiten von Geschäften und Sehenswürdigkeiten vor dem endgültigen Livegang zu prüfen und zu veröffentlichen (halbjährliche Prüfung geplant, US-069).',
    tarifsTitre: (saisonLabel) => `Was kostet ein Aufenthalt im ${saisonLabel.toLowerCase()}?`,
    tarifsAVenir: 'Preise folgen in Kürze.',
    galerieTitre: (saisonLabel) => `Das Haus im ${saisonLabel.toLowerCase()}`,
    voirGalerie: 'Ganze Galerie ansehen →',
    temoignagesTitre: 'Erfahrungsberichte',
    temoignagesTexte: 'Wie auf der Startseite werden hier nur echte, zugeordnete Bewertungen veröffentlicht (siehe US-046). Bis dahin kein fiktiver Erfahrungsbericht.',
    faqTitre: 'Häufige Fragen',
    autresSaisonsTitre: 'Die anderen Jahreszeiten entdecken',
  },
};
