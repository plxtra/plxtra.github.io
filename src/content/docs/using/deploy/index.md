---
title: Deploy
---

One of the largest challenges in working with a system like Plxtra is configuring and installing/deploying it.  Plxtra has many moving parts: components and services; there are many configurable items to support different Plxtra use cases and solutions.  Configuring and assembling a system from scratch can take a long time even for an Plxtra experienced developer.  For someone new to Plxtra, the challenge of getting a Plxtra exchange up and running from scratch would be very daunting.

To overcome this hurdle, Plxtra uses scripts and docker to allow it to be configured and installed very quickly - even for a first time user.

Existing docker containers are publicly available which allow you to install Plxtra without access to source code.  Alternatively, you can install the Plxtra source code and build the docker containers directly from the source and then deploy these containers. This greatly reduces the develop/debug/test cycle and allows new developers to work on parts of Plxtra without having to fully understand it first.

Plxtra aims to improve its configuration and deployment mechanisms to support more deployment environments (demo/test/staging/production etc) and more use cases.  See the [documentation](/deploy/) for more details.

* XOSP\
A sample exchange that can be used for demonstration or application development/debugging


* .\XOSP-Clear.ps1
Removes container, volumes and shared data folder (eg. localuser/appdata/Xosp)
Does not remove Docker folder

* .\XOSP-Configure.ps1 <profile>
Creates Docker Directory from repository.
Will not overwrite parameters file unless profile is specified
   * Downloading recordings

Configure populates the Docker folder, with the following steps:

* Creating a self-signed SSL certificate
* Generating a partial hosts file to be merged with the system hosts file
* Generating secrets for the database and OAuth client applications
* Prepares service configuration files (inserting secrets, DNS, etc)
* Initialises extensions (such as downloading market recordings)
* Creates your XOSP-Params.json if none exists

<profile> Dev

* .\XOSP-Install.ps1 -AlwaysPull -SkipInit
   * Creates containers
   * Runs setup process for containers
       * Database setup
       * Create users
       * Create accounts

-AlwaysPull - check if new version is on registry
-SkipInit - does not do setup for containers - just installs them

* XOSP-Publish.ps1
Will create Docker image from source and push to both Docker Engine and registry
