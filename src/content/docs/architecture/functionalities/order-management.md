---
title: Order Management
---

*Component: [OMS](../../components/oms/)*

Order Management has two main tasks:
1. Maintain a real-time in-memory picture of all the trading accounts and their orders, holdings, cash balances and reservations.
1. Process order requests and convert them to orders and then route them to their specified destination

## Accounting

It receives execution reports (or similar) from [Trading Adapters](./trading-adapter/) connected to all supported exchanges. These reports allow OMS to determine and update the state of all orders associated with accounts.  Whenever an exchange matches a bid and ask order it issues an execution report which details this “fill”.  This “fill” information is used by the OMS to update the relevant trading account’s holding and cash balance.
In order to prevent users from buying or selling with insufficient stock or cash, OMS reserves stock or cash to cover orders which have not yet been filled (open orders).  In addition, if settlement periods are standardised, the OMS also reserves cash and stock for orders which have not yet been settled.

## Synchronisation

In order for this accounting to occur, the OMS needs to synchronise with the source of truth for cash (normally banks) and stock (normally registries).  This can either be done with real time feeds or start-of-day files/inputs.  Start-of-day synchronisation is easier to implement however there is a risk if users can withdraw cash or stock directly while the market is open.

With start-of-day synchronisation, the OMS synchronised every morning before the market opens with the following:
* All trading accounts from start-of-day files supplied by a CRM.
* The current cash balance (for each currency) for each trading account from start-of-day files supplied by banks
* The current holdings balance from start-of-day files supplied by registries
* The open orders specified by the exchange trade feed.

## Restart

If the exchange is restarted or the OMS is restarted, then elements of this synchronisation are repeated and the execution reports from the exchange are replayed to regenerate the in-memory picture.  Similarly to [feed servers](./feed-server/), snapshots of the in-memory picture are regularly saved to reduce the amount of execution report replaying required.  It is possible to have multiple trading adapters connect to an exchange for redundancy purposes.

## Order Authorisation

When the OMS receives an order request, it will first determine whether DTR authorisation is needed.  If so, the request will be queued and order management will send a message to the front-end API which will allow applications such as Motif to display it in an Order Authorisation screen.  DTR operators can then review the request and either reject it or allow it to be sent to the exchange.

## Sending order request to exchange

Once the OMS has determined that an order request can be sent to the exchange, it will forward it to the appropriate trade adapter. The trade adapter will then forward it to the exchange and wait for an execution report indicating whether or not the exchange accepted the order request.  If it was accepted, a new order is generated and the OMS is sent a success message with the new order.  Otherwise a reject message is sent back to the OMS and the request is discarded.

## Trade Feed

To assist settlement systems with generating real time contract notes, OMS can supports [trade feed adapters](./trade-feed-adapter/). These feeds provide the real time information for each trade which a settlement system can use to generate contract notes.
