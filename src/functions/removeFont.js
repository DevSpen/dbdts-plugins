const func = {
    name: "$removeFont",
    description: "Converts fonted-text into regular text.",
    brackets: true,
 execute: async (d, fn) => {
  const stringTools = require('string-toolkit')
  const data = await fn.resolveArray(d)
    if (data[0].length != 0)  {
      let result = stringTools.decancer(data[0])
        return fn.resolve(result)
  } else  {
      let result = ":x: Function **$removeFont** returned a error: \`string\` is a required field, it requires one or more characters inputted!"
        return fn.resolve(result)
  }
 },
    fields: [
        {
            name: "string",
            description: "The string to remove fonts from.",
            required: true,
            type: "STRING"
        }
    ]
}

module.exports = func
/*
Requires string-toolkit installed: npm i string-toolkit

Usage:
$removeFont[text]
*/