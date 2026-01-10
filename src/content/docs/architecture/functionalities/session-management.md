---
title: Session Management Services
sidebar:
  label: Session Management
---

The Session Management Service tracks login sessions and data usage, and provides throttling and control over concurrent connections and specific resources.

## Concepts

Preventing abuse of data APIs and enforcing limits on users is essential.

Session Management tracks user and resource-level data usage, applies limits, and outputs an audit record for reporting and royalties.

- Connection-level limits ensure an application cannot make unlimited concurrent connections using a single login.\
  eg: An application can only establish up to 2 connections with the same access token.
- Session-level limits ensure a user cannot login from an unlimited number of locations.\
  eg: A user can only login from two distinct locations at once, and further logins will cause the oldest session to be closed.
- Resource-level limits provide more fine-grained limitations on specific data sources, such as a market.\
  eg: A market with strict data-distribution requirements that only allows use from login at a time. Accessing data from your mobile will cause your desktop to lose access.
- Time-based limits provide throttling on requests, grouped on categories.\
  eg: You can only make 2 requests for historical charting data per second.

Limits can be applied globally, and overridden based on the individual user.

## APIs

- Rest API for querying and control of global and user limits
- CLI interface for performing administrative tasks
