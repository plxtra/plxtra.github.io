---
title: Trading Agent
---

*Component: [Zenith](../../components/back-end/zenith/index.md)*

The Trading Agent maintains an in-memory picture of [Order Management](./order-management.md) data (accounts, holdings, balances, orders) which is used by [Caching Proxy](./caching-proxy/index.md) to satisfy subscriptions and queries for this data.  It also orchestrates vetting of order requests.

## In-memory picture

In regards to the in-memory picture, it is similar to a [Feed Server](./feed-server.md) however it sources its data from [Order Management](./order-management.md).

Like [Feed Servers](./feed-server/) the Trading Agent will periodically take a snapshot of this its in-memory database and save the latest into an SqlLite database.  This allows it to quickly rebuild the in-memory picture if the Exchange or [OMS](../../components/back-end/oms/) are restarted.  Without this snapshot, the Trading Agent would need to replay the entire days feed from the exchange to ensure that all the structures are correct.  This potentially can take a long time towards the end of the day.

# Vetting

When the [Caching Proxy](./caching-proxy/) receives an order request (place, amend, cancel or move), it forwards the request to the Trading Agent.  The trading agent will review the request to determine what information is needed to vet it.  This can include:

*	Vetting rule(s) (always required)
*	Association data (from Authority)
*	Security, Price and Depth data (obtained from relevant Feed Server)
*	Balances, holdings and orders.

It collects the required information then passes the request and together with the collected information to the [vetting engine](./vetting.md).  The vetting engine will return one of the following results:

1. **Success** - order request is forwarded to the OMS where it is routed to a destination,
1. **Fail with DTR review** - order request is forwarded to the OMS but queued for a DTR to review,
1. **Fail with reject** - order request is discarded and a message is returned to API caller advising rejection.
