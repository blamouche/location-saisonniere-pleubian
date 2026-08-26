export interface Avis {
  /** Tel qu'affiché sur la plateforme d'origine (ex. « Claire D. ») — jamais inventé. */
  auteur: string;
  /** Date de séjour ou de publication, format libre tel qu'affiché sur la plateforme. */
  date: string;
  /** Note sur 5, telle qu'affichée sur la plateforme. */
  note: number;
  /** Texte intégral, copié sans reformulation depuis la plateforme d'origine. */
  texte: string;
  plateforme: 'Airbnb' | 'Booking';
  /** Lien vers l'avis individuel si la plateforme le permet, sinon vers l'annonce. */
  lienPlateforme?: string;
}

/**
 * Avis réels des voyageurs (US-046) — saisis à la main, jamais récupérés
 * automatiquement : Airbnb interdit explicitement le scraping de son site dans ses
 * conditions d'utilisation, et aucune API publique n'existe pour ça. Pour ajouter
 * un avis : copier le texte intégral depuis Airbnb/Booking, garder l'auteur tel
 * qu'affiché sur la plateforme, ne rien reformuler ni inventer.
 *
 * Tant que ce tableau est vide, aucune carte d'avis ne s'affiche nulle part sur le
 * site — le message « aucun avis pour l'instant » reste affiché à la place
 * (jamais de faux avis, jamais de placeholder qui y ressemble).
 */
export const avis: Avis[] = [];
