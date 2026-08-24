/**
 * Préfixe `base` (astro.config.mjs) pour tout chemin interne racine-relatif
 * construit à la main (`/reserver/`, `/en/…`) — nécessaire tant que le site est
 * hébergé sous un sous-dossier GitHub Pages (`/location-saisonniere-pleubian`) plutôt
 * qu'à la racine d'un domaine dédié (PRD §19, Q1). `astro:assets` et les imports
 * `<script>`/`<link>` gérés par Astro appliquent déjà ce préfixe automatiquement —
 * ne pas leur appliquer `withBase` une seconde fois.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // toujours terminé par un `/`
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const baseNoTrailingSlash = base.endsWith('/') ? base.slice(0, -1) : base;
  // Idempotent : un chemin déjà préfixé (ex. `homePath()`/`sectionPath()` passé une
  // seconde fois dans un tableau mixte) ressort inchangé plutôt que doublé.
  if (baseNoTrailingSlash && (path === baseNoTrailingSlash || path.startsWith(`${baseNoTrailingSlash}/`))) {
    return path;
  }
  const pathNoLeadingSlash = path.startsWith('/') ? path.slice(1) : path;
  return `${baseNoTrailingSlash}/${pathNoLeadingSlash}`;
}
