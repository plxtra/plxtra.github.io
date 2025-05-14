---
title: Foundry Registry
sidebar:
  label: Registry
---

The Foundry registry tracks both cash and security holdings, processes transactions to settle trades, and offers services for deposits, withdrawals, share issues, etc.

## Concepts

Keeping track of who owns what, and having a realtime view of client cash and assets held, are essential parts of providing a market.

Foundry is a realtime registry and accounting system, built to process transactions from multiple sources to provide a comprehensive view of the market and its clients.

* Flexible enough to describe whatever business structure you need.
* Exteisible for easy integration with external data sources and additional formats.

## Extensibility

* Execution Strategy plugins.\
  Submit transaction records in their original format, and have Foundry process them with full metadata, audit history, and retry logic.

## APIs

* REST API for querying current and historical state (ledger balances, entity and asset definitions), submit transactions, etc.
* Streaming WebSocket API for receiving realtime registry data, and for submitting events into the registry.
* CLI interface for performing administrative tasks such as registering entities and assets, querying CSV data, and more.