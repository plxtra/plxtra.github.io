---
title: APIs Overview
---

Plxtra provides the following APIs to enable access, integrations and extensions:

## Business Systems Integration

Used by broker/exchange operators to integrate their business systems with Plxtra.

- **[Order Management](/oms-api/)**: Used to query and manipulate the Order Management System (OMS). Also stream real-time feeds and views to/from the OMS.
- **[Authority](/authority-api/)**: Used to query and manipulate User Authority data.
- [Session Management](/session-management-api/): Used to query and manipulate Session Management service.

## Front end

Used to create data and trading applications.

- **[Websocket](/front-end-api/)**: A streaming API for real-time market and trading data, making queries, and submitting order instructions.
- [IQ](/iq-api/): A SQL-style query interface for retrieving market and trading data, and submitting order instructions.
- [Motif Services](/motif-services-api/): A SQL-style query interface for retrieving market and trading data, and submitting order instructions.

## Extensibility

Used to extend the capabilities of Plxtra.

- **[Overview](./extensibility/)**: Introduction to extending Plxtra
- [Zenith Plugin](/zenith-plugin-api/): Used to connect to external services and provide market data into the data distribution infrastructure.
- **[Order Management Feed Adapter](/oms-api/ws/feed/)**: Used to feed order executions from external exchanges or execution locations into the OMS.
- **[Motif Extension](/motif-api/)**: Used for creating extensions to the Motif trading application.
