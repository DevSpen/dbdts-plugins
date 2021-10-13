const func = {
    name: "$truncate",
    description: "Removes decimals from a number.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let result = Math.trunc(data[0])
       return fn.resolve(result)
 },
    fields: [
        {
            name: "number",
            description: "The number to remove decimals from.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$truncate[number]
*/