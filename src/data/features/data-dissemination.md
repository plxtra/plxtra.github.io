---
title: Data Dissemination
weight: 40
readMoreUrl: /architecture/components/back-end/zenith/
iconName: mdi--multiplex
---

Plxtra's [Zenith](/architecture/components/back-end/zenith/) uses [caching proxies](/architecture/functionalities/back-end/caching-proxy/) with [data](/architecture/functionalities/back-end/feed-server/) and [trading](/architecture/functionalities/back-end/trading-adapter/) plugins to efficiently deliver data to [API Services](/api/) and can easily scale to meet any demand.  Its plugin design easily allows new data sources (eg. exchanges) to be added.
