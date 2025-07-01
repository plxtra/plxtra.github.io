---
title: Overview
---

## Business Systems Integration

Used by broker/exchange operators to integrate their business systems with Plxtra.

* [Registry](/registry-api/): Used to query and manage the Registry. Also stream real-time feeds and views to/from the Registry.
* [Market Control](/market-control-api/): Used to add and remove listings on markets. Also used to publish news items.
* **[Order Management](/oms-api/)**: Used to query and manipulate the Order Management System (OMS). Also stream real-time feeds and views to/from the OMS.
* **[Authority](/authority-api/)**: Used to query and manipulate User Authority data.
* [Session Management](/session-management-api/): Used to query and manipulate Session Management service.

## Enterprise Partners

Used by enterprise partners to access data and trading. They differ from the [Front end](#front-end) APIs in bypassing [User Authorisation](/architecture/components/backend/user-authorisation/).

* [Market Reports](/market-reports-api/): Used for retrieving market reference data, such as trade history, charting records, and news bodies.
* [FIX](/fix-api/): FIX protocol connectivity for both market data feeds and order and execution feeds.

## Front end

Used to create data and trading applications.

* **[Websocket](/front-end-api/)**: A streaming API for real-time market and trading data, making queries, and submitting order instructions.
* [IQ](/iq-api/): A SQL-style query interface for retrieving market and trading data, and submitting order instructions.
* [Motif Services](/motif-services-api/): A SQL-style query interface for retrieving market and trading data, and submitting order instructions.

## Extensibility

Used to extend the capabilities of Plxtra.

* [Zenith Plugin](/zenith-plug-in-api/): Used to connect to external services and provide market data into the data distribution infrastructure.
* **[Order Management Feed Adapter](/oms-api/ws/feed/)**: Used to feed order executions from external exchanges or execution locations into the OMS.
* [Registry Feed Adapter](/registry-feed-adapter-api/): Used to feed cash and asset movements to and from the registry.
* **[Motif Extension](/motif-api/)**: Used for creating extensions to the Motif trading application.
