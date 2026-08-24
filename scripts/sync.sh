#!/usr/bin/env bash
# Synchronise le dépôt avec origin/main AVANT toute séance de travail.
# À lancer depuis un terminal ayant accès au réseau (pas depuis Cowork).
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

echo "→ Dépôt : $(pwd)"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "⚠️  Modifications locales non commitées :"
  git status -s
  echo
  echo "   Committe-les (./scripts/save.sh \"message\") ou mets-les de côté (git stash)"
  echo "   avant de synchroniser."
  exit 1
fi

echo "→ Récupération de origin/main…"
git fetch --prune origin

behind=$(git rev-list --count HEAD..origin/main)
ahead=$(git rev-list --count origin/main..HEAD)

if [[ "$behind" -eq 0 && "$ahead" -eq 0 ]]; then
  echo "✅ Déjà à jour."
else
  [[ "$behind" -gt 0 ]] && echo "→ $behind commit(s) à récupérer."
  [[ "$ahead"  -gt 0 ]] && echo "→ $ahead commit(s) local(aux) à pousser (utilise ./scripts/save.sh)."
  git pull --rebase origin main
fi

date -u +"%Y-%m-%dT%H:%M:%SZ" > .last-sync
echo "✅ Synchronisé — HEAD : $(git log --oneline -1)"
