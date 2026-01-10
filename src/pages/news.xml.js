import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
// import MarkdownIt from 'markdown-it';
// import sanitizeHtml from 'sanitize-html';
// const parser = new MarkdownIt();

export async function GET(context) {
  const news = await getCollection('news');
  return rss({
    title: 'Plxtra News',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: news.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      // link: `/news/${post.id}/`,
      // content: sanitizeHtml(parser.render(post.body), {
      //     allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      // }),
    })),
  });
}
