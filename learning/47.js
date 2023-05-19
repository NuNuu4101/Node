setTimeout(() => console.log("This is setTimeout 1"), 0)
setImmediate(() => console.log("This is setImmediate 1"))
for (let i = 0; i < 1000000; i++) {}

// setImmediate(() => console.log("setImmediate 1"))
// setImmediate(() => {
//   console.log("this is setImmediate 2")
//   process.nextTick(() => console.log("nextTick 1"))
//   Promise.resolve().then(() => console.log("promise 1"))
// })
// setImmediate(()=>console.log("This is setImmediate 3"))

// const fs = require("node:fs")

// fs.readFile(__filename, () => {
//   console.log("readFile 1")
//   setImmediate(() => console.log("setImmediate 1 inside readFile"))
//   process.nextTick(() => console.log("inside nextTick 1"))
//   Promise.resolve().then(() => console.log("inside promise 1"))
// })

// process.nextTick(() => console.log("nextTick 1"))
// Promise.resolve().then(() => console.log("promise 1"))
// setTimeout(() => console.log("setTimeout 1"), 0)

// for (let i = 0; i < 20000000; i++) {}
