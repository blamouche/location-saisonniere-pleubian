# User Stories — Développement du site Maison Od Joge

| | |
|---|---|
| **Document** | Backlog de développement (User Stories) |
| **Source** | [`PRD.md`](./PRD.md) v1.0 — toute US référence sa section source |
| **Version** | 1.0 — 24 août 2026 |
| **Statut** | Backlog initial, à transformer en issues au fil de l'avancement |

---

## Comment lire ce document

- Chaque **Epic** correspond à un **lot de la roadmap** (§16 du PRD).
- Chaque **US** suit le format *En tant que … je veux … afin de …*, avec des critères
  d'acceptation vérifiables et une référence à la section du PRD qui fait autorité en cas
  de doute.
- **Priorité** : `Must` (bloque la livraison du lot) · `Should` (attendu mais peut glisser
  au lot suivant sans le remettre en cause) · `Could` (amélioration, non bloquant).
- Les ID (`US-0xx`) sont stables : à la création d'issues GitHub, reprendre l'ID dans le
  titre (`[US-014] ...`) pour garder la traçabilité avec ce document.
- Certaines US regroupent plusieurs pages qui partagent un même gabarit (les 7 pages
  `/experiences/`, les 8 fiches `/decouvrir/`) : le tableau de contenu est le critère
  d'acceptation, le gabarit lui-même est une US séparée.

---

## 0. Stratégie visuels — placeholders génériques (V0)

Décision produit pour permettre au développement d'avancer **sans attendre les 4
shootings saisonniers** (§6.5 et §16 du PRD) :

- Toutes les US qui impliquent un visuel (hero, galerie, OG image, portraits des hôtes…)
  sont livrables avec des **visuels génériques placeholder**, tant que le shooting réel
  n'est pas disponible. Ce n'est **jamais un critère bloquant** de lot.
- **Provenance** : implémenté en Lot 0/1 sous forme de visuels **générés localement**
  (SVG à-plats colorés + libellé, via `scripts/generate-placeholders.mjs`) plutôt que de
  photos de stock téléchargées — zéro dépendance réseau, zéro question de licence, et
  conforme de fait au budget perf « 0 requête tierce sur le chemin critique » (§14.4 du
  PRD). Des photos libres de droits (Unsplash/Pexels ou équivalent) téléchargées en local
  restent une alternative possible si un rendu plus « photo » est souhaité avant les
  shootings réels — la convention de nommage ci-dessous s'applique dans les deux cas.
- **Rangement** : `public/medias/placeholder/<saison|section>/…`, séparé des vrais
  médias qui iront dans `public/medias/`. Un préfixe de nom de fichier `placeholder-`
  permet un `grep` global pour retrouver tout ce qui reste à remplacer.
- **Formats** : mêmes contraintes que les vrais visuels (16:9, 4:5, 1:1, `alt` renseigné)
  pour ne pas casser les composants une fois les vraies photos livrées — seul le contenu
  du fichier change.
- **Vidéos hero saisonnières** : en placeholder, la section vidéo peut être simplement
  désactivée (image statique seule) plutôt que remplacée par une fausse vidéo — c'est
  l'image qui porte l'essentiel du message.
- **Conséquence sur le gating de saison** (§16, note Lot 1 du PRD) : la version originale
  du PRD prévoit de n'afficher que les saisons déjà photographiées. Avec cette stratégie
  placeholder, **les 4 saisons peuvent être activées dès le Lot 2** pour valider
  l'expérience multi-saisons de bout en bout ; le remplacement des placeholders par les
  vraies photos est traité comme travail continu (voir US-070).
- **Sortie de cette stratégie** : chaque shooting réel remplace les placeholders de sa
  saison au fil de l'eau (US-070, Lot 6) — aucune US de contenu n'a besoin d'être rouverte
  pour ça, seuls les fichiers médias changent.

---

## 0bis. Contrainte technique — export 100 % statique, URLs SEO-friendly

Contrainte transverse, valable pour **toutes** les US de code (rappelée en détail en
§14.1 du PRD) :

- `npm run build` doit produire un dossier `dist/` de **fichiers HTML/CSS/JS/assets
  purs**, consultables **sans serveur applicatif ni runtime Node** — un simple serveur de
  fichiers statiques suffit. Node n'intervient qu'au build et en CI, jamais en
  production.
- Aucun adaptateur SSR/serverless Astro (`@astrojs/vercel` en mode fonctions,
  `@astrojs/netlify` en mode fonctions, etc.) ne doit être installé : `output: 'static'`
  explicite dans `astro.config.mjs`.
- Formulaires, newsletter et événements analytics restent des appels **côté client** vers
  des services tiers — jamais une route serveur du site.
- **URLs SEO-friendly partout** : lisibles, minuscules, mots séparés par des tirets, sans
  paramètre ni extension technique, slash final (`/decouvrir/sillon-de-talbert/`, jamais
  `/page.php?id=12` ni `/decouvrir/sillon-de-talbert.html`).
- Toute US qui touche à l'hébergement (US-009) ou au routing (US-001, US-011, US-049,
  US-061) doit être vérifiée contre cette contrainte avant d'être cochée.

---

## Sommaire des epics

