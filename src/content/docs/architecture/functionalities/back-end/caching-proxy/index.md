---
title: Caching proxy
---

*Component: [Zenith](../../../components/back-end/zenith/)*

Fulfills subscriptions and data requests from APIs using either cached data or obtaining the data from a [Feed Server](../feed-server/) or the [Trading Agent](../trading-agent/).

The caching proxy handles query and subscription requests from APIs and downstream caching proxies.  For data requests/subscriptions, the caching proxy will first check whether it already has a subscription for that data.  If so, it will return the that data and provide updates as required.  If it does not have an existing subscription, it will retrieve that data from the relevant feed server/trading agent and subscribe for updates.  The updates will be processed to maintain the state of that data in the caching proxy.  To minimise requests for data, subscriptions will be maintained even after no API or downstream caching proxy is accessing that data. (That is, the subscription/data is cached.)

Requests/subscriptions for exchange related data will be sent to the [Feed Server](../feed-server/) processing data feed from the relevant exchange.

Requests/subscriptions for order and trading account related data (account lists, holdings, balances, orders) will be sent to the [Trading Agent](../trading-agent/).

Order requests (place, amend, cancel, move) are forwarded to the [Trading Agent](../trading-agent/).

## Security

For security, each connection needs to be authenticated with a token from an Identity Provider.  This token will allow the caching proxy to authenticate the user and determine the resources they are allowed to access.  This authentication is only valid for a limited time (say 30 minutes).  The application needs to continually renew the token before the authentication expires.

## Scaling

To support scaling of users and API connections, a caching proxy supports unlimited downstream caching proxies residing on different servers.  In this scenarios, connections from applications using the API would be sent through a load balancer which would distribute them across all available caching proxies.  This allows unlimited scaling.  However the design of the caching proxy is heavily optimised and very efficient and most likely downstream proxies are not required.

## Redundancy

However, for redundancy purposes, you would typically have at least 2 Zenith Proxies running.  These will be active/active.  That is, a client application can connect to either of these to access the APIs.  In the unlikely event that one fails (eg server failure), the client can simply connect to the other.  In a cloud environment, you would typically place one Zenith Proxy in each zone (ie, different hosting site) and provide access to each via a load balancer which supports the websocket and webservices protocols.  See [redundancy](../../../redundancy/) for more details.
