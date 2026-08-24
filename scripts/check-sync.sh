#!/usr/bin/env bash
# Diagnostic de fraîcheur — fonctionne SANS réseau.
# C'est ce que Claude exécute en début de séance pour savoir s'il peut travailler.
set -uo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

echo "HEAD          : $(git log --oneline -1)"
echo "Branche       : $(git branch --show-current)"

if [[ -f .last-sync ]]; then
  last=$(cat .last-sync)
  last_epoch=$(date -u -d "$last" +%s 2>/dev/null || date -u -j -f "%Y-%m-%dT%H:%M:%SZ" "$last" +%s 2>/dev/null || echo 0)
  now_epoch=$(date -u +%s)
  if [[ "$last_epoch" -gt 0 ]]; then
    age_min=$(( (now_epoch - last_epoch) / 60 ))
    echo "Dernier sync  : $last  (il y a ${age_min} min)"
    if [[ "$age_min" -gt 120 ]]; then
      echo "STATUT        : ⚠️  PÉRIMÉ — lance ./scripts/sync.sh avant de travailler."
    else
      echo "STATUT        : ✅ frais"
    fi
  else
    echo "Dernier sync  : $last (date illisible)"
    echo "STATUT        : ⚠️  indéterminé — lance ./scripts/sync.sh"
  fi
else
  echo "Dernier sync  : jamais"
  echo "STATUT        : ⚠️  JAMAIS SYNCHRONISÉ — lance ./scripts/sync.sh avant de travailler."
fi

dirty=$(git status --porcelain)
if [[ -n "$dirty" ]]; then
  echo "Travail local : ⚠️  modifications non commitées"
  echo "$dirty" | sed 's/^/                /'
else
  echo "Travail local : propre"
fi
