---
title: Quick Start
---

This guide quickly steps you through installing Plxtra XOSP on your local computer. See [Install](../install/) for more detailed instructions.

## Prerequisites

* x86-64 based processor.
* An operating system which supports Docker and PowerShell. We support Windows 10 (22H2) and 11, along with various Linux distributions.

## Steps

1. Ensure PowerShell is [installed](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell).
1. (Windows only) Ensure WSL2 is [installed](https://learn.microsoft.com/en-us/windows/wsl/install).
1. Ensure Docker Desktop is [installed](https://docs.docker.com/get-started/get-docker/).
1. Download a XOSP release from the [GitHub repository](https://github.com/plxtra/xosp/releases) and extract it locally.
1. Start Docker Desktop.
1. Run the `XOSP-Configure.ps1` script from within PowerShell.
1. Run the `XOSP-Install.ps1` script from within PowerShell.\
   This script will install the Plxtra Docker containers and configure the services from scratch. It may take a few minutes.\
   If successful, you will be presented with a list of manual steps to complete, along with some links and login credentials.
1. `XOSP-Install.ps1` will place some files in a `Docker` folder within the XOSP release. Use these files to complete the installation and allow access from your web browser.
   1. Install the generated SSL certificate `xosp.crt` into your operating system's certificate store and/or your browser.\
   For example, on Windows, use `certmgr` to install it into the `Trusted Root Certification Authorities` store. If you are using Firefox or Safari, you will need to install the certificate directly into the browser. Make sure to restart your browser after this step.
   1. Create some DNS aliases for the Plxtra installation, by copying the contents of the `hosts` file into your operating systems `hosts` file.\
   For example, on Windows, copy the contents into `C:\Windows\System32\drivers\etc\hosts` using Notepad open as an administrator.
1. Plxtra XOSP is now ready to use. You can explore it using the links provided at the end of the install script output, using the given login username and password.

## Access

Once Plxtra is installed, you can access it whenever Docker is running using the links and credentials given during installation. The best way to ensure Docker is running is to start Docker Desktop.

## Troubleshooting

If you encounter any errors or issues in the above steps, please refer to the more detailed [Install Instructions](../install/).
