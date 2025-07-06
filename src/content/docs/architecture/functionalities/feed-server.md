---
title: Feed Server
---

*Component: [Zenith](../../components/zenith/)*

A Feed Server is a [Zenith](../../components/zenith/) data plugin which provides streaming and/or historical market data to other Zenith services.

## In-memory picture

A streaming feed server typically subscribes to all the real-time data from an exchange or trading data source.  This stream of data is processed to maintain an in-memory picture of all the data wanted by the other Zenith components and Zenith API services.  For example, security values, trades, depth etc.  The Feed Server will only poll the exchange for data that is not available via streaming.

## Historical

Some data such as Course of Sales or News should be displayed with both current and historical information.  Feed servers can persist data in databases to build up historical records.  These databases can be pre-populated with existing data allowing users to see full histories.

## Restarts

To facilitate restarts, Feed Servers will periodically take a snapshot of this in-memory picture and save the latest into an SqlLite database.  This allows the Feed Server to quickly rebuild the in-memory picture if the Exchange or Feed Server are restarted.  Without this snapshot, the Feed Server would need to replay the entire days data from the exchange to ensure that all the structures are correct.  This potentially can take a long time towards the end of the day.

## Existing plugins

Feed Servers allow Plxtra to easily connect to data services from different exchanges and financial data sources.  The following feed servers plugins have been developed and used in production:
* Plxtra [Prodigy](../../components/prodigy/)
* ASX OMNET
* NZX Genium FIX (no longer in use)
* Bursa Genium FIX
* NSX XStream
* Refinitiv Elektron
