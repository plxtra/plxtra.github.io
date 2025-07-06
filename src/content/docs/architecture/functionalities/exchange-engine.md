---
title: Exchange Engine
---

*Component: [Prodigy](../../components/prodigy/)*

Exchange Engine lists symbols, provides trading books for listed symbols and matches orders to generate trades.  In addition, it provides news feeds and supporting exchange services. It can be accessed either via industry standard [FIX protocol](/architecture/functionalities/fix-server/) and managed via its [market control API](/market-control-api/).

Its matching engine has 2 parts:

1. **Core** - This contains the general matching engine functionality.
1. **Plugins** - A plugin implements a markets rules and behaviour.

Multiple plugins can be installed to run multiple markets concurrently.

By implementing market rules and behaviour in a plugin, it makes supporting new markets or adding functionality to existing markets far easier. Supporting a new market only requires developing a plugin - not implementing a completely new matching engine. Adding new capabilities to a market only requires testing its plugin. In both cases, the core is not modified.

In addition, plugins allow hosting of different versions of the same plugin. This can facilitate upgrading and allow other systems to incremental move from one version to the next. Upgrades can be smoother and risks reduced. This is further discussed in [market development](/industry/market-development/).
