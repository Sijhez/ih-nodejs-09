
//imports
const mongoose = require("mongoose")


//Schema
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    passwordEncriptado: String
})

//Modelo
const User = mongoose.model("User", userSchema)

//exports
module.exports = User
