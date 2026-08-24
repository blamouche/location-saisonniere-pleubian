# Visuels à fournir — remplacement des placeholders

| | |
|---|---|
| **But** | Liste exhaustive des visuels réels attendus, un par placeholder actuellement en ligne. |
| **Convention** | Chaque fichier remplace `public/medias/placeholder/placeholder-<slug>.svg` par un vrai média au même usage (voir `docs/user-stories.md` §0 et US-070). |
| **Charte photo** | PRD §6.5 : lumière naturelle, pas de HDR agressif, personnes présentes mais non identifiables, granit et bois valorisés. |
| **Formats** | Paysage 16:9, portrait 4:5, carré 1:1 — voir la colonne « Format » de chaque tableau. |

---

## A. La maison — photos (un seul shooting suffit, réutilisées toute l'année)

Ce sont les photos qui apparaissent sur l'accueil, `/la-maison/` et la galerie. Priorité haute : ce sont les plus vues du site.

**Livrées** (remplacent déjà le placeholder correspondant, voir `src/data/real-images.ts`) :

| Slug | Sujet |
|---|---|
| `chambre-1-etage` | Suite parentale — étage |
| `chambre-2-etage` | Chambre double — étage |
| `chambre-3-etage` | Chambre à lit simple gigogne — étage |
| `chambre-4-rdc` | Chambre RDC |
| `cuisine` | Cuisine équipée |
| `salon` | Salon |
| `salon-coin-poele` | Salon — coin poêle (galerie uniquement) |
| `poele-a-bois` | Le poêle à bois |
| `salle-a-manger` | Salle à manger (nouvelle pièce ajoutée au modèle) |
| `terrasse` | Terrasse (nouvelle pièce ajoutée au modèle) |
| `jardin` | Jardin clos |
| `salle-de-bain-rdc` | Salle de bain RDC |
| `salle-de-bain-etage` | Salle de bain étage |
| `salle-de-bain-etage-douche` | Salle de bain étage — douche (galerie uniquement) |
| `salle-de-bain-etage-vue` | Salle de bain étage — vue d'ensemble (galerie uniquement) |

**Encore en placeholder** :

| Fichier à remplacer | Sujet | Format |
|---|---|---|
| `placeholder-facade.svg` | Façade / extérieur de la maison | 4:5 |
| `placeholder-espace-travail.svg` | Espace de travail dédié | 4:5 |

**Où ça apparaît** : accueil (aperçu 6 photos), `/la-maison/` (visite pièce par pièce), `/la-maison/galerie/` (toutes les photos, filtrables par pièce).

---

## B. Un hero par saison — 4 photos (haute priorité visuelle)

Ce sont les photos plein écran en tête de l'accueil (saison en cours) et de chaque page `/saisons/[saison]/`. Ce sont les visuels les plus impactants du site — à shooter en priorité si le budget photo doit être séquencé (PRD §16 : la saison en cours d'abord).

| Fichier à remplacer | Saison | Sujet suggéré | Format | Statut |
|---|---|---|---|---|
| `placeholder-hero-printemps-16x9.svg` | Printemps | Maison ou Sillon de Talbert, ajoncs en fleur | 16:9 | ⚠️ Remplacé par une photo de stock (mouillage breton générique) |
| `placeholder-hero-ete-16x9.svg` | Été | Jardin, tablée dehors, ou plage de Kermagen | 16:9 | ⚠️ Remplacé par une photo de stock (littoral rocheux générique, pas la maison) |
| `placeholder-hero-automne-16x9.svg` | Automne | Tempête, sentier, feu de bois | 16:9 | ⚠️ Remplacé par une photo de stock (maison bretonne générique) |
| `placeholder-hero-hiver-16x9.svg` | Hiver | Poêle allumé, nuit tombante, ciel étoilé | 16:9 | ⚠️ Remplacé par une photo de stock (mer démontée générique) |

`placeholder-hero-ete-4x5.svg` et `placeholder-hero-ete-1x1.svg` existent aussi (recadrages de la même prise de vue été) — à fournir dans les 3 formats si possible, au moins pour la saison en cours.

> **Sur les 3 heros « ⚠️ » ci-dessus** : ce sont des photos Unsplash (licence libre, usage commercial autorisé) choisies pour leur ambiance, **pas des photos du bien ni de la Presqu'île sauvage**. Elles remplacent le rectangle SVG générique par un vrai visuel de meilleure qualité en attendant le shooting réel — une mention de crédit discrète est affichée en bas à droite de chaque image sur le site. À remplacer dès que possible par de vraies photos de la maison ou du territoire, faute de quoi elles pourraient induire en erreur sur ce que le voyageur va réellement découvrir (le Sillon de Talbert n'a pas de falaises abruptes, par exemple — la photo été actuelle n'est pas représentative du lieu réel).

