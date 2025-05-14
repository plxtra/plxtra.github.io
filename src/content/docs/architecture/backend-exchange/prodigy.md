---
title: Prodigy Digital Exchange
sidebar:
  label: Exchange
---

The Prodigy exchange provides symbology, order execution, trade matching, news feeds, and supporting exchange services.

## Concepts

The process of creating a market for tradeable assets and matching their potential buyers with sellers is a complex task.

Prodigy provides a self-contained platform for this purpose, able to be used in conjunction with the Plxtra infrastructure, or offered directly to partners over industry standard protocols.

* Scalable, to handle markets both big and small.
* High availability, to ensure minimal service disruption when problems occur.
* Flexible, able to represent whatever tradeable assets and rules you might require.
* Performant, optimised for high throughput to handle the busiest markets.

## Extensibility

* Market Model plugins.\
  Extend the basic model of a Symbol, Order, or Trade with additional business information.
* Execution Engine plugins.\
  Add new logic for matching orders, and new market operations to manipulate the state of the market.
* FIX application plugins.\
  Customise the FIX protocol spoken by the server.

## APIs

* Internal REST API for market control operations.
* Public REST API for reference and historical data access.
* FIX API for order requests, execution reports, and market data
* CLI API for operations and querying