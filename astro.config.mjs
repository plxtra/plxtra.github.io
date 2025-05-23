// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import icon from "astro-icon";

const canonicalHost = 'plxtra.org'; // Put into environmental variable for BaseLayout

export const githubHost = 'plxtra.github.io';
export const githubSite = `https://${githubHost}`;

// https://astro.build/config
export default defineConfig({
    site: githubSite,
    trailingSlash: 'always',

    integrations: [
        sitemap({
            // Change sitemap URLs to use custom host supplied to GitHub.
            serialize(item) {
                const url = new URL(item.url);
                if (url.host === githubHost) {
                    url.host = canonicalHost;
                }
                item.url = url.href;
                return item;
            },
        }),
        icon(),

        starlight({
            title: 'Plxtra',

            sidebar: [
                {
                    label: 'Getting Started',
                    items: ['getting-started', 'getting-started/quick-start', 'getting-started/install'],
                },
                {
                    label: 'Using',
                    autogenerate: { directory: 'using', collapsed: true}
                },
                {
                    label: 'Configuration',
                    items: ['configuration'],
                },
                {
                    label: 'Architecture',
                    items: [
                        'architecture',
                        {
                            label: 'Data and Trading',
                            autogenerate: { directory: 'architecture/backend-data'},
                            collapsed: true
                        },
                        {
                            label: 'Market Operations',
                            autogenerate: { directory: 'architecture/backend-market'},
                            collapsed: true
                        },
                        {
                            label: 'Front-Ends',
                            autogenerate: { directory: 'architecture/frontend'},
                            collapsed: true
                        },
                        {
                            label: 'Support Services',
                            autogenerate: { directory: 'architecture/backend-support'},
                            collapsed: true
                        },
                    ],
                },
                {
                    label: 'APIs',
                    items: [
                        'api',
                        {
                            label: 'Front-End',
                            autogenerate: { directory: 'api/frontend'},
                            collapsed: true
                        },
                        {
                            label: 'Operator',
                            autogenerate: { directory: 'api/operator'},
                            collapsed: true
                        },
                        {
                            label: 'Enterprise',
                            autogenerate: { directory: 'api/enterprise'},
                            collapsed: true
                        },
                    ],
                },
                {
                    label: 'Working with source',
                    items: ['source'],
                },
                {
                    label: 'Deploy',
                    items: [
                        'deploy',
                        'deploy/images'
                    ],
                },
            ],
        }),

        mdx(),
    ],
});
