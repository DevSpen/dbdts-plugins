const func = {
    name: "$cropText",
    description: "Trim the provided text and optionally append text to end.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    if (data[2] !== undefined) {
      let result = data[0].substring(0, data[1]) + data[2]
       return fn.resolve(result)
  } else if (data[2] === undefined) {
      let result = data[0].substring(0, data[1])
       return fn.resolve(result)
  }
 },
    fields: [
        {
            name: "string",
            description: "The string to crop.",
            required: true,
            type: "STRING"
        },  {
            name: "max",
            description: "The maximum max of characters to allow before cropping.",
            required: true,
            type: "NUMBER"
        },  {
            name: "appendment",
            description: "The text to append to the end of this string, if it goes of the maximum amount of characters allowed.",
            required: false,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usages:
$cropText[text;max;appendment]
$cropText[text;max]
*/
