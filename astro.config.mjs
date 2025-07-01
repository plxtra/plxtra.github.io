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
            favicon: 'src/icons/plxtra-logo.svg',

            sidebar: [
                {
                    label: 'Getting Started',
                    items: ['getting-started', 'getting-started/quick-start', 'getting-started/install'],
                },
                {
                    label: 'Using',
                    items: [
                        { label: 'Overview', slug: 'using' },
                        { label: 'CLI', slug: 'using/cli-tools' },
                        { label: 'Configuration', slug: 'using/configuration' },
                        { label: 'Deploy', slug: 'using/deploy' },
                        { label: 'XOSP', slug: 'using/xosp' },
                    ],
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
                                { label: 'Authority', slug: 'architecture/components/backend/authority' },
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
                        { label: 'Registry', slug: 'registry-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Market Control', slug: 'market-control-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Order Management', link: '/oms-api/' },
                        { label: 'Authority', link: '/authority-api/' },
                        { label: 'Session Management', slug: 'session-management-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Market Reports', slug: 'market-reports-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'FIX', slug: 'fix-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Websocket', link: '/front-end-api/' },
                        { label: 'IQ', slug: 'iq-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Motif Services', slug: 'motif-services-api', attrs: { style: 'font-weight: 100;' } },
                        {
                            label: 'Extensibility',
                            items: [
                                { label: 'Overview', slug: 'api/extensibility' },
                                { label: 'Caching Proxy Plug-in', slug: 'caching-proxy-plug-in-api', attrs: { style: 'font-weight: 100;' } },
                                { label: 'Order Management Feed Adapter', link: '/oms-api/ws/feed/', attrs: { style: 'font-weight: 100;' } },
                                { label: 'Registry Feed Adapter', slug: 'registry-feed-adapter-api', attrs: { style: 'font-weight: 100;' } },
                                { label: 'Motif Extension', link: '/motif-api/' },
                            ],
                            collapsed: true,
                        },
                    ],
                    collapsed: true,
                },
                {
                    label: 'Source',
                    items: [
                        'source',
                        'source/repositories',
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