| Epic | Lot PRD (§16) | Objectif | US |
|---|---|---|---|
| [Epic 0](#epic-0--fondations-techniques-lot-0) | Lot 0 | Squelette technique déployé | US-001 → US-012 |
| [Epic 1](#epic-1--le-bien--mise-en-ligne-v1-fr-lot-1) | Lot 1 | Site vitrine FR complet, mise en ligne | US-013 → US-028 |
| [Epic 2](#epic-2--expérience-multi-saisons-lot-2) | Lot 2 | Les 4 saisons fonctionnelles | US-029 → US-038 |
| [Epic 3](#epic-3--contenu-seo--guide-du-territoire-lot-3) | Lot 3 | Guide du territoire, socle SEO | US-039 → US-050 |
| [Epic 4](#epic-4--geo--generative-engine-optimization-lot-4) | Lot 4 | Optimisation moteurs génératifs | US-051 → US-060 |
| [Epic 5](#epic-5--international-lot-5) | Lot 5 | Site trilingue FR/EN/DE | US-061 → US-067 |
| [Epic 6](#epic-6--optimisation-continue-lot-6) | Lot 6 | Cadence éditoriale, itération | US-068 → US-072 |

---

## Epic 0 — Fondations techniques (Lot 0)

> **Livrable de lot** : squelette déployé, une saison fonctionnelle, Lighthouse ≥ 95.

### US-001 — Scaffolding du projet Astro + Tailwind
**En tant que** développeur, **je veux** un projet Astro 5 + Tailwind CSS 4 initialisé avec
la structure de dépôt cible (`src/components`, `src/layouts`, `src/content`, `src/data`,
`src/pages`, `src/styles`, `public/`, `scripts/`), **afin de** disposer d'une base commune
pour construire toutes les pages du site.

**Critères d'acceptation**
- [x] `npm run dev` et `npm run build` fonctionnent sans erreur sur un commit vide de contenu.
- [x] `output: 'static'` explicite dans `astro.config.mjs`, aucun adaptateur SSR/serverless installé — `npm run build` produit un `dist/` en HTML pur, servable sans runtime Node (voir [§0bis](#0bis-contrainte-technique--export-100--statique-urls-seo-friendly)).
- [x] Arborescence conforme à §14.2 du PRD.
- [x] Tailwind configuré pour lire les design tokens en variables CSS (pas de couleurs en dur dans la config).

**Priorité** : Must · **Réf. PRD** : §14.1, §14.2

### US-002 — `maison.json`, source unique de vérité
**En tant que** développeur, **je veux** un fichier `src/data/maison.json` regroupant tous
les faits factuels du bien (capacité, chambres, équipements, coordonnées, horaires,
règles), **afin de** ne jamais dupliquer une donnée en dur dans une page (contrainte du
`CLAUDE.md` du dépôt).

**Critères d'acceptation**
- [x] Schéma Zod validant la structure du JSON au build.
- [x] Toutes les données du tableau §1.1 du PRD sont présentes et typées.
- [x] Une page de test consomme `maison.json` et affiche au moins 3 champs, prouvant le circuit de données.

**Priorité** : Must · **Réf. PRD** : §14.3

### US-003 — Design tokens & mécanisme de thématisation saisonnière
**En tant que** développeur, **je veux** un jeu de design tokens (couleurs, ombres,
courbes, texture) exposé en variables CSS sur `<html data-season="...">`, **afin de**
poser le mécanisme technique qui portera les 4 palettes saisonnières du Lot 2.

**Critères d'acceptation**
- [ ] Tokens `--color-surface`, `--color-ink`, `--color-accent`, `--color-season-*` définis (§9.2 du PRD).
- [ ] Changer l'attribut `data-season` change visuellement la page sans recharger.
- [x] Une seule saison (celle en cours) est peuplée à ce stade ; les 3 autres réutilisent temporairement les mêmes valeurs.

**Priorité** : Must · **Réf. PRD** : §9.2, §6.4

### US-004 — Layouts de base
**En tant que** développeur, **je veux** les layouts `Base`, `Page`, `Guide`, `Article`,
**afin de** que chaque nouvelle page hérite automatiquement du head SEO, de la structure
de titres, du header/footer et du balisage `BreadcrumbList`.

**Critères d'acceptation**
- [x] Chaque layout expose des slots pour meta title/description, OG, canonical, JSON-LD.
- [x] `BreadcrumbList` généré automatiquement à partir de l'arborescence de la page.
- [ ] Un seul `<h1>` possible par page (erreur de build sinon).

**Priorité** : Must · **Réf. PRD** : §8, §11.3

### US-005 — Header, footer et navigation responsive
**En tant que** visiteur, **je veux** une navigation complète en desktop et un menu en
tiroir (*drawer*) en mobile, **afin de** trouver n'importe quelle page en 3 clics maximum
depuis n'importe où sur le site.

**Critères d'acceptation**
- [x] Navigation clavier complète, focus visible personnalisé.
- [x] Drawer mobile ≥ 44 px de zone tactile, fermeture au clavier (Échap) et au clic extérieur.
- [ ] Emplacement réservé dans le header pour le futur sélecteur de saison (US-030) et le futur sélecteur de langue (US-064).

**Priorité** : Must · **Réf. PRD** : §9.3, §9.4

### US-006 — Typographie et polices auto-hébergées
**En tant que** visiteur, **je veux** une lecture confortable sans dépendance à un CDN de
polices tiers, **afin de** garantir la performance et la confidentialité du chargement de
page.

**Critères d'acceptation**
- [x] 2 familles maximum (`--font-display`, `--font-body`), WOFF2 auto-hébergées, sous-ensemble latin + latin-ext.
- [ ] `font-display: swap`, préchargement de la seule graisse critique.
- [x] Échelle typographique fluide en `clamp()`, 16 px → 20 px sur le corps de texte.

**Priorité** : Must · **Réf. PRD** : §9.2

### US-007 — Composant image saisonnier + convention placeholder
**En tant que** développeur, **je veux** un composant d'image standard (Astro Image +
Sharp, `srcset` 5 largeurs, AVIF/WebP + fallback) qui sait consommer aussi bien un vrai
média qu'un placeholder, **afin de** ne jamais avoir à toucher au code de page quand un
visuel définitif remplace un placeholder.

**Critères d'acceptation**
- [x] Le composant impose `width`/`height` et un `alt` non vide.
- [x] Dossier `public/medias/placeholder/` créé, avec au moins 6 images génériques libres de droits téléchargées en local (littoral, jardin, intérieur, poêle à bois).
- [x] Convention de nommage `placeholder-*` documentée dans `docs/README.md` ou un `CONTRIBUTING.md` court.

**Priorité** : Must · **Réf. PRD** : §6.5, §11.3 · voir [§0](#0-stratégie-visuels--placeholders-génériques-v0)

### US-008 — CI GitHub Actions
**En tant que** mainteneur, **je veux** une CI qui lint, vérifie les liens, valide le
Schema.org et bloque en cas de régression de performance, **afin de** ne jamais publier
une régression silencieuse.

**Critères d'acceptation**
- [ ] Job lint (ESLint/Prettier ou équivalent Astro) sur chaque PR.
- [ ] Job `check-links.mjs` détectant les liens internes/externes cassés.
- [ ] Job Lighthouse CI avec budgets bloquants issus de §14.4 du PRD.
- [ ] Job de validation Schema.org (résultats enrichis) sur les pages ayant du JSON-LD.
- [ ] Build échoue si une page orpheline est détectée (préparation US-047).

**Priorité** : Must · **Réf. PRD** : §14.1, §14.4, §14.5

### US-009 — Hébergement et nom de domaine
**En tant que** propriétaire du site, **je veux** le projet déployé sur Vercel ou Netlify
avec le nom de domaine définitif branché, **afin d'**avoir une URL de production stable
dès le premier lot.

**Critères d'acceptation**
- [ ] Déploiement automatique sur push `main`, preview sur chaque PR.
- [ ] Plateforme utilisée en mode **statique pur** (pas de fonctions serverless/Edge Functions actives pour servir les pages) — voir [§0bis](#0bis-contrainte-technique--export-100--statique-urls-seo-friendly).
- [ ] Nom de domaine tranché (Q1 du PRD §19) et DNS configuré, HTTPS actif.
- [ ] Variables d'environnement (clés API météo/marées, etc.) gérées côté plateforme, jamais en dur dans le dépôt.

**Priorité** : Must · **Réf. PRD** : §14.1, §19 (Q1)

### US-010 — Accessibilité baseline (WCAG 2.2 AA)
**En tant que** visiteur utilisant un lecteur d'écran ou le clavier seul, **je veux** un
squelette de site déjà conforme WCAG 2.2 AA, **afin de** ne pas avoir à rattraper
l'accessibilité après coup sur des dizaines de pages.

**Critères d'acceptation**
- [x] Skip link vers le contenu principal.
- [x] Contraste ≥ 4,5:1 vérifié sur les tokens de la saison en cours.
- [ ] Un test VoiceOver ou NVDA passe sur le squelette (accueil vide + navigation).

**Priorité** : Must · **Réf. PRD** : §9.4

### US-011 — i18n scaffolding (structure, sans contenu traduit)
**En tant que** développeur, **je veux** la config i18n native d'Astro en place (routes
`fr` racine, `en/`, `de/`) même si seul le FR est peuplé, **afin de** ne pas avoir à
réorganiser l'arborescence des routes au Lot 5.

**Critères d'acceptation**
- [ ] Routing i18n actif, `x-default` pointant sur FR.
- [ ] Sélecteur de langue affiché uniquement si un contenu existe dans la langue cible (pas de lien vers du vide).
- [x] Aucune régression sur les URLs FR existantes.

**Priorité** : Should · **Réf. PRD** : §13

### US-012 — Livrable Lot 0 : squelette déployé
**En tant que** product owner, **je veux** vérifier que le squelette technique complet est
en ligne, **afin de** valider le passage au Lot 1.

**Critères d'acceptation**
- [ ] Lighthouse mobile ≥ 95 sur la page d'accueil vide.
- [x] Une saison (celle en cours) est fonctionnelle de bout en bout.
- [ ] CI verte sur `main`.

**Priorité** : Must · **Réf. PRD** : §16 (Lot 0)

---

## Epic 1 — Le bien / mise en ligne V1 FR (Lot 1)

> **Livrable de lot** : site vitrine complet en français, une saison. **Mise en ligne.**

### US-013 — Accueil : hero, pitch et chiffres clés
**En tant que** visiteur, **je veux** comprendre en 8 secondes ce qu'est ce lieu et pour
qui, **afin de** décider immédiatement si je continue ma visite.

**Critères d'acceptation**
- [ ] Hero plein écran avec image saisonnière (placeholder accepté), H1, accroche, CTA principal + secondaire ; LCP < 1,8 s.
- [x] Bloc « pitch en 3 lignes » extractible (candidat à l'encadré GEO du Lot 4).
- [x] Chiffres clés (8 voyageurs, 4 chambres, 2 SDB, jardin clos, 5 min de la mer, Superhost) issus de `maison.json`, jamais en dur.

**Priorité** : Must · **Réf. PRD** : §8.1 (sections 1, 3, 4)

### US-014 — Accueil : barre de contexte, aperçu maison et carte
**En tant que** visiteur, **je veux** voir un aperçu de la maison et du territoire dès
l'accueil, **afin de** me projeter avant de cliquer plus loin.

**Critères d'acceptation**
- [x] Barre de contexte (saison en cours, météo du jour, marées, lever/coucher du soleil) — données réelles ou statiques temporaires si l'API météo/marées n'est pas encore branchée (US-032).
- [x] Grid asymétrique de 6 photos (placeholders acceptés) + lien vers la galerie.
- [ ] Carte cliquable ou MapLibre légère avec au moins 3 points d'intérêt (version complète à 12 POI en US-048).

**Priorité** : Must · **Réf. PRD** : §8.1 (sections 2, 5, 8)

### US-015 — Accueil : preuve sociale, conversion et newsletter
**En tant que** visiteur convaincu, **je veux** un chemin clair vers la réservation et un
moyen de rester en contact, **afin de** passer à l'action à mon rythme.

**Critères d'acceptation**
- [ ] Bloc « 5 raisons de venir » avec liens vers `/experiences/`.
- [ ] 3 avis + note globale, balisés `AggregateRating` (avis réels uniquement — voir US-050).
- [x] Bandeau conversion sticky mobile vers les plateformes ; formulaire newsletter avec promesse claire (« 1 email par saison »).

**Priorité** : Must · **Réf. PRD** : §8.1 (sections 6, 7, 9, 10, 11)

### US-016 — Page `/la-maison/`
**En tant que** voyageur, **je veux** visiter la maison pièce par pièce et connaître tous
les équipements, **afin de** vérifier qu'elle correspond exactement à mon besoin avant de
réserver.

**Critères d'acceptation**
- [x] Visite guidée pièce par pièce, plan schématique des deux niveaux (visuels placeholder acceptés).
- [x] Tableau d'équipements catégorisé (cuisine, chambres, extérieur, confort, sécurité, accessibilité) généré depuis `maison.json`.
- [x] Section « ce que la maison n'est pas » (pas d'animaux, pas de piscine, pas de vue mer panoramique).
- [x] Au moins 2 scénarios de configuration de couchages (2 familles / 4 couples / 1 famille + grands-parents).

**Priorité** : Must · **Réf. PRD** : §8.2

### US-017 — Page `/la-maison/galerie/`
**En tant que** voyageur, **je veux** parcourir toutes les photos filtrées par pièce ou
par saison, **afin de** me faire une idée précise et complète du bien.

**Critères d'acceptation**
- [ ] Filtres par pièce et par saison fonctionnels sans rechargement de page.
- [x] Fonctionne avec un jeu de photos placeholder tant que le vrai shooting n'est pas livré.
- [x] Navigation clavier complète dans la lightbox/visionneuse.

**Priorité** : Must · **Réf. PRD** : §7, §8.2

### US-018 — Page `/la-maison/pratique/`
**En tant que** voyageur qui vient de réserver, **je veux** toutes les informations
pratiques d'arrivée et de séjour au même endroit, **afin de** ne pas avoir à écrire à
l'hôte pour des questions déjà répondues.

**Critères d'acceptation**
- [x] Arrivée autonome (boîte à clés), horaires (15h/17h selon saison), règlement intérieur.
- [x] FAQ séjour couvrant au moins 8 questions récurrentes.
- [x] Toutes les données viennent de `maison.json`.

**Priorité** : Must · **Réf. PRD** : §7, §8.2

### US-019 — Page `/reserver/`
**En tant que** voyageur convaincu, **je veux** une page de conversion sans distraction
avec tarifs indicatifs, disponibilités et liens vers les plateformes, **afin de** réserver
en un minimum de clics.

**Critères d'acceptation**
- [x] Grille tarifaire indicative par saison (fourchettes, pas de prix ferme).
- [ ] 3 boutons plateformes avec liens UTM trackés, ouverture dans un nouvel onglet.
- [x] Conditions affichées : durée minimale, arrivée/départ, caution, ménage, taxe de séjour.
- [x] FAQ réservation (8–10 questions), balisée `FAQPage`.
- [x] Calendrier de disponibilité en lecture seule : peut être livré en placeholder statique si `fetch-ical.mjs` (US-020) n'est pas encore prêt, à condition d'un message explicite « disponibilités indicatives, nous confirmer par message ».

**Priorité** : Must · **Réf. PRD** : §8.3

### US-020 — Import iCal des disponibilités
**En tant que** développeur, **je veux** un script `fetch-ical.mjs` qui importe le
calendrier Airbnb/Booking au build quotidien, **afin d'**alimenter le calendrier
en lecture seule de `/reserver/` sans backend.

**Critères d'acceptation**
- [ ] Le script tourne au build et échoue proprement (sans casser le build) si la source iCal est indisponible.
- [ ] Le calendrier affiché sur `/reserver/` distingue dispo / indisponible / inconnu.
- [ ] Fréquence documentée (quotidienne, §14.5 du PRD).

**Priorité** : Should · **Réf. PRD** : §8.3, §14.5, §19 (Q3)

### US-021 — Formulaire de contact
**En tant que** visiteur, **je veux** poser une question sans passer par une plateforme,
**afin de** obtenir une réponse directe de l'hôte.

**Critères d'acceptation**
- [x] Formulaire Netlify Forms / Formspree + honeypot anti-spam, sans backend custom.
- [x] Validation accessible (erreurs annoncées au lecteur d'écran).
- [x] Événement analytics `envoi_contact` déclenché à l'envoi réussi.

**Priorité** : Must · **Réf. PRD** : §7, §15.1

### US-022 — Pages `/legal/`
**En tant que** visiteur, **je veux** trouver les mentions légales, la politique de
confidentialité et le numéro d'enregistrement du meublé de tourisme, **afin de** vérifier
la conformité et la légitimité de l'offre.

**Critères d'acceptation**
- [ ] Mentions légales complètes (éditeur, hébergeur, directeur de publication).
- [x] Politique de confidentialité RGPD (base légale newsletter, absence de cookie tiers).
- [x] Numéro d'enregistrement affiché — **bloquant pour la mise en ligne réelle** si non obtenu (R9, Q5 du PRD) ; peut être livré avec un texte temporaire « en cours d'obtention » en environnement de préproduction uniquement.

**Priorité** : Must · **Réf. PRD** : §15.2, §17 (R9), §19 (Q5)

### US-023 — JSON-LD `LodgingBusiness` / `Accommodation`
**En tant qu'**agent de recherche ou moteur génératif, **je veux** trouver un balisage
structuré complet sur l'accueil et `/la-maison/`, **afin de** représenter fidèlement
l'offre (capacité, aménités, localisation) sans avoir à l'extraire du texte libre.

**Critères d'acceptation**
- [x] `LodgingBusiness` + `VacationRental` sur l'accueil et `/la-maison/`, alimentés par `maison.json`.
- [x] `amenityFeature`, `checkinTime`, `petsAllowed: false` présents.
- [ ] 0 erreur au test des résultats enrichis Google et au validateur Schema.org (intégré à la CI, US-008).

**Priorité** : Must · **Réf. PRD** : §11.4

### US-024 — Page 404 utile
**En tant que** visiteur arrivant sur un lien mort, **je veux** une page 404 qui
me propose une recherche et les pages principales, **afin de** ne pas quitter le site
immédiatement.

**Critères d'acceptation**
- [x] Liens vers les 6 pages principales.
- [x] Champ de recherche ou suggestions contextuelles.
- [x] Statut HTTP 404 réellement renvoyé (pas un 200 déguisé).

**Priorité** : Should · **Réf. PRD** : §11.3

### US-025 — Suivi analytics (Plausible)
**En tant que** product owner, **je veux** que les événements clés soient trackés dès la
mise en ligne, **afin de** mesurer l'usage sans attendre le Lot 6.

**Critères d'acceptation**
- [ ] Plausible installé, sans bandeau de consentement nécessaire (RGPD, pas de cookie tiers).
- [ ] Événements custom `cta_reserver_clic`, `sortie_airbnb`, `sortie_booking`, `inscription_newsletter`, `envoi_contact` implémentés.
- [ ] Vérifiable manuellement (un clic génère bien l'événement en dashboard).

**Priorité** : Must · **Réf. PRD** : §15.1

### US-026 — Newsletter (double opt-in)
**En tant que** visiteur intéressé par le lieu hors d'une réservation immédiate, **je
veux** m'inscrire à une newsletter légère, **afin de** rester informé sans être sollicité
trop souvent.

**Critères d'acceptation**
- [ ] Buttondown ou Brevo (hébergement UE), double opt-in.
- [x] Promesse affichée : « Les 4 saisons de la Presqu'île » — 1 email par saison.
- [x] Formulaire accessible, présent sur l'accueil (US-015) et en footer global.

**Priorité** : Should · **Réf. PRD** : §8.1, §14.1

### US-027 — Fiche Google Business Profile
**En tant que** propriétaire du site, **je veux** une fiche Google Business Profile
créée et cohérente avec le site, **afin de** capter la recherche locale dès la mise en
ligne.

**Critères d'acceptation**
- [ ] Fiche créée, catégorie « Location de vacances », lien vers le site.
- [ ] NAP (Nom, Adresse, Téléphone) strictement identique au site et à `maison.json`.
- [ ] Au moins 6 photos publiées (placeholder toléré temporairement, à remplacer en priorité ici car visible publiquement en dehors du site).

**Priorité** : Must · **Réf. PRD** : §11.5

### US-028 — Livrable Lot 1 : mise en ligne
**En tant que** product owner, **je veux** vérifier que le site vitrine FR est complet et
publié, **afin de** ouvrir la phase de contenu et de multi-saisons.

**Critères d'acceptation**
- [ ] Toutes les US Must de l'Epic 1 sont faites.
- [ ] Site accessible publiquement sur le nom de domaine définitif.
- [ ] Sitemap soumis à Google Search Console.

**Priorité** : Must · **Réf. PRD** : §16 (Lot 1)

---

## Epic 2 — Expérience multi-saisons (Lot 2)

> **Livrable de lot** : expérience multi-saisons opérationnelle. Voir [§0](#0-stratégie-visuels--placeholders-génériques-v0)
> pour la stratégie de démarrage avec des visuels placeholder sur les 3 saisons non
> encore photographiées.

### US-029 — 4 jeux de design tokens saisonniers
**En tant que** visiteur, **je veux** que l'identité visuelle du site change selon la
saison affichée, **afin de** ressentir immédiatement l'ambiance du moment (printemps,
été, automne, hiver).

**Critères d'acceptation**
- [ ] 4 palettes définies selon §6.2 du PRD (couleurs, texture/grain).
- [x] Contraste ≥ 4,5:1 vérifié sur les 4 palettes, pas seulement celle par défaut.
- [x] Bascule visuelle immédiate au changement de `data-season`, sans flash de contenu.

**Priorité** : Must · **Réf. PRD** : §6.2, §9.2

### US-030 — Sélecteur de saison
**En tant que** visiteur, **je veux** explorer volontairement une autre saison que celle
en cours, **afin de** me projeter sur une future période de séjour.

**Critères d'acceptation**
- [x] Sélecteur persistant en header (« Voir la maison en… »), accessible au clavier.
- [x] Choix mémorisé (cookie/localStorage) et respecté aux visites suivantes.
- [x] Rappel explicite de la date du jour et lien permanent vers `/reserver/` (mitigation R6 du PRD).

**Priorité** : Must · **Réf. PRD** : §6.1, §17 (R6)

### US-031 — Détermination automatique de la saison + paramètre d'URL
**En tant que** visiteur ou créateur de campagne marketing, **je veux** que la saison
s'affiche par défaut selon la date, ou selon un paramètre `?saison=hiver` dans un lien
partagé, **afin de** générer des liens saisonniers sans dupliquer d'URL ni fragmenter le
SEO.

**Critères d'acceptation**
- [x] Règle de date par défaut correcte pour les 4 saisons (§6.2).
- [x] `?saison=hiver` force l'affichage sans changer l'URL canonique de la page.
- [x] Script client < 2 ko, actif uniquement si choix manuel ou build > 24 h (§6.4).

**Priorité** : Must · **Réf. PRD** : §6.1, §6.4

### US-032 — Build quotidien programmé (saison, météo, marées)
**En tant que** développeur, **je veux** un rebuild automatique quotidien (05h00 UTC) qui
recalcule la saison, la météo, les marées et `dateModified`, **afin de** garantir la
fraîcheur du site sans intervention manuelle.

**Critères d'acceptation**
- [x] `build-season.mjs` et `fetch-tides.mjs` intégrés au pipeline de build.
- [ ] Cron configuré côté Vercel/Netlify.
- [x] Échec de l'appel météo/marées ne bloque pas le build (dégradation gracieuse vers la dernière donnée connue).

**Priorité** : Must · **Réf. PRD** : §6.4, §14.5

### US-033 — Bloc « En ce moment à Pleubian »
**En tant que** visiteur, **je veux** voir 3 à 6 suggestions datées correspondant à la
saison en cours, **afin de** comprendre ce que je peux faire concrètement si je viens
maintenant.

**Critères d'acceptation**
- [x] Contenu distinct pour chacune des 4 saisons (texte réel, visuels placeholder tolérés).
- [ ] Mis à jour au rebuild quotidien si une donnée datée change.
- [x] Présent sur l'accueil (déjà esquissé en US-015) et sur les pages `/saisons/[saison]/`.

**Priorité** : Must · **Réf. PRD** : §8.1 (section 6), §6.3

### US-034 — 4 pages piliers `/saisons/[saison]/`
**En tant que** visiteur cherchant « Bretagne en hiver que faire », **je veux** une page
longue et complète dédiée à chaque saison, **afin de** trouver toutes les informations
utiles à un seul endroit.

**Critères d'acceptation**
- [ ] 1 500–2 500 mots par page, incluant météo moyenne réelle (tableau de données), 10 choses à faire, ouvert/fermé, tarifs, galerie de la saison, 3 témoignages.
- [x] Les 4 pages existent, même si 3 des 4 galeries sont en placeholder.
- [ ] Balisage `FAQPage` et tableaux de faits (préparation GEO, Lot 4).

**Priorité** : Must · **Réf. PRD** : §8.6

### US-035 — Tri saisonnier de la galerie photo
**En tant que** visiteur, **je veux** que la galerie de `/la-maison/galerie/` se
réordonne selon la saison affichée, **afin de** voir en premier les photos les plus
pertinentes au moment où je consulte le site.

**Critères d'acceptation**
- [x] Tri saisonnier appliqué sans masquer les autres photos (toutes restent accessibles, §6.3).
- [x] Fonctionne avec un mélange de vrais médias et de placeholders.

**Priorité** : Should · **Réf. PRD** : §6.3, §8.2

### US-036 — Bandeau tarifs/offre saisonnier
**En tant que** visiteur, **je veux** un message contextualisé à la saison (« dernière
minute », « longs séjours »), **afin de** comprendre l'offre tarifaire pertinente pour la
période qui m'intéresse.

**Critères d'acceptation**
- [x] Message variable selon la saison affichée par le sélecteur (US-030), pas seulement la date réelle.
- [x] Cohérent avec les fourchettes tarifaires de `/reserver/` (US-019).

**Priorité** : Could · **Réf. PRD** : §6.3

### US-037 — Reclassement saisonnier des pages « expérience »
**En tant que** visiteur, **je veux** voir en premier les expériences les plus adaptées à
la saison en cours (ex. GR34 mis en avant au printemps/automne), **afin de** ne pas
perdre de temps sur des suggestions hors-saison.

**Critères d'acceptation**
- [ ] Ordre des 7 pilliers `/experiences/` varie selon `data-season`, sans changer les URLs.
- [ ] Basé sur la colonne « Persona prioritaire »/saison de §6.2 et §10.1 du PRD.

**Priorité** : Could · **Réf. PRD** : §6.3, §10.1

### US-038 — Livrable Lot 2 : multi-saisons opérationnel
**En tant que** product owner, **je veux** vérifier que les 4 saisons sont pleinement
fonctionnelles, **afin de** valider le concept central du site avant d'investir dans le
contenu SEO du Lot 3.

**Critères d'acceptation**
- [x] Les 4 saisons ont leurs tokens, leur page pilier et leur bloc « en ce moment » propres.
- [x] Le sélecteur fonctionne sans rechargement et sans flash de contenu.
- [ ] Écart entre visuels placeholder et visuels réels documenté (liste de suivi pour US-070).

**Priorité** : Must · **Réf. PRD** : §16 (Lot 2), §18

---

## Epic 3 — Contenu SEO / guide du territoire (Lot 3)

> **Livrable de lot** : 25+ pages indexées, socle SEO complet.

### US-039 — Gabarit `/experiences/[pilier]/`
**En tant que** développeur, **je veux** un gabarit réutilisable pour les pages
expérience (hero, promesse, « depuis la maison », propositions concrètes, encadré
pratique, FAQ, liens connexes, CTA), **afin de** publier les 7 pages du pilier sans
recoder la structure à chaque fois.

**Critères d'acceptation**
- [ ] Les 8 blocs de §8.4 du PRD sont implémentés comme sections du gabarit.
- [ ] `FAQPage` balisé automatiquement à partir du frontmatter de contenu.
- [ ] Fonctionne avec un hero en placeholder.

**Priorité** : Must · **Réf. PRD** : §8.4

### US-040 — Contenu des 7 pages `/experiences/`
**En tant que** visiteur avec un centre d'intérêt précis (sport, bien-être, culture…),
**je veux** une page dédiée qui m'aide concrètement à organiser mon séjour, **afin de**
choisir cette maison plutôt qu'une autre pour cette raison précise.

**Critères d'acceptation** — chaque ligne publiée avec 4 à 8 propositions concrètes datées/sourcées :

| Page | Pilier | Statut |
|---|---|---|
| `/experiences/randonnee-gr34/` | Sport | [ ] |
| `/experiences/velo-velomaritime/` | Sport | [ ] |
| `/experiences/nautisme-kayak-voile/` | Sport | [ ] |
| `/experiences/bien-etre-air-marin/` | Bien-être | [ ] |
| `/experiences/deconnexion-slow/` | Déconnexion | [ ] |
| `/experiences/teletravail-workation/` | Déconnexion | [ ] |
| `/experiences/culture-patrimoine/` | Culture | [ ] |

**Priorité** : Must · **Réf. PRD** : §7, §10.1, §10.4

### US-041 — Gabarit `/decouvrir/[lieu]/`
**En tant que** développeur, **je veux** un gabarit « fiche de lieu » optimisé pour
l'extraction (résumé factuel encadré, corps rédigé, conseils d'initié, balisage
`TouristAttraction`/`Place`, encart « à combiner avec »), **afin de** publier les 8
fiches du guide de manière cohérente.

**Critères d'acceptation**
- [ ] Résumé factuel en tête : Où · Temps depuis la maison · Durée de visite · Gratuit/payant · Meilleure saison · Accessible poussette/PMR.
- [ ] `TouristAttraction`/`Place` + coordonnées GPS balisés.
- [ ] Encart « à combiner avec » : 3 liens internes minimum.

**Priorité** : Must · **Réf. PRD** : §8.5

### US-042 — Contenu des 8 fiches `/decouvrir/`
**En tant que** visiteur préparant un séjour, **je veux** des fiches de lieux honnêtes et
précises plutôt que du contenu générique de portail, **afin de** planifier mes sorties
sans mauvaise surprise.

**Critères d'acceptation** — chaque fiche publiée, distances vérifiées **porte-à-porte**
(jamais à vol d'oiseau, contrainte du `CLAUDE.md`) :

| Page | Statut |
|---|---|
| `/decouvrir/sillon-de-talbert/` | [ ] |
| `/decouvrir/presquile-sauvage/` | [ ] |
| `/decouvrir/plages-pleubian/` | [ ] |
| `/decouvrir/ile-de-brehat/` | [ ] |
| `/decouvrir/treguier/` | [ ] |
| `/decouvrir/paimpol-beauport/` | [ ] |
| `/decouvrir/cote-de-granit-rose/` | [ ] |
| `/decouvrir/ou-manger-boire/` | [ ] |

**Priorité** : Must · **Réf. PRD** : §1.2, §7, §8.5

### US-043 — Hub `/journal/` et gabarit article
**En tant que** visiteur curieux, **je veux** un espace éditorial daté avec une vraie
voix d'hôte, **afin de** suivre la vie du territoire au-delà d'une simple fiche
d'annonce.

**Critères d'acceptation**
- [ ] Hub `/journal/` listant les articles triés par date, avec pagination désactivée tant que < 40 articles (§11.3).
- [ ] Gabarit article avec `Article`/`BlogPosting` balisé (`datePublished`, `dateModified`, `author`).
- [ ] Flux RSS/Atom généré (peut être livré ici ou reporté à US-058 du Lot 4).

**Priorité** : Must · **Réf. PRD** : §7, §8.6 (renvoi), §11.4

### US-044 — Premiers articles du journal
**En tant que** visiteur cherchant une réponse précise (« la Bretagne en février, ça vaut
le coup ? »), **je veux** des articles courts et originaux répondant à une vraie
question, **afin de** trouver une information que je ne trouve pas ailleurs.

**Critères d'acceptation** — 6 articles prioritaires du backlog éditorial (§10.4),
900–1 500 mots, chacun avec au moins un fait exclusif :

| Article | Pilier | Statut |
|---|---|---|
| Le GR34 au départ de Pleubian : 5 boucles chronométrées | Sport | [ ] |
| 72 h sans écran à Pleubian : ce qu'on fait à la place | Déconnexion | [ ] |
| La qualité de l'air en Bretagne littorale, en chiffres | Air pur | [ ] |
| Tréguier en une journée : l'itinéraire à pied | Culture | [ ] |
| Pourquoi l'air marin fatigue (et pourquoi c'est une bonne nouvelle) | Bien-être | [ ] |
| Comprendre les marées, et pourquoi ça change tout | Déconnexion | [ ] |

**Priorité** : Should · **Réf. PRD** : §10.3, §10.4

### US-045 — Carte du territoire enrichie (12 POI)
**En tant que** visiteur, **je veux** une carte interactive légère avec les 12 points
d'intérêt du territoire et leur temps de trajet réel, **afin de** visualiser
géographiquement mon futur séjour sans dépendre de Google Maps.

**Critères d'acceptation**
- [ ] MapLibre GL + tuiles OSM auto-hébergées ou statiques, pas d'embed Google.
- [ ] 12 points d'intérêt reliés à leurs fiches `/decouvrir/` ou `/experiences/`.
- [ ] Temps de trajet affiché en minutes, vérifié porte-à-porte (jamais à vol d'oiseau).

**Priorité** : Must · **Réf. PRD** : §8.1 (section 8)

### US-046 — Page `/avis/`
**En tant que** visiteur, **je veux** consulter les avis voyageurs agrégés, **afin de**
me rassurer avant de réserver.

**Critères d'acceptation**
- [ ] Uniquement des avis réels, sourcés et attribués (jamais de faux avis — risque juridique DGCCRF, §15.2).
- [ ] `AggregateRating` + `Review` balisés.
- [ ] Sauvegarde mensuelle des avis plateformes documentée (§14.5), même si le script d'automatisation est reporté au Lot 6.

**Priorité** : Should · **Réf. PRD** : §7, §11.4, §14.5

### US-047 — Contrôle automatisé des pages orphelines et du maillage interne
**En tant que** mainteneur, **je veux** que le build échoue si une page n'a aucun lien
entrant, ou si un pilier n'a pas au moins 6 pages de cluster reliées, **afin de**
garantir la robustesse du maillage interne dès que le nombre de pages augmente.

**Critères d'acceptation**
- [ ] Règles de §11.1 du PRD implémentées en script de vérification, branché sur la CI (US-008).
- [ ] Rapport listant les pages orphelines et les piliers sous-liés.
- [ ] Chaque page de niveau 3 (journal) pointe vers son pilier de niveau 1 avec une ancre exacte.

**Priorité** : Must · **Réf. PRD** : §11.1

### US-048 — Carte de mots-clés appliquée
**En tant que** rédacteur de contenu, **je veux** que chaque page cible une requête
précise de la carte de mots-clés (§11.2 du PRD), **afin de** ne pas publier de contenu
sans intention de recherche claire.

**Critères d'acceptation**
- [ ] Chaque page publiée dans cet epic est associée à ≥ 1 requête de la carte de mots-clés, meta title/description écrits à la main en conséquence.
- [ ] Aucune page ne cible la même requête principale qu'une autre (pas de cannibalisation).

**Priorité** : Should · **Réf. PRD** : §11.2

### US-049 — SEO technique transverse (URLs, canonical, sitemap, images)
**En tant que** mainteneur, **je veux** que toutes les pages produites dans ce lot
respectent les règles techniques SEO (§11.3), **afin de** ne pas avoir à corriger des
dizaines de pages a posteriori.

**Critères d'acceptation**
- [ ] URLs SEO-friendly (lisibles, minuscules, tirets, sans paramètre ni extension technique, slash final) ; canonical auto-référentiel systématique.
- [ ] `sitemap-index.xml` régénéré au build, `lastmod` réel.
- [ ] Images : AVIF + WebP + fallback, `srcset` 5 largeurs, `loading="lazy"` sauf LCP.
- [ ] `robots.txt` référence les sitemaps.

**Priorité** : Must · **Réf. PRD** : §11.3

### US-050 — Livrable Lot 3 : socle SEO complet
**En tant que** product owner, **je veux** vérifier que le guide du territoire est
suffisant pour commencer à générer du trafic organique, **afin de** passer à
l'optimisation GEO.

**Critères d'acceptation**
- [ ] ≥ 25 pages indexables publiées et soumises au sitemap.
- [ ] 0 page orpheline détectée par US-047.
- [ ] 0 lien interne ou externe cassé (US-008).

**Priorité** : Must · **Réf. PRD** : §16 (Lot 3), §18

---

## Epic 4 — GEO / Generative Engine Optimization (Lot 4)

> **Livrable de lot** : site optimisé pour les moteurs génératifs, baseline de citations
> mesurée.

### US-051 — Encadrés « L'essentiel » extractibles
**En tant qu'**agent conversationnel (ChatGPT, Claude, Perplexity…), **je veux** trouver
en tête de chaque page un résumé autonome de 40–60 mots répondant à la question
principale, **afin de** pouvoir citer la page sans avoir à interpréter le reste du
contenu.

**Critères d'acceptation**
- [ ] Encadré présent sur toutes les pages `/decouvrir/`, `/experiences/`, `/saisons/`.
- [ ] Rédigé pour être compréhensible hors contexte (pas de « ici », « ce lieu » sans antécédent).

**Priorité** : Must · **Réf. PRD** : §12.2.A

### US-052 — Sous-titres en questions réelles + tableaux de faits
**En tant qu'**agent conversationnel, **je veux** des sous-titres formulés comme de
vraies questions suivies d'une réponse directe, et des données présentées en tableaux
plutôt qu'en prose, **afin de** extraire l'information de façon fiable.

**Critères d'acceptation**
- [ ] Au moins 3 sous-titres en question par page de contenu long (`/saisons/`, `/decouvrir/`, `/experiences/`).
- [ ] Toute donnée chiffrée (distance, durée, tarif, température, horaire) présentée en tableau quand c'est possible.

**Priorité** : Should · **Réf. PRD** : §12.2.A

### US-053 — `llms.txt`
**En tant qu'**agent d'IA générative, **je veux** un fichier `/llms.txt` à la racine
présentant le site et indexant toutes les pages avec une description, **afin de**
comprendre rapidement la structure et le contenu du site sans le crawler intégralement.

**Critères d'acceptation**
- [ ] Fichier généré au build (pas maintenu à la main), à partir des frontmatters de contenu.
- [ ] Une ligne de description par page publiée.

**Priorité** : Must · **Réf. PRD** : §12.2.D

### US-054 — `llms-full.txt`
**En tant qu'**agent d'IA générative, **je veux** une version longue avec le contenu
essentiel du site en markdown brut, **afin de** disposer du contenu complet en un seul
fichier facilement ingérable.

**Critères d'acceptation**
- [ ] Généré au build, contenu synchronisé avec les pages publiées (pas de dérive).
- [ ] Taille surveillée (pas de doublons entre langues tant que le multilingue n'est pas actif).

**Priorité** : Should · **Réf. PRD** : §12.2.D

### US-055 — Version `.md` de chaque page
**En tant qu'**agent d'IA générative, **je veux** accéder à `/decouvrir/sillon-de-talbert/index.md`
en complément de la version HTML, **afin de** lire le contenu structuré sans bruit de
mise en page.

**Critères d'acceptation**
- [ ] Chaque page de contenu expose sa version `.md` à l'URL `+ index.md`.
- [ ] Déclarée dans le sitemap.

**Priorité** : Should · **Réf. PRD** : §12.2.D

### US-056 — `donnees.json` public
**En tant qu'**agent d'IA générative ou partenaire, **je veux** un fichier public exposant
les faits structurés du bien sous licence ouverte, **afin de** disposer d'une source
factuelle fiable et machine-readable.

**Critères d'acceptation**
- [ ] Généré directement depuis `maison.json` (pas de re-saisie).
- [ ] Licence ouverte explicite dans le fichier.

**Priorité** : Should · **Réf. PRD** : §12.2.C, §14.3

### US-057 — Densité d'entités et alignement Wikidata
**En tant qu'**agent d'IA générative, **je veux** que les entités du territoire
(Sillon de Talbert, GR34, Trieux, Île de Bréhat…) soient nommées explicitement et reliées
entre elles, avec un identifiant Wikidata en `sameAs`, **afin de** ancrer le site dans un
graphe de connaissances vérifiable.

**Critères d'acceptation**
- [ ] Liste d'entités de §12.2.B présente et reliée dans au moins 80 % des pages `/decouvrir/`.
- [ ] `sameAs` Wikidata ajouté au JSON-LD des lieux qui ont une entrée Wikidata.

**Priorité** : Could · **Réf. PRD** : §12.2.B

### US-058 — `robots.txt` accueillant pour les crawlers IA
**En tant que** mainteneur, **je veux** que `robots.txt` autorise explicitement les bots
IA légitimes (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot), **afin d'**
assumer la stratégie « on veut être ingéré et cité ».

**Critères d'acceptation**
- [ ] `robots.txt` liste ces user-agents en autorisé, référence les sitemaps et `llms.txt`.
- [ ] Vérifié après chaque changement de structure d'URL.

**Priorité** : Must · **Réf. PRD** : §11.3, §12.2.D

### US-059 — Bloc « Mis à jour le » et fraîcheur datée
**En tant qu'**agent d'IA générative, **je veux** voir une date de mise à jour visible et
balisée `dateModified` sur chaque page, avec des données chiffrées attribuées et datées,
**afin de** évaluer la fiabilité de l'information avant de la citer.

**Critères d'acceptation**
- [ ] Bloc visible sur toutes les pages de contenu, mis à jour au rebuild quotidien si le contenu change.
- [ ] Toute statistique cite sa source et sa date (ex. « Selon Météo-France 1991–2020 »).

**Priorité** : Must · **Réf. PRD** : §12.2.C

### US-060 — Baseline de mesure GEO (15 prompts)
**En tant que** product owner, **je veux** tester manuellement les 15 prompts de
l'Annexe A du PRD sur 4 assistants IA et consigner les résultats, **afin de** disposer
d'une baseline avant de pouvoir mesurer le progrès du GEO.

**Critères d'acceptation**
- [ ] Tableur de suivi créé, les 15 prompts testés sur ChatGPT, Claude, Perplexity, Gemini/AI Overviews.
- [ ] Résultat baseline consigné avec date (répétable mensuellement, §12.3).
- [ ] Suivi des logs de crawl des bots IA mis en place (Cloudflare/logs serveur).

**Priorité** : Must · **Réf. PRD** : §12.3, Annexe A, §18

---

## Epic 5 — International (Lot 5)

> **Livrable de lot** : site trilingue.

### US-061 — hreflang et structure d'URL multilingue
**En tant que** développeur, **je veux** finaliser le routing i18n commencé en US-011
avec des slugs traduits et un `hreflang` réciproque complet, **afin de** ne jamais
afficher une version étrangère non traduite à la place du FR.

**Critères d'acceptation**
- [ ] Slugs traduits (`/en/discover/talbert-spit/`, `/de/entdecken/sillon-de-talbert/`), pas de préfixe sur le FR.
- [ ] `hreflang` réciproque complet FR/EN/DE + `x-default` → FR, 0 erreur en Search Console.
- [ ] Contenu non traduit masqué du sitemap de la langue cible.

**Priorité** : Must · **Réf. PRD** : §13, §11.3

### US-062 — Traduction du périmètre V1 en anglais
**En tant que** visiteur anglophone, **je veux** lire le site dans un anglais natif (pas
une traduction littérale), **afin de** comprendre l'offre aussi bien qu'un visiteur FR.

**Critères d'acceptation**
- [ ] Périmètre traduit : accueil, la maison, réserver, 4 pages saisons, 7 pages expériences, 8 fiches lieux, contact, légal (§13).
- [ ] Traduction humaine ou assistée relue par un natif (dépend de Q7 du PRD §19).
- [ ] Mots-clés recherchés nativement, pas traduits littéralement (`holiday home Brittany coast`, pas `vacation rental Pleubian`).

**Priorité** : Must · **Réf. PRD** : §13, §19 (Q7)

### US-063 — Traduction du périmètre V1 en allemand
**En tant que** visiteur germanophone, **je veux** lire le site dans un allemand natif
avec un vocabulaire orienté randonnée/vélo/nature, **afin de** me reconnaître dans les
contenus qui m'intéressent le plus.

**Critères d'acceptation**
- [ ] Même périmètre que US-062, traduit en DE.
- [ ] Vocabulaire `Wandern`, `Radfahren`, `Naturschutzgebiet` utilisé où pertinent (§13).

**Priorité** : Must · **Réf. PRD** : §13, §19 (Q7)

### US-064 — Sélecteur de langue
**En tant que** visiteur, **je veux** changer de langue en gardant la page courante, avec
une suggestion discrète plutôt qu'une redirection automatique, **afin de** ne pas être
imposé une langue et ne pas nuire à l'indexation.

**Critères d'acceptation**
- [ ] Bandeau de suggestion basé sur la langue du navigateur, jamais de redirection automatique.
- [ ] Le sélecteur conserve la page courante lors du changement de langue.

**Priorité** : Must · **Réf. PRD** : §13

### US-065 — Formats localisés
**En tant que** visiteur international, **je veux** voir les dates, devises, unités et
formats de téléphone dans un format qui me parle, **afin de** ne pas avoir à convertir
mentalement les informations.

**Critères d'acceptation**
- [ ] Dates, devises (€ affiché explicitement), unités (km + mentions impériales en secondaire pour EN) localisées par langue.
- [ ] Format téléphone international correct par langue.

**Priorité** : Should · **Réf. PRD** : §13

### US-066 — Mention des liaisons ferry (marché UK/Irlande)
**En tant que** visiteur britannique ou irlandais, **je veux** connaître les liaisons
ferry pertinentes (Roscoff, Saint-Malo), **afin d'**évaluer l'accessibilité du séjour
depuis mon pays.

**Critères d'acceptation**
- [ ] Mention présente sur la version EN de `/reserver/` ou d'une page pratique équivalente.

**Priorité** : Could · **Réf. PRD** : §13

### US-067 — Livrable Lot 5 : site trilingue
**En tant que** product owner, **je veux** vérifier que le site est pleinement
fonctionnel en FR/EN/DE, **afin de** ouvrir le trafic international.

**Critères d'acceptation**
- [ ] `hreflang` réciproque validé sur les 3 langues, 0 erreur en Search Console.
- [ ] Aucune page affichée en FR par erreur sur une URL EN/DE.
- [ ] Sitemaps par langue soumis.

**Priorité** : Must · **Réf. PRD** : §16 (Lot 5), §18

---

## Epic 6 — Optimisation continue (Lot 6, à partir du mois 5)

### US-068 — Cadence éditoriale mensuelle
**En tant que** rédacteur, **je veux** un calendrier de publication pré-rempli sur 12
mois avec rappels automatisés, **afin de** tenir un rythme d'un article par mois sans
que le contenu ne se tarisse (mitigation R2 du PRD).

**Critères d'acceptation**
- [ ] Calendrier éditorial rempli pour les 12 prochains mois à partir du backlog §10.4.
- [ ] Rappel automatisé (issue GitHub programmée ou équivalent) à échéance mensuelle.

**Priorité** : Should · **Réf. PRD** : §10.3, §17 (R2)

### US-069 — Audit semestriel des fiches lieux
**En tant que** mainteneur, **je veux** vérifier deux fois par an que les horaires et
tarifs mentionnés dans les fiches `/decouvrir/` sont toujours exacts, **afin de** ne
jamais publier une information périmée qui nuirait à la confiance GEO/SEO.

**Critères d'acceptation**
- [ ] Checklist d'audit couvrant les 8 fiches lieux, appliquée tous les 6 mois.
- [ ] Chaque correction met à jour `dateModified`.

**Priorité** : Should · **Réf. PRD** : §10.3

### US-070 — Remplacement progressif des visuels placeholder
**En tant que** product owner, **je veux** remplacer les visuels placeholder par les
vraies photos au fur et à mesure des 4 shootings saisonniers, **afin de** faire
disparaître complètement la dette visuelle du lancement.

**Critères d'acceptation**
- [ ] Liste de suivi des placeholders restants (générée par le `grep placeholder-` défini en US-007) tenue à jour.
- [ ] Chaque shooting saisonnier livré (trimestriel, §10.3) réduit la liste d'au moins une saison complète.
- [ ] 0 fichier `placeholder-*` restant en production une fois les 4 shootings réalisés.

**Priorité** : Must (à terme) · **Réf. PRD** : §6.5, §10.3, §17 (R1) · voir [§0](#0-stratégie-visuels--placeholders-génériques-v0)

### US-071 — Netlinking local
**En tant que** propriétaire du site, **je veux** des partenariats de contenu avec des
acteurs locaux (distillerie, loueurs de kayak, crêperies, guides du Sillon), **afin de**
renforcer l'autorité locale par des échanges d'articles plutôt que des liens achetés.

**Critères d'acceptation**
- [ ] Au moins 3 partenariats de contenu établis et publiés (lien réciproque ou mention).
- [ ] Aucun lien acheté (contrainte explicite du PRD §11.5).

**Priorité** : Could · **Réf. PRD** : §11.5

### US-072 — Tableau de bord analytics mensuel
**En tant que** product owner, **je veux** un tableau de bord mensuel consolidant trafic,
langue, saison, top pages, taux de clic sortant et citations IA, **afin de** piloter les
objectifs business et produit du §3 du PRD dans la durée.

**Critères d'acceptation**
- [ ] Tableau de bord (Plausible + tableur GEO de US-060) mis à jour chaque mois.
- [ ] Comparaison aux cibles M+12 de §3.1 et §3.2 du PRD.

**Priorité** : Should · **Réf. PRD** : §3, §15.1
