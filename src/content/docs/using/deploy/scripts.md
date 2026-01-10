---
title: Deploy Scripts
---

Deploying Plxtra XOSP with Docker is a 2 step process:

1. Create the configuration
1. Create the containers (pulling images if necessary) and use the configuration to set them up.

The following PowerShell scripts carry out the above steps and also remove a Plxtra XOSP installation.

- **[`XOSP-Configure.ps1`](#xosp-configure)** - Generates a configuration for a Plxtra installation.
- **[`XOSP-install.ps1`](#xosp-install)** - Install Plxtra on the local computer.
- **[`XOSP-clear.ps1`](#xosp-clear)** - Removes the Plxtra installation from the computer.

These scripts allow Plxtra to be quickly deployed to most environments - including on local computers (using Docker Desktop) where it can be used for testing or evaluation.

Note that by default, Windows restricts the running of PowerShell scripts downloaded from the internet. You can use the `Unblock-File` command in PowerShell to remove this restriction. For example, from within XOSP folder:

```
Get-ChildItem *.ps1 -Recurse | Unblock-File
```

## XOSP-Configure

`XOSP-Configure` (like `XOSP-Install` and `XOSP-Clear`) is included in the root folder of the XOSP folder.

When run, it will create a Plxtra configuration from the information inside the XOSP folder. All this information is placed in a `Docker` folder under root of the XOSP folder.

Populating this Docker folder includes the following steps:

- Creating a self-signed SSL certificate
- Generating a partial hosts file that needs to be manually merged with the system hosts file
- Generating secrets for the database and OAuth client applications
- Prepares service configuration files (inserting secrets, DNS, etc)
- Initialises extensions (such as downloading market recordings)
- Download recordings specified in extensions

### Profiles

`XOSP-Configure` can create a Plxtra configuration according to a `profile`. A profile specifies:

- the registry from where docker images are to be pulled from,
- some high level configuration parameters
- extensions that are to be included.

To use a particular profile, include its name as a parameter when `XOSP-Configure` is run. The details of the last configured profile are saved to the file `XOSP-Params.json` in the root of the XOSP folder.

`XOSP-Configure` looks for [named profiles](../profiles/) in the `Profiles` folder in the root `XOSP` folder. The profile name command line parameter needs to match a file name (excluding extension) in this `Profiles` folder.

```
./XOSP-Configure.ps1 <profile name>
```

If `XOSP-Configure` is run without a profile specified, it will use the profile specified in `XOSP-Params.json`. If `XOSP-Params.json` does not exist, then `XOSP-Configure` will use the `Default` profile.

```
./XOSP-Configure.ps1
```

### Recordings

One type of extension in profiles is `Recordings`. When a recording is specified, [`XOSP-Install`](#xosp-install) will download a recording of one or more days of market data from an exchange. This is the same data as received by a [Feed Server](/architecture/functionalities/feed-server/). `XOSP-Install` will then set up a corresponding exchange which replays the recorded market data. It is not possible to trade on this `Sample` exchange however data can be viewed and accessed in the same way as on the real exchange.

These `Sample` exchanges are ideal for developing and testing applications which use Plxtra [APIs](/api/) to access exchange data.

## XOSP-Install

`XOSP-Install` installs Plxtra on the local computer with the configuration specified in the `Docker` folder (set up with [XOSP-Configure](#xosp-configure)). The script will:
_ Downloads the required images from the container [registry](../registries/) specified in the [profile](#profiles),
_ Create the Docker containers,
_ Creates a shared folder for files shared by Docker and the local computer (Docker host). The location of this shared folder is at:
_ Windows: %LocalAppData%/Xosp
_ Linux:
_ Mac:
_ Run the setup process for each container. This can include actions such as:
_ Database setup
_ Create users
_ Create accounts

At the end of the installation process, the script will display instructions for a [couple of steps that need to be carried out manually](/getting-started/install/#manual-installation-steps) (installing certificate file and updating host file). It will also display the URLs to use to access the front-end applications ([Motif](/architecture/functionalities/motif/), [Arclight](/architecture/functionalities/arclight/)) and the username/password to login to Plxtra.

Note that `XOSP-Install` only gets configuration information from the `Docker` folder under the `XOSP` folder.

The `XOSP-Install.ps1` script resides in the root folder of the XOSP folder and can be run with:

```
.\XOSP-Install.ps1
```

Note it requires that the Docker Engine be running.

### Parameters

`XOSP-Install` has 2 optional parameters:

- -AlwaysPull - will pull down the latest version of a container image from the registry if this version is not already installed locally
- -SkipInit - only installs containers - does not do setup for them

```
.\XOSP-Install.ps1 -AlwaysPull -SkipInit
```

## XOSP-Clear

Removes the installation from the computer. This includes:

- Removing containers from Docker Engine
- Any Docker volumes created
- The shared data folder (eg. %LocalAppData%/Xosp)

It does NOT remove Docker folder under the XOSP root containing the configuration created with [XOSP-Configure](#xosp-configure). It also does not remove the `XOSP-Params.json` file. This allows the last used configuration to be re-installed with [XOSP-Install](#xosp-install)

This script resides in the root folder of the XOSP folder and is run without any parameters. Note it requires that the Docker Engine be running.

```
.\XOSP-Clear.ps1
```

## Deployment bound to XOSP

Currently this deployment mechanism is tightly bound to XOSP - a sample exchange that can be used for demonstration or application development/debugging. Our plan is to make these independent. However for the foreseeable future, we expect XOSP to be used as a base for the development of a new exchange or brokerage platform.
