// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import starlightLinksValidator from 'starlight-links-validator';

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
            plugins: process.env.CHECK_LINKS ? [starlightLinksValidator()] : [],
            // plugins: [
            //     starlightLinksValidator()
            // ],

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
                        {
                            label: 'Deploy',
                            items: [
                                { label: 'Overview', slug: 'using/deploy' },
                                { label: 'Scripts', slug: 'using/deploy/scripts' },
                                { label: 'Profiles', slug: 'using/deploy/profiles' },
                                { label: 'Registries', slug: 'using/deploy/registries' },
                                { label: 'Images', slug: 'using/deploy/images' },
                                {
                                    label: 'Guides',
                                    items: [
                                        { label: 'Overview', slug: 'using/deploy/guides' },
                                        { label: 'Linux VPS', slug: 'using/deploy/guides/linux-vps' },
                                    ],
                                    collapsed: true,
                                },
                            ],
                            collapsed: true,
                        },
                        { label: 'XOSP', slug: 'using/xosp' },
                    ],
                    collapsed: true,
                },
                {
                    label: 'Architecture',
                    items: [
                        { label: 'Overview', slug: 'architecture' },
                        {
                            label: 'Functionalities',
                            items: [
                                { label: 'Overview', slug: 'architecture/functionalities' },
                                { label: 'Authority', slug: 'architecture/functionalities/authority' },
                                { label: 'Order Management', slug: 'architecture/functionalities/order-management' },
                                { label: 'Trading Agent', slug: 'architecture/functionalities/trading-agent' },
                                { label: 'Vetting', slug: 'architecture/functionalities/vetting' },
                                { label: 'Caching Proxy', slug: 'architecture/functionalities/caching-proxy' },
                                { label: 'Feed Server', slug: 'architecture/functionalities/feed-server' },
                                { label: 'Trading Adapter', slug: 'architecture/functionalities/trading-adapter' },
                                { label: 'Trade Feed Adapter', slug: 'architecture/functionalities/trade-feed-adapter' },
                                { label: 'Alerting/Scanning', slug: 'architecture/functionalities/alerting-scanning' },
                                { label: 'Session Management', slug: 'architecture/functionalities/session-management' },
                                { label: 'Motif', slug: 'architecture/functionalities/motif' },
                                { label: 'Arclight', slug: 'architecture/functionalities/arclight' },
                                { label: 'MotifXL', slug: 'architecture/functionalities/motif-xl' },
                            ],
                            collapsed: true,
                        },
                        {
                            label: 'Components',
                            items: [
                                { label: 'Overview', slug: 'architecture/components' },
                                { label: 'Authority', slug: 'architecture/components/authority' },
                                { label: 'OMS', slug: 'architecture/components/oms' },
                                {
                                    label: 'Zenith',
                                    items: [
                                        { label: 'Overview', slug: 'architecture/components/zenith' },
                                        { label: 'Interlink', slug: 'architecture/components/zenith/interlink' },
                                        { label: 'Vortex', slug: 'architecture/components/zenith/vortex' },
                                    ],
                                    collapsed: true,
                                },
                                { label: 'Session Management', slug: 'architecture/components/session-management' },
                                { label: 'Herald', slug: 'architecture/components/herald' },
                                { label: 'Doppler', slug: 'architecture/components/doppler' },
                                { label: 'Motif Services', slug: 'architecture/components/motif-services' },
                                { label: 'Audit History', slug: 'architecture/components/audit-history' },
                                { label: 'Market Holiday', slug: 'architecture/components/market-holiday' },
                                { label: 'Watchlist Manager', slug: 'architecture/components/watchlist-manager' },
                                { label: 'Motif', slug: 'architecture/components/motif' },
                                { label: 'Arclight', slug: 'architecture/components/arclight' },
                                { label: 'MotifXL', slug: 'architecture/components/motif-xl' },
                            ],
                            collapsed: true,
                        },
                        { label: 'Databases', slug: 'architecture/databases' },
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
                        { label: 'Order Management', link: '/oms-api/' },
                        { label: 'Authority', link: '/authority-api/' },
                        { label: 'Session Management', slug: 'session-management-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Websocket', link: '/front-end-api/' },
                        { label: 'IQ', slug: 'iq-api', attrs: { style: 'font-weight: 100;' } },
                        { label: 'Motif Services', slug: 'motif-services-api', attrs: { style: 'font-weight: 100;' } },
                        {
                            label: 'Extensibility',
                            items: [
                                { label: 'Overview', slug: 'api/extensibility' },
                                { label: 'Caching Proxy Plugin', slug: 'caching-proxy-plugin-api', attrs: { style: 'font-weight: 100;' } },
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
                        { label: 'Overview', slug: 'source' },
                        { label: 'Publish', slug: 'source/publish' },
                        { label: 'Repositories', slug: 'source/repositories' },
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
