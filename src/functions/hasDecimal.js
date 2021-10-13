const func = {
    name: "$hasDecimal",
    description: "Checks if a number has a decimal.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    async function hasDecimal (num) {
        return !!(num % 1)
    }
    let result = await hasDecimal(data[0])
        return fn.resolve(result)
 },
    fields: [
        {
            name: "number",
            description: "The number to check.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$hasDecimal[number]
*/