# Documentation — Maison Od Joge

Index de la documentation projet. Voir le [`README.md`](../README.md) racine pour le
point d'entrée général et le workflow multi-machines.

| Document | Contenu |
|---|---|
| [`PRD.md`](./PRD.md) | Product Requirements Document — vision, personas, expérience multi-saisons, arborescence, design system, stratégie SEO/GEO, spécifications techniques, roadmap, critères d'acceptation. **À lire avant toute décision produit.** |
| [`SEO-strategy.md`](./SEO-strategy.md) | Étude et stratégie SEO/GEO détaillée — audit du PRD, analyse concurrentielle, mots-clés, roadmap SEO/GEO et recommandations. |
| [`user-stories.md`](./user-stories.md) | Backlog de développement — User Stories organisées par lot de la roadmap (§16 du PRD), avec critères d'acceptation. |

## Convention

Toute documentation projet (cadrage, stratégie, backlog) vit dans ce dossier. Le
`README.md` racine reste le point d'entrée court ; `CLAUDE.md` (racine, hors de ce
dossier) contient les instructions destinées aux sessions Claude Code et doit rester à la
racine du dépôt pour être chargé automatiquement.

## Convention — visuels placeholder (US-007)

En attendant les shootings saisonniers réels (voir `user-stories.md` §0), les visuels du
site sont des placeholders génériques **générés localement** par
`scripts/generate-placeholders.mjs` (à-plats colorés + libellé, aucune photo tierce, donc
aucune question de licence) et rangés dans `public/medias/placeholder/`. Convention de
nommage : `placeholder-<slug>.svg`. Pour retrouver tout ce qu'il reste à remplacer par de
vraies photos : `grep -rl "placeholder-" src/` ou `ls public/medias/placeholder/`.
