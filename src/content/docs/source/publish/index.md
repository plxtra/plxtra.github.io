---
title: Publish to Docker Registry
---

Plxtra can easily be deployed using [Docker](https://docker.com) containers. The following scripts facilitate creating the Docker images.  See [Deploy](/using/deploy/) for instructions on how to deploy containers.

* **[`Docker-Publish.ps1`](#xosp-publish)** - Build a docker image for a Plxtra component and push it to Docker Desktop and the registry. 
* **[`Docker-Create.ps1`](#xosp-create)** - Ensures that a repository exists for the image at the registry. 
* **`Docker-Params.ps1`** - Used by `Docker-Publish` and `Docker-Create`. Not to be run directly from the command line.

Currently these scripts only support private AWS ECR registries however we plan to broaden this to support other registries.

Note that by default, Windows restricts the running of PowerShell scripts downloaded from the internet. You can use the `Unblock-File` command in PowerShell to remove this restriction.  For example, from within repository folder:

```
Get-ChildItem *.ps1 | Unblock-File
```

## Docker-Publish

Each [component's](/architecture/components/) [source repository](../repository/) includes a `Docker-Publish.ps1` script. When run, it will generate a Docker image for that component (from source) and push it to both Docker engine and a Docker registry.

This enables changes to components to be easily tested in a full Plxtra environment.

This script resides in the root folder of the source for each component and is run with no parameters. Note it requires that the Docker Engine be running.

```
./Docker-Publish.ps1
```

## Docker-Create

Ensures that a repository exists for the image at the registry.

This script need only be run once for each component at a registry.

```
./Docker-Create.ps1
```
