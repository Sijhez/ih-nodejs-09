const User = require("./../models/User")
const bcryptjs = require("bcryptjs")

exports.viewRegister = (req, res) => {

	res.render("auth/signup")

}

exports.register = async (req, res)=>{
    // console.log("Enviando Datos")
    //cachamos los datos del formulario del  usuario
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

   //antes de subir los datos del usuario, DEBEMOS ENCRIPTAR EL PASSWORD DEL USUARIO 
   //esto por que los datos se suben a BD y si nos roban el password de la base de datos pueden obtener los passwords de los usuarios 
    
   //con esto indicamos que queremos que el server va a revolver el password y el resultado se guarda en una variable llamada salt
   //indicamos con el numero que se revuelvan 10 veces, pueden ser mas, pero el 10 es el minimo establecido internacionalmente
   const salt = await bcryptjs.genSalt(10)
   const passwordEncriptado = await bcryptjs.hash(password, salt)
   
   const newUser = await User.create({
       username,
       email,
       passwordEncriptado
   })
   console.log(newUser)
   res.redirect("/")
}