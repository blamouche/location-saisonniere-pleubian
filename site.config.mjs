// Source unique pour l'URL et le chemin de base du site — importé par
// `astro.config.mjs` ET par les scripts Node autonomes (`scripts/check-links.mjs`,
// `scripts/check-orphans.mjs`) qui tournent hors du pipeline Vite/Astro et n'ont
// donc pas accès à `import.meta.env.BASE_URL`.
//
// Hébergement provisoire : GitHub Pages sur le repo `location-saisonniere-pleubian`
// (pas de domaine personnalisé pour l'instant) — le site vit donc sous un
// sous-dossier. À retirer (et SITE à mettre à jour) le jour où un domaine dédié est
// branché (PRD §19, Q1).
export const SITE = 'https://blamouche.github.io';
export const BASE = '/location-saisonniere-pleubian';
