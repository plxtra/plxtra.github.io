---
title: Back-End Exchange APIs Overview
sidebar:
  label: Overview
---

Back-End Exchange APIs are for manipulating and integrating with the Digital Exchange infrastructure.

## REST APIs

* *Foundry*\
  Used to query and manipulate the registry.
* *Prodigy Internal*\
  Used for market control tasks such as manipulating the exchange, symbols, 
* *Prodigy Public*\
  Used for retrieving market reference data, such as trade history, charting records, and news bodies.

## WebSocket API

* *Foundry*\
  Used to maintain realtime views of the registry, and supply data feeds to the registry.

## FIX API

* *Prodigy*\
  FIX protocol connectivity for both market data feeds and order and execution feeds.

## Command Line Tools

CLI tools typically provide an interface to an underlying REST API, for system administration and automation.

* *Foundry*\
  Used to query and manipulate the Foundry Registry.
* *Prodigy*\
  Used to query and manipulate the Prodigy Exchange.