import type { SaisonId } from './saisons';
import type { Locale } from '@/i18n/locales';

export interface Suggestion {
  titre: string;
  description: string;
}

/**
 * Bloc « En ce moment à Pleubian » (US-033, PRD §6.2/§6.3). Contenu réel, ancré
 * dans les faits du territoire déjà réunis au PRD §1.2 — pas de données chiffrées
 * inventées (météo/marées réelles restent branchées au Lot 2 avancé, US-032).
 * Traduit par langue (Lot 5).
 */
export const enCeMoment: Record<Locale, Record<SaisonId, Suggestion[]>> = {
  fr: {
    printemps: [
      { titre: 'Suivre les grandes marées au Sillon de Talbert', description: 'La réserve naturelle révèle tout son estran à marée basse — l’un des meilleurs moments pour la parcourir.' },
      { titre: 'Observer les oiseaux migrateurs', description: 'La Presqu’île sauvage est une halte sur la route des migrations printanières.' },
      { titre: 'Marcher le GR34 avant la foule de l’été', description: 'Le sentier des douaniers, encore tranquille, avec la lumière qui revient.' },
      { titre: 'Profiter des tarifs de basse saison', description: 'Avant la haute saison, les disponibilités et les prix sont plus souples.' },
      { titre: 'Voir les ajoncs en fleur sur la lande', description: 'Le jaune vif de l’ajonc marque le paysage breton au printemps.' },
    ],
    ete: [
      { titre: 'Se baigner à la plage de Kermagen', description: 'Plage familiale avec cale de mise à l’eau, à quelques minutes de la maison.' },
      { titre: 'Manger dehors dans le jardin clos', description: 'Huit autour d’une table, à l’abri, à quelques pas de la cuisine.' },
      { titre: 'Pagayer du côté de l’archipel de Bréhat', description: 'Kayak ou voile, en fonction des marées et du vent du jour.' },
      { titre: 'Découvrir le Sillon de Talbert au petit matin', description: 'Avant la chaleur et l’affluence, la flèche de galets se mérite tôt.' },
      { titre: 'Enchaîner les criques', description: 'Port-la-Chaîne, Port-Béni, Pors Rand : des mouillages plus discrets que les grandes plages.' },
    ],
    automne: [
      { titre: 'Regarder la mer se lever pendant les tempêtes d’équinoxe', description: 'Le spectacle des grandes marées d’automne, depuis la côte.' },
      { titre: 'Marcher le GR34 sans croiser personne', description: 'La Presqu’île retrouve son calme — le sentier des douaniers pour soi seul.' },
      { titre: 'Allumer le poêle à bois au retour d’une balade', description: 'L’argument phare de la maison hors saison.' },
      { titre: 'Profiter des tarifs bas de l’arrière-saison', description: 'La période la moins chargée de l’année pour réserver.' },
      { titre: 'Visiter Tréguier au calme', description: 'La cathédrale Saint-Tugdual et la cité de caractère, sans la cohue estivale.' },
    ],
    hiver: [
      { titre: 'Se déconnecter complètement', description: 'Pas de notifications, juste le poêle, la mer et le rythme des marées.' },
      { titre: 'Travailler à distance depuis l’espace dédié', description: 'WiFi et bureau au calme — la maison est pensée pour la workation.' },
      { titre: 'Observer le ciel étoilé', description: 'Loin de la pollution lumineuse des grandes villes.' },
      { titre: 'Passer les fêtes en famille au coin du feu', description: 'La configuration de la maison (4 chambres, jardin clos) se prête aux réunions familiales.' },
      { titre: 'Visiter la distillerie Glann ar Mor un jour de pluie', description: 'Le whisky breton de Pleubian, une sortie abritée à quelques minutes.' },
    ],
  },
  en: {
    printemps: [
      { titre: 'Follow the spring tides at the Talbert sand spit', description: 'The nature reserve reveals its whole shoreline at low tide — one of the best times to walk it.' },
      { titre: 'Watch migrating birds', description: 'The wild peninsula is a stopover on the spring migration route.' },
      { titre: 'Walk the GR34 before the summer crowds', description: 'The customs officers’ path, still quiet, with the light returning.' },
      { titre: 'Enjoy low-season rates', description: 'Before high season, availability and prices are more flexible.' },
      { titre: 'See the gorse in bloom on the moorland', description: 'Gorse’s bright yellow marks the Breton landscape in spring.' },
    ],
    ete: [
      { titre: 'Swim at Kermagen beach', description: 'A family beach with a boat ramp, minutes from the house.' },
      { titre: 'Eat outdoors in the enclosed garden', description: 'Eight around a table, sheltered, steps from the kitchen.' },
      { titre: 'Paddle toward the Bréhat archipelago', description: 'Kayak or sail, depending on the day’s tides and wind.' },
      { titre: 'Discover the Talbert sand spit early in the morning', description: 'Before the heat and the crowds, the pebble spit is worth the early start.' },
      { titre: 'Cove-hop', description: 'Port-la-Chaîne, Port-Béni, Pors Rand: quieter anchorages than the big beaches.' },
    ],
    automne: [
      { titre: 'Watch the sea rise during the equinox storms', description: 'The spectacle of the big autumn tides, from the coast.' },
      { titre: 'Walk the GR34 without meeting a soul', description: 'The peninsula finds its calm again — the customs officers’ path all to yourself.' },
      { titre: 'Light the wood stove after a walk', description: 'The house’s star feature outside summer.' },
      { titre: 'Enjoy the low rates of the late season', description: 'The quietest time of year to book.' },
      { titre: 'Visit Tréguier in peace and quiet', description: 'The Saint-Tugdual cathedral and the historic town, without the summer rush.' },
    ],
    hiver: [
      { titre: 'Disconnect completely', description: 'No notifications, just the stove, the sea and the rhythm of the tides.' },
      { titre: 'Work remotely from the dedicated desk', description: 'WiFi and a quiet desk — the house is built for a workation.' },
      { titre: 'Watch the starry sky', description: 'Far from the light pollution of big cities.' },
      { titre: 'Spend the holidays with family by the fire', description: 'The house’s layout (4 bedrooms, enclosed garden) suits family gatherings.' },
      { titre: 'Visit the Glann ar Mor distillery on a rainy day', description: 'Pleubian’s Breton whisky, a sheltered outing minutes away.' },
    ],
  },
  de: {
    printemps: [
      { titre: 'Die Frühjahrsgezeiten am Sillon de Talbert verfolgen', description: 'Bei Ebbe zeigt das Naturschutzgebiet sein ganzes Watt — einer der besten Momente für eine Wanderung.' },
      { titre: 'Zugvögel beobachten', description: 'Die wilde Halbinsel ist eine Raststation auf der Route des Frühjahrszugs.' },
      { titre: 'Den GR34 vor dem Sommertrubel wandern', description: 'Der Zöllnerpfad, noch ruhig, mit zurückkehrendem Licht.' },
      { titre: 'Die Nebensaison-Preise nutzen', description: 'Vor der Hauptsaison sind Verfügbarkeit und Preise flexibler.' },
      { titre: 'Den blühenden Stechginster auf der Heide bewundern', description: 'Das leuchtende Gelb des Ginsters prägt die bretonische Landschaft im Frühling.' },
    ],
    ete: [
      { titre: 'Am Strand von Kermagen baden', description: 'Ein Familienstrand mit Bootsrampe, nur wenige Minuten vom Haus entfernt.' },
      { titre: 'Draußen im umzäunten Garten essen', description: 'Acht am Tisch, geschützt, nur wenige Schritte von der Küche entfernt.' },
      { titre: 'Zum Archipel von Bréhat paddeln', description: 'Kajak oder Segelboot, je nach Gezeiten und Wind des Tages.' },
      { titre: 'Den Sillon de Talbert früh am Morgen entdecken', description: 'Vor der Hitze und dem Andrang lohnt sich der frühe Aufbruch zur Kieslandzunge.' },
      { titre: 'Von Bucht zu Bucht', description: 'Port-la-Chaîne, Port-Béni, Pors Rand: ruhigere Ankerplätze als die großen Strände.' },
    ],
    automne: [
      { titre: 'Bei den Äquinoktialstürmen das aufgewühlte Meer beobachten', description: 'Das Schauspiel der großen Herbstgezeiten, von der Küste aus.' },
      { titre: 'Den GR34 wandern, ohne jemandem zu begegnen', description: 'Die Halbinsel findet ihre Ruhe wieder — der Zöllnerpfad ganz für sich allein.' },
      { titre: 'Nach einem Spaziergang den Holzofen anzünden', description: 'Das Highlight des Hauses außerhalb des Sommers.' },
      { titre: 'Die günstigen Nachsaison-Preise nutzen', description: 'Die ruhigste Zeit des Jahres zum Buchen.' },
      { titre: 'Tréguier in aller Ruhe besuchen', description: 'Die Kathedrale Saint-Tugdual und das historische Städtchen, ohne den Sommertrubel.' },
    ],
    hiver: [
      { titre: 'Sich vollständig abschalten', description: 'Keine Benachrichtigungen, nur der Ofen, das Meer und der Rhythmus der Gezeiten.' },
      { titre: 'Vom eigenen Arbeitsplatz aus im Homeoffice arbeiten', description: 'WLAN und ein ruhiger Schreibtisch — das Haus ist für die Workation gemacht.' },
      { titre: 'Den Sternenhimmel beobachten', description: 'Fernab der Lichtverschmutzung der großen Städte.' },
      { titre: 'Die Feiertage am Kaminfeuer mit der Familie verbringen', description: 'Der Grundriss des Hauses (4 Schlafzimmer, umzäunter Garten) eignet sich für Familientreffen.' },
      { titre: 'Die Destillerie Glann ar Mor an einem Regentag besuchen', description: 'Der bretonische Whisky aus Pleubian, ein geschützter Ausflug nur wenige Minuten entfernt.' },
    ],
  },
};
