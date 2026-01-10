---
title: 'Vetting'
draft: true
---

Vetting is the act of interrogating a trade request to ensure that it conforms to a set of parameters. Vetting can:

- ensure that risk exposure is minimised from both the Client and the Broker by adding safeguards
- aid market integrity by stopping price manipulation
- place restrictions on instruments or functions available to Clients

Vetting is carried out through the execution of a set of rules when a trade request (New or Amend) is issued. The trade request needs to pass **ALL** rules that apply to it. The way that Motionite determines which rules to enact is as follows.

1. Before the trade request is passed to the market for placement, some details about the transaction are determined. These are called topics
   - The Client or Account code
   - The Dealer or Advisor code
   - The Branch code
   - The Broker ID
   - The Market ID
   - The Order type
   - The User ID
2. Motionite scans for any rules that apply to any of these topics
3. This entire collection of rules is then evaluated and if any of them fail then the trade request is not submitted to the market

#### Vortex, the vetting language

Vetting rules are described using plain English in a format called [Vortex](./vortex). A natural language was chosen because of it's flexibility and ease of extension.

#### Vetting Rulesets

A Ruleset is a named list of rules written in Vortex. It is this that is allocated aginst a topic. The Vetting Ruleset page looks similar to the following:

![Vetting Rulesets](/images/vetting-maintain.png)

On this page you can Add, Update, and Delete a Ruleset as well as Copy and Rename. There is also a jump button to quickly take you to the allocation page.

When you Add a Ruleset it will only ask you for a name. It will then create a blank entry which can then be Edited. Similarly with the Copy function, you will be asked for a new name which can then be Edited.

The Edit function bring up a page similar to the following:

![Ruleset Edit](/images/vetting-edit.png)

On the right, the Rules can be constructed as per the [Vortex](/concepts/vortex) language.

On the left you can add properties and variables into your Rules.

**Properties** are values determined at the time the ruleset is evaluated. They are specific values collated from the numerous sources available the system. Choose a property and click the "Use" button. That property name will be inserted into the rules at the current cursor position.

**Variables** enable you to quickly update key values in an error free manner. Simply define a new variable and give it a value, then move the caret to wherever you need to use it in the Rule and click the Use button. You will see the text injected with the variable name surrounded by brackets. When the Ruleset is saved, all variable references will be replaced with their corresponding values.

Before saving the Ruleset, be sure to Validate it. Click the Validate button and the ruleset will be checked to see if the system finds it valid. If it is not then you should receive a message stating what and where the failures are. This check is also done upon saving.

##### Example validation error:

![Ruleset Validation Error](/images/vetting-validateerror.png)

#### Ruleset Allocation

Rulesets are allocated against Topics. The Ruleset Allocation page looks similar to the following:

![Vetting Allocations](/images/vetting-allocations.png)

When carrying out an Add or Edit of an Allocation you need to choose

1. the Topic to which it will apply
2. the Value of the Topic to match
3. the Ruleset to allocate

For example, the following Allocation show a Ruleset with name "Default User Vetting" being allocated to a User with ID "981397e5-672d-4c88-b68d-163be097cb94". The ID in this case was derived by using the lookup functionality on the Topic Value control.

![Vetting Allocate](/images/vetting-allocate.png)
