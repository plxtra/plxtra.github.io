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
                        { label: 'Overview', slug: 'architecture' },
                        {
                            label: 'Components',
                            items: [
                                { label: 'Overview', slug: 'architecture/components' },
                                { label: 'Registry', slug: 'architecture/components/backend/registry' },
                                { label: 'Exchange Engine', slug: 'architecture/components/backend/exchange-engine' },
                                { label: 'FIX Server', slug: 'architecture/components/backend/fix-server' },
                                { label: 'Order Management', slug: 'architecture/components/backend/order-management' },
                                { label: 'Trading Agent', slug: 'architecture/components/backend/trading-agent' },
                                { label: 'User Authorisation', slug: 'architecture/components/backend/user-authorisation' },
                                { label: 'Caching Proxy', slug: 'architecture/components/backend/caching-proxy' },
                                { label: 'Feed Server', slug: 'architecture/components/backend/feed-server' },
                                { label: 'Trading Adapter', slug: 'architecture/components/backend/trading-adapter' },
                                { label: 'Trade Feed Adapter', slug: 'architecture/components/backend/trade-feed-adapter' },
                                { label: 'Alerting/Scanning', slug: 'architecture/components/backend/alerting-scanning' },
                                { label: 'Session Management', slug: 'architecture/components/backend/session-management' },
                                { label: 'Motif', slug: 'architecture/components/frontend/motif' },
                                { label: 'Arclight', slug: 'architecture/components/frontend/arclight' },
                                { label: 'MotifXL', slug: 'architecture/components/frontend/motif-xl' },
                                {
                                    label: 'Other',
                                    items: [
                                        { label: 'Audit History', slug: 'architecture/components/support/audit-history' },
                                        { label: 'Push Notification', slug: 'architecture/components/support/push-notification' },
                                        { label: 'Market Holiday', slug: 'architecture/components/support/market-holiday' },
                                        { label: 'Watchlist Manager', slug: 'architecture/components/support/watchlist-manager' },
                                        { label: 'Interlink', slug: 'architecture/components/support/interlink' },
                                    ],
                                    collapsed: true
                                }
                            ],
                            collapsed: true
                        },
                        { label: 'Banks / Registries', slug: 'architecture/connecting-banks-and-registries' },
                        { label: 'Redundancy', slug: 'architecture/redundancy' },
                        { label: 'Monitoring', slug: 'architecture/monitoring' },
                        { label: 'Protection', slug: 'architecture/protection' },
                    ],
                    collapsed: true
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
                {
                    label: 'Contract Templates',
                    items: [
                        'contract-templates',
                        {
                            label: 'API Client',
                            items: ['contract-templates/api-client'],
                            collapsed: true
                        },
                        {
                            label: 'Broker Minimum Terms',
                            items: ['contract-templates/broker-minimum-terms'],
                            collapsed: true
                        },
                    ],
                    collapsed: true
                },
            ],
        }),

        mdx(),
    ],
});
