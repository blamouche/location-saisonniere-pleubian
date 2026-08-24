# Maison Od Joge — Site vitrine

Site web marketing pour la location saisonnière **Maison Od Joge**, maison familiale de
8 personnes à Pleubian (22610), Presqu'île sauvage, Côtes-d'Armor.

## Objectif

Créer un actif d'acquisition indépendant des plateformes : un guide de référence sur la
Presqu'île sauvage, optimisé SEO et GEO (Generative Engine Optimization), avec une
expérience visuelle qui change au fil des quatre saisons.

## État

📄 **Phase de cadrage** — le PRD est rédigé, l'implémentation n'a pas démarré.

## Documents

Toute la documentation projet vit dans [`docs/`](./docs/) :

- [`docs/PRD.md`](./docs/PRD.md) — Product Requirements Document complet : vision, personas,
  expérience multi-saisons, arborescence, design system, stratégie SEO/GEO, spécifications
  techniques, roadmap et critères d'acceptation.
- [`docs/SEO-strategy.md`](./docs/SEO-strategy.md) — étude et stratégie SEO/GEO détaillée
  (audit du PRD, concurrence, mots-clés, roadmap SEO/GEO).
- [`docs/user-stories.md`](./docs/user-stories.md) — backlog de User Stories pour le
  développement du site, organisé par lot de la roadmap.
- [`CLAUDE.md`](./CLAUDE.md) — instructions pour les sessions Claude travaillant sur ce dépôt.

## Stack cible

Astro 5 · Tailwind CSS 4 · site statique · FR / EN / DE · hébergement Vercel ou Netlify ·
analytics Plausible.

## Workflow multi-machines

Ce dépôt est travaillé depuis plusieurs machines. **Toujours synchroniser avant de
commencer**, sans quoi les historiques divergent.

```bash
./scripts/sync.sh                 # avant de travailler  : fetch + pull --rebase
./scripts/save.sh "mon message"   # après avoir travaillé : commit + rebase + push
./scripts/check-sync.sh           # diagnostic, sans réseau
```

`sync.sh` refuse de tourner si des modifications ne sont pas commitées, pour éviter
d'écraser du travail. `check-sync.sh` affiche l'âge de la dernière synchronisation et
signale un dossier périmé au-delà de 2 heures.

> **Note** : les sessions Claude (Cowork / Claude Code distant) n'ont pas accès au réseau
> et **ne peuvent ni récupérer ni pousser**. Elles lisent et écrivent uniquement dans le
> dossier local. Les commandes `sync.sh` et `save.sh` doivent être lancées depuis un
> terminal.

## Prochaines étapes

1. Trancher les questions ouvertes du §19 du PRD (domaine, budget photo, tarifs, numéro
   d'enregistrement de meublé de tourisme)
2. Lot 0 — fondations techniques
3. Lot 1 — mise en ligne de la vitrine française
