const func = {
    name: "$sort",
    description: "Sorts the provided numbers (smallest to greatest) OR alphabetizes a string.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    let type = data[0]
    let toSort = data[1]
    let depend = data[1].replace(/\s+/g,'').trim().replace(/\,/g, '')
    let isMatch = /string|number/g.test(type) 

   if (type.toLowerCase() === "number" && isNaN(depend) == false) {
    let sorted = toSort.split(",").sort(function (a, b) {  return a - b;  })
    let result = sorted.toString().replace(/,/g, ", ").replace(/\s+/g,' ').trim()
      return fn.resolve(
            result
      )
 } else if (type.toLowerCase() === "string" && isNaN(depend) == true) {
    let sorted = toSort.split(",").sort()
    let result = sorted.toString().replace(/,/g, ", ").replace(/\s+/g,' ').trim()
      return fn.resolve(
            result
      )
 } else if (isMatch === false) {
    let result = ":x: Function **$sort** returned a error: Invalid 'type' provided! 'type' must be \`string\` or \`number\`."
      return fn.resolve(
            result
      ) 
 } else if (type.toLowerCase() === "string" && isNaN(depend) === false) {
    let result = ":x: Function **$sort** returned a error: \`string\` was provided as 'type' and \`textToSort\` is a number!"
      return fn.resolve(
            result
      )
 } else if (type.toLowerCase() === "number" && isNaN(depend) === true) {
    let result = ":x: Function **$sort** returned a error: \`number\` was provided as 'type' and \`textToSort\` is NaN!"
      return fn.resolve(
            result
      )
 } else {
  let result = `:x: Function **$sort** returned a error: Invalid usage!
\`\`\`php
Proper Usage: $sort[sortType (string/number);arg1, arg2, etc]
\`\`\``
      return fn.resolve(
            result
      )
 } 
    },
    fields: [
        {
            name: "type",
            description: "The sort type. Either string or number.",
            required: true,
            type: "STRING"
        },  {
            name: "textToSort",
            description: "The numbers/strings to sort, separated by commas.",
            required: true,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usage:
$sort[type (string/number);value1, value2, etc]
*/
