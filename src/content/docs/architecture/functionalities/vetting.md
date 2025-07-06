---
title: Vetting
---

All order requests are vetted before being sent to the [Order Management](./order-management/).  Vetting involves checking that the order request conforms to a rule set.  The rule set specifies conditions which the order request's attributes must meet.

With vetting, operators can:
* ensure that risk exposure is minimised from both the Client and the Broker by adding safeguards
* aid market integrity by stopping price manipulation
* place restrictions on instruments or functions available to Clients

## Process

Order requests are passed to vetting from the [Trading Agent](../trading-agent/).  It will also provide the required rules and information/data. Vetting will return one of the following 3 outcomes to the Trading Agent:
1. Success - order request to be forwarded to OMS which can send it to market.
1. DTR to review - order request to be forwarded to OMS however it needs to be reviewed by a DTR
1. Fail - order request is discarded and a rejection message to be returned to originator.

## Rules

Vetting rules are specified with the [Vortex](../../components/zenith/vortex/) vetting language. It features:
* A powerful scripting engine which supports conditional evaluation,
* Rules can be specified at different levels of the account hierarchy,
* Exchange rules are separated from business rules,
* Easy configuration of business rules by Administrators,
* Changes are immediately applied when saved,
* All changes are tracked with an audit log.
