---
title: Zenith Trading Agent
sidebar:
  label: Trading Agent
---

The Zenith Trading Agent provides streaming trading data to other Zenith services, and facilitates routing and vetting of order instructions.

## Concepts

The process of verifying, vetting, and routing an order requires a comprehensive and up-to-date view of the system.

The Zenith Trading Agent is able to pull in market data from Zenith Feed Servers, trading data from OMS, and any additional data from external services, and provide it for vetting.

## Extensibility

* Account Source Adapters.\
  Directly retrieve account data from a CRM or existing back-office system.
* Data Sources.\
  Integrate an existing order management system to provide balances, holdings, orders, and submit order instructions.
* Vetting Engine.\
  Customise vetting with your own rules engine.
* Vetting Sources.\
  Supply data directly to the vetting engine from external services.