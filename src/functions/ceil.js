const func = {
    name: "$ceil",
    description: "Rounds a float to the next largest integer.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let result = Math.ceil(data[0])
       return fn.resolve(result)
 },
    fields: [
        {
            name: "number",
            description: "The number to ceil.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$ceil[number]
*/