// const crypto = require("node:crypto")

// const start = Date.now()
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log("Hash: ", Date.now() - start)

const crypto = require("node:crypto")

process.env.UV_THREADPOOL_SIZE = 8
const MAX_CALLS = 8

const start = Date.now()
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start)
  })
}

//libuv has 4 thread pools