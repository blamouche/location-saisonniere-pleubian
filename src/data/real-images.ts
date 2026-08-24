import type { ImageMetadata } from 'astro';
import heroPrintemps from '@/assets/images/hero/hero-printemps.jpg';
import heroEte from '@/assets/images/hero/hero-ete.jpg';
import heroAutomne from '@/assets/images/hero/hero-automne.jpg';
import heroHiver from '@/assets/images/hero/hero-hiver.jpg';
import festivalChantDeMarin from '@/assets/images/experiences/festival-chant-de-marin.jpg';
import maisonChambre1Etage from '@/assets/images/la-maison/chambre-1-etage.jpg';
import maisonChambre2Etage from '@/assets/images/la-maison/chambre-2-etage.jpg';
import maisonChambre3Etage from '@/assets/images/la-maison/chambre-3-etage.jpg';
import maisonChambre4Rdc from '@/assets/images/la-maison/chambre-4-rdc.jpg';
import maisonCuisine from '@/assets/images/la-maison/cuisine.jpg';
import maisonSalon from '@/assets/images/la-maison/salon.jpg';
import maisonSalonCoinPoele from '@/assets/images/la-maison/salon-coin-poele.jpg';
import maisonPoeleABois from '@/assets/images/la-maison/poele-a-bois.jpg';
import maisonSalleAManger from '@/assets/images/la-maison/salle-a-manger.jpg';
import maisonTerrasse from '@/assets/images/la-maison/terrasse.jpg';
import maisonJardin from '@/assets/images/la-maison/jardin.jpg';
import maisonSalleDeBainRdc from '@/assets/images/la-maison/salle-de-bain-rdc.jpg';
import maisonSalleDeBainEtage from '@/assets/images/la-maison/salle-de-bain-etage.jpg';
import maisonSalleDeBainEtageDouche from '@/assets/images/la-maison/salle-de-bain-etage-douche.jpg';
import maisonSalleDeBainEtageVue from '@/assets/images/la-maison/salle-de-bain-etage-vue.jpg';
import type { SaisonId } from './saisons';

/**
 * Registre des vrais visuels déjà livrés (US-070) — remplace le placeholder
 * correspondant dès qu'une entrée existe ici. Chaque photo garde la mention de sa
 * source tant qu'elle n'a pas été remplacée par le vrai shooting de la maison
 * (voir docs/visuels-a-fournir.md) : ce sont des photos de stock Unsplash
 * (licence Unsplash : usage commercial libre), pas des photos du bien ou du
 * Sillon de Talbert — à ne pas présenter comme telles.
 */
export const heroImages: Partial<Record<SaisonId, { src: ImageMetadata; credit: string }>> = {
  printemps: { src: heroPrintemps, credit: 'Photo : Gilles Boutault / Unsplash (mouillage breton, générique)' },
  ete: { src: heroEte, credit: 'Photo : Peter Burdon / Unsplash (littoral rocheux, générique)' },
  automne: { src: heroAutomne, credit: 'Photo : Amzallag Micheline / Unsplash (maison bretonne en granit, générique)' },
  hiver: { src: heroHiver, credit: 'Photo : Cédric Le Bars / Unsplash (mer démontée, générique)' },
};

/**
 * Visuels réels associés à une page `/experiences/[slug]/` précise (par slug), pour
 * les cas — comme le Festival du Chant de Marin — où le visuel officiel de
 * l'événement est plus juste qu'un placeholder générique.
 */
export const experienceHeroImages: Record<string, { src: ImageMetadata; credit: string }> = {
  'festival-chant-de-marin': {
    src: festivalChantDeMarin,
    credit: 'Visuel officiel — Festival du Chant de Marin, Paimpol (paimpol-festival.bzh)',
  },
};

/**
 * Vraies photos de la Maison Od Joge (US-070) — remplacent les placeholders SVG
 * génériques pour les pièces effectivement shootées. Indexées par le même `slug`
 * que `PlaceholderImage`, pour un remplacement transparent partout où ce slug est
 * utilisé (`/la-maison/`, `/la-maison/galerie/`, aperçu de l'accueil).
 */
export const houseImages: Record<string, ImageMetadata> = {
  'chambre-1-etage': maisonChambre1Etage,
  'chambre-2-etage': maisonChambre2Etage,
  'chambre-3-etage': maisonChambre3Etage,
  'chambre-4-rdc': maisonChambre4Rdc,
  cuisine: maisonCuisine,
  salon: maisonSalon,
  'salon-coin-poele': maisonSalonCoinPoele,
  'poele-a-bois': maisonPoeleABois,
  'salle-a-manger': maisonSalleAManger,
  terrasse: maisonTerrasse,
  jardin: maisonJardin,
  'salle-de-bain-rdc': maisonSalleDeBainRdc,
  'salle-de-bain-etage': maisonSalleDeBainEtage,
  'salle-de-bain-etage-douche': maisonSalleDeBainEtageDouche,
  'salle-de-bain-etage-vue': maisonSalleDeBainEtageVue,
};
