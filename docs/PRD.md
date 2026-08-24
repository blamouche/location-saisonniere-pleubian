# PRD — Site vitrine « Maison Od Joge », location saisonnière à Pleubian (Côtes-d'Armor)

| | |
|---|---|
| **Produit** | Site web marketing mono-bien, multilingue, SEO/GEO-first |
| **Bien concerné** | Maison familiale **Od Joge** — Pleubian (22610), hameau de l'Armor, Presqu'île sauvage |
| **Version** | 1.0 — 23 août 2026 |
| **Auteur** | Ben Lamouche |
| **Statut** | Draft à valider |
| **Stack retenue** | Astro + Tailwind CSS, export **100 % statique** (HTML pur, aucun serveur Node en production), URLs SEO-friendly, hébergement Vercel/Netlify comme simple CDN |
| **Objectif business** | Notoriété directe, captation de trafic organique, redirection qualifiée vers les plateformes de réservation |

---

## 1. Contexte

### 1.1 Le bien

**Od Joge** est une maison bretonne familiale située dans le hameau de l'Armor, sur la commune de Pleubian, à la pointe de la Presqu'île sauvage (presqu'île de Lézardrieux), entre les estuaires du Trieux et du Jaudy.

| Caractéristique | Valeur |
|---|---|
| Capacité | 8 voyageurs |
| Chambres | 4 (2 lits doubles à l'étage + 1 chambre avec lit gigogne, 1 chambre lit double au RDC) |
| Couchages | 5 lits |
| Salles de bain | 2 (dont une douche à l'italienne au RDC) + WC séparé |
| Extérieur | Jardin privatif clos |
| Stationnement | Gratuit (cour + devant la maison) |
| Confort | Poêle à bois, WiFi, espace de travail dédié, machine à espresso + cafetière manuelle |
| Accès | Arrivée autonome par boîte à clés sécurisée |
| Distance mer | ~5 minutes à pied du littoral |
| Animaux | Non acceptés |
| Arrivée | 15h (basse saison) / 17h (haute saison) |
| Hôtes | Pauline & Maeva — statut Superhost |

**Points de différenciation à exploiter dans le discours** : la maison de RDC accessible sans escalier, le poêle à bois (argument hors-saison majeur), l'espace de travail dédié (workation / télétravail), le jardin clos (familles avec jeunes enfants), et surtout la proximité immédiate du **Sillon de Talbert**, réserve naturelle régionale de 3,2 km — un actif touristique rare et hautement « cherchable ».

### 1.2 Le territoire (matière première du contenu)

**À moins de 15 minutes**
- Sillon de Talbert (réserve naturelle régionale, flèche de galets de 3,2 km)
- Plage de Kermagen (familiale, cale de mise à l'eau)
- Port-la-Chaîne, Port-Béni, Pors Rand (criques et mouillages)
- Sémaphore de Creac'h Maout (poste d'observation WWII, panorama)
- Église Saint-Georges (clocher-mur, chaire-calvaire XVe–XVIe)
- Église Notre-Dame de l'Armor (granit rose)
- Distillerie Glann ar Mor (whisky breton)
- Centre culturel Le Sillon (théâtre, spectacles)

**Randonnées au départ de la commune**
- GR34 « sentier des douaniers »
- Boucle du Sillon de Talbert
- Circuit de Port-Béni (8,7 km) · Circuit de Brestan (8,8 km) · Circuit des Phares (8,6 km) · Circuit de Port-la-Chaîne (13,6 km)
- Véloroute **La Vélomaritime** (EuroVelo 4)

**Rayon 30–60 minutes**
- Tréguier (~15 km) — cathédrale Saint-Tugdual, cité de caractère
- Paimpol (~20–25 km par la route via Lézardrieux) — port, Abbaye de Beauport
- Île de Bréhat — embarquement à la Pointe de l'Arcouest
- Côte de Granit Rose : Ploumanac'h, Perros-Guirec, Trégastel
- Lannion, Guingamp (gare TGV)

> ⚠️ **À vérifier avant publication** : toutes les distances/durées doivent être recalculées porte-à-porte depuis l'adresse exacte et affichées en minutes de trajet, pas en kilomètres à vol d'oiseau.

### 1.3 Le problème à résoudre

1. **Dépendance aux plateformes** : la visibilité du bien dépend aujourd'hui à 100 % des algorithmes Airbnb/Booking. Aucun actif digital n'appartient au propriétaire.
2. **Saisonnalité déséquilibrée** : le taux d'occupation se concentre sur juillet–août. Le reste de l'année n'est ni raconté ni vendu.
3. **Invisibilité dans les moteurs génératifs** : les assistants IA (ChatGPT, Claude, Perplexity, Gemini, AI Overviews) répondent de plus en plus aux requêtes « où loger sur la Presqu'île sauvage » sans jamais citer le bien.
4. **Concurrence indifférenciée** : Pleubian compte plusieurs dizaines d'offres sur les portails généralistes (PAP, Gîtes de France, Holidu, Amivac…). Aucune ne raconte le territoire.

---

## 2. Vision produit

> **Le site n'est pas une fiche d'annonce. C'est le meilleur guide du web sur la Presqu'île sauvage — et il se trouve que ce guide propose une maison.**

Trois convictions structurantes :

1. **Le contenu territorial est le moteur d'acquisition, la maison est la conversion.** 80 % des pages parlent de la Bretagne, 20 % parlent du bien.
2. **La saison en cours dicte ce que voit le visiteur.** Une même URL raconte une histoire différente en février et en juillet.
3. **On optimise pour deux publics de machines** : les moteurs de recherche classiques (SEO) *et* les moteurs génératifs (GEO), qui exigent des formats, une structure et une factualité différents.

---

## 3. Objectifs & indicateurs de succès

### 3.1 Objectifs business (12 mois post-lancement)

| # | Objectif | KPI | Cible M+12 |
|---|---|---|---|
| O1 | Créer un actif d'acquisition indépendant | Sessions organiques / mois | ≥ 2 500 |
| O2 | Générer du trafic qualifié vers la réservation | Clics sortants vers Airbnb/Booking | ≥ 300 / mois |
| O3 | Étendre la saison | % de clics sortants hors juillet-août | ≥ 55 % |
| O4 | Exister dans les réponses IA | Citations dans ChatGPT / Perplexity / AI Overviews sur 15 requêtes cibles | ≥ 8 requêtes sur 15 |
| O5 | Construire une audience propre | Inscrits newsletter | ≥ 400 |

### 3.2 Objectifs produit

| # | Objectif | KPI | Cible |
|---|---|---|---|
| P1 | Performance | Lighthouse mobile Performance / SEO / Accessibilité | ≥ 95 / 100 / 95 |
| P2 | Core Web Vitals | LCP / INP / CLS (terrain, p75 mobile) | < 2,0 s / < 150 ms / < 0,05 |
| P3 | Engagement | Durée moyenne de session | ≥ 2 min 15 |
| P4 | Profondeur | Pages / session | ≥ 2,5 |
| P5 | Conversion micro | Taux de clic vers le CTA réservation | ≥ 8 % des sessions |
| P6 | Multilingue | % de sessions EN + DE | ≥ 20 % |

### 3.3 Anti-objectifs (ce que le site ne cherche pas à faire)

- Gérer un calendrier de disponibilités en temps réel synchronisé (V1)
- Encaisser des paiements
- Devenir une plateforme multi-biens
- Publier un blog à haute fréquence sans stratégie (le contenu est planifié, pas industrialisé)

---

## 4. Périmètre

### 4.1 Dans le périmètre V1

- Site statique multilingue FR / EN / DE
- Parcours desktop, tablette et mobile
- Système de thématisation saisonnière (4 saisons)
- Galerie photo/vidéo haute qualité, optimisée
- Pages « expérience » thématiques (sport, bien-être, déconnexion, air pur, culture)
- Guide du territoire (lieux, randonnées, adresses, agenda type)
- Pages de conversion vers Airbnb / Booking (liens trackés)
- Formulaire de contact + capture email
- Balisage structuré complet (Schema.org)
- Fichiers d'exposition pour agents IA (`llms.txt`, flux, données ouvertes)
- Analytics respectueux de la vie privée

### 4.2 Hors périmètre V1 (backlog V2+)

- Moteur de réservation directe et paiement
- Espace voyageur / livret d'accueil numérique connecté
- Avis clients collectés en propre (agrégation manuelle en V1)
- Chatbot / assistant conversationnel embarqué
- Programme d'affiliation avec les prestataires locaux

---

## 5. Personas & jobs-to-be-done

| # | Persona | Contexte | Job-to-be-done | Saison | Contenu qui les capte |
|---|---|---|---|---|---|
| **P1** | **Famille tribu** (2 couples + enfants, 35–50 ans, Île-de-France / Grand Ouest) | Cherche une maison pour 8 en juillet-août, budget partagé | « Trouver une maison assez grande, près de la mer, avec un jardin où les enfants jouent en sécurité » | Été | Plages familiales, jardin clos, configuration des chambres, activités enfants |
| **P2** | **Randonneur / trailer GR34** (30–60 ans, seul ou en groupe) | Étape ou camp de base pour marcher | « Dormir sur le GR34 avec un vrai lit, sécher mes affaires, repartir tôt » | Printemps / Automne | Fiches d'itinéraires GPX, dénivelés, météo, boucles au départ de la maison |
| **P3** | **Couple quête de déconnexion** (28–45 ans, urbains, CSP+) | Week-end long hors saison, fatigue mentale | « Trouver un endroit où il ne se passe rien, où le téléphone n'a plus d'intérêt » | Automne / Hiver | Poêle à bois, silence, ciel étoilé, absence de foule, rituels de slow living |
| **P4** | **Cyclotouriste Vélomaritime** (30–65 ans, souvent NL / DE / UK) | Étape sur l'EuroVelo 4 | « Une étape confortable avec un local à vélo et de quoi laver mes affaires » | Mai–septembre | Fiche étape EuroVelo 4, distances, services, version EN/DE |
| **P5** | **Télétravailleur / workation** (28–45 ans) | 1 à 3 semaines de travail à distance | « Bosser au calme avec une bonne connexion et la mer à 5 minutes » | Hors saison | Espace de travail, débit, tarifs longue durée, routine journalière type |
| **P6** | **Amateur de culture & patrimoine** (50–75 ans) | Séjour découverte hors vacances scolaires | « Comprendre la Bretagne, pas juste la photographier » | Printemps / Automne | Tréguier, Beauport, whisky breton, chapelles, langue bretonne, pardons |
| **P7** | **Voyageur bien-être** (30–55 ans, majoritairement féminin) | Ressourcement, air marin, marche, yoga | « Revenir avec les poumons et la tête nettoyés » | Toute l'année | Air pur, iode, thalasso, marche méditative, sommeil, bains de mer |

### 5.1 Priorisation

- **Cœur de cible commercial** : P1 (remplit la haute saison, panier le plus élevé)
- **Cœur de cible SEO/GEO** : P2, P3, P7 (volumes de recherche informationnels élevés, faible concurrence, saisonnalité complémentaire)
- **Cœur de cible international** : P4, P6

---

## 6. Expérience multi-saisons — le concept central

### 6.1 Principe

Le site possède **quatre identités visuelles et éditoriales** qui se substituent l'une à l'autre. La saison affichée est déterminée par :

1. La date courante (règle par défaut, côté build + hydratation légère)
2. Un sélecteur explicite persistant en header (« Voir la maison en… ») qui laisse le visiteur explorer les autres saisons
3. Un paramètre d'URL (`?saison=hiver`) permettant de créer des liens saisonniers pour les campagnes

> **Décision produit** : la saison change le *ton*, les *visuels*, les *contenus mis en avant* et les *accroches* — **jamais l'URL canonique ni la structure**. Une seule URL par contenu, pas de duplication saisonnière. Le SEO ne doit pas être fragmenté par la saison.

### 6.2 Les quatre saisons

| Saison | Période | Promesse | Palette | Photographie | Argument phare | Persona prioritaire |
|---|---|---|---|---|---|---|
| **Printemps** | 1 mars – 31 mai | *« La lumière revient »* | Vert tendre, blanc cassé, granit clair, jaune ajonc | Ajoncs en fleur, marées basses, ciel changeant | Grandes marées, oiseaux migrateurs, tarifs doux | P2, P6 |
| **Été** | 1 juin – 31 août | *« Huit autour d'une table, la mer à cinq minutes »* | Bleu profond, sable, blanc, corail | Jardin, plage de Kermagen, tablée dehors, enfants | Capacité 8, jardin clos, plages | P1, P4 |
| **Automne** | 1 sept – 30 nov | *« Le vent, le feu, le silence »* | Ocre, brun chaud, gris ardoise, orange braise | Tempêtes, sentiers, feu de bois, pull marin | Poêle à bois, GR34 sans foule, tarifs bas | P2, P3, P7 |
| **Hiver** | 1 déc – fin février | *« Se mettre au chaud, très loin de tout »* | Bleu nuit, gris granit, cuivre, blanc lumineux | Nuit tombante, poêle allumé, ciel étoilé, mer d'étain | Déconnexion totale, workation, Noël en famille | P3, P5 |

### 6.3 Ce que la saison modifie

| Élément | Varie selon la saison ? | Détail |
|---|---|---|
| Hero (photo + accroche) | ✅ | Média et H1 secondaire spécifiques |
| Palette de couleurs (design tokens) | ✅ | Variables CSS commutées par attribut `data-season` |
| Blocs « À faire en ce moment » | ✅ | 3 à 6 suggestions datées |
| Bloc météo / marées / lever-coucher du soleil | ✅ | Données réelles, mises à jour au build quotidien |
| Ordre des pages « expérience » | ✅ | Reclassement par pertinence saisonnière |
| Photos de la galerie | ✅ | Tri saisonnier, mais toutes restent accessibles |
| Bandeau tarifs / offre | ✅ | Message « dernière minute », « longs séjours », etc. |
| Structure de navigation | ❌ | Identique toute l'année |
| URLs, canonical, sitemap | ❌ | Stables |
| Contenu textuel des pages guide | ❌ | Enrichi mais pas remplacé |

### 6.4 Implémentation technique

- Un **jeu de design tokens** par saison (couleurs, ombres, courbes, grain de texture), exposé en variables CSS sur `<html data-season="automne">`.
- **Build quotidien programmé** (cron Vercel/Netlify) : le HTML statique est régénéré chaque nuit avec la saison correcte, la météo, les marées et les événements. Aucun flash de contenu au chargement.
- Un **script léger (<2 ko)** corrige la saison côté client uniquement si le visiteur a choisi manuellement une autre saison (stockée en cookie/localStorage) ou si le build a plus de 24 h.
- Les visuels saisonniers sont préchargés via `<link rel="preload">` sur le hero de la saison active uniquement.

### 6.5 Contrainte photo

Le succès du concept repose entièrement sur la **banque d'images**. Prérequis non négociable :

- **4 shootings** (un par saison), ~40 photos exploitables chacun
- 3 formats par photo : paysage 16:9, portrait 4:5, carré 1:1
- Une **vidéo courte (20–40 s)** par saison, muette, en boucle, < 2 Mo en AV1/WebM
- Charte photo commune : lumière naturelle, pas de HDR agressif, personnes présentes mais non identifiables, granit et bois valorisés
- Photos du bien **et** photos du territoire (les secondes servent les pages guide)

> **Risque bloquant** : sans les 4 saisons photographiées, le concept multi-saisons est une coquille vide. Voir §16 (roadmap) pour la stratégie de démarrage.

---

## 7. Arborescence

```
/                                       Accueil (saisonnier)
│
├── /la-maison/                         Le bien : visite, plans, équipements
│   ├── /la-maison/galerie/             Galerie complète filtrable (pièce / saison)
│   └── /la-maison/pratique/            Arrivée, règlement, accès, FAQ séjour
│
├── /reserver/                          Page de conversion (tarifs, calendrier, liens plateformes)
│
├── /experiences/                       Hub des 5 piliers éditoriaux
│   ├── /experiences/randonnee-gr34/          SPORT
│   ├── /experiences/velo-velomaritime/       SPORT
│   ├── /experiences/nautisme-kayak-voile/    SPORT
│   ├── /experiences/bien-etre-air-marin/     BIEN-ÊTRE
│   ├── /experiences/deconnexion-slow/        DÉCONNEXION
│   ├── /experiences/teletravail-workation/   DÉCONNEXION
│   └── /experiences/culture-patrimoine/      CULTURE
│
├── /decouvrir/                         Guide du territoire (hub)
│   ├── /decouvrir/sillon-de-talbert/
│   ├── /decouvrir/presquile-sauvage/
│   ├── /decouvrir/plages-pleubian/
│   ├── /decouvrir/ile-de-brehat/
│   ├── /decouvrir/treguier/
│   ├── /decouvrir/paimpol-beauport/
│   ├── /decouvrir/cote-de-granit-rose/
│   └── /decouvrir/ou-manger-boire/     Adresses testées (crêperies, marchés, distillerie)
│
├── /saisons/                           Hub saisonnier (4 pages piliers)
│   ├── /saisons/printemps/
│   ├── /saisons/ete/
│   ├── /saisons/automne/
│   └── /saisons/hiver/
│
├── /journal/                           Contenus éditoriaux datés
│   └── /journal/[slug]/
│
├── /avis/                              Avis voyageurs agrégés
├── /contact/
└── /legal/                             Mentions légales, confidentialité, cookies
```

**Localisation des URLs** : chaque page existe en 3 langues avec des slugs traduits (`/en/discover/talbert-spit/`, `/de/entdecken/sillon-de-talbert/`), reliées par `hreflang`.

**Profondeur maximale** : 3 clics depuis l'accueil vers n'importe quelle page.

---

## 8. Spécifications par page

### 8.1 Accueil `/`

| Section | Contenu | Notes |
|---|---|---|
| 1. Hero plein écran | Vidéo/photo saisonnière + H1 + accroche + CTA principal + CTA secondaire | LCP cible < 1,8 s. Image statique en LCP, vidéo chargée après. |
| 2. Barre de contexte | Saison en cours · météo du jour · horaire des marées · lever/coucher du soleil | Preuve de fraîcheur, très forte valeur GEO |
| 3. Le pitch en 3 lignes | Qui, quoi, où — répond à « c'est quoi ce lieu » en 8 secondes | Bloc extractible pour les IA |
| 4. Chiffres clés | 8 voyageurs · 4 chambres · 2 SDB · jardin clos · 5 min de la mer · Superhost | Format liste, données structurées |
| 5. Aperçu de la maison | 6 photos + lien galerie | Grid asymétrique |
| 6. « En ce moment à Pleubian » | 3 à 6 cartes générées selon la saison | Le cœur du multi-saisons |
| 7. Les 5 raisons de venir | Sport · Bien-être · Déconnexion · Air pur · Culture | Passerelle vers `/experiences/` |
| 8. Carte du territoire | Carte interactive légère avec 12 points d'intérêt et temps de trajet | Pas de Google Maps embed (perf + RGPD) — MapLibre + tuiles auto-hébergées ou image cliquable |
| 9. Avis | 3 avis sélectionnés + note globale | Schema `AggregateRating` |
| 10. Bandeau conversion | Tarifs indicatifs par saison + CTA plateformes | Sticky sur mobile |
| 11. Newsletter | « Les 4 saisons de la Presqu'île » — 1 email par saison | Promesse claire, faible fréquence |

### 8.2 `/la-maison/`

Visite guidée pièce par pièce, plan schématique des deux niveaux, tableau complet des équipements (catégorisé : cuisine, chambres, extérieur, confort, sécurité, accessibilité), configuration des couchages avec plusieurs scénarios (2 familles / 4 couples / 1 famille + grands-parents), et une section « ce que la maison n'est pas » (pas d'animaux, pas de piscine, pas de vue mer panoramique) — l'honnêteté réduit les mauvaises réservations et augmente la confiance perçue par les moteurs génératifs.

### 8.3 `/reserver/`

Page de conversion pure, sans distraction :
- Grille tarifaire indicative par saison (fourchettes, pas de prix ferme)
- Calendrier de disponibilité en lecture seule (import iCal Airbnb/Booking au build quotidien)
- 3 boutons plateformes clairement identifiés, avec liens UTM trackés
- Bloc « Réserver en direct ? » → formulaire de demande (préparation V2)
- Conditions : durée minimale, arrivée/départ, caution, ménage, taxe de séjour
- FAQ réservation (8–10 questions)

### 8.4 Pages `/experiences/[pilier]/`

Gabarit commun :
1. Hero thématique
2. Promesse en 2 phrases
3. « Depuis la maison » — ce que la localisation permet concrètement (départ à pied, distances réelles)
4. 4 à 8 propositions concrètes, chacune avec durée, difficulté, saison idéale, coût
5. Encadré pratique (matériel, réservations nécessaires, prestataires locaux nommés)
6. Bloc FAQ (5 questions, balisé `FAQPage`)
7. Liens vers 3 pages `/decouvrir/` connexes
8. CTA de réservation contextualisé

### 8.5 Pages `/decouvrir/[lieu]/`

Gabarit « fiche de lieu » optimisé pour l'extraction :
- Résumé factuel encadré en tête (**Où · Combien de temps depuis la maison · Durée de visite · Gratuit ou payant · Meilleure saison · Accessible poussette/PMR**)
- Corps rédigé, illustré, avec une vraie voix (pas du contenu de portail)
- Conseils que seul un habitant connaît (heure de marée, parking, moment de la journée)
- Balisage `TouristAttraction` / `Place` + coordonnées GPS
- Encart « À combiner avec » (3 liens internes)

### 8.6 Pages `/saisons/[saison]/`

Pages piliers de 1 500–2 500 mots ciblant « Bretagne en hiver », « Côtes-d'Armor au printemps », etc. Elles agrègent : la promesse de la saison, la météo moyenne réelle (tableau de données), 10 choses à faire, ce qui est ouvert/fermé, les tarifs, la galerie de la saison, et 3 témoignages. Ce sont les **meilleures pages du site pour capter la longue traîne saisonnière et pour être citées par les IA**.

---

## 9. Direction artistique & design system

### 9.1 Principes

1. **La photo commande, le texte accompagne.** Typographie discrète, marges généreuses, aucune surcharge d'interface.
2. **Le granit, le bois, l'ardoise, le lin.** Le vocabulaire visuel vient des matériaux bretons, pas des tendances SaaS.
3. **Pas de carrousel automatique, pas de pop-up d'entrée, pas de compte à rebours.** Les artifices de pression commerciale détruisent la promesse de calme.
4. **Le mouvement est lent.** Transitions 400–600 ms, parallaxe très légère, animations respectant `prefers-reduced-motion`.

### 9.2 Design tokens

```
--color-surface / --color-surface-alt / --color-ink / --color-ink-muted
--color-accent / --color-accent-soft / --color-border
--color-season-1 / --color-season-2 / --color-season-3   (commutés par data-season)
--font-display : serif humaniste (ex. Fraunces, Newsreader)
--font-body    : sans-serif neutre à bonne lisibilité (ex. Inter, Public Sans)
--radius-sm/md/lg  --shadow-soft/lifted  --grain-overlay
```

- **2 familles de police maximum**, auto-hébergées en WOFF2, sous-ensembles latin + latin-ext, `font-display: swap`, préchargement de la seule graisse critique.
- **Échelle typographique fluide** en `clamp()`, de 16 px (mobile) à 20 px (large desktop) sur le corps de texte.
- **Grille** : 4 colonnes mobile / 8 tablette / 12 desktop, gouttière 24 px, largeur max de lecture 68ch.

### 9.3 Responsive

| Breakpoint | Largeur | Comportement clé |
|---|---|---|
| `sm` | < 640 px | Navigation en drawer, CTA sticky en bas, galerie en scroll horizontal, hero 90vh |
| `md` | 640–1023 px | 2 colonnes, navigation condensée |
| `lg` | 1024–1439 px | Navigation complète, grilles asymétriques |
| `xl` | ≥ 1440 px | Hero plein écran, galeries en mosaïque, contenu centré max 1 320 px |

**Mobile-first strict** : plus de 70 % du trafic attendu est mobile. Chaque section est conçue d'abord en 375 px de large. Cible : aucune scrollbar horizontale, zones tactiles ≥ 44 px, contraste ≥ 4,5:1.

### 9.4 Accessibilité (WCAG 2.2 AA)

- Navigation clavier complète avec focus visible personnalisé
- `alt` descriptifs et utiles sur 100 % des images de contenu (et vides sur les décoratives)
- Vidéos muettes en autoplay uniquement, avec contrôle pause accessible
- Aucune information portée par la seule couleur
- Structure de titres h1→h6 sans saut
- Test lecteur d'écran (VoiceOver + NVDA) avant chaque mise en production majeure

---

## 10. Stratégie de contenu éditorial

### 10.1 Les cinq piliers demandés

| Pilier | Angle | Intention de recherche visée | Pages associées |
|---|---|---|---|
| **Sport** | GR34, trail, vélo (EuroVelo 4), kayak, voile, paddle, char à voile | Informationnelle forte, très saisonnière (printemps/automne) | 3 pages experiences + 6 fiches d'itinéraires |
| **Bien-être** | Air marin iodé, marche méditative, bains de mer, sommeil, thalasso à proximité, produits marins | Informationnelle + aspirationnelle | 1 page pilier + 4 articles journal |
| **Déconnexion** | Absence de foule, silence mesuré, ciel étoilé, slow living, digital detox, rythme des marées | Aspirationnelle, forte affinité automne/hiver | 2 pages piliers + 5 articles |
| **Air pur** | Qualité de l'air mesurée en Bretagne littorale, aérosols marins, allergies, asthme, respiration | Informationnelle, faible concurrence, très fort potentiel GEO | 1 page pilier + données chiffrées |
| **Culture** | Tréguier, Beauport, chapelles, pardons, langue bretonne, whisky breton, gwerz et musique, histoire du goémon | Informationnelle, public 50+ | 1 page pilier + 6 fiches lieux |

### 10.2 Ligne éditoriale

- **Voix** : celle d'un hôte qui vit là, pas d'un office de tourisme. Première personne assumée sur les contenus du journal.
- **Longueur** : 900–1 500 mots pour un article, 1 500–2 500 pour une page pilier. Jamais de remplissage.
- **Vérifiabilité** : chaque affirmation factuelle (horaire, distance, tarif, mesure) est datée et sourcée. C'est un critère GEO décisif.
- **Originalité** : chaque page contient au moins une information *que personne d'autre n'a en ligne* (l'heure où la lumière est la meilleure sur le Sillon, le parking qui ne sature jamais, la crêperie ouverte le mardi hors saison). C'est le seul rempart durable contre le contenu généré en masse.

### 10.3 Calendrier de publication (rythme soutenable)

| Fréquence | Volume | Exemple |
|---|---|---|
| Mensuel | 1 article de journal | « Novembre sur le Sillon : ce que la tempête laisse sur la grève » |
| Trimestriel | 1 mise à jour de la page saison + 1 shooting | Rafraîchissement complet de la saison entrante |
| Semestriel | Audit et mise à jour de toutes les fiches lieux | Vérification horaires/tarifs |
| Annuel | Refonte de la page tarifs, mise à jour des avis | — |

### 10.4 Backlog éditorial initial (20 contenus prioritaires)

**Sport** — Le GR34 au départ de Pleubian : 5 boucles chronométrées · Faire l'EuroVelo 4 en famille : l'étape Paimpol–Tréguier · Kayak dans l'archipel de Bréhat : quand, où, avec qui · Le trail sur la Presqu'île sauvage : 3 parcours et leurs profils

**Bien-être** — Pourquoi l'air marin fatigue (et pourquoi c'est une bonne nouvelle) · Une semaine de marche lente sur la Presqu'île : programme jour par jour · Les bains de mer hors saison : le guide honnête · Où se faire masser dans un rayon de 30 minutes

**Déconnexion** — 72 h sans écran à Pleubian : ce qu'on fait à la place · Le ciel de la Presqu'île sauvage : observer les étoiles en Côtes-d'Armor · Comprendre les marées, et pourquoi ça change tout · Travailler à distance depuis une maison bretonne : le vrai retour d'expérience

**Air pur** — La qualité de l'air en Bretagne littorale, en chiffres · Asthme et allergies : pourquoi le littoral breton soulage · Les grandes marées : le calendrier de l'année

**Culture** — Tréguier en une journée : l'itinéraire à pied · L'abbaye de Beauport, mode d'emploi · Le whisky breton de Pleubian : visiter Glann ar Mor · Les pardons bretons : calendrier et sens · Le goémon, l'histoire oubliée de la Presqu'île sauvage

---

## 11. Stratégie SEO

### 11.1 Architecture SEO

Modèle **hub & spoke** à trois niveaux :

```
Niveau 1 (piliers)   : /saisons/[x]/  ·  /experiences/  ·  /decouvrir/
Niveau 2 (clusters)  : pages thématiques et fiches de lieux
Niveau 3 (support)   : articles du journal
```

Règles de maillage interne :
- Chaque page de niveau 3 pointe vers son pilier de niveau 1 (ancre exacte)
- Chaque pilier pointe vers au minimum 6 pages de son cluster
- Chaque page contient 3 à 6 liens internes contextuels dans le corps du texte
- Aucune page orpheline. Contrôle automatisé au build (échec du build si détection)

### 11.2 Carte de mots-clés (extrait)

| Requête cible | Type | Page | Priorité |
|---|---|---|---|
| location vacances Pleubian | Transactionnelle | `/` | P0 |
| maison 8 personnes Côtes d'Armor bord de mer | Transactionnelle | `/la-maison/` | P0 |
| gîte Presqu'île sauvage Bretagne | Transactionnelle | `/` | P0 |
| location Sillon de Talbert | Transactionnelle | `/decouvrir/sillon-de-talbert/` | P0 |
| Sillon de Talbert visite | Informationnelle | `/decouvrir/sillon-de-talbert/` | P1 |
| que faire Presqu'île sauvage | Informationnelle | `/decouvrir/presquile-sauvage/` | P1 |
| GR34 Pleubian étape | Informationnelle | `/experiences/randonnee-gr34/` | P1 |
| Bretagne hors saison où aller | Informationnelle | `/saisons/automne/` | P1 |
| Bretagne en hiver que faire | Informationnelle | `/saisons/hiver/` | P1 |
| week-end déconnexion Bretagne | Informationnelle | `/experiences/deconnexion-slow/` | P1 |
| plages Pleubian | Informationnelle | `/decouvrir/plages-pleubian/` | P2 |
| EuroVelo 4 Bretagne étapes | Informationnelle | `/experiences/velo-velomaritime/` | P2 |
| télétravail bord de mer Bretagne | Informationnelle | `/experiences/teletravail-workation/` | P2 |
| Bréhat depuis Pleubian | Informationnelle | `/decouvrir/ile-de-brehat/` | P2 |
| air pur Bretagne bienfaits | Informationnelle | `/experiences/bien-etre-air-marin/` | P2 |

Traductions EN et DE : recherche de mots-clés **native**, pas de traduction littérale (`holiday home Brittany coast`, `Ferienhaus Bretagne Meer`, `GR34 hiking accommodation`, `Bretagne Wanderurlaub Unterkunft`).

### 11.3 SEO technique

| Élément | Spécification |
|---|---|
| Rendu | 100 % statique (SSG), export `dist/` en HTML complet servable sans serveur Node (voir §14.1), aucune dépendance JS pour le contenu |
| URLs | SEO-friendly : lisibles, minuscules, mots séparés par des tirets, sans paramètre ni extension (`/decouvrir/sillon-de-talbert/`, jamais `/page.php?id=12`), avec slash final, slugs traduits par langue |
| Canonical | Auto-référentiel systématique sur chaque page/langue |
| hreflang | Cluster complet FR/EN/DE + `x-default` pointant sur FR |
| Sitemap | `sitemap-index.xml` segmenté par langue, `lastmod` réel, régénéré au build |
| robots.txt | Autorise tout sauf `/legal/preview`, référence les sitemaps et `llms.txt` |
| Pagination | Aucune (le journal reste sous 40 articles avant refonte) |
| Images | AVIF + WebP + fallback, `srcset` 5 largeurs, `loading="lazy"` sauf LCP, `width`/`height` toujours renseignés |
| Redirections | 301 uniquement, aucune chaîne de plus d'un saut |
| 404 | Page 404 utile, avec recherche et liens vers les 6 pages principales |
| Balises | 1 seul `<h1>` par page, meta title ≤ 60 caractères, meta description 140–158 caractères, uniques et rédigées à la main |
| Open Graph | Image OG dédiée par page, générée au build (1200×630) |

### 11.4 Données structurées (JSON-LD)

| Type | Où | Contenu clé |
|---|---|---|
| `LodgingBusiness` (+ `VacationRental`) | Accueil, `/la-maison/` | Nom, adresse, géo, capacité, aménités (`amenityFeature`), photos, `checkinTime`, `petsAllowed: false` |
| `Accommodation` / `House` | `/la-maison/` | `numberOfRooms`, `occupancy`, `floorSize`, `bed` |
| `AggregateRating` + `Review` | Accueil, `/avis/` | Uniquement des avis réels, sourcés et attribués |
| `FAQPage` | Toutes les pages avec FAQ | 5–10 Q/R par page |
| `TouristAttraction` / `Place` | Pages `/decouvrir/` | Géo, horaires, tarif |
| `TouristTrip` | Pages `/experiences/` | Itinéraires, durée, points d'intérêt |
| `Article` / `BlogPosting` | Journal | `datePublished`, `dateModified`, `author` |
| `BreadcrumbList` | Toutes | Fil d'Ariane complet |
| `Organization` / `Person` | Global | Hôtes, e-mail, réseaux |
| `ImageObject` | Photos clés | Légende, lieu, date |

Validation obligatoire via le test des résultats enrichis Google + Schema.org validator, intégrée à la CI.

### 11.5 SEO local (le « geo » au sens géographique)

- **Fiche Google Business Profile** créée et optimisée (catégorie « Location de vacances »), photos saisonnières, posts mensuels, Q/R pré-remplies, lien vers le site
- **Cohérence NAP** (Nom, Adresse, Téléphone) identique sur le site, GBP, Bing Places, Apple Business Connect, et tous les annuaires
- **Citations locales** : Office de tourisme de la Presqu'île de Lézardrieux, Côtes d'Armor Destination, Tourisme Bretagne, Gîtes de France, PagesJaunes
- **Netlinking local** : partenariats de contenu avec la distillerie Glann ar Mor, les loueurs de kayak, les crêperies, les guides du Sillon de Talbert, les clubs de rando — échange d'articles, pas d'achat de liens
- **Balisage géographique** : coordonnées GPS exactes, `areaServed`, `geo` dans le JSON-LD, page de contact avec adresse complète et itinéraire
- **Contenus hyper-locaux** : pages nommant explicitement les hameaux et lieux-dits (l'Armor, Kermagen, Port-la-Chaîne, Port-Béni, Creac'h Maout, Brestan)

---

## 12. Stratégie GEO — Generative Engine Optimization

> Objectif : être **la source citée** quand quelqu'un demande à ChatGPT, Claude, Perplexity, Gemini ou Copilot « où loger près du Sillon de Talbert », « que faire sur la Presqu'île sauvage en novembre » ou « maison pour 8 personnes en Bretagne bord de mer ».

### 12.1 Principes différenciants (vs SEO classique)

| Le SEO classique récompense | Le GEO récompense |
|---|---|
| L'autorité de domaine | La **densité factuelle vérifiable** |
| Les mots-clés | Les **entités nommées** et leurs relations |
| Le temps passé sur la page | L'**extractibilité** de blocs autonomes |
| Le volume de contenu | La **fraîcheur datée** et la précision |
| Les backlinks | La **cohérence multi-sources** de l'information |

### 12.2 Actions

**A. Structurer pour l'extraction**
- Chaque page s'ouvre sur un **encadré « L'essentiel »** de 40–60 mots qui répond à la question principale de manière autonome et citable.
- Sous-titres formulés **en questions réelles** (« Combien de temps faut-il pour parcourir le Sillon de Talbert ? »), suivis d'une réponse directe en première phrase.
- Tableaux de faits partout où c'est possible (distances, durées, tarifs, températures, horaires). Les modèles extraient les tableaux avec une fiabilité très supérieure à la prose.
- Listes numérotées courtes, une idée par item.

**B. Densité d'entités**
- Nommer explicitement et systématiquement : **Pleubian, Côtes-d'Armor, Bretagne, Presqu'île sauvage, presqu'île de Lézardrieux, Sillon de Talbert, GR34, Trieux, Jaudy, Île de Bréhat, Tréguier, Paimpol, Kermagen, Port-la-Chaîne, Creac'h Maout, Vélomaritime / EuroVelo 4, Côte de Granit Rose**.
- Relier ces entités entre elles dans les phrases (« le Sillon de Talbert, à 10 minutes de la maison, ferme l'estuaire du Trieux face à l'Île de Bréhat »).
- Aligner ces entités avec leurs identifiants Wikidata via `sameAs` dans le JSON-LD.

**C. Factualité et fraîcheur**
- Bloc **« Mis à jour le [date] »** visible et balisé `dateModified` sur chaque page.
- Toute donnée chiffrée est datée et attribuée (« Selon les données Météo-France 1991–2020, … »).
- Un fichier `/donnees.json` public exposant les faits structurés du bien (capacité, équipements, coordonnées, tarifs indicatifs) sous licence ouverte.

**D. Fichiers d'exposition pour agents**
- **`/llms.txt`** à la racine : présentation en markdown du site, de la maison, de ses caractéristiques factuelles, et index de toutes les pages avec une ligne de description chacune.
- **`/llms-full.txt`** : version longue avec le contenu essentiel du site en markdown brut.
- Version **`.md` de chaque page** accessible en append de l'URL (`/decouvrir/sillon-de-talbert/index.md`), déclarée dans le sitemap.
- **Flux RSS/Atom** complet du journal.
- **`robots.txt` accueillant** pour les crawlers d'IA légitimes (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) — décision stratégique assumée : on **veut** être ingéré et cité.

**E. Cohérence hors-site**
Les moteurs génératifs recoupent plusieurs sources avant d'affirmer un fait. Il faut donc que le même discours factuel existe sur : le site, Airbnb, Booking, Google Business Profile, l'office de tourisme, les annuaires de gîtes, et 2–3 mentions éditoriales (blogs de voyage, presse locale). **Toute incohérence entre ces sources fait perdre la citation.**

**F. Contenus taillés pour les questions posées aux IA**
Créer des pages qui répondent littéralement à des prompts fréquents :
- « Que faire à Pleubian quand il pleut ? »
- « Le Sillon de Talbert est-il accessible en poussette ? »
- « Où loger sur le GR34 entre Paimpol et Tréguier ? »
- « La Bretagne en février, ça vaut le coup ? »
- « Maison de vacances 8 personnes Bretagne avec jardin clos : que vérifier ? »

### 12.3 Mesure du GEO

| Méthode | Fréquence | Outil |
|---|---|---|
| Test manuel de 15 prompts cibles sur 4 assistants | Mensuel | Tableur de suivi |
| Suivi des citations et du trafic référent IA | Mensuel | Analytics (referrer `chatgpt.com`, `perplexity.ai`, etc.) |
| Suivi des logs de crawl des bots IA | Mensuel | Logs serveur / Cloudflare |
| Présence dans les AI Overviews Google | Mensuel | Search Console + vérification manuelle |

---

## 13. Internationalisation

| Langue | Priorité | Marché | Spécificités |
|---|---|---|---|
| **Français** | P0 | France (IDF, Grand Ouest, Bretagne) | Langue de référence, contenu source |
| **Anglais** | P1 | UK, Irlande, international | Traduction humaine, unités impériales en secondaire, mention des liaisons ferry Roscoff/Saint-Malo |
| **Allemand** | P1 | Allemagne, Suisse, Autriche | Traduction humaine, forte affinité randonnée/vélo/nature — appuyer sur `Wandern`, `Radfahren`, `Naturschutzgebiet` |

**Règles**
- Slugs traduits, jamais de préfixe sur la langue par défaut (`/decouvrir/` en FR, `/en/discover/`, `/de/entdecken/`)
- `hreflang` réciproque complet + `x-default` → FR
- Détection de langue **suggérée, jamais imposée** (bandeau discret, pas de redirection automatique — la redirection automatique nuit à l'indexation)
- Le sélecteur de langue conserve la page courante
- Contenus non traduits : masqués du sitemap de la langue, jamais affichés en français dans une version étrangère
- Formats localisés : dates, devises, unités, formats de téléphone

**Périmètre traduit V1** : accueil, la maison, réserver, les 4 pages saisons, les 7 pages expériences, les 8 fiches lieux, contact, légal. Le journal reste FR-only en V1, avec traduction des 5 meilleurs articles en V2.

---

## 14. Architecture technique

### 14.1 Stack

| Couche | Choix | Justification |
|---|---|---|
| Framework | **Astro 5+**, `output: 'static'` (SSG pur, aucun adaptateur SSR/serverless) | Zéro JS par défaut, îlots d'interactivité, i18n natif, collections de contenu typées, excellent pour un site éditorial statique |
| Sortie | **HTML/CSS/JS statiques purs** dans `dist/` | Servable par n'importe quel serveur de fichiers ou CDN, sans runtime Node en production — voir contrainte ci-dessous |
| CSS | **Tailwind CSS 4** | Design tokens en variables CSS, purge agressive, cohérence garantie |
| Contenu | **Content Collections** (Markdown/MDX + frontmatter typé Zod) | Contenu versionné en Git, pas de CMS à maintenir en V1 |
| Images | **Astro Image** + Sharp | AVIF/WebP, `srcset` automatique, dimensions garanties |
| Interactivité | Vanilla JS / Web Components légers | Sélecteur de saison, galerie, menu mobile, carte |
| Carte | **MapLibre GL** + tuiles OSM auto-hébergées ou statiques | Pas de tiers Google, RGPD-safe, léger |
| Hébergement | **Vercel** ou **Netlify** (plan gratuit suffisant), utilisés comme **CDN de fichiers statiques + automation de build** uniquement | CDN mondial, builds programmés, previews de branche — aucune fonction serverless requise pour servir le site |
| Formulaires | Netlify Forms / Formspree + honeypot | Formulaire HTML natif posté à un service tiers, pas de backend applicatif |
| Newsletter | Buttondown ou Brevo | Appel API côté client ou formulaire natif, RGPD, double opt-in, hébergement UE pour Brevo |
| Analytics | **Plausible** (auto-hébergé ou cloud UE) | Sans cookie, pas de bandeau de consentement nécessaire, RGPD |
| CI | GitHub Actions | Lint, tests de liens, budget de perf, validation Schema |
| Versioning | GitHub | Ce dépôt |

> **Contrainte non négociable — site 100 % statique** : `npm run build` doit produire un
> dossier `dist/` de fichiers HTML/CSS/JS/assets purs, ouvrables et navigables **sans
> aucun serveur applicatif ni runtime Node** — un simple serveur de fichiers statiques
> (ou même `file://` pour l'essentiel de la navigation) suffit à consulter le site. Node
> n'intervient **qu'au build** (génération du HTML, du sitemap, des données météo/marées,
> des imports iCal — §14.5) et en CI, jamais en production. Aucun adaptateur SSR/serverless
> Astro (`@astrojs/vercel`, `@astrojs/netlify` en mode fonctions, etc.) ne doit être
> installé ; l'intégration `@astrojs/sitemap` et l'adaptateur d'images sont compatibles
> avec la sortie statique et ne changent pas ce mode de rendu. Les formulaires, la
> newsletter et les événements analytics restent 100 % côté client (appels vers des
> services tiers), jamais via une route serveur du site lui-même.

### 14.2 Structure du dépôt (cible)

```
/
├── docs/                 # PRD, stratégie SEO/GEO, user stories
├── README.md
├── src/
│   ├── components/       # Hero, SeasonSwitcher, Gallery, FactBox, Map, Cta…
│   ├── layouts/          # Base, Page, Guide, Article
│   ├── content/
│   │   ├── lieux/        # fr/*.md, en/*.md, de/*.md
│   │   ├── experiences/
│   │   ├── saisons/
│   │   └── journal/
│   ├── data/
│   │   ├── maison.json   # source unique de vérité factuelle
│   │   ├── saisons.json  # tokens + contenus par saison
│   │   └── i18n/
│   ├── pages/            # fr (racine), en/, de/
│   └── styles/
├── public/
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── donnees.json
│   ├── robots.txt
│   └── medias/
└── scripts/
    ├── build-season.mjs      # calcule la saison au build
    ├── fetch-tides.mjs       # marées + météo + lever/coucher
    ├── fetch-ical.mjs        # disponibilités depuis Airbnb/Booking
    └── check-links.mjs
```

### 14.3 Principe de source unique de vérité

`src/data/maison.json` contient **tous** les faits du bien (capacité, chambres, équipements, coordonnées, horaires, règles). Ce fichier alimente simultanément : les pages, le JSON-LD, `llms.txt`, `donnees.json` et les métadonnées OG. **Une seule modification pour tout mettre à jour** — c'est ce qui garantit la cohérence factuelle exigée par le GEO.

### 14.4 Budget de performance (bloquant en CI)

| Métrique | Budget |
|---|---|
| Poids total de la page d'accueil (hors vidéo) | < 900 ko |
| JavaScript exécuté | < 40 ko (gzip) |
| CSS | < 30 ko (gzip) |
| Image LCP | < 180 ko |
| Requêtes tierces | 0 sur le chemin critique |
| Temps de build | < 90 s |

### 14.5 Automatisations programmées

| Job | Fréquence | Effet |
|---|---|---|
| Rebuild quotidien | 05h00 UTC | Saison, météo, marées, `dateModified`, disponibilités |
| Import iCal | Quotidien | Calendrier de disponibilités |
| Vérification des liens externes | Hebdomadaire | Alerte sur lien mort |
| Audit Lighthouse | Sur chaque PR + hebdomadaire | Blocage si régression |
| Sauvegarde des avis plateformes | Mensuelle | Alimentation de `/avis/` |

---

## 15. Analytics, conformité et légal

### 15.1 Mesure

Événements à tracker (Plausible custom events) :
`cta_reserver_clic` · `sortie_airbnb` · `sortie_booking` · `changement_saison` · `ouverture_galerie` · `scroll_75` · `inscription_newsletter` · `envoi_contact` · `changement_langue` · `telechargement_gpx`

Tableau de bord mensuel : trafic par source, par langue, par saison, top pages, taux de clic sortant, part du trafic hors haute saison, citations IA.

### 15.2 Conformité

- **Numéro d'enregistrement de meublé de tourisme** : obligatoire en mairie de Pleubian, à afficher sur le site et les annonces
- **Mentions légales** complètes (éditeur, hébergeur, directeur de publication)
- **RGPD** : politique de confidentialité, base légale pour la newsletter (consentement explicite, double opt-in), registre des traitements, absence de cookie tiers
- **Taxe de séjour** : montant et mode de collecte indiqués sur `/reserver/`
- **Droits photo** : cession de droits écrite avec le photographe, autorisation des personnes visibles
- **Accessibilité** : déclaration d'accessibilité (recommandée, non obligatoire pour un site privé de cette taille)
- **Avis** : seuls des avis réels et attribués peuvent être affichés et balisés (`Review` frauduleux = pénalité Google + risque juridique DGCCRF)

---

## 16. Roadmap

### Lot 0 — Fondations (semaines 1–2)
Dépôt, stack Astro + Tailwind, design tokens, layouts, système de saisons, CI, hébergement, domaine, `maison.json`.
**Livrable** : squelette déployé, une saison fonctionnelle, Lighthouse ≥ 95.

### Lot 1 — Le bien (semaines 3–4)
Accueil, `/la-maison/`, galerie, `/reserver/`, `/contact/`, `/legal/`, JSON-LD `LodgingBusiness`, GBP créée.
**Livrable** : site vitrine complet en français, une saison. **Mise en ligne.**

> **Stratégie de démarrage photo** : le site part avec la saison en cours photographiée correctement, et les 3 autres saisons illustrées par des visuels du territoire (libres de droits ou existants) jusqu'à leur shooting dédié. Le sélecteur de saison n'affiche que les saisons prêtes.

### Lot 2 — Multi-saisons complet (semaines 5–7)
4 jeux de tokens, 4 pages piliers `/saisons/`, blocs « en ce moment », météo/marées, rebuild quotidien, sélecteur de saison.
**Livrable** : expérience multi-saisons opérationnelle.

### Lot 3 — Contenu SEO (semaines 6–12, en parallèle)
7 pages `/experiences/`, 8 fiches `/decouvrir/`, hub `/journal/` + 6 premiers articles, maillage interne, carte du territoire.
**Livrable** : 25+ pages indexées, socle SEO complet.

### Lot 4 — GEO (semaines 10–13)
`llms.txt`, `llms-full.txt`, `donnees.json`, versions markdown, encadrés « L'essentiel », FAQ balisées, densité d'entités, cohérence multi-plateformes, mise en place du suivi des citations.
**Livrable** : site optimisé pour les moteurs génératifs, baseline de citations mesurée.

### Lot 5 — International (semaines 12–16)
Traduction EN puis DE, hreflang, recherche de mots-clés native, adaptation des contenus.
**Livrable** : site trilingue.

### Lot 6 — Optimisation continue (à partir du mois 5)
1 article/mois, shooting saisonnier trimestriel, netlinking local, itérations sur les données, préparation de la réservation directe (V2).

---

## 17. Risques et mitigations

| # | Risque | Impact | Prob. | Mitigation |
|---|---|---|---|---|
| R1 | Banque photo insuffisante pour 4 saisons | **Critique** — le concept s'effondre | Élevée | Lancer avec la saison courante uniquement, planifier les shootings dès le lot 0, budget dédié |
| R2 | Contenu non maintenu après 6 mois | Élevé — perte de fraîcheur, chute GEO | Élevée | Rythme volontairement soutenable (1/mois), calendrier pré-rempli sur 12 mois, rappels automatisés |
| R3 | Trafic organique long à démarrer (6–12 mois) | Moyen | Certaine | Attentes explicites, complément par GBP + réseaux + partenariats locaux dès le lancement |
| R4 | Concurrence des portails (Airbnb, Booking, Holidu) sur les requêtes transactionnelles | Élevé | Certaine | Ne pas les affronter frontalement : viser les requêtes informationnelles et hyper-locales où ils sont faibles |
| R5 | Écart de faits entre le site et les annonces plateformes | Moyen — perte de citations IA | Moyenne | Source unique `maison.json`, checklist de synchronisation trimestrielle |
| R6 | Le sélecteur de saison sème la confusion sur la disponibilité réelle | Moyen | Moyenne | Libellé explicite « Découvrir la maison en… », rappel de la date du jour, CTA toujours vers le calendrier réel |
| R7 | Les moteurs génératifs changent leurs règles de citation | Moyen | Élevée | Ne pas dépendre d'un seul canal, revue trimestrielle de la stratégie GEO |
| R8 | Régression de performance à mesure que le contenu grossit | Moyen | Moyenne | Budgets de perf bloquants en CI |
| R9 | Absence de numéro d'enregistrement meublé de tourisme | Élevé — risque d'amende | Faible | Démarche mairie avant mise en ligne |

---

## 18. Critères d'acceptation V1

Le site est considéré comme livré quand **tous** les points suivants sont vrais :

- [ ] Lighthouse mobile ≥ 95 Performance, 100 SEO, ≥ 95 Accessibilité sur les 5 pages principales
- [ ] Core Web Vitals dans le vert sur mobile en conditions 4G simulées
- [ ] Aucune scrollbar horizontale de 320 px à 2 560 px de large
- [ ] Les 4 saisons sont fonctionnelles, avec leurs visuels et leurs contenus propres
- [ ] Le sélecteur de saison fonctionne sans rechargement et sans flash de contenu
- [ ] Toutes les pages disposent d'un JSON-LD valide (0 erreur au test des résultats enrichis)
- [ ] `hreflang` réciproque validé sur les 3 langues, 0 erreur en Search Console
- [ ] `llms.txt`, `llms-full.txt` et `donnees.json` sont publiés et à jour
- [ ] 100 % des images ont un `alt` pertinent, des dimensions et un format moderne
- [ ] Navigation clavier complète, testée au lecteur d'écran
- [ ] Aucun lien interne ou externe cassé
- [ ] Mentions légales, politique de confidentialité et numéro d'enregistrement affichés
- [ ] Sitemaps soumis à Google Search Console et Bing Webmaster Tools
- [ ] Fiche Google Business Profile publiée, cohérente avec le site
- [ ] Le rebuild quotidien s'exécute et met à jour saison, météo et marées
- [ ] Les 15 prompts de test GEO ont été mesurés une première fois (baseline)

---

## 19. Questions ouvertes

| # | Question | Décideur | Échéance |
|---|---|---|---|
| Q1 | Nom de domaine retenu (`odjoge.bzh` ? `maison-odjoge.com` ? `.bzh` vs `.fr` vs `.com`) | Ben | Avant lot 0 |
| Q2 | Budget photo/vidéo pour les 4 shootings saisonniers | Ben | Avant lot 0 |
| Q3 | Le bien est-il aussi listé sur Booking, ou Airbnb uniquement ? | Ben | Avant lot 1 |
| Q4 | Fourchettes tarifaires publiables par saison | Ben / Pauline & Maeva | Avant lot 1 |
| Q5 | Numéro d'enregistrement meublé de tourisme obtenu ? | Ben | Avant mise en ligne |
| Q6 | Qui rédige les contenus (interne, rédacteur, mixte) ? | Ben | Avant lot 3 |
| Q7 | Traduction humaine ou traduction assistée relue par un natif ? | Ben | Avant lot 5 |
| Q8 | Ouverture à la réservation directe en V2 : oui/non, et avec quel outil ? | Ben | Mois 6 |

---

## Annexe A — Les 15 prompts de test GEO

1. Où loger près du Sillon de Talbert en Bretagne ?
2. Maison de vacances pour 8 personnes dans les Côtes-d'Armor bord de mer
3. Que faire sur la Presqu'île sauvage en Bretagne ?
4. Où dormir sur le GR34 entre Paimpol et Tréguier ?
5. Location de vacances à Pleubian
6. Bretagne hors saison : où aller pour se déconnecter ?
7. Week-end randonnée Côtes-d'Armor avec hébergement
8. Le Sillon de Talbert vaut-il le détour ?
9. Gîte avec poêle à bois en Bretagne pour l'hiver
10. Où faire une workation en bord de mer en France ?
11. Étape Vélomaritime EuroVelo 4 Côtes-d'Armor hébergement
12. Bretagne avec des enfants : maison avec jardin clos près de la plage
13. Best places to stay near Bréhat island Brittany
14. Ferienhaus Bretagne am Meer für 8 Personen
15. Quiet places in Brittany for a digital detox

---

## Annexe B — Sources consultées

- [Fiche du bien — Airbnb, Maison familiale Od Joge](https://www.airbnb.fr/rooms/1658044831450546341)
- [Que faire à Pleubian — Presqu'île de Lézardrieux](https://www.presquile-de-lezardrieux.com/pleubian)
- [Visiter Pleubian — Le Routard](https://www.routard.com/fr/guide/france/bretagne/cotes-d-armor/pleubian)
- [Boucle du Sillon de Talbert — Côtes d'Armor Destination](https://www.cotesdarmor.com/fr/fiche/itineraires-touristiques/boucle-du-sillon-de-talbert-pleubian_TFOITIBRE022V50QNZJ/)
- [Boucle du Sillon de Talbert — Tourisme Bretagne](https://www.tourismebretagne.com/preparer-mon-sejour/bouger-visiter/balades-et-randos/boucle-du-sillon-de-talbert-pleubian-fr-2184793/)
- [Le GR34, sentier des douaniers — Côtes d'Armor Destination](https://www.cotesdarmor.com/balades-et-randonnees/a-pied/gr34-sentier-des-douaniers/)
- [Presqu'île sauvage : que voir autour de Lézardrieux](https://miettesdailleurs.be/presquile-sauvage/)
- [Locations de vacances à Pleubian — Gîtes.fr](https://www.gites.fr/gites_pleubian_8908.html) (analyse concurrentielle)
- [Locations de vacances à Pleubian — PAP Vacances](https://www.papvacances.fr/annonces/location-vacances-pleubian-22610-g15196) (analyse concurrentielle)
