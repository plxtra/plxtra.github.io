---
title: API Server
---

The Zenith Feed Proxy collects streaming market and trading data, along with other related information, and exposes public-facing APIs for access.

## Concepts

Data comes in many forms and from multiple locations. It becomes necessary to aggregate these different sources into a consolidated view for front-end applications.

The Zenith Feed Proxy acts a like a reverse proxy for these internal sources, presenting them in a common format, enforcing data access security, and allowing for horizontal scaling.

## Extensibility

* Server Endpoint plugins.\
  Add additional public-facing APIs by writing a server plugin.
* Authentication plugins.\
  Support additional authentication methods beyond OAuth Bearer tokens, such as SAML.
* Extended Data plugins.\
  Attach additional data to securities from external sources.

## APIs

* IQ API.\
  A HTTP API accepting both text-based SQL-style queries, and JSON-based queries.
* WebSocket API.\
  A WebSocket API providing streaming data and inline data queries.
