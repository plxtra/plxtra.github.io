---
title: Order Management Services
sidebar:
  label: Order Management
---

The Order Management Services provides realtime tracking of balances, holdings, and open orders, along with reservations and basic order instructions routing.

## Concepts

The lifecycle of an order has many steps, and multiple side-effects that must be managed to ensure a reliable market.

OMS is built to manage this order lifecycle, from placement through amendment or cancellation, to trading and expiry, and keeping track of any executions on available cash balances, holdings, and open orders.

## APIs

* [REST API](/oms-api/rest/) for querying current and historical state (balances, holdings, orders, etc), submit transactions, etc
* [Streaming WebSocket API](/oms-api/ws/) for receiving realtime OMS data, and for submitting events into OMS.
* [CLI tools](/oms-api/cli/) for performing administrative tasks such as registering account metadata
