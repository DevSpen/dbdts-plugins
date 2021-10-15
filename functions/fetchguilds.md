---
description: Fetches guild names/ids that your bot is in.
---

# $fetchGuilds

### Usage

```
$fetchGuilds[separator;returnType (name/id)]
```

#### Params

| Field      | Description                                      | Required |
| ---------- | ------------------------------------------------ | -------- |
| separator  | The separator between each guild property.       | yes      |
| returnType | The guild property to return. `name` by default. | no       |

### Example

```javascript
bot.commands.add({
    type: "basicCommand",
    name: "servers",
    code: `$serverNames[]` //Returns serverName1, serverName2, etc
})
```
