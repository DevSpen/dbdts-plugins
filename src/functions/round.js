const func = {
    name: "$round",
    description: "Rounds a float to the nearest integer.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let result = Math.round(data[0])
       return fn.resolve(result)
 },
    fields: [
        {
            name: "number",
            description: "The number to round.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$round[number]
*/