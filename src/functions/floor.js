const func = {
    name: "$floor",
    description: "Rounds a float to the largest integer less than or equal to the provided number.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let result = Math.floor(data[0])
       return fn.resolve(result)
 },
    fields: [
        {
            name: "number",
            description: "The number to floor.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$floor[number]
*/