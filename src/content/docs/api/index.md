---
title: Overview
---

## Back end Operator

Used by broker/exchange operators to integrate their business systems with Plxtra.

* **[Foundry]()**: Used to query and manipulate the Foundry Registry. Also stream real-time feeds and views to/from the Registry.
* **[Prodigy]()**: Used to query and manipulate the Prodigy Exchange.
* **[Market Operator]()**: Used for market control tasks such as manipulating the exchange, symbols, FIX sessions, and more.
* **[Order Management](/oms-api/)**: Used to query and manipulate the Order Management System (OMS). Also stream real-time feeds and views to/from the OMS.
* **[Authority]()**: Used to query and manipulate User Authority data.
* **[Session Management]()**: Used to query and manipulate Session Management service.

## Enterprise

Used by enterprise partners to access data and trading. They differ from the [Front end](#front-end) APIs in bypassing [User Authorisation](/architecture/components/backend/user-authorisation/).

* **[Prodigy Public]()**: Used for retrieving market reference data, such as trade history, charting records, and news bodies.
* **[FIX]()**: FIX protocol connectivity for both market data feeds and order and execution feeds.

## Front end

Used to create data and trading applications.

* **[Websocket]()**: A streaming API for real-time market and trading data, making queries, and submitting order instructions.
* **[IQ]()**: A SQL-style query interface for retrieving market and trading data, and submitting order instructions.
* **[Motif Services]()**: A SQL-style query interface for retrieving market and trading data, and submitting order instructions.

## Extensibility

Used to extend the capabilities of Plxtra.

* **[Zenith Plugin]()**: Used to connect to external services and provide market data into the data distribution infrastructure.
* **[Order Management Feed Adapter](/oms-api/ws/feed/)**: Used to feed order executions from external exchanges or execution locations into the OMS.
* **[Registry Feed Adapter]()**: Used to feed cash and asset movements to and from the registry.
* **[Motif Extension]()**: Used for creating extensions to the Motif trading application.
