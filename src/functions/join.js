const func = {
    name: "$join",
    description: "Splits 'string' with 'separator', then joins the split with 'newSeparator' (or the orginal 'separator' if no 'newSeparator' is inputted).",
    brackets: true,
 execute: async (d, fn) => {
  const data = await fn.resolveArray(d)
    if (data[0].includes(data[1]) == true) {
      let newsep = (data[2] == undefined) ? data[1] : data[2]
      let result = data[0].split(data[1]).toString().replace(/,/g, newsep)
        return fn.resolve(result)
  } else if (data[0].includes(data[1]) == false) {
      let result = ":x: Function **$join** returned a error: 'separator' not found within 'string'!"
        return fn.resolve(result)
  }
 },
    fields: [
        {
            name: "string",
            description: "The text to split with 'separator'.",
            required: true,
            type: "STRING"
        },  {
            name: "separator",
            description: "The separator to split 'string' with.",
            required: true,
            type: "STRING"
        },  {
            name: "newSeparator",
            description: "The new separator between each list argument (replaces 'separator'). Same as 'separator' by default, only use if you want to change the orginal separator.",
            required: false,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Usages:
$join[text;separator]
$join[text;separator;newSeparator]
*/