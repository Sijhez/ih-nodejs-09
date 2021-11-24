
//imports
const mongoose = require("mongoose")


//Schema
const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        required:[true, "Email es requerido"],
        match:[/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."],
        unique:true,   //email unico en la base de datos
        lowercase:true,   //en minusculas
        trim:true    //sin espacios vacios
    },
    passwordEncriptado: String
})

//Modelo
const User = mongoose.model("User", userSchema)

//exports
module.exports = User
