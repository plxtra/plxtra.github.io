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
                    autogenerate: { directory: 'using', collapsed: true },
                    collapsed: true,
                },
                {
                    label: 'Configuration',
                    items: ['configuration'],
                    collapsed: true,
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
                                    collapsed: true,
                                }
                            ],
                            collapsed: true,
                        },
                        { label: 'Banks / Registries', slug: 'architecture/connecting-banks-and-registries' },
                        { label: 'Redundancy', slug: 'architecture/redundancy' },
                        { label: 'Monitoring', slug: 'architecture/monitoring' },
                        { label: 'Protection', slug: 'architecture/protection' },
                    ],
                    collapsed: true,
                },
                {
                    label: 'APIs',
                    items: [
                        { label: 'Overview', slug: 'api' },
                        { label: 'Registry', link: '/registry-api/' },
                        { label: 'Market Control', link: '/market-control-api/' },
                        { label: 'Order Management', link: '/oms-api/' },
                        { label: 'Authority', link: '/authority-api/' },
                        { label: 'Session Management', link: '/session-management-api/' },
                        // { label: 'Exchange Engine (public)', link: '/prodigy-public-api/' },
                        // { label: 'FIX', link: '/fix-api/' },
                        { label: 'Websocket', link: '/front-end-api' },
                        { label: 'IQ', link: '/iq/' },
                        { label: 'Motif Services', link: '/motif-services-api/' },
                        {
                            label: 'Extensibility',
                            items: [
                                { label: 'Zenith Plug-in', link: '/zenith-plug-in-api/' },
                                { label: 'Order Management Feed Adapter', link: '/order-management-feed-adapter-api/' },
                                { label: 'Registry Feed Adapter', link: '/registry-feed-adapter-api/' },
                                { label: 'Motif Extension', link: '/motif-api/' },
                            ],
                            collapsed: true,
                        },
                    ],
                    collapsed: true,
                },
                {
                    label: 'Working with source',
                    items: ['source'],
                    collapsed: true,
                },
                {
                    label: 'Deploy',
                    items: [
                        'deploy',
                        'deploy/images'
                    ],
                    collapsed: true,
                },
                {
                    label: 'Contract Templates',
                    items: [
                        'contract-templates',
                        {
                            label: 'API Client',
                            items: ['contract-templates/api-client'],
                            collapsed: true,
                        },
                        {
                            label: 'Broker Minimum Terms',
                            items: ['contract-templates/broker-minimum-terms'],
                            collapsed: true,
                        },
                    ],
                    collapsed: true,
                },
            ],
        }),

        mdx(),
    ],
});
