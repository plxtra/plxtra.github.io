---
title: Quick Start
---

This guide quickly steps you through installing Plxtra on your local computer.  See [Install](../install/) for a more detailed instructions.

## Prerequisites

* X86-64 based computer
* An operating system which supports Docker and .NET (preferably Linux or Windows)

## Steps

1. Ensure PowerShell is [installed](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell).
1. If you are running Windows, ensure WSL2 is [installed](https://dotnet.microsoft.com/en-us/download).
1. Ensure Docker Desktop is [installed](https://docs.docker.com/get-started/get-docker/).
1. Clone or copy the Plxtra [XOSP repository](https://github.com/plxtra) onto your computer.
1. Start Docker Desktop.
1. Run the `XOSP-Configure.ps1` script from within PowerShell.
1. Run the `XOSP-Install.ps1` script from within PowerShell.\
This script will download the Plxtra Docker containers and prepare a database. It will take numerous minutes.
1. Once the `XOSP-Install.ps1` has successfully completed, a `Docker` sub folder will have been created under the folder in which the XOSP repository resides. In this folder, you will find 2 files which need to be installed:
    1.  `hosts`\
    Copy the contents of this file into your operating systems `hosts` file.  For example, on Windows, copy the contents into `C:\Windows\System32\drivers\etc\hosts`.
    1.  `xosp.crt`\
    Install this certificate into your operating system's certificate store and/or your browser.  For example, on Windows, use `certmgr` to install it into the `Trusted Root Certification Authorities` store.  If you are using Firefox or Safari, you will need to install the certificate directly into the browser.
1. Plxtra is now installed.  You can explore it using the links shown at the end of the install script output.  Use the login username and password shown above the links.

## Access

Once Plxtra is installed, you can access it whenever Docker is running. Best way to ensure Docker is running is to start Docker Desktop.

## Troubleshooting

If you encounter any errors or issues in the above steps, please refer to the [Install](../install/) which provides more detail on the installation process.
