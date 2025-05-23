---
title: Operator APIs Overview
sidebar:
  label: Overview
---

Operator APIs are for the operator of Plxtra to control, manipulate, and integrate other systems with Plxtra.

## REST APIs

REST APIs provide ways to query services and manipulate their state via simple HTTP calls.

* *Authority*\
  Used to query and manipulate User Authority data.
* *Registry*\
  Used to query and manipulate the registry.
* *Market Operator*\
  Used for market control tasks such as manipulating the exchange, symbols, FIX sessions, and more.
* *[Order Management](/oms-api/rest/)*\
  Used to query and manipulate the Order Management System.
* Session Management\
  Used to query and manipulate the Session Management Service.

## Streaming APIs

Streaming APIs offer realtime feeds into and out of services.

* *Registry*\
  Used to maintain realtime views of the registry, and supply data feeds to the registry.
* *[Order Management](/oms-api/ws/)*\
  Used to maintain realtime views of the OMS, and supply data feeds to the OMS.

## Command Line Tools

CLI tools typically provide an interface to an underlying REST API, for system administration and automation.

* *Registry*\
  Used to query and manipulate the registry.
* *[Order Management](/oms-api/cli/)*\
  Used to query and manipulate the Order Management System.
* Session Management\
  Used to query and manipulate the Session Management Service.

## Extensibility

Extensibility points are APIs for plugins to implement functionality within services.

* *Zenith Plugin API*\
  Used to connect to external services and provide market data into the data distribution infrastructure.
* *[Order Management Feed Adapter](/oms-api/ws/feed/)*\
  Used to feed order executions from external exchanges or execution locations into the OMS.
* *Registry Feed Adapter*\
  Used to feed cash and asset movements to and from the registry.
