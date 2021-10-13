const func = {
    name: "$absolute",
    description: "Returns the absolute value of a number.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let result = Math.abs(data[0])
       return fn.resolve(result)
 },
    fields: [
        {
            name: "number",
            description: "The number to get the absolute value of.",
            required: true,
            type: "NUMBER"
        }
    ]
}

module.exports = func
/*
Usage:
$absolute[number]
*/