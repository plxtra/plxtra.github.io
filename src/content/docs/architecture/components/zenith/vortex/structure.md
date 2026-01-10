---
title: Ruleset Structure
---

Vortex is the language which defines Vetting RuleSets. It is designed to make the definition and evaluation of vetting scenarios significantly easier than other rigid frameworks. RuleSets are described in a textual form which can be easily read and understood.

## RuleSet

A RuleSet is a series of individual rules which is evaluated from top to bottom. They are represented as a block of text, with each line containing a rule.

### RuleSet Construction

RuleSets are created, maintained, and allocated through a back office tool like MView.

### RuleSet Evaluation

RuleSets are evaluated at runtime when actions are carried out on an order pad (Create/Amend/Cancel). A collection of RuleSets are gathered that match the parameters of the order across the following values:

- User placing order
- Account/Client code
- Advisor/Dealer code for the account
- Branch code for the account
- Broker code for the account
- Market identifier for the stock symbol
- Order Type

The RuleSet evaluation can return one of the following levels:

- PASS (successful)
- AUTH (requires authorisation)
- FAIL (will not be actioned)

The default level for a RuleSet is PASS. If an AUTH statement is evaluated to TRUE then the level of the RuleSet becomes AUTH. It cannot revert back to PASS. If a FAIL statement is evaluated to TRUE then the level of the RulesSet become FAIL. It cannot revert back to a lower level.

PASS -> AUTH -> FAIL

### RuleSet structure

A RuleSet is a collection of Rules with some control structures to make things easier to maintain.

A Rule takes the form of:

```
{Level} [WITH {ErrorCode}] IF {ConditionStatement}

Example:

FAIL WITH Price.Exceed IF order.price > 150
```

The optional WITH segment in a Rule allows for a meaningful code to be returned with the AUTH or FAIL. The code format requires it to be a single word (including numbers, letters, and periods only) starting with a letter.

#### Control structures

The RUN action is used to test a block of code within the RuleSet if a condition is met. This allows for complex tests to be carried out whilst maintaining readability. The RUN action can also be followed by an optional ELSE action. A RUN statement looks like the following:

```
RUN IF {ConditionStatement}
{
    {RuleBlock}
}
[ELSE]
{
    {RuleBlock}
}
```

#### Comments

To help with documentation of your Rules, comments can be embedded within the rules. The way that this is done is with the # character. When a # is encountered, the remainder of the line is ignored by the Vetting engine allowing the author to add meaningful descriptions

### Example:

```
RUN IF request.type IN ['Place', 'Amend']  # Does not apply to Cancel
{
    RUN IF order.side IS Bid
    {
        FAIL WITH Credit.Exceed IF balance.amount < (order.remainder * order.price)
    }
    RUN IF order.side IS Ask
    {
        FAIL WITH Holding.Exceed IF holding.quantity < order.remainder
    }
}
RUN IF request.type IS 'Place'
{
    # $500 Rule
    FAIL IF holding.quantity = 0 AND (order.quantity * order.price) < 500
}

```

| Line | Description                                                                                                                                                                                                                    |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | This statement starts a block of evaluation between { and } on lines 2 - 11. This block is only carried out if the order request is to Place a new order or Amend an existing one.                                             |
| 2    | Start of a block defined by line 1.                                                                                                                                                                                            |
| 3    | The start of a nested block. Evaluation only gets to here if line 1 evaluates to TRUE. Evaluation of this block will only be carried out if the order is a BID                                                                 |
| 4    | Start of a block defined by line 3.                                                                                                                                                                                            |
| 5    | This is a Rule. It will set the result of the RuleSet to FAIL if it evaluates to TRUE. If it does fail then the error code "Credit.Exceed" will be returned with the evaluation to indicate the reason for the failure.        |
| 6    | End of the block defined by line 3.                                                                                                                                                                                            |
| 7    | This is the start of another nested block. Evaluation only gets here if line 1 evaluates to TRUE. Evaluation of this block will only be carried out if the order is an ASK                                                     |
| 8    | Start of block defined by line 7                                                                                                                                                                                               |
| 9    | This is another Rule. It will set the result of the RuleSet to FAIL if it evaluates to TRUE. If it does fail then the error code "Holding.Exceed" will be returned with the evaluation to indicate the reason for the failure. |
| 10   | End of block defined by line 7.                                                                                                                                                                                                |
| 11   | End of block defined by line 1.                                                                                                                                                                                                |
| 12   | The start of a block which evaluates if the order request is a Place.                                                                                                                                                          |
| 13   | Start of a block defined by line 12.                                                                                                                                                                                           |
| 14   | This is a comment. The line is ignored in the evaluation phase.                                                                                                                                                                |
| 15   | This Rule will set the result of the RuleSet to FAIL if it evaluates to TRUE. No error code is returned with this failure.                                                                                                     |
| 16   | End of block defined by line 12                                                                                                                                                                                                |
