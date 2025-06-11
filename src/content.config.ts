import { rssSchema } from '@astrojs/rss';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const features = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/data/features' }),
    schema: z.object({
        title: z.string(),
        weight: z.number(),
        readMoreUrl: z.string().optional(),
        iconName: z.string(),
    }),
});

const newsItems = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/data/news-items' }),
    // Make some optional RSS fields required.
    schema: rssSchema.extend({ title: z.string(), description: z.string(), pubDate: z.date() }),
});

export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    features,
    newsItems,
};
