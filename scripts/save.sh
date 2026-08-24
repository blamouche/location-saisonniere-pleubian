#!/usr/bin/env bash
# Committe le travail en cours, rebase sur origin/main, puis pousse.
# À lancer depuis un terminal ayant accès au réseau (pas depuis Cowork).
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

msg="${1:-}"
if [[ -z "$msg" ]]; then
  echo "Usage : ./scripts/save.sh \"message de commit\"" >&2
  exit 1
fi

# `docs/` (sortie de build, servie telle quelle par GitHub Pages) doit toujours
# refléter la source qu'on s'apprête à committer — jamais de déploiement en retard
# sur le code.
npm run build

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "$msg"
else
  echo "→ Rien à committer."
fi

git fetch --prune origin
git pull --rebase origin main
git push origin main

date -u +"%Y-%m-%dT%H:%M:%SZ" > .last-sync
echo "✅ Poussé — HEAD : $(git log --oneline -1)"