**Où ça apparaît** : accueil (saison en cours uniquement), hub `/saisons/`, page de la saison correspondante.

---

## C. Territoire par saison — 12 photos (3 par saison)

Photos du territoire (pas de la maison) illustrant la saison sur `/saisons/[saison]/` et la galerie (catégorie « Le territoire par saison »).

| Fichier à remplacer | Saison | Suggestion de sujet | Format |
|---|---|---|---|
| `placeholder-saison-printemps-1.svg` | Printemps | Sillon de Talbert, grandes marées | 4:5 |
| `placeholder-saison-printemps-2.svg` | Printemps | GR34 / lande en fleur | 4:5 |
| `placeholder-saison-printemps-3.svg` | Printemps | Jardin de la maison au printemps | 4:5 |
| `placeholder-saison-ete-1.svg` | Été | Plage de Kermagen | 4:5 |
| `placeholder-saison-ete-2.svg` | Été | Criques (Port-la-Chaîne, Port-Béni…) | 4:5 |
| `placeholder-saison-ete-3.svg` | Été | Archipel de Bréhat / kayak | 4:5 |
| `placeholder-saison-automne-1.svg` | Automne | Tempête / mer démontée | 4:5 |
| `placeholder-saison-automne-2.svg` | Automne | GR34 désert, lumière d'automne | 4:5 |
| `placeholder-saison-automne-3.svg` | Automne | Poêle à bois / intérieur cosy | 4:5 |
| `placeholder-saison-hiver-1.svg` | Hiver | Ciel étoilé | 4:5 |
| `placeholder-saison-hiver-2.svg` | Hiver | Mer d'étain, nuit tombante | 4:5 |
| `placeholder-saison-hiver-3.svg` | Hiver | Intérieur, poêle allumé | 4:5 |

---

## D. Autre

| Fichier à remplacer | Sujet | Format | Priorité |
|---|---|---|---|
| `placeholder-carte-territoire.svg` | — | 16:9 | Basse — non utilisé actuellement (la carte du territoire est une liste de liens, pas une image, en attendant MapLibre — US-045) |

---

## E. Non encore prévu sur le site, mais mentionné au PRD

- **Vidéos courtes (20–40 s, muettes, en boucle)** — une par saison. Format AV1/WebM, < 2 Mo (PRD §6.5). Le site ne les affiche pas encore (aucun composant vidéo construit) : à prévoir techniquement avant de les intégrer.
- **Portraits de Pauline & Maeva** — utile pour humaniser le site et le futur balisage `Person`/`Organization` (PRD §11.4), mais aucune page ne l'affiche pour l'instant.

---

## Résumé — combien de fichiers au total ?

| Catégorie | Nombre | Type | Restant à fournir |
|---|---|---|---|
| A. La maison | 17 | Photo | 2 (façade, espace de travail) |
| B. Hero par saison | 4 (+ 2 recadrages été) | Photo | 2 recadrages été (4:5, 1:1) — les 4 hero 16:9 sont couverts par du stock interim |
| C. Territoire par saison | 12 | Photo | 12 |
| D. Carte du territoire | 1 | Photo (basse priorité) | 1 |
| **Total photos** | **34** | | **15 (+ 4 à confirmer/remplacer)** |

**Stratégie de démarrage suggérée** (reprend PRD §16) : la catégorie A (maison, valable toute l'année) est quasiment complète (15/17). Reste à shooter la façade et l'espace de travail, puis la saison en cours (été, aujourd'hui). Les 3 autres saisons (24 photos restantes) peuvent suivre au fil des 4 shootings trimestriels prévus.

Une fois un fichier prêt, il suffit de le déposer dans `public/medias/` (hors du dossier `placeholder/`) et de mettre à jour le `slug` correspondant dans le code — voir `docs/user-stories.md` US-070 pour le suivi du remplacement.

### Déjà reçus (voir note ⚠️ plus haut)

- `src/assets/images/hero/hero-printemps.jpg` — photo de stock (Gilles Boutault / Unsplash)
- `src/assets/images/hero/hero-ete.jpg` — photo de stock (Peter Burdon / Unsplash)
- `src/assets/images/hero/hero-automne.jpg` — photo de stock (Amzallag Micheline / Unsplash)
- `src/assets/images/hero/hero-hiver.jpg` — photo de stock (Cédric Le Bars / Unsplash)

Ces 3 fichiers sont enregistrés dans `src/data/real-images.ts` et remplacent déjà les placeholders correspondants sur le site (optimisés automatiquement en AVIF via `astro:assets`). Pour les remplacer à leur tour par de vraies photos : mettre à jour les imports dans `src/data/real-images.ts`.
