function greet(name) {
  console.log(`Hello ${name}`)
}

function higherOrderFunction(callback) {
  const name = "Fid"
  callback(name)
}

higherOrderFunction(greet)