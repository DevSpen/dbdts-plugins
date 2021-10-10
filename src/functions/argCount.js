const func = {
    name: "$argCount",
    description: "Returns how many arguments are in the provided text.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
      let str = data[0]
  if (str.length === 0) {
      let result = "0"
        return fn.resolve(result)
} else {
      let result = str.split(" ").length
        return fn.resolve(result)
}  },
    fields: [
        {
            name: "string",
            description: "The string to count arguments for.",
            required: true,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usage:
$argCount[text]
*/
