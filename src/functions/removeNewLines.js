const func = {
    name: "$removeNewLines",
    description: "Removes new lines from a string.",
    brackets: true,
 execute: async (d, fn) => {
    const data = await fn.resolveArray(d)
      let string = data[0]
      let replacer = data[1]
    if (replacer === undefined) {
      let result = string.replace(/(\r\n|\n|\r)/gm, " ")
          return fn.resolve(
            result
 )
    } else {
      let result = string.replace(/(\r\n|\n|\r)/gm, replacer)
          return fn.resolve(
            result
 )
  }
 },
    fields: [
        {
            name: "string",
            description: "The string to remove new lines from.",
            required: true,
            type: "STRING"
        },  {
            name: "new",
            description: "The string to replace new lines with, space by default.",
            required: false,
            type: "STRING"
        }
    ]
}
module.exports = func
/*
Usages:
$removeNewLines[string] - Replaces new lines in a string with spaces.
$removeNewLines[string;new] - Replace new lines in a string with the custom separator (new).
*/
