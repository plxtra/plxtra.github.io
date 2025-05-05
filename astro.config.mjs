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
                    items: ['using'],
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
                            label: 'Components',
                            items: [
                                'architecture/components',
                                'architecture/components/arclight',
                                'architecture/components/foundry',
                                'architecture/components/motif',
                                'architecture/components/motif-xl',
                                'architecture/components/order-management-system',
                                'architecture/components/prodigy',
                                'architecture/components/session-management',
                                'architecture/components/vetting',
                                'architecture/components/zenith',
                            ],
                        },
                        {
                            label: 'Motionite',
                            items: [
                                'architecture/motionite',
                            ],
                        }
                    ],
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
