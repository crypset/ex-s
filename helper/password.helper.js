const bcrypt = require("bcrypt")

function hash(password){
    return bcrypt.hash(password, "SALT")
}

async function compare(passsword, hashPassword){
    const isPasswordEquals  = await bcrypt.compare(passsword, hashPassword)

    if (!isPasswordEquals) {
        throw new Error('Wrong email or password')
      }
}

module.exports = {
    hash,
    compare
}