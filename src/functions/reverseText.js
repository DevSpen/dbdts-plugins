const func = {
    name: "$reverseText",
    description: "Reverses a string.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
      let string = data[0]
      let result = string.split("").reverse().join("")
  return fn.resolve(
            result
 )
 },
    fields: [
        {
            name: "string",
            description: "The string to reverse.",
            required: true,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usage:
$reverseText[text]
*/
