import raw from './maison.json';
import { maisonSchema, type Maison } from './maison.schema';

// Valide `maison.json` au build : toute donnée manquante ou mal typée fait échouer
// `astro build` ici plutôt que de produire une page cassée en silence.
export const maison: Maison = maisonSchema.parse(raw);

/** Lien plateforme avec paramètres UTM déjà appliqués, prêt à être utilisé en `href`. */
export function lienAirbnb(campagne: string): string {
  const url = new URL(maison.plateformes.airbnb.url);
  url.searchParams.set('utm_source', maison.plateformes.airbnb.utmSource);
  url.searchParams.set('utm_medium', maison.plateformes.airbnb.utmMedium);
  url.searchParams.set('utm_campaign', campagne);
  return url.toString();
}
