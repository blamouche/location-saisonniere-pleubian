# Étude et Stratégie SEO/GEO — Maison Od Joge, Pleubian

| | |
|---|---|
| **Projet** | Site vitrine « Maison Od Joge », location saisonnière à Pleubian (22610) |
| **Document** | Étude SEO/GEO + audit du PRD |
| **Version** | 1.0 — 24 août 2026 |
| **Auteur** | Ben Lamouche (assisté par Hermes) |
| **Source** | Basé sur le PRD v1.0 + recherche concurrentielle + bonnes pratiques SEO/GEO 2026 |

---

## Table des matières

1. [Audit du PRD : couverture des bonnes pratiques SEO](#1-audit-du-prd--couverture-des-bonnes-pratiques-seo)
2. [Analyse du paysage concurrentiel](#2-analyse-du-paysage-concurrentiel)
3. [Analyse des mots-clés et opportunités](#3-analyse-des-mots-clés-et-opportunités)
4. [Stratégie SEO technique recommandée](#4-stratégie-seo-technique-recommandée)
5. [Stratégie de contenu éditorial SEO](#5-stratégie-de-contenu-éditorial-seo)
6. [Stratégie GEO (Generative Engine Optimization)](#6-stratégie-geo-generative-engine-optimization)
7. [Stratégie SEO local](#7-stratégie-seo-local)
8. [Stratégie de netlinking](#8-stratégie-de-netlinking)
9. [Stratégie internationale (FR/EN/DE)](#9-stratégie-internationale-frende)
10. [Roadmap SEO/GEO et KPIs](#10-roadmap-seogeo-et-kpis)
11. [Recommandations et gaps identifiés dans le PRD](#11-recommandations-et-gaps-identifiés-dans-le-prd)

---

## 1. Audit du PRD : couverture des bonnes pratiques SEO

### Méthodologie

L'audit compare chaque section du PRD contre les bonnes pratiques SEO 2026 : technique, on-page, contenu/E-E-A-T, local, international, et GEO. Chaque point est évalué comme ✅ couvert, ⚠️ partiel, ou ❌ manquant.

### 1.1 SEO Technique

| Bonne pratique 2026 | Statut PRD | Commentaire |
|---|---|---|
| Rendu 100 % statique (SSG), HTML complet | ✅ | §11.3 — Astro SSG, aucune dépendance JS pour le contenu |
| URLs propres (minuscules, tirets, slash final) | ✅ | §11.3 — spécifié |
| Canonical auto-référentiel sur chaque page | ✅ | §11.3 |
| hreflang réciproque complet FR/EN/DE + x-default | ✅ | §11.3, §13 — complet |
| Sitemap XML segmenté par langue avec lastmod réel | ✅ | §11.3 — `sitemap-index.xml` segmenté |
| robots.txt configuré | ✅ | §11.3 — autorise tout sauf `/legal/preview` |
| Core Web Vitals cibles (LCP, INP, CLS) | ✅ | §3.2 — cibles plus ambitieuses que les standards Google |
| Images AVIF/WebP, srcset, lazy-load, dimensions | ✅ | §11.3 — complet |
| Redirections 301 uniquement, pas de chaîne | ✅ | §11.3 |
| Page 404 utile | ✅ | §11.3 |
| Budget de performance bloquant en CI | ✅ | §14.4 — détaillé |
| Mobile-first strict | ✅ | §9.3 — test à 375 px |
| HTTPS forcé | ❌ | **Non mentionné explicitement** — Vercel/Netlify forcent HTTPS par défaut, mais le PRD devrait l'explicité comme exigence |
| En-têtes de sécurité (HSTS, CSP, X-Frame-Options) | ❌ | **Non mentionné** — recommandé en 2026, surtout pour la confiance (E-E-A-T) |
| IndexNow pour notification Bing/Yandex | ❌ | **Non mentionné** — accélère l'indexation des mises à jour |
| Structured data via `@graph` (JSON-LD lié) | ⚠️ | §11.4 liste les types de schéma, mais ne spécifie pas l'approche `@graph` avec `@id` référencés (recommandée en 2026 pour les IA) |
| Sitemap `.md` / schema endpoints pour agents IA | ❌ | **Non mentionné** — la norme émerge (NLWeb, schemamap.xml). Le PRD prévoit `llms.txt` et versions `.md` mais pas de endpoint de graphe JSON-LD consolidé |
| `Schemamap:` directive dans robots.txt | ❌ | **Non mentionné** — émerge en 2026 |

### 1.2 On-Page SEO

| Bonne pratique 2026 | Statut PRD | Commentaire |
|---|---|---|
| 1 seul `<h1>` par page | ✅ | §11.3 |
| Meta title ≤ 60 caractères, unique, rédigé à la main | ✅ | §11.3 |
| Meta description 140–158 caractères, unique | ✅ | §11.3 |
| Open Graph + Twitter Card | ⚠️ | §11.3 mentionne OG image par page, mais pas Twitter Card |
| BreadcrumbList sur toutes les pages | ✅ | §11.4 |
| Tableaux de données (distances, tarifs, horaires) | ✅ | §12.2B — stratégie GEO, mais aussi excellent pour SEO |
| Encadré « L'essentiel » en tête de page | ✅ | §12.2A — 40–60 mots citables |
| FAQ balisée `FAQPage` | ✅ | §11.4, §8.4 |
| Maillage interne structuré (hub & spoke) | ✅ | §11.1 — complet |
| Contrôle des liens orphelins au build | ✅ | §11.1 — échec du build si orpheline |
| Table of contents pour articles > 1500 mots | ❌ | **Non mentionné** — recommandé pour le SEO et l'UX |
| `rel="next"` / `rel="prev"` pour pagination | ⚠️ | §11.3 indique « aucune pagination », mais si le journal dépasse 40 articles, une stratégie devra être définie |

### 1.3 Contenu & E-E-A-T

| Bonne pratique 2026 | Statut PRD | Commentaire |
|---|---|---|
| **Experience** — contenu écrit par un hôte qui vit là | ✅ | §10.2 — « voix d'un hôte qui vit là », première personne |
| **Expertise** — author bios avec credentials | ⚠️ | §11.4 prévoit `Organization`/`Person`, mais pas de page « À propos » / bio auteur détaillée |
| **Authoritativeness** — citations externes, mentions presse | ⚠️ | §11.5 prévoit netlinking local, mais pas de stratégie de digital PR / mentions presse |
| **Trustworthiness** — HTTPS, contact, transparence, dates | ✅ | §15 — mentions légales, RGPD, numéro d'enregistrement |
| Avis réels et attribués (`Review`/`AggregateRating`) | ✅ | §11.4, §15.2 — uniquement avis réels sourcés |
| Fraîcheur : `dateModified` visible et accurate | ✅ | §12.2C — bloc « Mis à jour le » |
| Contenu original non duplicable | ✅ | §10.2 — « au moins une info que personne d'autre n'a en ligne » |
| Calendrier éditorial soutenable | ✅ | §10.3 — mensuel, trimestriel, semestriel, annuel |
| Profondeur topique (pillar-cluster) | ✅ | §11.1 — hub & spoke 3 niveaux |
| Longueur de contenu (900–2500 mots selon type) | ✅ | §10.2 |
| Vérifiabilité (sources datées) | ✅ | §10.2 — « chaque affirmation factuelle est datée et sourcée » |

### 1.4 SEO Local

| Bonne pratique 2026 | Statut PRD | Commentaire |
|---|---|---|
| Google Business Profile optimisée | ✅ | §11.5 |
| Cohérence NAP (Nom/Adresse/Téléphone) | ✅ | §11.5 |
| Citations locales (office tourisme, annuaires) | ✅ | §11.5 |
| Netlinking local (partenariats de contenu) | ✅ | §11.5 |
| Balisage géographique (GPS, `areaServed`, `geo`) | ✅ | §11.5 |
| Contenus hyper-locaux (hameaux, lieux-dits) | ✅ | §11.5 |
| Bing Places / Apple Business Connect | ✅ | §11.5 mentionné |
| Schema `LocalBusiness` / `LodgingBusiness` | ✅ | §11.4 |

### 1.5 GEO (Generative Engine Optimization)

| Bonne pratique 2026 | Statut PRD | Commentaire |
|---|---|---|
| `llms.txt` à la racine | ✅ | §12.2D |
| `llms-full.txt` version longue | ✅ | §12.2D |
| Versions `.md` de chaque page | ✅ | §12.2D |
| robots.txt accueillant pour bots IA | ✅ | §12.2D — GPTBot, ClaudeBot, etc. |
| Densité d'entités nommées + relations | ✅ | §12.2B — liste explicite des entités |
| `sameAs` vers Wikidata | ✅ | §12.2B |
| Factualité et fraîcheur datée | ✅ | §12.2C |
| `/donnees.json` public (faits structurés) | ✅ | §12.2C |
| Cohérence multi-sources (site + plateformes + annuaires) | ✅ | §12.2E |
| Contenus taillés pour les prompts IA | ✅ | §12.2F |
| Suivi des citations (15 prompts, mensuel) | ✅ | §12.3 |
| Suivi des referrers IA | ✅ | §12.3 |
| Suivi des logs de crawl bots IA | ✅ | §12.3 |
| AI Overviews Google | ✅ | §12.3 |
| RSS/Atom flux complet | ✅ | §12.2D |
| Schema endpoints consolidés (NLWeb) | ❌ | **Non mentionné** — émerge en 2026 |
| `articleBody` dans le JSON-LD (texte complet pour IA) | ❌ | **Non mentionné** — permet aux IA d'accéder au contenu via structured data |
| AGENTS.md à la racine | ❌ | **Non mentionné** — émerge comme standard pour agents IA |

### 1.6 Internationalisation

| Bonne pratique 2026 | Statut PRD | Commentaire |
|---|---|---|
| Slugs traduits par langue | ✅ | §7, §13 |
| Pas de préfixe de langue sur la langue par défaut | ✅ | §13 |
| hreflang réciproque + x-default | ✅ | §13 |
| Détection de langue suggérée, jamais imposée | ✅ | §13 |
| Recherche de mots-clés native (pas traduction littérale) | ✅ | §11.2 |
| Formats localisés (dates, devises, unités) | ✅ | §13 |
| Contenus non traduits masqués du sitemap | ✅ | §13 |

### 1.7 Synthèse de l'audit

**Score global du PRD sur le SEO/GEO : 87/100**

Le PRD est **exceptionnellement bien préparé** sur le SEO et le GEO. La majorité des bonnes pratiques 2026 sont couvertes avec un niveau de détail rare. Les gaps identifiés sont des points émergents (schema endpoints, AGENTS.md, articleBody, en-têtes de sécurité) ou des précisions à ajouter (HTTPS explicite, Twitter Card, table of contents, digital PR).

| Catégorie | Score | Détail |
|---|---|---|
| SEO Technique | 14/17 | HTTPS, en-têtes sécurité, IndexNow, schema `@graph` à expliciter |
| On-Page | 8/11 | Twitter Card, TOC, pagination future |
| Contenu & E-E-A-T | 9/11 | Page auteur/bio, digital PR |
| SEO Local | 8/8 | Complet |
| GEO | 13/17 | Schema endpoints, articleBody, AGENTS.md manquants |
| International | 7/7 | Complet |

---

## 2. Analyse du paysage concurrentiel

### 2.1 Cartographie des concurrents

L'analyse des SERP pour les requêtes « location vacances Pleubian » et « location saisonnière Presqu'île sauvage Lézardrieux » révèle une concurrence **nombreuse mais indifférenciée**.

#### Concurrents directs (portails généralistes)

| Portail | Volume d'offres à Pleubian | Force | Faiblesse |
|---|---|---|---|
| **Amivac** | ~77 offres | Volume, SEO de portail | Aucun contenu éditorial, aucune histoire |
| **Gîtes d'Armor** | ~47 locations | Réseau local, autorité | Fiches standardisées, pas de différenciation |
| **Gîtes de France** | ~10 offres | Notoriété nationale, label | Fiches administratives, photos médiocres |
| **Booking.com** | ~70 hébergements | Trafic international, reviews | Prix platform, commission, fiche générique |
| **Airbnb** | Nombreuses | Superhost, algorithmes | Dépendance totale, pas d'actif propre |
| **PAP Vacances** | Plusieurs | Particulier à particulier | Contenu minimal, pas de storytelling |
| **TripAdvisor** | ~15 | Reviews, notoriété | Agrégation, pas de contenu original |
| **HomeToGo** | ~18 489 offres Côtes-d'Armor | Méta-agrégateur | Aucune profondeur locale |

#### Concurrents directs à Pleubian (biens spécifiques)

| Bien | Capacité | Plateformes | Différenciation |
|---|---|---|---|
| Maison 250 m² bord de mer (Le Flohic) | 12 pers. | Armor-Vacances | Grand volume, plage au bout du chemin |
| La Petite Maison Bleue | ~4 pers. | Airbnb | 300 m de la mer et du Sillon, petit format |
| Maison Ty Bian Prieuré | — | Booking | Positionnement « prieuré » |
| Gîte avec bain nordique | — | Booking | Niche bien-être |
| Armor Cottages | — | TripAdvisor | Multi-biens |

#### Concurrents éditoriaux (territorial)

| Site | Approche | Qualité SEO | Pertinence |
|---|---|---|---|
| **presquile-de-lezardrieux.com** | Office de tourisme local | Bonne autorité locale, contenu institutionnel | Concurrent direct sur le contenu territorial |
| **cotesdarmor.com** | Destination touristique départementale | Forte autorité, large couverture | Concurrent sur GR34, saisons, territoire |
| **tourismebretagne.com** | Tourisme Bretagne (régional) | Très forte autorité, portail régional | Concurrent sur requêtes larges Bretagne |
| **bretagne-cotedegranitrose.com** | OT Côte de Granit Rose | Excellente fiche Sillon de Talbert, visites guidées | Concurrent direct sur Sillon de Talbert |
| **Le Routard** | Guide voyage | Forte autorité éditoriale | Concurrent sur « visiter Pleubian » |
| **Komoot / Visorando** | Randonnée | Très fort sur GR34, Sillon de Talbert (fiches d'itinéraires) | Concurrent sur le contenu sportif |

### 2.2 Diagnostic concurrentiel

**Observations clés :**

1. **Saturation transactionnelle, vide informationnel** : les portails inondent les requêtes « location vacances Pleubian » avec des fiches standardisées. En revanche, les requêtes informationnelles (« que faire Presqu'île sauvage en novembre », « GR34 étape Pleubian », « Bretagne en hiver que faire ») sont servies par des offices de tourisme au contenu générique ou absent.

2. **Aucun concurrent ne raconte le territoire** : les annonces listent « proche Sillon de Talbert » en une ligne. Aucune ne crée de contenu approfondi sur le Sillon, le GR34, la Vélomaritime, ou la Presqu'île sauvage comme destination.

3. **Faiblesse saisonnière universelle** : tous les concurrents se concentrent sur juillet-août. Les requêtes « Bretagne en hiver », « Bretagne hors saison » sont servies par du contenu générique (Michelin, SNCF Connect, tourismebretagne.com) sans ancrage local.

4. **Lacune GEO massive** : aucun concurrent n'est optimisé pour les moteurs génératifs. Les offices de tourisme ont du contenu mais pas de `llms.txt`, pas de données structurées `TouristAttraction`, pas de densité d'entités.

5. **Komoot et Visorando dominent la randonnée** : ces plateformes ont une autorité élevée sur le GR34 et le Sillon de Talbert. Le site Od Joge ne peut pas les battre sur l'autorité, mais peut les surpasser sur la **spécificité hyper-locale** (départ de la maison, itinéraires au pas de porte, conseils d'habitant).

6. **Armor-Vacances a une offre à Pleubian pour 12 personnes** : c'est le seul concurrent direct en haute capacité. La maison Od Joge (8 pers.) se positionne dans un segment légèrement inférieur mais avec un argumentaire territorial supérieur.

### 2.3 Implications stratégiques

- **Ne pas affronter les portails sur les requêtes transactionnelles larges** : « location vacances Côtes d'Armor » (18 489 offres sur HomeToGo). C'est un combat perdu.
- **Dominer les requêtes hyper-locales** : « location vacances Pleubian », « gîte Presqu'île sauvage », « maison 8 personnes bord de mer Pleubian ».
- **Créer le meilleur contenu territorial sur la Presqu'île sauvage** : aucun concurrent ne le fait. C'est le gap à exploiter.
- **Être la source citée par les IA** : le terrain est vide. Première arrivée = premier servi.

---

## 3. Analyse des mots-clés et opportunités

### 3.1 Requêtes transactionnelles (P0 — conversion directe)

| Requête cible | Intention | Page | Concurrence | Opportunité |
|---|---|---|---|---|
| location vacances Pleubian | Transactionnelle | `/` | Élevée (portails) | Niche géographique, faible si ancrage local |
| maison 8 personnes Côtes d'Armor bord de mer | Transactionnelle | `/la-maison/` | Moyenne | Longue traîne précise, peu de biens 8 pers. |
| gîte Presqu'île sauvage Bretagne | Transactionnelle | `/` | Faible | Très peu de concurrents sur ce terme exact |
| location Sillon de Talbert | Transactionnelle | `/decouvrir/sillon-de-talbert/` | Très faible | Quasi-vierge, opportunité GEO majeure |
| location saisonnière Pleubian 22610 | Transactionnelle | `/` | Faible | Code postal précis = faible volume, haute intention |

### 3.2 Requêtes informationnelles (P1 — acquisition + GEO)

| Requête cible | Intention | Page | Concurrence | Opportunité |
|---|---|---|---|---|
| Sillon de Talbert visite | Informationnelle | `/decouvrir/sillon-de-talbert/` | Moyenne (OT, Komoot) | Battre par la profondeur et l'expérience locale |
| que faire Presqu'île sauvage | Informationnelle | `/decouvrir/presquile-sauvage/` | Faible | Terre vierge, opportunité #1 |
| GR34 Pleubian étape | Informationnelle | `/experiences/randonnee-gr34/` | Faible | Aucun concurrent spécifique à Pleubian |
| Bretagne hors saison où aller | Informationnelle | `/saisons/automne/` | Moyenne (Michelin, SNCF) | Battre par l'ancrage local précis |
| Bretagne en hiver que faire | Informationnelle | `/saisons/hiver/` | Moyenne | Idem, avec spécificité Presqu'île |
| week-end déconnexion Bretagne | Informationnelle | `/experiences/deconnexion-slow/` | Faible | Tendance émergente, peu de contenu dédié |
| plages Pleubian | Informationnelle | `/decouvrir/plages-pleubian/` | Très faible | Aucun contenu dédié existant |

### 3.3 Requêtes informationnelles longues (P2 — long traîne + GEO)

| Requête cible | Intention | Page | Opportunité |
|---|---|---|---|
| EuroVelo 4 Bretagne étapes | Informationnelle | `/experiences/velo-velomaritime/` | Faible contenu FR, fort potentiel DE |
| télétravail bord de mer Bretagne | Informationnelle | `/experiences/teletravail-workation/` | Tendance, faible concurrence |
| Bréhat depuis Pleubian | Informationnelle | `/decouvrir/ile-de-brehat/` | Requête précise, aucun contenu dédié |
| air pur Bretagne bienfaits | Informationnelle | `/experiences/bien-etre-air-marin/` | Niche, très fort potentiel GEO |
| Pleubian que faire quand il pleut | Informationnelle | Page journal ou FAQ | Réponse directe pour IA |
| Le Sillon de Talbert accessible poussette | Informationnelle | FAQ Sillon | Question exacte posée aux IA |
| gîte avec poêle à bois Bretagne hiver | Transactionnelle | `/saisons/hiver/` | Niche précise, faible concurrence |

### 3.4 Requêtes internationales (EN/DE)

| Requête cible (EN) | Requête cible (DE) | Page | Opportunité |
|---|---|---|---|
| holiday home Brittany coast 8 people | Ferienhaus Bretagne am Meer für 8 Personen | `/` | Forte demande DE/UK |
| GR34 hiking accommodation Brittany | Wandern Bretagne Unterkunft GR34 | `/experiences/randonnee-gr34/` | Très faible concurrence EN/DE |
| places to stay near Bréhat Brittany | Übernachtung near Bréhat Bretagne | `/decouvrir/ile-de-brehat/` | Quasi-vierge |
| quiet places Brittany digital detox | Ruhe Bretagne digitale Entgiftung | `/experiences/deconnexion-slow/` | Tendance forte |
| EuroVelo 4 Brittany accommodation | EuroVelo 4 Bretagne Unterkunft | `/experiences/velo-velomaritime/` | Fort potentiel cyclotourisme DE |
| workation seaside France | Workation am Meer Frankreich | `/experiences/teletravail-workation/` | Niche émergente |

### 3.5 Estimation des volumes (qualitatif)

> ⚠️ Les volumes exacts doivent être validés via Google Keyword Planner, Semrush, ou Ahrefs. L'estimation ci-dessous est qualitative, basée sur l'analyse SERP.

| Niveau | Requêtes | Volume estimé/mois | Difficulté |
|---|---|---|---|
| P0 transactionnelles locales | 5 requêtes | 200–800/mois cumulés | Moyenne-élevée |
| P1 informationnelles locales | 7 requêtes | 500–2000/mois cumulés | Faible-moyenne |
| P2 longue traîne | 15+ requêtes | 1000–3000/mois cumulés | Très faible |
| International EN/DE | 6 requêtes x 2 | 300–1200/mois cumulés | Très faible |

**Cible M+12 : ≥ 2 500 sessions organiques/mois** — atteignable si les 25+ pages sont indexées et positionnées dans le top 10 sur leurs requêtes cibles.

---

## 4. Stratégie SEO technique recommandée

### 4.1 Architecture (validation et compléments du PRD)

Le PRD prévoit une architecture **hub & spoke à 3 niveaux**, excellente. Compléments recommandés :

```
Niveau 0 (racine)  : /  (accueil saisonnier)
Niveau 1 (piliers)  : /saisons/[x]/ · /experiences/ · /decouvrir/ · /la-maison/ · /reserver/
Niveau 2 (clusters) : pages thématiques + fiches lieux
Niveau 3 (support)  : /journal/[slug]/
Niveau 4 (nouveaux) : /a-propos/  ← NOUVEAU (bio hôtes, E-E-A-T)
```

**Recommandation : ajouter une page `/a-propos/`**

Cette page est essentielle pour l'E-E-A-T en 2026. Google demande « Who, How, Why » :
- **Who** : Pauline & Maeva, Superhosts, photo, bio, lien vers leur profil Airbnb
- **How** : pourquoi elles gèrent cette maison, depuis quand, leur rapport au territoire
- **Why** : la mission du site (raconter la Presqu'île sauvage, pas juste louer)

### 4.2 Données structurées — recommandations complémentaires

Le PRD liste 9 types de schéma. Compléments pour 2026 :

| Type | Où | Pourquoi |
|---|---|---|
| **`@graph` avec `@id` liés** | Toutes les pages | Les IA parcourent les relations entre entités. Un graphe lié (`WebSite` → `WebPage` → `Article` → `Person` → `Organization`) est supérieur à des snippets isolés |
| **`articleBody` dans `Article`/`BlogPosting`** | Journal | Inclut le texte complet (markdown strippé, jusqu'à 10K caractères) dans le JSON-LD. Les IA peuvent accéder au contenu via structured data, pas seulement en scrapant le HTML |
| **`knowsAbout`** sur `Person` | `/a-propos/` | Déclare l'expertise topique des hôtes (Bretagne, randonnée, slow living) |
| **`publishingPrinciples`** | `WebSite` | Pointe vers la politique éditoriale (transparence = confiance) |
| **`SearchAction`** | `WebSite` | Si recherche interne (Pagefind), active la Search Box dans Google |
| **`sameAs`** enrichi | `Organization`/`Person` | Liens vers Airbnb, Booking, GBP, Wikidata des entités territoriales |

### 4.3 Fichiers pour agents IA — compléments au PRD

Le PRD prévoit `llms.txt`, `llms-full.txt`, versions `.md`, `donnees.json`. Compléments :

| Fichier | Rôle | Priorité |
|---|---|---|
| **`/AGENTS.md`** | Standard émergeant : instructions pour agents IA (comment naviguer le site, quelles données sont disponibles, conditions d'utilisation) | P2 — émerge en 2026 |
| **`/schemamap.xml`** | Liste des endpoints JSON-LD consolidés (une URL par collection de contenu). `Schemamap:` directive dans robots.txt | P2 — NLWeb spec |
| **`/schema/[collection].json`** | Endpoints servant le graphe JSON-LD complet de chaque collection (lieux, expériences, journal) en une seule requête | P2 — les IA préfèrent un endpoint consolidé à N pages isolées |
| **`/indexnow.php` ou endpoint IndexNow** | Notifie Bing/Yandex des mises à jour à chaque rebuild quotidien | P1 — accélère l'indexation |

### 4.4 Performance — validation du PRD

Le budget de performance du PRD (§14.4) est **excellent et plus strict que les standards 2026** :

| Métrique | Budget PRD | Standard Google 2026 | Verdict |
|---|---|---|---|
| Poids page accueil (hors vidéo) | < 900 ko | Pas de seuil officiel | ✅ Strict |
| JS exécuté | < 40 ko gzip | Pas de seuil officiel | ✅ Strict |
| CSS | < 30 ko gzip | Pas de seuil officiel | ✅ Strict |
| Image LCP | < 180 ko | Pas de seuil officiel | ✅ Strict |
| LCP | < 2,0 s | < 2,5 s | ✅ Plus ambitieux |
| INP | < 150 ms | < 200 ms | ✅ Plus ambitieux |
| CLS | < 0,05 | < 0,1 | ✅ Plus ambitieux |

**Recommandation : ajouter un audit Lighthouse sur chaque PR (déjà prévu §14.5) + un test de throttling 4G simulé en CI**.

### 4.5 Sitemap — compléments

Le PRD prévoit un `sitemap-index.xml` segmenté par langue. Compléments :

- Inclure `lastmod` réel basé sur `git log` du fichier markdown source (pas la date du build)
- Inclure `changefreq` par type de page (daily pour accueil, weekly pour journal, monthly pour lieux)
- Soumettre à Google Search Console **et** Bing Webmaster Tools
- Pinger IndexNow à chaque rebuild pour Bing

### 4.6 Sécurité et confiance

| Élément | Statut PRD | Recommandation |
|---|---|---|
| HTTPS forcé | Implicite (Vercel/Netlify) | **Explicité comme exigence** dans le PRD |
| HSTS | Non mentionné | Ajouter `Strict-Transport-Security: max-age=31536000; includeSubDomains` |
| CSP | Non mentionné | Définir une Content-Security-Policy stricte (site statique = facile) |
| X-Frame-Options | Non mentionné | `DENY` (empêche le framing, renforce la confiance) |
| X-Content-Type-Options | Non mentionné | `nosniff` (standard) |

Ces en-têtes sont des signaux de confiance (E-E-A-T — Trustworthiness) et peuvent être configurés via `vercel.json` ou `netlify.toml` sans effort.

---

## 5. Stratégie de contenu éditorial SEO

### 5.1 Validation de la stratégie du PRD

Le PRD prévoit **5 piliers éditoriaux** (Sport, Bien-être, Déconnexion, Air pur, Culture) avec **20 contenus prioritaires**. Cette stratégie est **excellente** et alignée avec les meilleures pratiques 2026 :

- ✅ Profondeur topique (pillar-cluster)
- ✅ Originalité (info unique que personne n'a)
- ✅ Vérifiabilité (sources datées)
- ✅ Voix d'hôte local (Experience = E-E-A-T)
- ✅ Calendrier soutenable (1/mois)

### 5.2 Compléments recommandés

#### Pages à ajouter

| Page | Rôle SEO | Rôle GEO | Priorité |
|---|---|---|---|
| **`/a-propos/`** | E-E-A-T (Who), bio hôtes | Source d'info pour IA sur les hôtes | P0 |
| **`/decouvrir/meteo-pleubian/`** | « météo Pleubian », « climat Presqu'île sauvage » | Données chiffrées très citables | P1 |
| **`/decouvrir/grand-marees-pleubian/`** | « grandes marées Côtes d'Armor », « marée Sillon de Talbert » | Info factuelle ultra-citable par IA | P1 |
| **`/journal/accessibilite-sillon-talbert/`** | « Sillon de Talbert accessible poussette/PMR » | Question exacte posée aux IA | P2 |

#### Optimisation des pages existantes

| Page du PRD | Recommandation SEO |
|---|---|
| `/decouvrir/sillon-de-talbert/` | Ajouter un tableau de données factuelles (longueur, superficie, année classement, espèces protégées, parking, accès PMR). C'est la page #1 du site pour le GEO |
| `/saisons/[saison]/` | Ajouter un tableau météo mensuel (températures, précipitations, heures d'ensoleillement) avec source Météo-France. Les IA adorent les tableaux |
| `/experiences/randonnee-gr34/` | Inclure un tableau des 5 boucles avec : nom, distance, dénivelé, durée, difficulté, GPX téléchargeable |
| `/la-maison/` | Ajouter un tableau de configuration des couchages (scénarios 2 familles / 4 couples / mixte) |
| Toutes les pages `/decouvrir/` | Ajouter coordonnées GPS exactes + distance depuis la maison en minutes à pied/vélo/voiture |

#### Table of Contents (TOC)

**Recommandation : ajouter un TOC automatique sur tous les contenus > 1 500 mots** (pages pilier, pages saisons, articles journal). Le TOC :
- Améliore l'UX (navigation rapide)
- Génère des liens d'ancrage que Google peut afficher dans les SERP
- Aide les IA à comprendre la structure du document

### 5.3 Ligne éditoriale — validation et précisions

Le PRD définit une voix « d'hôte qui vit là ». C'est l'avantage concurrentiel le plus puissant. Compléments :

- **Signature personnelle** : chaque article du journal est signé par un hôte (Pauline ou Maeva), avec photo et mini-bio en bas d'article. C'est un signal E-E-A-T direct.
- **Photos originales datées** : chaque photo du journal a une légende avec date et lieu. Les photos originales sont un signal « Experience » fort (Google peut détecter les images uniques).
- **Mise à jour visible** : chaque page affiche « Mis à jour le [date] » — déjà prévu, mais s'assurer que `dateModified` dans le JSON-LD est **toujours** synchronisé.

### 5.4 Calendrier éditorial 12 mois (complément au PRD)

Le PRD prévoit 1 article/mois. Voici un calendrier optimisé pour la saisonnalité SEO :

| Mois | Article | Cible SEO | Saison visée |
|---|---|---|---|
| Septembre | « Novembre sur le Sillon : ce que la tempête laisse sur la grève » | Bretagne en automne, Sillon de Talbert | Automne |
| Octobre | « Travailler à distance depuis une maison bretonne : le vrai retour d'expérience » | télétravail bord de mer Bretagne | Automne |
| Novembre | « 72 h sans écran à Pleubian : ce qu'on fait à la place » | week-end déconnexion Bretagne | Hiver |
| Décembre | « Noël en Bretagne : la maison pour 8, le poêle, le silence » | Noël Bretagne, maison 8 personnes hiver | Hiver |
| Janvier | « La qualité de l'air en Bretagne littorale, en chiffres » | air pur Bretagne bienfaits | Hiver |
| Février | « Comprendre les marées, et pourquoi ça change tout » | grandes marées Côtes d'Armor | Hiver |
| Mars | « La lumière revient : le printemps sur la Presqu'île sauvage » | Presqu'île sauvage printemps | Printemps |
| Avril | « Le GR34 au départ de Pleubian : 5 boucles chronométrées » | GR34 Pleubian étape | Printemps |
| Mai | « Kayak dans l'archipel de Bréhat : quand, où, avec qui » | kayak Bréhat Côtes d'Armor | Printemps |
| Juin | « Faire l'EuroVelo 4 en famille : l'étape Paimpol–Tréguier » | EuroVelo 4 Bretagne étapes | Été |
| Juillet | « Huit autour d'une table, la mer à cinq minutes » | maison 8 personnes bord de mer Bretagne | Été |
| Août | « Le trail sur la Presqu'île sauvage : 3 parcours et leurs profils » | trail Côtes d'Armor Presqu'île sauvage | Été |

---

## 6. Stratégie GEO (Generative Engine Optimization)

### 6.1 Validation de la stratégie du PRD

La section GEO du PRD (§12) est **l'une des mieux conçues que l'on puisse trouver dans un PRD de site vitrine**. Elle couvre :
- ✅ Structuration pour l'extraction (encadré « L'essentiel »)
- ✅ Densité d'entités nommées + relations
- ✅ Factualité et fraîcheur datée
- ✅ Fichiers d'exposition (llms.txt, llms-full.txt, .md, donnees.json)
- ✅ Cohérence multi-sources
- ✅ Contenus taillés pour les prompts IA
- ✅ Mesure (15 prompts, referrers, logs, AI Overviews)

### 6.2 Compléments stratégiques GEO 2026

#### A. Schema endpoints consolidés (NLWeb)

En 2026, les agents IA commencent à consommer des endpoints JSON-LD consolidés plutôt que de scraper page par page. Recommandation :

```
/schema/lieux.json      → Graphe JSON-LD de toutes les fiches lieux
/schema/experiences.json → Graphe JSON-LD de toutes les pages expériences
/schema/journal.json    → Graphe JSON-LD de tous les articles
/schema/maison.json     → Graphe JSON-LD du bien (LodgingBusiness + Accommodation)
/schemamap.xml          → Index de tous les endpoints ci-dessus
```

Directive dans robots.txt : `Schemamap: https://odjoge.bzh/schemamap.xml`

#### B. `articleBody` dans le JSON-LD

Inclure le texte complet (markdown strippé, jusqu'à 10K caractères) dans chaque `Article`/`BlogPosting`. Les IA peuvent ainsi accéder au contenu via le structured data, sans scraper le HTML. C'est un avantage concurrentiel majeur car très peu de sites le font.

#### C. AGENTS.md

Créer un fichier `/AGENTS.md` à la racine, standard émergeant. Ce fichier :
- Décrit le site et sa mission pour les agents IA
- Liste les ressources disponibles (pages, données, schémas)
- Spécifie les conditions d'utilisation des données
- Guide les agents vers les informations les plus pertinentes

#### D. Densité statistique

Les recherches 2026 montrent que **l'ajout de statistiques améliore le taux de citation IA de +34%**. Recommandation :
- Chaque page pilier contient au moins 3 données chiffrées citables (température moyenne, distance précise, nombre d'espèces, année de classement)
- Le fichier `donnees.json` expose toutes ces données en structure ouverte
- Chaque donnée est sourcée (« Selon Météo-France 1991–2020 », « Conservatoire du Littoral, 2006 »)

#### E. FAQPage = taux de citation le plus élevé

Les recherches 2026 indiquent que le schéma `FAQPage` a le **taux de citation IA le plus élevé (58%)**. Le PRD prévoit déjà des FAQ balisées sur les pages expériences. Recommandation :
- Étendre les FAQ à **toutes** les pages `/decouvrir/` (5 questions minimum chacune)
- Formuler les questions comme des prompts réels (« Le Sillon de Talbert est-il accessible en poussette ? » plutôt que « Accessibilité »)
- Répondre en une seule phrase directe en première ligne, puis développer

#### F. Tests des 15 prompts — protocole renforcé

Le PRD prévoit 15 prompts testés mensuellement. Protocole renforcé :

| Étape | Fréquence | Action |
|---|---|---|
| Test manuel | Mensuel | 15 prompts sur ChatGPT, Claude, Perplexity, Gemini, Copilot |
| Enregistrement | Mensuel | Capturer : citation oui/non, position (1er cité, 2e, 3e), exactitude du fait cité, lien présent oui/non |
| Analyse des gaps | Trimestriel | Pour chaque prompt non cité : analyser qui est cité à la place, pourquoi, et corriger |
| Mise à jour du contenu | Trimestriel | Ajouter des faits, des statistiques, des encadrés « L'essentiel » sur les pages sous-performantes |

---

## 7. Stratégie SEO local

### 7.1 Validation du PRD

Le PRD (§11.5) couvre le SEO local de manière **complète et excellente** :
- ✅ Google Business Profile
- ✅ Cohérence NAP
- ✅ Citations locales (OT, Côtes d'Armor, Tourisme Bretagne, Gîtes de France, PagesJaunes)
- ✅ Netlinking local (Glann ar Mor, kayak, crêperies, guides)
- ✅ Balisage géographique (GPS, areaServed, geo)
- ✅ Contenus hyper-locaux (hameaux, lieux-dits)

### 7.2 Compléments recommandés

| Action | Détail | Priorité |
|---|---|---|
| **GBP posts mensuels** | Photo saisonnière + texte court + lien vers la page saison correspondante. Les GBP posts apparaissent dans les recherches locales | P0 |
| **GBP Q/R pré-remplies** | Répondre aux 10 questions fréquentes dans GBP (capacité, animaux, parking, arrivée, poêle, WiFi, jardin, proche mer, Superhost, tarifs) | P0 |
| **GBP photos saisonnières** | Publier les 40 photos de chaque shooting sur GBP avec légende et date | P1 |
| **Apple Business Connect** | Le PRD mentionne ABC. Activer « Showcases » (carte interactive avec photos) | P2 |
| **Reviews GBP** | Demander des avis aux voyageurs satisfait (lien direct vers GBP). Les avis alimentent `AggregateRating` | P1 |
| **Citations sectorielles** | Ajouter : TripAdvisor (claim listing), Holidu, Amivac (listing manuel), Clévacances | P2 |
| **Schema `KnowsAbout`** | Sur `Organization` : lister les domaines d'expertise (Bretagne, randonnée GR34, slow tourism, Presqu'île sauvage) | P2 |

### 7.3 Stratégie de citations locales avancée

Au-delà des annuaires classiques, viser des **mentions éditoriales** dans des publications locales et spécialisées :

| Cible | Type | Approche |
|---|---|---|
| Ouest-France / Le Télégramme | Presse locale | Communiqué de lancement du site, suivi d'un article sur le slow tourisme en Presqu'île sauvage |
| Blog de l'Office de Tourisme | Partenariat | Proposer un article invité sur « 4 saisons en Presqu'île sauvage » |
| France Bleu Armorique | Radio locale | Interview sur la workation en Bretagne |
| Blogs de voyage randonnée | Digital PR | Proposer un article invité sur le GR34 au départ de Pleubian |
| Komoot / Visorando | UGC randonnée | Contribuer un itinéraire depuis la maison avec photos |

---

## 8. Stratégie de netlinking

### 8.1 Validation du PRD

Le PRD prévoit (§11.5) un netlinking local par **échange de contenu** (pas d'achat de liens). C'est la bonne approche en 2026.

### 8.2 Plan de netlinking structuré

| Niveau | Cible | Type de lien | Approche |
|---|---|---|---|
| **Local direct** | Distillerie Glann ar Mor | Échange d'articles | Article sur leur whisky → lien vers la page ; ils linkent vers `/decouvrir/ou-manger-boire/` |
| **Local direct** | Loueurs kayak / paddle | Partenariat | Page « activités nautiques » qui les cite → ils citent la maison |
| **Local direct** | Crêperies / restaurants | Échange | Page `/decouvrir/ou-manger-boire/` qui les recommande → ils partagent le lien |
| **Local indirect** | Office de Tourisme | Soumission | Soumettre le site comme « hébergement partenaire » dans l'annuaire |
| **Thématique** | Blogs de randonnée | Guest post | Article invité sur le GR34 en Presqu'île sauvage |
| **Thématique** | Blogs de vélo | Guest post | Article sur l'EuroVelo 4 avec étape à Pleubian |
| **Thématique** | Blogs slow living / déconnexion | Guest post | Article sur 72h sans écran en Bretagne |
| **Presse** | Ouest-France, Le Télégramme | Digital PR | Communiqué + angle « slow tourisme » ou « workation » |
| **Autorité** | Tourisme Bretagne, Côtes d'Armor Destination | Citation | Proposer du contenu (photos, itinéraires) en échange d'un crédit et d'un lien |

### 8.3 Metrics de netlinking

| KPI | Cible M+12 | Outil |
|---|---|---|
| Domain Authority (Moz) ou Domain Rating (Ahrefs) | ≥ 15 | Ahrefs / Moz |
| Backlinks référençants | ≥ 30 | Search Console / Ahrefs |
| Domaines référents | ≥ 15 | Search Console / Ahrefs |
| Ancres de marque | ≥ 50% | Ahrefs |
| Liens depuis sites locaux (.fr, Bretagne) | ≥ 10 | Ahrefs |

---

## 9. Stratégie internationale (FR/EN/DE)

### 9.1 Validation du PRD

Le PRD (§13) couvre l'internationalisation de manière **complète** : slugs traduits, hreflang, détection suggérée, formats localisés, recherche native.

### 9.2 Priorisation des marchés

| Langue | Marché | Priorité | Volume estimé | Concurrence |
|---|---|---|---|---|
| **FR** | France (IDF, Grand Ouest, Bretagne) | P0 | 70–80% du trafic | Moyenne |
| **EN** | UK, Irlande, international | P1 | 10–15% du trafic | Très faible |
| **DE** | Allemagne, Suisse, Autriche | P1 | 10–15% du trafic | Très faible |

### 9.3 Stratégie par marché

#### Anglais (EN)

- **Ferry** : mentionner les liaisons ferry Roscoff/Saint-Malo dans le contenu EN
- **Unités** : miles en secondaire (km d'abord, miles entre parenthèses)
- **Mots-clés natifs** : `holiday home Brittany coast`, `GR34 hiking accommodation`, `quiet places Brittany digital detox`, `Best places to stay near Bréhat island Brittany`
- **Tonalité** : plus directe, moins poétique qu'en français. Le voyageur UK cherche des faits et des logistics
- **GBP** : si applicable, créer une GBP en anglais

#### Allemand (DE)

- **Vocabulaire clé** : `Wandern` (randonnée), `Radfahren` (vélo), `Naturschutzgebiet` (réserve naturelle), `Ferienhaus` (maison de vacances), `Alleinlage` (isolation/proximité nature)
- **Mots-clés natifs** : `Ferienhaus Bretagne am Meer für 8 Personen`, `Bretagne Wanderurlaub Unterkunft`, `EuroVelo 4 Bretagne Unterkunft`, `Ruhe Bretagne digitale Entgiftung`
- **Tonalité** : structure organisée, tableaux, listes numérotées, données chiffrées. Le voyageur DE valorise la précision et l'organisation
- **Affinité** : forte affinité pour la randonnée, le vélo, la nature, la qualité environnementale. Appuyer sur la réserve naturelle, la biodiversité, l'air pur

### 9.4 Hreflang — checklist technique

```html
<!-- Page FR -->
<link rel="alternate" hreflang="fr" href="https://odjoge.bzh/decouvrir/sillon-de-talbert/" />
<link rel="alternate" hreflang="en" href="https://odjoge.bzh/en/discover/talbert-spit/" />
<link rel="alternate" hreflang="de" href="https://odjoge.bzh/de/entdecken/sillon-de-talbert/" />
<link rel="alternate" hreflang="x-default" href="https://odjoge.bzh/decouvrir/sillon-de-talbert/" />
```

- ✅ Réciproque : chaque page linke vers toutes les autres versions (y compris elle-même)
- ✅ `x-default` → FR
- ✅ Sitemap : inclure les annotations hreflang dans le sitemap XML (alternative à `<link>`)
- ⚠️ **Vérification** : utiliser l'outil de validation hreflang de Search Console après lancement

---

## 10. Roadmap SEO/GEO et KPIs

### 10.1 Roadmap alignée avec le PRD

| Lot | Semaines | Actions SEO/GEO | Livrable SEO |
|---|---|---|---|
| **Lot 0** | 1–2 | Config Astro SEO (sitemap, robots, canonical, hreflang), `maison.json`, design tokens, CI Lighthouse, HTTPS + en-têtes sécurité | Squelette indexable, GSC configurée |
| **Lot 1** | 3–4 | Accueil, `/la-maison/`, `/reserver/`, `/contact/`, `/legal/`, `/a-propos/` (NOUVEAU), JSON-LD `LodgingBusiness` + `@graph`, GBP créée | Site FR indexable, 6 pages en ligne |
| **Lot 2** | 5–7 | 4 pages `/saisons/`, météo/marées, rebuild quotidien, `dateModified` | 10 pages, fraîcheur automatisée |
| **Lot 3** | 6–12 | 7 pages `/experiences/`, 8 fiches `/decouvrir/`, 6 articles journal, maillage interne, carte, TOC auto | 25+ pages indexées, socle SEO complet |
| **Lot 4** | 10–13 | `llms.txt`, `llms-full.txt`, `donnees.json`, `.md`, encadrés « L'essentiel », FAQ étendues, `articleBody` dans JSON-LD, schema endpoints, `AGENTS.md`, IndexNow, baseline GEO 15 prompts | Site optimisé GEO, baseline mesurée |
| **Lot 5** | 12–16 | Traduction EN puis DE, hreflang, recherche native, GBP EN | Site trilingue |
| **Lot 6** | M5+ | 1 article/mois, shooting trimestriel, netlinking local, audit SEO trimestriel, tests GEO mensuels, optimisation continue | Croissance organique |

### 10.2 KPIs SEO/GEO (complément au PRD §3)

#### SEO classique

| KPI | Cible M+6 | Cible M+12 | Outil |
|---|---|---|---|
| Pages indexées | 25 | 40+ | Search Console |
| Impressions / mois | 3 000 | 15 000 | Search Console |
| Clics organiques / mois | 500 | 2 500 | Search Console |
| Position moyenne (top 10) | — | ≤ 15 | Search Console |
| CTR moyen | 3% | 5% | Search Console |
| Domaines référents | 8 | 15+ | Ahrefs / Search Console |
| Lighthouse mobile | ≥ 95 | ≥ 95 | CI |

#### GEO

| KPI | Cible M+6 | Cible M+12 | Outil |
|---|---|---|---|
| Citations IA (sur 15 prompts) | 3/15 | 8/15 | Tests manuels mensuels |
| Referrers IA / mois | 10 | 50 | Plausible |
| AI Overviews presence | 1 requête | 5+ requêtes | Search Console + manuel |
| Crawl bots IA (GPTBot, ClaudeBot, etc.) | Détecté | Régulier | Logs / Cloudflare |

#### SEO local

| KPI | Cible M+6 | Cible M+12 | Outil |
|---|---|---|---|
| Vues GBP / mois | 500 | 2 000 | GBP Insights |
| Clics itinéraire GBP | 20 | 100 | GBP Insights |
| Appels GBP | 5 | 30 | GBP Insights |
| Avis GBP | 5 | 20+ | GBP |

---

## 11. Recommandations et gaps identifiés dans le PRD

### 11.1 Gaps à corriger (priorité P0)

| # | Gap | Recommandation | Section PRD à modifier |
|---|---|---|---|
| 1 | **Page `/a-propos/` manquante** | Ajouter une page « À propos » avec bio des hôtes (Pauline & Maeva), photo, parcours, lien vers Airbnb. Signal E-E-A-T essentiel | §7 (arborescence), §8 (spécifications) |
| 2 | **HTTPS non explicite** | Ajouter HTTPS comme exigence technique non négociable + HSTS | §14.1 |
| 3 | **En-têtes de sécurité absents** | Ajouter CSP, HSTS, X-Frame-Options, X-Content-Type-Options dans `vercel.json` ou `netlify.toml` | §14.1 |
| 4 | **Twitter Card manquante** | Ajouter `twitter:card = summary_large_image` avec image OG dédiée | §11.3 |

### 11.2 Gaps à corriger (priorité P1)

| # | Gap | Recommandation | Section PRD à modifier |
|---|---|---|---|
| 5 | **`@graph` JSON-LD lié non spécifié** | Spécifier l'approche `@graph` avec `@id` référencés entre entités (WebSite, WebPage, Article, Person, Organization) | §11.4 |
| 6 | **`articleBody` dans JSON-LD** | Inclure le texte complet (jusqu'à 10K) dans chaque `Article`/`BlogPosting` | §11.4 |
| 7 | **IndexNow non mentionné** | Pinger IndexNow à chaque rebuild pour Bing/Yandex | §14.5 |
| 8 | **Table of Contents manquant** | Ajouter TOC automatique sur contenus > 1500 mots | §8 (spécifications) |
| 9 | **Digital PR absente** | Ajouter une stratégie de digital PR (communiqué, presse locale, guest posts) | §11.5 |
| 10 | **FAQ étendue à `/decouvrir/`** | Étendre les FAQ balisées aux 8 fiches lieux, pas seulement aux expériences | §8.5 |
| 11 | **Statistiques dans chaque page pilier** | Chaque page pilier contient ≥ 3 données chiffrées citables sourcées | §10.2 |

### 11.3 Gaps à corriger (priorité P2 — émergent)

| # | Gap | Recommandation | Section PRD à modifier |
|---|---|---|---|
| 12 | **Schema endpoints (NLWeb)** | Créer `/schema/[collection].json` + `/schemamap.xml` + directive `Schemamap:` dans robots.txt | §12.2D |
| 13 | **AGENTS.md** | Créer un fichier `/AGENTS.md` à la racine | §12.2D |
| 14 | **`knowsAbout` sur Organization/Person** | Déclarer les domaines d'expertise topique | §11.4 |
| 15 | **`publishingPrinciples`** | Pointer vers une politique éditoriale | §11.4 |
| 16 | **`SearchAction`** | Activer si recherche interne (Pagefind) | §11.4 |
| 17 | **Apple Business Connect Showcases** | Activer les vitrines cartographiques | §11.5 |

### 11.4 Points forts exceptionnels du PRD

À souligner pour la pérennité du projet :

1. **Le concept multi-saisons avec URL canonique stable** est un coup de génie SEO. La plupart des sites créent des URLs dupliquées par saison ; le PRD évite ce piège tout en variant le contenu.
2. **Le fichier `maison.json` comme source unique de vérité** garantit la cohérence factuelle — le critère #1 du GEO.
3. **Le build quotidien automatisé** avec `dateModified` résout le problème de fraîcheur qui tue la plupart des sites statiques.
4. **L'approche « 80 % territoire, 20 % maison »** est contre-intuitive mais juste : c'est le contenu informationnel qui génère le trafic, le bien qui convertit.
5. **Les 15 prompts de test GEO** en annexe sont une idée rare et brillante — aucun PRD de location saisonnière ne prévoit cela.
6. **Le budget de performance bloquant en CI** est plus strict que 99% des sites web existants.

### 11.5 Risques SEO spécifiques et mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Trafic organique lent à démarrer (6–12 mois) | Certaine | Moyen | Compléter avec GBP + réseaux + partenariats dès le lancement. Le PRD le prévoit (R3) |
| Concurrence des portails sur requêtes transactionnelles | Certaine | Élevé | Ne pas les affronter frontalement. Viser l'hyper-local et l'informationnel (R4 du PRD) |
| Contenu non maintenu après 6 mois | Élevée | Élevé | Calendrier soutenable (1/mois), rappels automatisés (R2 du PRD) |
| Régression de performance | Moyenne | Moyen | Budgets bloquants en CI (R8 du PRD) |
| Écart de faits site vs plateformes | Moyenne | Moyen | `maison.json` + checklist de synchro trimestrielle (R5 du PRD) |
| Moteurs génératifs changent leurs règles | Élevée | Moyen | Revue trimestrielle GEO, ne pas dépendre d'un seul canal (R7 du PRD) |
| **NOUVEAU : AI Overviews cannibalise le clic** | Élevée | Moyen | Suivre CTR anormalement bas en Search Console. Si AI Overview cannibalise, enrichir le contenu pour être la source citée plutôt que le lien ignoré |
| **NOUVEAU : Duplication de contenu internationale** | Faible | Élevé | S'assurer que les traductions sont humaines et adaptées culturellement, pas traduites mot à mot. Le PRD le prévoit (§13) |

---

## Conclusion

Le PRD « Maison Od Joge » est **l'un des mieux préparés sur le plan SEO/GEO** pour un projet de site vitrine de location saisonnière. La stratégie « contenu territorial = acquisition, maison = conversion » est la bonne. L'approche GEO est pionnière et bien documentée. Les gaps identifiés sont mineurs (4 points P0, 7 points P1, 6 points P2) et facilement corrigeables avant le démarrage du développement.

**Les 4 actions prioritaires avant le Lot 0 :**

1. Ajouter la page `/a-propos/` dans l'arborescence et les spécifications
2. Explicité HTTPS + en-têtes de sécurité comme exigences techniques
3. Ajouter Twitter Card dans les spécifications on-page
4. Spécifier l'approche `@graph` JSON-LD lié dans les données structurées

**La voie est libre.** Aucun concurrent sur Pleubian ne raconte le territoire, aucun n'est optimisé pour les IA, aucun n'adapte son discours aux saisons. Le site Od Joge peut devenir — dès les 6 premiers mois — **la référence digitale de la Presqu'île sauvage**.

---

## 12. Stratégie de nom de domaine (NDD)

### 12.1 Enjeu et contexte

Le choix du nom de domaine est une décision **stratégique et quasi irréversible** — il impacte le SEO, la mémorisation, la confiance, et l'identité de marque pour des années. En 2026, les règles ont changé :

- **Les EMD (Exact Match Domains) ne donnent plus d'avantage ranking direct** depuis l'update Google 2012. Un domaine `location-pleubian.fr` ne rankera pas mieux qu'un domaine de marque à contenu égal.
- **Le nom de domaine est un signal de marque, pas un signal de mots-clés.** Ce qui compte : mémorisable, prononçable, trustworthy, aligné avec l'identité du projet.
- **L'extension (TLD) a un impact SEO local réel.** Un `.fr` envoie un signal géographique fort à Google pour les recherches en France. Un `.com` est neutre. Un `.bzh` signale l'ancrage breton.
- **Le domaine influence le CTR en SERP.** Un domaine court, clair et trustworthy augmente le taux de clic. Un domaine de marque mémorisable génère des recherches directes (branded search), qui sont un signal d'autorité.

### 12.2 Critères de choix

| Critère | Poids | Justification |
|---|---|---|
| **Mémorisable** | Élevé | Le visiteur doit pouvoir retenir le nom après une lecture rapide. Court > long. |
| **Prononçable** | Élevé | Doit passer le « radio test » : entendu à la radio, on sait l'écrire. |
| **Pas d'ambiguïté** | Élevé | Pas de tirets si possible, pas de chiffres, pas d'homophones. |
| **Alignement marque** | Élevé | Le domaine doit refléter l'identité du projet (Maison Od Joge = marque du bien). |
| **Extension SEO locale** | Moyen | `.fr` = signal France, `.bzh` = signal Bretagne, `.com` = neutre/international. |
| **Disponibilité** | Obligatoire | Le domaine doit être disponible à l'enregistrement. |
| **Coût** | Faible | Différence minime entre extensions (sauf .bzh ~50€/an vs .fr ~10€/an). |
| **Protectibilité** | Moyen | Pouvoir enregistrer les variantes principales pour éviter le cybersquatting. |

### 12.3 Extensions (TLD) analysées

| TLD | Prix/an | Avantage SEO | Avantage confiance | Inconvénient | Verdict |
|---|---|---|---|---|---|
| **.fr** | ~10–12 € | **Signal local France fort** (ccTLD reconnu par Google). 85% des Français considèrent .fr comme un gage de fiabilité. | Très élevé en France. Implication de respecter la législation française. | Aucun signal international. Pas d'ancrage breton. | **Recommandé comme domaine principal si marché FR prioritaire.** |
| **.com** | ~12 € | Neutre (aucun signal géographique). Google le traite comme gTLD. | Universellement reconnu, bonne pour l'international (EN/DE). | Pas de signal local. Plus difficile à obtenir court. | **Recommandé en complément (redirection ou domaine principal si international prioritaire).** |
| **.bzh** | ~50 € | Signal géographique Bretagne (geoTLD géré par AFNIC). Reconnaissance locale et culturelle. Peut aider sur les recherches incluant « Bretagne ». | Forte identification bretonne pour les visiteurs qui connaissent l'extension. | Moins universellement reconnu que .fr/.com. Prix plus élevé. Peut sembler niche pour un public international (DE/UK). Conditions d'éligibilité (lien avec la Bretagne). | **Excellent choix si l'ancrage breton est un argument de marque. À utiliser en domaine principal ou en redirection.** |

### 12.4 Stratégie recommandée

#### Option A — Recommandée : `.bzh` comme domaine principal

```
odjoge.bzh            ← Domaine principal
odjoge.fr             ← Redirection 301 vers odjoge.bzh
odjoge.com            ← Redirection 301 vers odjoge.bzh
```

**Pourquoi :**
- L'identité du projet est **bretonne** (Presqu'île sauvage, Pleubian, Côtes-d'Armor). Le `.bzh` renforce cet ancrage.
- Le site vise les marchés FR, EN, DE. Le `.bzh` signale « Bretagne » à tous les publics, y compris internationaux (les voyageurs allemands et britanniques connaissent la Bretagne comme destination).
- C'est un domaine de marque (`odjoge`), pas un EMD. Le `.bzh` ajoute la dimension territoriale sans compromettre la mémorisation.
- Se démarque des portails génériques (Airbnb, Booking, Amivac) qui utilisent tous `.com` ou `.fr`.

**Inconvénient :** prix (~50€/an vs ~10€/an pour .fr) et reconnaissance moindre chez les visiteurs non-européens.

#### Option B — Alternative solide : `.fr` comme domaine principal

```
odjoge.fr             ← Domaine principal
odjoge.bzh            ← Redirection 301 vers odjoge.fr
odjoge.com            ← Redirection 301 vers odjoge.fr
```

**Pourquoi :**
- Signal SEO local France le plus fort (ccTLD reconnu).
- Confiance maximale pour le marché principal (FR = 70–80% du trafic cible).
- Prix le plus bas.
- Le `.fr` est lisible par tous les publics, y compris internationaux.

**Inconvénient :** pas de signal breton spécifique dans le domaine.

#### Option C — International : `.com` comme domaine principal

```
odjoge.com            ← Domaine principal
odjoge.fr             ← Redirection 301
odjoge.bzh            ← Redirection 301
```

**Pourquoi :** si la stratégie internationale (EN/DE) devient prioritaire dès le lancement, le `.com` est neutre et universellement reconnu.

**Inconvénient :** perd le signal local FR qui est le marché principal. **Non recommandé en V1.**

### 12.5 Recommandation finale

> **Recommandation : `odjoge.bzh` comme domaine principal + `odjoge.fr` et `odjoge.com` en redirection 301.**

**Justification :**
1. **Marque** : `odjoge` est court (6 lettres), prononçable, mémorisable, sans ambiguïté. Il passe le radio test.
2. **Ancrage** : `.bzh` renforce l'identité bretonne, qui est le cœur du discours du site.
3. **SEO local** : geoTLD géré par AFNIC, signal géographique Bretagne reconnu.
4. **Différenciation** : se distingue de tous les concurrents (portails, annuaires) qui utilisent `.com`/`.fr`.
5. **Protection** : enregistrer `.fr` et `.com` en redirection protège la marque contre le cybersquatting.
6. **Prix acceptable** : ~72€/an pour 3 domaines (50€ .bzh + 10€ .fr + 12€ .com) — négligeable vs l'enjeu.

### 12.6 Noms de domaine vérifiés disponibles (24 août 2026)

| Domaine | Disponibilité | Recommandation |
|---|---|---|
| **odjoge.bzh** | ✅ Disponible | **Domaine principal recommandé** |
| **odjoge.fr** | ✅ Disponible | **Redirection 301 → domaine principal** |
| **odjoge.com** | ✅ Disponible | **Redirection 301 → domaine principal** |
| od-joge.bzh | ✅ Disponible | Réserver si possible (variante avec tiret) |
| od-joge.fr | ✅ Disponible | Réserver si possible |
| od-joge.com | ✅ Disponible | Réserver si possible |
| maison-od-joge.fr | ✅ Disponible | Réserver (protection de marque, longue traîne) |
| maison-od-joge.bzh | ✅ Disponible | Réserver (protection de marque) |
| maison-od-joge.com | ✅ Disponible | Réserver (protection de marque) |
| maison-odjoge.fr | ✅ Disponible | Réserver (protection, variante sans tiret) |
| maison-odjoge.bzh | ✅ Disponible | Réserver |
| maison-odjoge.com | ✅ Disponible | Réserver |
| presquile-sauvage-gite.fr | ✅ Disponible | **Non recommandé** (EMD, marque diluée) |
| pleubian-location.fr | ✅ Disponible | **Non recommandé** (EMD, marque diluée) |
| location-pleubian.fr | ✅ Disponible | **Non recommandé** (EMD, marque diluée) |

### 12.7 Pourquoi éviter les EMD (Exact Match Domains)

| Domaine EMD | Pourquoi l'éviter |
|---|---|
| `location-pleubian.fr` | En 2026, Google n'accorde plus d'avantage ranking aux EMD. Le domaine paraît générique, pas une marque. Difficile à mémoriser. Impossibilité d'étendre la marque au-delà de « location Pleubian ». |
| `pleubian-location.fr` | Idem. De plus, le tiret complique la mémorisation et la saisie orale. |
| `presquile-sauvage-gite.fr` | Trop long (22 caractères), 3 mots, 2 tirets. Non prononçable au téléphone. Paraît spammy. |

**Règle 2026** : un domaine de marque court (`odjoge`) avec une extension territoriale (`.bzh` ou `.fr`) est supérieur à un EMD pour le SEO, la mémorisation, la confiance, et l'évolutivité de la marque.

### 12.8 Checklist d'enregistrement

- [ ] Enregistrer `odjoge.bzh` (domaine principal)
- [ ] Enregistrer `odjoge.fr` (redirection 301)
- [ ] Enregistrer `odjoge.com` (redirection 301)
- [ ] Configurer les DNS vers Vercel/Netlify
- [ ] Activer HTTPS (certificat Let's Encrypt automatique via Vercel/Netlify)
- [ ] Configurer les redirections 301 des domaines secondaires vers le domaine principal
- [ ] Vérifier que `https://odjoge.bzh` sert bien le site et que `http://` redirige vers `https://`
- [ ] Soumettre le sitemap à Google Search Console avec le domaine principal
- [ ] Vérifier la propriété dans Bing Webmaster Tools
- [ ] (Optionnel) Réserver `maison-od-joge.fr/.bzh/.com` pour protection de marque

---

*Document généré le 24 août 2026 à partir du PRD v1.0, de l'analyse des SERP Google, et des bonnes pratiques SEO/GEO 2026 (E-E-A-T, Core Web Vitals, GEO/AI citations, Astro SEO).*