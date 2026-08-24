import type { APIRoute } from 'astro';
import { experiences } from '@/data/experiences';
import { fichesLieux } from '@/data/decouvrir';
import { experienceMarkdown } from '@/lib/markdown-content';

export function getStaticPaths() {
  return experiences.map((e) => ({ params: { pilier: e.slug } }));
}

export const GET: APIRoute = ({ params, site }) => {
  const experience = experiences.find((e) => e.slug === params.pilier)!;
  const decouvrirLies = experience.decouvrirLies.map((slug) => fichesLieux.find((f) => f.slug === slug)).filter(Boolean) as typeof fichesLieux;
  const url = new URL(`/experiences/${experience.slug}/`, site).toString();

  return new Response(experienceMarkdown(experience, decouvrirLies, url), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
