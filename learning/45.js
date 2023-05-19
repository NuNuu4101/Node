const fs = require("node:fs")

setTimeout(() => console.log("setTimeout 1"), 0)

fs.readFile(__filename, () => {
  console.log("readFile 1")
})

process.nextTick(() => console.log("nextTick 1"))
Promise.resolve().then(() => console.log("promise 1"))

for (let i = 0; i < 20000000; i++) {}
