import type { ImageMetadata } from 'astro';
import heroPrintemps from '@/assets/images/hero/hero-printemps.jpg';
import heroEte from '@/assets/images/hero/hero-ete.jpg';
import heroAutomne from '@/assets/images/hero/hero-automne.jpg';
import heroHiver from '@/assets/images/hero/hero-hiver.jpg';
import festivalChantDeMarin from '@/assets/images/experiences/festival-chant-de-marin.jpg';
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
