import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const articles = await getCollection('journal');
  return articles.map((article) => ({ params: { slug: article.id } }));
}

export const GET: APIRoute = async ({ params, site }) => {
  const articles = await getCollection('journal');
  const article = articles.find((a) => a.id === params.slug)!;
  const url = new URL(`/journal/${article.id}/`, site).toString();

  const md = `# ${article.data.titre}

> Source : ${url} — Par ${article.data.auteur} — ${article.data.datePublished.toISOString().slice(0, 10)}

${article.body ?? ''}
`;

  return new Response(md, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
