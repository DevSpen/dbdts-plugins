---
description: Sorts the provided numbers (smallest to greatest) OR alphabetizes a string.
---

# $sort

### Usage

```php
$sort[type (string/number);value1, value2, etc]
```

#### Params

| Field  | Description                                      | Required |
| ------ | ------------------------------------------------ | -------- |
| type   | The separator between each guild property.       | yes      |
| values | The guild property to return. `name` by default. | no       |

### Examples

#### Example #1

```javascript
bot.commands.add({
    type: "basicCommand",
    name: "sort1",
    code: `$sort[number;3,2,1]` //Returns 1, 2, 3
})
```

