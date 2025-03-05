// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const canonicalHost = 'plxtra.org'; // Put into environmental variable for BaseLayout

export const githubHost = 'plxtra.github.io';
export const githubSite = `https://${githubHost}`;

// https://astro.build/config
export default defineConfig({
    site: githubSite,
    trailingSlash: 'always',

    integrations: [
        sitemap({
            // filter out all pages except home page while under construction
            filter: (page) => page === githubSite,
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

        starlight({
            title: 'Plxtra',

            sidebar: [
                {
                    label: 'Getting Started',
                    items: ['getting-started', 'getting-started/install', 'getting-started/quick-start'],
                },
                {
                    label: 'Using',
                    items: ['using'],
                },
                {
                    label: 'Configuration',
                    items: ['configuration'],
                },
                {
                    label: 'Architecture',
                    items: ['architecture'],
                },
                {
                    label: 'External APIs',
                    items: [
                        'external-api',
                        {
                            label: 'Zenith',
                            items: [
                                'external-api/zenith',
                                {
                                    label: 'Websocket',
                                    autogenerate: { directory: 'external-api/zenith/websocket', collapsed: true },
                                },
                                {
                                    label: 'IQ',
                                    autogenerate: { directory: 'external-api/zenith/iq', collapsed: true },
                                },
                                {
                                    label: 'Fix',
                                    items: ['external-api/zenith/fix'],
                                },
                            ],
                        },
                        {
                            label: 'Vetting',
                            items: [],
                        },
                        {
                            label: 'Herald',
                            items: [],
                        },
                        {
                            label: 'Scanning',
                            items: [],
                        },
                        {
                            label: 'Prodigy',
                            items: ['external-api/prodigy', 'external-api/prodigy/fix', 'external-api/prodigy/rest'],
                        },
                    ],
                },
                {
                    label: 'Extension API',
                    items: ['extensibility'],
                },
                {
                    label: 'Working with source',
                    items: ['source'],
                },
                {
                    label: 'Deploy',
                    items: ['deploy'],
                },
            ],
        }),
    ],
    // Set the vite scss api property below if the following warning is displayed:
    // Deprecation Warning: The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler', // or "modern"
                },
            },
        },
    },
});
