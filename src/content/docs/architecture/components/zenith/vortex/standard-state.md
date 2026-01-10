---
title: Standard State Data
---

| Name    | Type   | Purpose                                                   |
| :------ | :----- | :-------------------------------------------------------- |
| account | object | Information on the target Trading Account.                |
| balance | object | The cash balance available to the Trading Account.        |
| details | object | Details of the incoming Order request.                    |
| holding | object | Information on any Holdings for the target Symbol.        |
| market  | object | Information relating to the target Symbol's market state. |
| order   | object | Information on the Order the request relates to.          |
| request | object | Information relating to the incoming request.             |
| symbol  | object | Information relating to the target Symbol.                |
| user    | object | Details of the user submitting the request.               |

```
{
	"account":{...},
	"balance":{...},
	"details":{...},
	"holding":{...},
	"market":{...},
	"order":{...},
	"request":{...},
	"symbol":{...},
	"user":{...}
}
```

## Account State Structure

Information on the target Trading Account.

Included on all requests.

| Name | Type   | Purpose                                |
| :--- | :----- | :------------------------------------- |
| id   | string | The identifier of the Trading Account. |

```
"account":
{
	"id":"1234"
}
```

## Balance State Structure

The cash balance available to the Trading Account.

Included on all requests.

| Name     | Type    | Purpose                         |
| :------- | :------ | :------------------------------ |
| amount   | decimal | The available amount.           |
| currency | string  | The currency code being traded. |

```
"balance":
{
	"amount":12000.50,
	"currency":"AUD"
}
```

## Details State Structure

Details of the incoming Order request.

Included on Place and Amend requests.

| Name    | Type    | Purpose                                                                           |
| :------ | :------ | :-------------------------------------------------------------------------------- |
| hidden  | integer | The hidden quantity.                                                              |
| price   | decimal | The limit price. Can be null.                                                     |
| type    | string  | The type of the Order. One of the following values: Market, MarketToLimit, Limit. |
| visible | integer | The visible quantity.                                                             |

```
"details":
{
	"hidden":0,
	"price":12.75,
	"type":"Limit",
	"visible":100
}
```

## Holding State Structure

Details of the current Holding, if any.

Included on all requests, if a holding exists.

| Name      | Type    | Purpose                                   |
| :-------- | :------ | :---------------------------------------- |
| available | integer | The total quantity available for trading. |
| cost      | decimal | The total cost of the Holding.            |
| price     | decimal | The average price of the Holding.         |
| quantity  | integer | The total quantity held.                  |

```
"holding":
{
	"price":12.75,
	"quantity":1000
}
```

## Market State Structure

Information relating to the target Symbol's market state.

Included on all requests.

| Name    | Type    | Purpose                             |
| :------ | :------ | :---------------------------------- |
| bestask | decimal | The best ask price. Can be null.    |
| bestbid | decimal | The best bid price. Can be null.    |
| last    | decimal | The last traded price. Can be null. |

```
"market":
{
	"bestask":12.50,
	"bestbid":null,
	"last":12.60
}
```

## Order State Structure

Information on the Order the request relates to.

Included on Amend and Cancel requests.

| Name     | Type    | Purpose                                  |
| :------- | :------ | :--------------------------------------- |
| executed | integer | The total quantity executed.             |
| price    | decimal | The average price of the Order thus far. |
| quantity | integer | The total quantity held.                 |

```
"order":
{
	"executed":10,
	"price":12.75,
	"quantity":100
}
```

## Request State Structure

Information relating to the incoming request.

Included on all requests.

| Name | Type     | Purpose                                                          |
| :--- | :------- | :--------------------------------------------------------------- |
| id   | string   | A unique identifier for the request.                             |
| type | string   | The type of request. One of the following: Place, Amend, Cancel. |
| time | datetime | The time the request was submitted.                              |

```
"request":
{
	"id":"12AB34CD-190",
	"type":"Place",
	"time":"2019-01-01T12:00:30"
}
```

## Symbol State Structure

Information relating to the target Symbol.

Included on all requests.

| Name     | Type   | Purpose                                                                                   |
| :------- | :----- | :---------------------------------------------------------------------------------------- |
| class    | string | The high-level Symbol class.                                                              |
| code     | string | The exchange-issued code for the Symbol.                                                  |
| exchange | string | The identifier of the exchange the Symbol is issued by.                                   |
| market   | string | The identifier of the market the Symbol is listed on (where the Order will be routed to). |

```
"symbol":
{
	"code":"BHP",
	"exchange":"ASX",
	"market":"CXA"
}
```

## User State Structure

Details of the user submitting the request.

Included on all requests.

| Name | Type   | Purpose                                       |
| :--- | :----- | :-------------------------------------------- |
| id   | string | The unique identifier of the submitting user. |

```
"user":
{
	"id":"12345"
}
```
