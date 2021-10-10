const func = {
    name: "$sortNumbers",
    description: "Sorts the provided numbers.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let numbers = data[0]
    let sorted = numbers.split(",").sort(function (a, b) {  return a - b;  })
    let result = sorted.toString().replace(/,/g, ", ").replace(/\s+/g,' ').trim()

  return fn.resolve(
            result
 )
  },
    fields: [
        {
            name: "numbers",
            description: "The numbers to sort, separated by commas.",
            required: true,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usage:
$sortNumbers[number1, number2, number3, etc]
*/
