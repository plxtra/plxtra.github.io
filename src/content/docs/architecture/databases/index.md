---
title: Databases
---

Plxtra uses [PostgreSQL](https://www.postgresql.org/) and [SQLite](https://sqlite.org/) for databases.  PostgreSQL is used for major databases which are used by multiple components or have data that requires long term persistence.  SQLite is used for databases internal to components.  The following databases are in Plxtra:

| Name 	| Type 	| Content 	|
|---	|---	|---	|
| Foundry 	| PostgreSQL 	| Foundry events 	|
| Prodigy - Market 	| PostgreSQL 	| Market activity 	|
| Prodigy - Fix 	| PostgreSQL 	| Fix session tracking 	|
| Prodigy - History 	| PostgreSQL 	| Historical data warehouse 	|
| Authority 	| PostgreSQL 	| User Authorisation 	|
| OMS 	| PostgreSQL 	| OMS Events 	|
| Zenith - COS 	| PostgreSQL 	| Trade history 	|
| Zenith - EOD 	| PostgreSQL 	| Charting history 	|
| Sessions 	| PostgreSQL 	| Session limits 	|
| Doppler | PostgreSQL	| Scans	|
| Herald | PostgreSQL | Push communications |
| Motif Services | PostgreSQL | User front-end settings |
| Market Holiday | PostgreSQL | Market closed dates |

