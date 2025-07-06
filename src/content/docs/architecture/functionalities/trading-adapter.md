---
title: Trading Adapter
---

*Component: [OMS](../../components/oms/)*

A Trading Adapter is an [OMS](../../components/oms/) plugin which connects [Order Management](../order-management/) to a trading feed for an exchange.  Its role is to adapt data from the feed to Order Management internal messaging.

## Protocols

Often trading feeds are based on a reasonably defined protocol such as [FIX protocol](https://www.fixtrading.org/what-is-fix/) or [OUCH](https://nasdaqtrader.com/content/technicalsupport/specifications/TradingProducts/OUCH5.0.pdf) however some exchange platforms use a proprietary protocol. Trading adapters can be developed for most types of trading feeds.

## Restarts

To facilitate restarts, Feed Servers will periodically take a snapshot of this in-memory picture and save the latest into an SqlLite database.  This allows the Feed Server to quickly rebuild the in-memory picture if the Exchange or Feed Server are restarted.  Without this snapshot, the Feed Server would need to replay the entire days data from the exchange to ensure that all the structures are correct.  This potentially can take a long time towards the end of the day.

## Existing plugins

Trading adapter plugins allow Plxtra to easily connect to trading services at different exchanges.  The following trading adapter plugins have been developed and used in production:
* Plxtra [Prodigy](../../components/prodigy/)
* ASX FIX
* ASX OMNET (test only)
* Bursa Genium FIX
* NSX XStream
