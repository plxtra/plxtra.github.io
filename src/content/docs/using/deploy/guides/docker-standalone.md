---
title: "Deploy Guide: Docker Standalone"
---

A Linux Virtual Private Server (VPS) is an ideal environment in which to host a standalone installation of Plxtra.  There are many suppliers to choose from with a large range of options and quick access.  Suitable instances are priced from approximately $20 (USD) per month depending on your location.

In this guide we will install on a Linux VPS with the specifications below.  The configuration will use the `Samples` [profile](../../../deploy/profiles/) which includes a one day recording of ASX data that is continuously replayed by a *Sample* ASX Exchange.  Note that this substantially increases the memory and CPU requirements of the installation.

## Specification

* Standard/General hardware
* 4 VCPUs
* 8 GB Memory
* 55 GB Storage
* Root access required
* Debian 12

## Steps

1. Get access to your Linux VPS. If you decide to use an account other than `root`, make sure [it has `sudo` privileges](https://www.techrepublic.com/article/how-to-quickly-give-users-sudo-privileges-in-linux/).

1. Install Microsoft PowerShell\
    [https://learn.microsoft.com/en-us/powershell/scripting/install/install-debian](https://learn.microsoft.com/en-us/powershell/scripting/install/install-debian)

1. Install Docker Engine\
    [https://docs.docker.com/engine/install/debian/](https://docs.docker.com/engine/install/debian/)

1. Create a user `plxtra` with group `plxtra` and add your user account to this `plxtra` group (primary) and `docker` (secondary).
    ```
    sudo groupadd plxtra
    sudo useradd -m -g plxtra -G docker plxtra
    sudo passwd plxtra
    <password>
    sudo usermod -a -G plxtra $USER
    ```

1. Change directory to `/etc` and create a folder `plxtra`.  Change owner of this folder to user (and group) `plxtra`.
    ```
    cd /etc
    sudo mkdir plxtra
    sudo chown pxltra:plxtra plxtra
    ```

1. Switch to the `plxtra` user and then change directory to the newly created `plxtra` folder.
    ```
    su plxtra
    <password>
    cd /etc/plxtra
    ```

1. Download an XOSP source code release as .tar.gz.  The releases are available at [https://github.com/plxtra/xosp/releases](https://github.com/plxtra/xosp/releases).  The latest release is recommended.  For example, to download release version 0.91b:
    ```
    curl -L -O https://github.com/plxtra/xosp/archive/refs/tags/v0.91b.tar.gz
    ```

1. Extract the contents (one folder) of the downloaded release into the current directory. As per the above example:
    ```
    tar -xf v0.91b.tar.gz
    ```
    The extracted folder will be named with the format `xosp-<release version>` - so for the above example: `xosp-0.91b`

1. Change directory into the extracted folder. In this example:
    ```
    cd xosp-0.91b
    ```

1. Open a PowerShell terminal.  It should open in the same current directory.
    ```
    pwsh
    ```

1. Run the [XOSP-Configure.ps1](../../../deploy/scripts/#xosp-configure) script, optionally specifying a [profile](../../../deploy/profiles/).
    ```
    ./XOSP-Configure.ps1 Samples
    ```

1. The `XOSP-Configure` script will have generated a `XOSP-Params.json` file.  Make the following changes to this file:
    * Change "RootDomainName" to the host name of your machine (as per DNS).

    The file can be edited within PowerShell using `nano`
    ```
    nano ./XOSP-Params.json
    ```

1. Run the [XOSP-Configure.ps1](../../../deploy/scripts/#xosp-configure) script again with the same profile.  This will regenerate the configuration using the changes in the `XOSP-Params.json` file.
    ```
    ./XOSP-Configure.ps1 Samples
    ```

1. Run the [XOSP-Install.ps1](../../../deploy/scripts/#xosp-install) script.  This will download the images for the required containers and set them up according to the configuration.
    ```
    ./XOSP-Install.ps1
    ```

1. Set up a DNS records to give your Linux server an internet accessible host name. Also set up the following sub domains: "arclight", "auth", "expo", "foundry", "iq", "motif", "svc", "ws". For example if the host name is: `au.plxtra.org` then the following subdomains need to be set up:
* arclight.au.plxtra.org
* auth.au.plxtra.org
* expo.au.plxtra.org
* foundry.au.plxtra.org
* iq.au.plxtra.org
* motif.au.plxtra.org
* svc.au.plxtra.org
* ws.au.plxtra.org

