    name: "$find",
    description: "Finds 'query' within 'string'. 'query' is searched for within each 'separator', 'separator' is optimized by default, but you can input a custom one if need be. If 'query' found, it returns the result, otherwise 'error' is returned. 'error' is optional, by default if no result for 'query' is found then nothing is returned.",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
      let sep = (data[2] != undefined) ? data[2] : " "
      let error = (data[3] != undefined) ? data[3] : ""
    if (data[1].split(" ").length == 1) {
    if (sep == undefined || sep == "#opt#") {
      let output = data[0].split(" ").find(element => element.includes(data[1]) == true)
      let result = (output != data[1]) ? error : output
        return fn.resolve(result)
  } else {
      let output = data[0].split(sep).find(element => element.includes(data[1]) == true)
      let result = (output != data[1]) ? error : output
        return fn.resolve(result)
  }
  } else if (data[1].split(" ").length > 1) {
    if (sep == undefined || sep == "#opt#") {
      let result = (data[0].includes(data[1]) == true) ? data[1] : error
        return fn.resolve(result)
  } else {
      let output = data[0].split(sep).find(element => element.includes(data[1]) == true)
      let result = (output != data[1]) ? error : output
        return fn.resolve(result)
  }
  }
 },
    fields: [
        {
            name: "string",
            description: "The string to find 'query' within.",
            required: true,
            type: "STRING"
        },  {
            name: "query",
            description: "The text to find within 'query'.",
            required: true,
            type: "STRING"
        },  {
            name: "separator",
            description: "The separator between each search piece. Optimized by default, recommended. If you are using 'error' you must input this field, to make it optimzed, put #opt#.",
            required: false,
            type: "STRING"
        },  {
            name: "error",
            description: "The error to return when 'query' is not found. Nothing by default.",
            required: false,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usages:
$find[text;query]
$find[text;query;separator]
$find[text;query;separator;error]
*/