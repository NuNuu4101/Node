const upperCase = require("upper-case").upperCase

function greet(name) {
  console.log(upperCase(`${name}, welcome to Codeevolutions`))
}

greet("Minn")

module.exports = greet