export namespace ComponentShort {
    export const registry: ComponentShort = {
        label: 'Registry',
        description: '',
    };
    export const exchangeEngine: ComponentShort = {
        label: 'Exchange Engine',
        description: '',
    };
    export const fixServer: ComponentShort = {
        label: 'Fix Server',
        description: 'Industry standard FIX server (data and trading).',
    };
    export const feedServer: ComponentShort = {
        label: 'Feed Server',
        description: 'Connects to stock exchange and information data feeds and provides streaming market data to other components.',
    };
    export const tradingAdapter: ComponentShort = {
        label: 'Trading Adapter',
        description: '',
    };
    export const tradeFeedAdapter: ComponentShort = {
        label: 'Trade Feed Adapter',
        description: '',
    };
    export const orderManagementSystem: ComponentShort = {
        label: 'Order Management System',
        description: '',
    };
    export const tradingAgent: ComponentShort = {
        label: 'Trading Agent',
        description: '',
    };
    export const userAuthorisation: ComponentShort = {
        label: 'User Authorisation',
        description: '',
    };
    export const cachingProxy: ComponentShort = {
        label: 'Caching Proxy',
        description: '',
    };
    export const alertingScanning: ComponentShort = {
        label: 'Alerting / Scanning',
        description: '',
    };
    export const sessionManagement: ComponentShort = {
        label: 'Session Management',
        description: '',
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
    export const auditHistory: ComponentShort = {
        label: 'Audit History',
        description: 'Stores API activity and login sessions.',
    };
    export const pushNotification: ComponentShort = {
        label: 'Push Notification',
        description: 'Track data permissions for authenticated users and client applications.',
    };
    export const marketHoliday: ComponentShort = {
        label: 'Market Holiday',
        description: 'Track trading days and non-trading days.',
    };
    export const watchlistManager: ComponentShort = {
        label: 'Watchlist Manager',
        description: 'Stores user-created and system-managed watchlists.',
    };
    export const interlink: ComponentShort = {
        label: 'Interlink',
        description: 'Communications between internal components.',
    };
}

export interface ComponentShort {
    label: string;
    description: string;
}
