---
title: Back-End Data and Trading APIs Overview
sidebar:
  label: Overview
---

Back-End Data APIs are for manipulating and integrating with the data distribution infastructure.

## REST APIs

* *Authority*\
  Used to query and manipulate User Authority data.
* *Order Management*\
  Used to query and manipulate the Order Management System.

## Streaming APIs

* *Order Management*\
  Used to maintain realtime views of the OMS, and supply data feeds to the OMS.

## Command Line Tools

CLI tools typically provide an interface to an underlying REST API, for system administration and automation.

* *Order Management*\
  Used to query and manipulate the Order Management System.

## Extensibility

Extensibility points are APIs for plugins to implement functionality within services.

* *Zenith Client API*\
  Used to connect to external services and provide market data into the data distribution infrastructure.
* *Order Management*\
  Used to feed order executions from external exchanges or execution locations into the OMS.
