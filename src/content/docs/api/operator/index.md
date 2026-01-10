---
title: Operator APIs Overview
sidebar:
  label: Overview
---

Operator APIs are for the operator of Plxtra to control, manipulate, and integrate other systems with Plxtra.

## REST APIs

REST APIs provide ways to query services and manipulate their state via simple HTTP calls.

- _Authority_\
  Used to query and manipulate User Authority data.
- _Registry_\
  Used to query and manipulate the registry.
- _Market Operator_\
  Used for market control tasks such as manipulating the exchange, symbols, FIX sessions, and more.
- _[Order Management](/oms-api/rest/)_\
  Used to query and manipulate the Order Management System.
- Session Management\
  Used to query and manipulate the Session Management Service.

## Streaming APIs

Streaming APIs offer realtime feeds into and out of services.

- _Registry_\
  Used to maintain realtime views of the registry, and supply data feeds to the registry.
- _[Order Management](/oms-api/ws/)_\
  Used to maintain realtime views of the OMS, and supply data feeds to the OMS.

## Command Line Tools

CLI tools typically provide an interface to an underlying REST API, for system administration and automation.

- _Registry_\
  Used to query and manipulate the registry.
- _[Order Management](/oms-api/cli/)_\
  Used to query and manipulate the Order Management System.
- Session Management\
  Used to query and manipulate the Session Management Service.

## Extensibility

Extensibility points are APIs for plugins to implement functionality within services.

- _Zenith Plugin API_\
  Used to connect to external services and provide market data into the data distribution infrastructure.
- _[Order Management Feed Adapter](/oms-api/ws/feed/)_\
  Used to feed order executions from external exchanges or execution locations into the OMS.
- _Registry Feed Adapter_\
  Used to feed cash and asset movements to and from the registry.
