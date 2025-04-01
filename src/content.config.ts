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

export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    features,
};
