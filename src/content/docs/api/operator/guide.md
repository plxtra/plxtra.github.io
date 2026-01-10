---
title: Back-End Data and Trading APIs Guide
sidebar:
  label: Guide
---

## Operations

### New User

Creating a new user refers to adding a login that can access the platform.

User creation touches multiple locations:

- An authentication service that can identify a user.\
  In XOSP, this role is fulfilled by a rudimentary Auth Server. This service is not suitable for production deployments.
- The Resource Authorisation service, which tracks the data permissions available to a specific login.
- (Optionally) The Session Management service, which controls the limits and throttling applied to a login.

_System Operators_

A system operator will need to be registered with the individual system they're permitted to use.

- The Order Management System can register operators via the `Identity` controller.
- The Foundry Registry can register operators via the `Identity` controller.
- The Prodigy Exchange currently has no API for operator creation. This is to be completed.

### New Trading Account

Creating a new Trading Account refers to an account that contains cash, holdings, and can place orders.

Trading Accounts are distinct from and can be associated with multiple users (logins).

- The Resource Authorisation service, to create associations with the account and the logins allowed to access it.
- The Order Management System, which records account metadata for user display and controlling vetting.
- The Foundry Registry, which records settled funds and security holdings, and associates accounts with their legal owner (investor).

## Integrations

### New Exchange

Plxtra includes integrations for the Prodigy exchange, but is built to support multiple exchanges simultaneously.

Adding a new Exchange into the data infrastructure requires:

- A Zenith Client plugin to feed market data into the data infrastructure.
- An Order Management System adapter service to receive order instructions and feed order executions back into the infrastructure.

If utilising the Foundry Registry, further integration may be required to account for these transactions.
