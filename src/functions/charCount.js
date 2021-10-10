const func = {
    name: "$charCount",
    description: "Returns how many characters are in the provided text.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    if (data[1] == false || data[1] == "no") {
      let spaceCount = (data[0].split(" ").length - 1)
      let result = data[0].length - spaceCount
        return fn.resolve(result)   
  } else {
      let result = data[0].length
        return fn.resolve(result)
  }
 },
    fields: [
        {
            name: "string",
            description: "The string to count characters for.",
            required: true,
            type: "STRING"
        },  {
            name: "countSpaces",
            description: "Whether spaces should be included in the character count. True by default.",
            required: false,
            type: "BOOLEAN"
        }
    ]
}

module.exports = func
/*
Usages:
$charCount[string] - Returns the character count.
$charCount[string;no] - Returns the character count, but doesn't count spaces as characters.
*/
