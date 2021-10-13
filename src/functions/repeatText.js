const func = {
    name: "$repeatText",
    description: "Repeats 'string' for 'amount'. Remember, there is a message character limit.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let result = data[0].repeat(data[1])
      return fn.resolve(result)
 },
    fields: [
        {
            name: "string",
            description: "The string to repeat.",
            required: true,
            type: "STRING"
        }, {
            name: "amount",
            description: "The amount of times to repeat the string.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$repeatText[string;amount]
*/