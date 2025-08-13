---
title: Deploy Overview
---

One of the largest challenges in working with a system like Plxtra is configuring and installing/deploying it.  There are numerous components/services to install and lots to configure. Configuring and assembling a system from scratch can take a significant amount of time even for an experienced Plxtra developer - it would be daunting for someone new to Plxtra.

To reduce this barrier, Plxtra is fully containerised and provides scripts to deploy and configure its services.

This section describes how Plxtra Docker images can be deployed with Plxtra deployment scripts.  See ["Publish to Docker Registry"](/source/publish/) for instructions on how to create the Docker images.

* [Scripts](./scripts/)\
Documents the scripts which are used to deploy Plxtra XOSP
* [Profiles](./profiles/)\
Profiles specify which Docker registry should be used to pull Docker images and various high level configuration items for a XOSP installation.
* [Registries](./registries/)\
Plxtra can deploy from any Docker registry however it provides extra support for some registries.
* [Images](./images/)\
List of images used for Plxtra Docker containers.
* [Guides](./guides/)\
Covers various deployment scenarios.
