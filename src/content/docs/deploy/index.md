---
title: Deploy
---

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
