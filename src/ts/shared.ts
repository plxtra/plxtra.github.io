export interface ComponentShort {
    label: string;
    description: string;
}

export interface FunctionalityShort {
    functionalityLabel: string;
    functionalityLink: string;
    functionalityDescription: string;
    componentShort: ComponentShort;
    componentLink: string;
}

export namespace ComponentShort {
    export const foundry: ComponentShort = {
        label: 'Foundry',
        description: '',
    };
    export const prodigy: ComponentShort = {
        label: 'Prodigy',
        description: '',
    };
    export const fix: ComponentShort = {
        label: 'Fix',
        description: 'Industry standard FIX server (data and trading).',
    };
    export const authority: ComponentShort = {
        label: 'Authority',
        description: '',
    };
    export const zenith: ComponentShort = {
        label: 'Zenith',
        description: '',
    };
    export const oms: ComponentShort = {
        label: 'OMS',
        description: '',
    };
    export const doppler: ComponentShort = {
        label: 'Doppler',
        description: '',
    };
    export const herald: ComponentShort = {
        label: 'Herald',
        description: '',
    };
    export const sessionManagement: ComponentShort = {
        label: 'Session Management',
        description: '',
    };
    export const motifServices: ComponentShort = {
        label: 'Motif Services',
        description: '',
    };
    export const marketHoliday: ComponentShort = {
        label: 'Market Holiday',
        description: 'Track trading days and non-trading days.',
    };
    export const auditHistory: ComponentShort = {
        label: 'Audit History',
        description: '',
    };
    export const watchlistManager: ComponentShort = {
        label: 'Watchlist Manager',
        description: 'Stores user-created and system-managed watchlists.',
    };
    export const interlink: ComponentShort = {
        label: 'Interlink',
        description: 'Communications between internal components.',
    };
    export const motif: ComponentShort = {
        label: 'Motif',
        description: 'A web-based desktop trading application designed for professional traders and DTRs.',
    };
    export const arclight: ComponentShort = {
        label: 'Arclight',
        description: '',
    };
    export const motifXL: ComponentShort = {
        label: 'MotifXL',
        description: 'Microsoft Excel add-in making data and trading available from within Excel.',
    };
}

