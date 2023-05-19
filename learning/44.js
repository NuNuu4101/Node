setTimeout(() => console.log("setTimeout 1"), 1000)
setTimeout(() => console.log("setTimeout 2"), 500)
setTimeout(() => console.log("setTimeout 3"), 0)

// setTimeout(() => console.log("Timeout 1"), 0)
// setTimeout(() => {
//   console.log("Timeout 2")
//   process.nextTick(() => {
//     console.log("nextTick inside setTimeout")
//   })
//   Promise.resolve().then(()=>console.log("promise within setTimeout"))
// }, 0)
// setTimeout(() => console.log("Timeout 3"), 0)

// process.nextTick(() => console.log("process.nextTick 1"))
// process.nextTick(() => {
//   console.log("process.nextTick 2")
//   process.nextTick(() => console.log("inside nextTick"))
// })
// process.nextTick(() => console.log("process.nextTick 3"))

// Promise.resolve().then(() => console.log("promise 1"))
// Promise.resolve().then(() => {
//   console.log("promise 2")
//   process.nextTick(() => console.log("next tick inside promise"))
// })
// Promise.resolve().then(() => console.log("promise 3"))

// Promise.resolve().then(()=>console.log("this is Promise.resolve 1"))
// process.nextTick(()=>console.log("process.next 1"))

// console.log("console.log 1")
// process.nextTick(()=>console.log("this is process.next 1"))
// console.log("console.log 2")
