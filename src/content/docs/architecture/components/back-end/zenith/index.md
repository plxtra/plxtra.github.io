---
title: Zenith
---

The Zenith Feed Proxy collects streaming market and trading data, along with other related information, and exposes public-facing APIs for access.

* *Functionalities - [Caching Proxy](../../../functionalities/back-end/caching-proxy/) [Feed Server](../../../functionalities/back-end/feed-server/) [Trading Agent](../../../functionalities/back-end/trading-agent/) [Vetting](../../../functionalities/back-end/vetting/) [Alerting/Scanning](../../../functionalities/back-end/alerting-scanning/)*
* *API*
    * *Front-end [websocket](/front-end-api/) - A streaming API for real-time market and trading data, scanning, notification and submitting order requests.*
    * *Front-end [IQ](/front-end-api/) - A SQL-style query interface for retrieving market and trading data, scanning, notification and submitting order requests.*
* *Extensibility*
    * *Market Data Adapters - Consume data from upstream exchanges and feed them into the Zenith infrastructure.*
    * *Historical Data Adapters - Pull historical data like trade history and charts from databases or external services.*
    * *Server Endpoint plugins - Add additional public-facing APIs by writing a server plugin.*
    * *Authentication plugins - Support additional authentication methods beyond OAuth Bearer tokens, such as SAML.*
    * *Extended Data plugins - Attach additional data to securities from external sources.*
    * *Account Source Adapters - Directly retrieve account data from a CRM or existing back-office system.*
    * *Data Sources - Integrate an existing order management system to provide balances, holdings, orders, and submit order instructions.*
    * *Vetting Engine - Customise vetting with your own rules engine.*
    * *Vetting Sources - Supply data directly to the vetting engine from external services.*


Zenith components consist of the Zenith Proxy component (called “proxy” in the above diagram) and its backend plugins (“Feed Server” and “Trading Agent” in the above diagram)

## Proxy Component

The Zenith Proxy component is a subscription caching proxy with front end and back end plugins.  It is the front-end component for our data and trading APIs.

Front end plugins for Zenith Proxy convert external protocols to the internal Zenith protocol and then use an existing subscription for that data or request a new one.  In the above diagram there are 2 protocols:

1.	WebSocket\
This is for our WebSocket API which allows users to stream data to client applications.  The documentation for this API can be viewed [here](https://websocket.paritech.com/).
1.	IQ\
This is for our restful (webservices) API.  The documentation for this API will be available shortly.

Whenever a request for data is made, then the Zenith Proxy will check if a subscription for it is already cached.  If not, it will request the data from one of the back-end plugins.  For example, if a client application wished to view depth for stock code 6399 on Bursa exchange, when the Zenith Proxy receives this request, it will check if a subscription for it already exists.  If not, it will communicate with the “Feed Server” (via interlink) and subscribe to 6399 depth.  The proxy then will begin receiving data for 6399, update its internal picture for 6399 and also pass on the updates to the client.  If a second client then wishes to receive data for stock code 6399, the proxy can then satisfy this request from its existing subscription in its cache.

The same approach is used for getting trading data.  For example, a client application wishes to receive streaming data for account “12345”.  However, in this case, if an existing subscription does not exist, the Zenith Proxy will know that it needs to request the data from the “Trading Agent” Zenith back end plugin.

With this design, it makes it easy for new exchanges to be supported.  All we need to do is create a new back end plugin for the exchange and provide its instrument codes a market namespace.  As can be seen above, a backend plugin does not necessarily have to be for an exchange.  It can be for any type of data source.

Zenith Proxy will also authenticate and authorise each request.  It has access to the “passport front end” which it can use to validate tokens.  It will check authorisations by accessing the relevant association data in “Vault”

For redundancy purposes, you will typically have at least 2 Zenith Proxies running.  These will be active/active.  That is a client application can connect to either of these to access the APIs.  In the unlikely event that one fails (eg server failure), the client can simply connect to the other.  In a cloud environment, you would typically place one Zenith Proxy in each zone (ie, different hosting site) and provide access to each via a load balancer which supports the websocket and webservices protocols.

If you have an extremely large number of clients connecting, you can install multiple Zenith Proxies.  You can even cascade Zenith Proxies to ensure that loads on backend plugins are not impacted by this scaling.

## Backend plugin

A backend plugin must maintain the complete picture of an exchange.  When the backend plugin starts, it must subscribe to all relevant data from the exchange and keeps all the pictures updated.  Historical data (eg. Course of Sales) is written to the PostgreSQL database.

Our back-end plugins are all designed to be able to be restarted during the day (can be necessary if, for example, an exchange needs to restart its services during the day).  In order to make a restart as quick as possible, we also cache the entire picture (excluding committed historical data) in a local SQLite database.  With this cache, we do not have to reload the entire data (for example, all the course of sales data).  We can load the picture cached in the SQLite database and simply update it from the last message committed to this cache.  Most exchanges have the capability to initiate a reload from a particular message number.  For some exchanges like Chi-X (which we previously connected to before getting this data from Elektron), this is vital as this exchange feed works on first principles.

Also, by having the picture cached in SQLite, we can safely restart a backend plugin (or its server) on (say) the weekend when the exchange is offline and still be able to retrieve the exchange picture from the end of the previous trading day (in this case, normally Friday).
Zenith Trading Agent back end plugin
