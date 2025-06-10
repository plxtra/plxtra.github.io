---
title: Feed Server
---

The Zenith Feed Server provides streaming market data to other Zenith services.

## Concepts

Connectivity to stock exchanges and third-party markets is typically limited, allowing only a set number of simultaneous logins and connections.

To facilitate horizontal scaling of the front-end API services, the Zenith Feed Server exists to establish these upstream connections, and distribute the data to downstream consumers.

## Extensibility

* Market Data Adapters.\
  Consume data from upstream exchanges and feed them into the Zenith infrastructure.
* Historical Data Adapters.\
  Pull historical data like trade history and charts from databases or external services.