export namespace FunctionalityShort {
    export const registry: FunctionalityShort = {
        functionalityLabel: 'Registry',
        functionalityLink: './functionalities/back-end/registry/',
        functionalityDescription: '',
        componentShort: ComponentShort.foundry,
        componentLink: './components/back-end/foundry/',
    };
    export const exchangeEngine: FunctionalityShort = {
        functionalityLabel: 'Exchange Engine',
        functionalityLink: './functionalities/back-end/exchange-engine/',
        functionalityDescription: '',
        componentShort: ComponentShort.prodigy,
        componentLink: './components/back-end/prodigy/',
    };
    export const fixServer: FunctionalityShort = {
        functionalityLabel: 'Fix Server',
        functionalityLink: './functionalities/back-end/fix-server/',
        functionalityDescription: 'Industry standard FIX server (data and trading).',
        componentShort: ComponentShort.fix,
        componentLink: './components/back-end/fix/',
    };
    export const feedServer: FunctionalityShort = {
        functionalityLabel: 'Feed Server',
        functionalityLink: './functionalities/back-end/feed-server/',
        functionalityDescription: 'A [Zenith](./components/back-end/zenith/) plugin which connects to an exchange and provides streaming and/or historical market data to other Zenith services.',
        componentShort: ComponentShort.zenith,
        componentLink: './components/back-end/zenith/',
    };
    export const tradingAdapter: FunctionalityShort = {
        functionalityLabel: 'Trading Adapter',
        functionalityLink: './functionalities/back-end/trading-adapter/',
        functionalityDescription: 'An [OMS](./components/back-end/oms/) plugin which connects [Order Management](./functionalities/back-end/order-management/) to a trading feed for an exchange',
        componentShort: ComponentShort.oms,
        componentLink: './components/back-end/oms/',
    };
    export const tradeFeedAdapter: FunctionalityShort = {
        functionalityLabel: 'Trade Feed Adapter',
        functionalityLink: './functionalities/back-end/trade-feed-adapter/',
        functionalityDescription: 'Generates a specialised feed which assists settlement and registries from booking trades to accounts and generating contract notes.',
        componentShort: ComponentShort.oms,
        componentLink: './components/back-end/oms/',
    };
    export const orderManagement: FunctionalityShort = {
        functionalityLabel: 'Order Management',
        functionalityLink: './functionalities/back-end/order-management/',
        functionalityDescription: 'Manages the life cycle of all orders and maintains account holdings, balances, orders and reservations.',
        componentShort: ComponentShort.oms,
        componentLink: './components/back-end/oms/',
    };
    export const tradingAgent: FunctionalityShort = {
        functionalityLabel: 'Trading Agent',
        functionalityLink: './functionalities/back-end/trading-agent/',
        functionalityDescription: 'Maintains an in-memory picture of [Order Management](./functionalities/back-end/order-management/) data for caching proxy and orchestrates [vetting](./functionalities/back-end/vetting/) of order requests.',
        componentShort: ComponentShort.zenith,
        componentLink: './components/back-end/zenith/',
    };
    export const vetting: FunctionalityShort = {
        functionalityLabel: 'Vetting',
        functionalityLink: './functionalities/back-end/vetting/',
        functionalityDescription: 'Check each order request against a rule set to reject order requests that do not meet the required criteria.',
        componentShort: ComponentShort.zenith,
        componentLink: './components/back-end/zenith/',
    };
    export const authority: FunctionalityShort = {
        functionalityLabel: 'Authority',
        functionalityLink: './functionalities/back-end/authority/',
        functionalityDescription: '',
        componentShort: ComponentShort.authority,
        componentLink: './components/back-end/authority/',
    };
    export const cachingProxy: FunctionalityShort = {
        functionalityLabel: 'Caching Proxy',
        functionalityLink: './functionalities/back-end/caching-proxy/',
        functionalityDescription: 'Fulfills subscriptions and data requests from APIs using either cached data or obtaining the data from a [Feed Server](./functionalities/back-end/feed-server/) or the [Trading Agent](./functionalities/back-end/trading-agent/).',
        componentShort: ComponentShort.zenith,
        componentLink: './components/back-end/zenith/',
    };
    export const alertingScanning: FunctionalityShort = {
        functionalityLabel: 'Alerting / Scanning',
        functionalityLink: './functionalities/back-end/alerting-scanning/',
        functionalityDescription: '',
        componentShort: ComponentShort.zenith,
        componentLink: './components/back-end/zenith/',
    };
    export const sessionManagement: FunctionalityShort = {
        functionalityLabel: 'Session Management',
        functionalityLink: './functionalities/back-end/session-management/',
        functionalityDescription: '',
        componentShort: ComponentShort.sessionManagement,
        componentLink: './components/back-end/session-management/',
    };
    export const motif: FunctionalityShort = {
        functionalityLabel: 'Motif',
        functionalityLink: './functionalities/front-end/motif/',
        functionalityDescription: 'A web-based desktop trading application designed for professional traders and DTRs.',
        componentShort: ComponentShort.motif,
        componentLink: './components/front-end/motif/',
    };
    export const arclight: FunctionalityShort = {
        functionalityLabel: 'Arclight',
        functionalityLink: './functionalities/front-end/arclight/',
        functionalityDescription: '',
        componentShort: ComponentShort.arclight,
        componentLink: './components/front-end/arclight/',
    };
    export const motifXL: FunctionalityShort = {
        functionalityLabel: 'MotifXL',
        functionalityLink: './functionalities/front-end/motif-xl/',
        functionalityDescription: 'Microsoft Excel add-in making data and trading available from within Excel.',
        componentShort: ComponentShort.motifXL,
        componentLink: './components/front-end/motif-xl/',
    };
    export const auditHistory: FunctionalityShort = {
        functionalityLabel: 'Audit History',
        functionalityLink: './functionalities/back-end/audit-history/',
        functionalityDescription: 'Stores API activity and login sessions.',
        componentShort: ComponentShort.auditHistory,
        componentLink: './components/back-end/audit-history/',
    };
    export const pushNotification: FunctionalityShort = {
        functionalityLabel: 'Push Notification',
        functionalityLink: './functionalities/back-end/zenith/',
        functionalityDescription: 'Track data permissions for authenticated users and client applications.',
        componentShort: ComponentShort.zenith,
        componentLink: './components/back-end/zenith/',
    };
    export const marketHoliday: FunctionalityShort = {
        functionalityLabel: 'Market Holiday',
        functionalityLink: './functionalities/back-end/market-holiday/',
        functionalityDescription: 'Track trading days and non-trading days.',
        componentShort: ComponentShort.marketHoliday,
        componentLink: './components/back-end/market-holiday/',
    };
    export const watchlistManager: FunctionalityShort = {
        functionalityLabel: 'Watchlist Manager',
        functionalityLink: './functionalities/back-end/watchlist-manager/',
        functionalityDescription: 'Stores user-created and system-managed watchlists.',
        componentShort: ComponentShort.watchlistManager,
        componentLink: './components/back-end/watchlist-manager/',
    };
    export const interlink: FunctionalityShort = {
        functionalityLabel: 'Interlink',
        functionalityLink: './functionalities/back-end/interlink/',
        functionalityDescription: 'Communications between internal components.',
        componentShort: ComponentShort.interlink,
        componentLink: './components/back-end/interlink/',
    };
}

