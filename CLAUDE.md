# Instructions projet — location-saisonniere-pleubian

## Contexte

Site vitrine marketing pour **Maison Od Joge**, location saisonnière familiale (8 personnes)
à Pleubian (22610), Presqu'île sauvage, Côtes-d'Armor.
Le cadrage complet est dans [`documentation/PRD.md`](./documentation/PRD.md) — le lire avant toute décision produit.
Le backlog de développement est dans [`documentation/user-stories.md`](./documentation/user-stories.md).

Positionnement : le site n'est pas une fiche d'annonce mais un guide de référence sur la
Presqu'île sauvage, optimisé SEO **et** GEO (Generative Engine Optimization), avec une
expérience visuelle qui change au fil des quatre saisons.

Stack cible : Astro + Tailwind CSS 4, statique, FR/EN/DE.

**Hébergement actuel** : GitHub Pages, sur ce repo (`blamouche/location-saisonniere-pleubian`),
sans domaine personnalisé pour l'instant. Conséquences dans le code :
- `astro.config.mjs` déclare `site`/`base` (repris depuis `site.config.mjs`, source unique) et
  `outDir: './docs'` — GitHub Pages sert directement le contenu commité de `docs/`
  (Settings → Pages → Deploy from a branch → `main` → `/docs`), sans workflow de déploiement.
- Tout chemin interne écrit à la main (pas généré par un helper `sectionPath`/`homePath`
  existant) doit passer par `withBase()` (`src/lib/base-path.ts`) pour rester valide sous ce
  sous-dossier — voir le commentaire en tête de ce fichier pour le détail.
- `./scripts/save.sh` rebuild avant de committer : `docs/` ne doit jamais être en retard sur
  la source.
- Si un domaine dédié est branché un jour (PRD §19, Q1) : mettre à jour `site.config.mjs`
  (`SITE`, `BASE: ''`) — le reste du code n'a pas besoin de changer, `withBase('')` devient
  un no-op.

## ⚠️ Synchronisation multi-machines — À FAIRE EN PREMIER

Ce dépôt est travaillé depuis **plusieurs machines**. Le dossier local peut être en retard
sur `origin/main` sans que rien ne le signale.

**Contrainte technique** : depuis une session Cowork / Claude Code distante, GitHub est
injoignable — le proxy du conteneur cloud n'autorise que les dépôts pré-configurés, et le
pont vers la machine locale n'a aucun accès réseau. **Aucun agent ne peut donc faire un
`git fetch` ou un `git pull`.** Seul l'utilisateur le peut, depuis son terminal.

### Protocole obligatoire en début de séance

1. Exécuter `./scripts/check-sync.sh` (fonctionne sans réseau).
2. Si le statut est `⚠️ PÉRIMÉ` ou `JAMAIS SYNCHRONISÉ` : **s'arrêter** et demander à
   l'utilisateur de lancer `./scripts/sync.sh` depuis son terminal. Ne pas modifier de
   fichier tant que ce n'est pas fait — le risque est d'écraser le travail d'une autre
   machine et de créer un conflit de rebase pénible.
3. Si le statut est `✅ frais` : travailler normalement.

### Protocole en fin de séance

Rappeler à l'utilisateur de lancer `./scripts/save.sh "message de commit"` — sans quoi le
travail reste sur cette machine seulement et les autres machines divergeront.

## Scripts

| Script | Réseau requis | Rôle |
|---|---|---|
| `./scripts/check-sync.sh` | non | Diagnostic de fraîcheur. Exécutable par un agent. |
| `./scripts/sync.sh` | **oui** | `fetch` + `pull --rebase` + horodatage. À lancer par l'utilisateur avant de travailler. |
| `./scripts/save.sh "msg"` | **oui** | `commit` + `pull --rebase` + `push`. À lancer par l'utilisateur après avoir travaillé. |

Le fichier `.last-sync` est le marqueur d'horodatage, propre à chaque machine, et ignoré par git.

## Conventions

- Branche unique : `main`. Rebase, jamais de merge commit.
- Messages de commit en français, à l'impératif, préfixés par le lot du PRD quand c'est
  pertinent (`lot0: scaffolding Astro`, `contenu: fiche Sillon de Talbert`).
- Toute donnée factuelle sur le bien vient de `src/data/maison.json` (source unique de
  vérité) — ne jamais dupliquer une capacité, un équipement ou une coordonnée en dur
  dans une page.
- Les distances et durées vers les lieux du territoire doivent être vérifiées porte-à-porte,
  jamais estimées à vol d'oiseau.
