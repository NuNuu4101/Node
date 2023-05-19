const buffer = new Buffer.from("Minn")

buffer.write("CodEvolution")

console.log(buffer.toJSON())
console.log(buffer)
console.log(buffer.toString())