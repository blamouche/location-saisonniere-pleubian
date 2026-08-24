import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getCollection('journal');
  return rss({
    title: 'Journal — Maison Od Joge',
    description: "Contenus éditoriaux datés sur la Presqu'île sauvage, publiés au fil des saisons.",
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.titre,
      description: article.data.description,
      pubDate: article.data.datePublished,
      link: `/journal/${article.id}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}