export function convertMarkdownLinksToAnchors(markdown: string, linkCallback?: (link: string, label: string) => string): string {
    let result = '';

    const markdownLength = markdown.length;
    if (markdownLength < 6) {
        return markdown;
    } else {
        let index = 0;
        do {
            const foundLink = findNextLink(markdown, index);
            if (foundLink === undefined) {
                result += markdown.substring(index);
                break;
            } else {
                result += markdown.substring(index, foundLink.start);
                const label = foundLink.label;
                let link = foundLink.link;
                if (linkCallback !== undefined) {
                    link = linkCallback(link, label);
                }
                result += `<a href="${link}">${label}</a>`;
                index = foundLink.end;
            }
        } while (index < markdownLength);

        return result;
    }
}

function findNextLink(markdown: string, index: number): FoundLink | undefined {
    const enum State {
        Out,
        label,
        LinkWaiting,
        Link,
    };

    let state: State = State.Out;
    let label = '';
    let link = '';
    let linkStart = -1;
    let result = '';

    const markdownLength = markdown.length;
    for (let i = index; i < markdownLength; i++) {
        const char = markdown[i];
        switch (state) {
            case State.Out:
                if (char === '[') {
                    state = State.label;
                    label = '';
                    linkStart = i;
                } else {
                    result += char;
                }
                break;
            case State.label:
                if (char === ']') {
                    state = State.LinkWaiting;
                } else {
                    label += char;
                }
                break;
            case State.LinkWaiting:
                if (char === '(') {
                    state = State.Link;
                    link = '';
                } else {
                    state = State.Out;
                }
                break;
            case State.Link:
                if (char === ')') {
                    return {
                        start: linkStart,
                        end: i + 1,
                        label,
                        link,
                    }
                } else {
                    link += char;
                }
                break;
            default:
                throw new Error(`Shared.findNextLink: Unexpected state: ${state}`);
        }
    }

    return undefined
}

interface FoundLink {
    readonly start: number;
    readonly end: number;
    readonly label: string;
    readonly link: string;
}
