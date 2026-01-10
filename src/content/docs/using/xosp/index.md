---
title: Using XOSP
---

XOSP is a distribution of Plxtra packaged with a matching engine and registry supplied by [Motif Markets](https://motifmarkets.com) under license. It can be used to demonstrate and evaluate Plxtra and also to test applications using the Plxtra APIs.

The [XOSP repository](https://github.com/plxtra/xosp) contains the distribution's installation scripts and configuration.

## CRM

XOSP does not come with a CRM. Instead, it is configured with one user and trading accounts by a start-up script via the Plxtra APIs. The credentials for the user are:

- Username: `XospAdmin`
- Password: `xosp`

## Authentication

XOSP includes a rudimentary OAuth and OIDC-compliant authentication server through the [OpenIddict](https://openiddict.com/) project. This is sufficient for development and demonstration purposes, however it is not sufficient for a production system. Instead, Plxtra offers compatibility with existing off-the-shelf SSO solutions such as:

- [Auth0](https://www.auth0.com/)
- [Identity Server](https://www.identityserver.com/)

## Licensing of Foundry and Prodigy

The docker images used for registry (Foundry) and matching engine (Prodigy) are supplied under license from [Motif Markets](https://motifmarkets.com). The license only allows these images to be used as part of Plxtra XOSP. In addition, their use with XOSP is limited to:

- using XOSP to demonstrate Plxtra,
- using XOSP to evaluate Plxtra,
- using XOSP to test applications use of the Plxtra APIs.

Under this license, these images cannot be incorporated into any other application or be used for any other purpose.
