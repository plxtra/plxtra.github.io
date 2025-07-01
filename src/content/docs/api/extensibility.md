---
title: Extensibility
---

Plxtra can be extended in the following ways:
1. Adding extensions or plugins using the extensibility APIs,
1. Submitting feature Pull requests to the Plxtra [source code repositories](../source/repositories/),
1. Forking the Plxtra source code repositories and adding features independently of Plxtra

The advantage of using the extensibility APIs is that you have full control over the new capability, are not dependent on Plxtra developers and can take advantage of other capabilities added to the Plxtra system.

Currently Plxtra supports the following extensibility APIs:

* [Caching Proxy Plug-in](/zenith-plug-in-api/): 
    * Server Endpoint plugins: Add additional public-facing APIs by writing a server plugin,
    * Extended Data plugins: Attach additional data to securities from external sources,
    * Authentication plugins: Support additional authentication methods beyond OAuth Bearer tokens (eg SAML),
* [Order Management Feed Adapter](/oms-api/ws/feed/)
* [Registry Feed Adapter](registry-feed-adapter-api)
* [Motif Extension](/motif-api/)
