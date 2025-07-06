---
title: Vortex
---

## Overview

Vetting Rules are described with a simple text-based language.

The basic form of a rule is `result if condition`, such as:

```
fail if order.side is Bid and order.value > balance.amount
```

Rules can be placed inside blocks, so they are only evaluated if a condition is met, such as:

```
run if order.side is Bid
{
	fail if order.value > balance.amount
}
```

Rules can provide a result code, allowing more visibility of which vetting rule was matched.

```
fail with InsufficientShares if order.side is Ask and order.quantity > holding.shares
```
Rules can be disabled, or documentation recorded, by using the `#` symbol

```
# This is not a rule, just a comment

fail if order.value > balance.amount # Comments can go after rules

# The following rule will not be evaluated
# fail with DisabledRule if a = b
```

## Evaluation
Rules are evaluated one by one, from start to finish. Evaluation starts with an intermediate result of `pass`.

When the condition for a Rule is met, the result is applied to the intermediate result in the following manner:

 - `pass` leaves the result unchanged.
 - `auth` replaces `pass`.
 - `fail` replaces `pass` or `auth`.

When all rules are evaluated, vetting supplies the final result, along with the result codes from all matching rules.

## Conditions
A condition consists of one or more comparisons to perform that, when true, cause a rule to match.

### Binary Conditions
Binary conditions are operations between two values, such as equals `=`, greater than `>` or less than `<`.

The Vetting Engine supports the following operators:

| Operator | Description | Example |
| -------- | ----------- | - |
| `=` | Equals | `order.side = 'Buy'` |
| `is` | Equals (shorthand) | `order.side is Buy` |
| `<>` or `!=` | Not Equal | `balance.currency <> 'AUD'` |
| `is not` | Not Equal (shorthand) | `balance.currency is not AUD` |
| `>` | Greater Than | `order.value > 10000` |
| `>=` | Greater Than or Equal | `order.value >= 10000` |
| `<` | Less Than | `order.value < 10000` |
| `<=` | Less Than or Equal | `order.value <= 10000` |

There are also a set of operators with special requirements:

| Operator | Description | Example |
| -------- | ----------- | - |
| `has` | Does a property exist | `holding has quantity` |
| `missing` | Is a property missing | `holding missing quantity` |
| `in` | Is the value one of a list, or part of a string | `order.type in ['Limit', 'MarketToLimit']` |
| `not in` | Is the value not one of a list, or not part of a string | `'I' not in symbol.attributes.Flags` |

### Unary Conditions
Unary conditions are operations performed on a single value, such as `not`.

The Vetting Engine supports the following operators:

| Operator | Description | Example |
| -------- | ----------- | - |
| `not` | Not | `not (order.side = 'Buy' and order.value > 100)` |

### Combining Conditions
Conditions can be combined using boolean operators such as `and`.

```
fail if order.side is Bid and order.value > balance.amount
```

The Vetting Engine supports the following operators:

| Operator | Description | Example |
| -------- | ----------- | - |
| `and` | Match if both sides match | `order.value > 100 and order.value < 1000` |
| `or` | Match if either side matches | `order.value > 100 or balance.currency is AUD` |
| `xor` | Match if only one side matches | `balance.amount > 1000 xor balance.currency is AUD` |

Conditions can also be organised using parenthesis.

```
fail if (order.side is Bid and order.value > 100) or (order.side is Ask and order.quantity > 200)
```


## Representing Values
There are two types of values used by the Vetting Engine: pre-defined values, and vetting properties.

### Pre-Defined Values
Conditions often have pre-defined values that are part of the rules themselves.

Numbers are represented in-text, both plain integers and fractional values: `1234` or `999.0001`.

Text-based values, such as the order side or type, can be represented within single-quotes: `order.type = 'Limit'`.

Vetting also provides a short-hand for text values with the `is` and `is not` operators: `order.type is Limit`.

Values that can either be true or false are represented simply as `true` or `false`: `security.isindex = true`

### Properties
Properties are values provided by the order management and market data systems to compare against.

Each property has a name, such as `balance.currency`, `details.side`.

*Properties are case-sensitive.* For example: `balance.Currency` is an invalid property.

### Mathematical Operations
The Vetting Engine allows you to perform calculations with both pre-defined values and properties, such as `3 / 5`, `order.price * order.quantity * 10`.

The Vetting Engine supports the following operators:

| Operator | Description | Example |
| -------- | ----------- | - |
| `+` | Addition | `order.value + balance.amount` |
| `-` | Subtraction | `balance.amount - order.value` |
| `*` | Multiplication | `details.quantity * details.limit` |
| `/` | Division | `order.value / details.quantity` |
| `%` | Modulus (Remainder) | `details.quantity % 100` |
| `^` | Exponent | `details.quantity * 10 ^ 4` |
| `-` | Negate | `-order.value` |

Operators obey the normal order of precedence: Parenthesis, Exponent, Division/Modulus, Multiplication, Addition, then Subtraction/Negation.

## More Info
 * [Ruleset Structure](./structure/)
 * [Standard State Data](./standard-state/)
