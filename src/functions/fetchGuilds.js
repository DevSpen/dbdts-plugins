const func = {
    name: "$fetchGuilds",
    description: "Fetches guild names/ids that your bot is in.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
      let sep = data[0]
      let property = data[1]
  try {
    if (property.toLowerCase() === "name") {
      let result = d.client.guilds.cache.map((g) => g.name).join(sep)
        return fn.resolve(
            result
        )
    } else if (property.toLowerCase() === "id") {
      let result = d.client.guilds.cache.map((g) => g.id).join(sep)   
        return fn.resolve(
            result
        )
    } }
  catch(err) {
      let result = d.client.guilds.cache.map((g) => g.name).join(", ") 
        return fn.resolve(
            result
        )
    }
  },
    fields: [
        {
            name: "separator",
            description: "The separator between each guild property.",
            required: false,
            type: "STRING"
        },  {
            name: "returnType",
            description: "The guild property to return. Can be either name or id (name by default).",
            required: false,
            type: "STRING"   
        }
    ]
}

module.exports = func
/*
Usages:
$fetchGuilds[] - Returns all server names that your bot is in, separated by comma.
$fetchGuilds[separator] OR $fetchGuilds[separator;name] - Returns all server names that your bot is in, separated by your own custom separator.
$fetchGuilds[separator;id] - Returns all server IDs which your bot is in, separated by your own custom separator.
*/