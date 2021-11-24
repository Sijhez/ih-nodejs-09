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
    
    //validacion1: Verificar que username, mail y password tengan contenido, es decir, que no lleguen vacios
    if(!username || !password || !email){
        res.render("auth/signup", {
            errorMessage: "Uno o mas campos están vacios. Revísalos nuevamente"
        })
        return
    }
    //validacion2: Verificar que el password tenga 6 caracteres, minimo un numero, una mayúscula
    //uso de variable REGEX- Conjunto de reglas que auditan un texto plano
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(!regex.test(password)){
        res.render("auth/signup",{
            errorMessage: "Tu password debe de contener 6 caracteres, mínimo un numero y una mayúscula"
        })
        return
    }
    

   //antes de subir los datos del usuario, DEBEMOS ENCRIPTAR EL PASSWORD DEL USUARIO 
   //esto por que los datos se suben a BD y si nos roban el password de la base de datos pueden obtener los passwords de los usuarios 
    
   //con esto indicamos que queremos que el server va a revolver el password y el resultado se guarda en una variable llamada salt
   //indicamos con el numero que se revuelvan 10 veces, pueden ser mas, pero el 10 es el minimo establecido internacionalmente
   
   
   try {
    const salt = await bcryptjs.genSalt(10)
    const passwordEncriptado = await bcryptjs.hash(password, salt)
    
    const newUser = await User.create({
        username,
        email,
        passwordEncriptado
    })
    
    res.redirect("/") //redireccionamos al inicio
       
   } catch (error) {
      console.log(error)
      res.status(500).render("auth/signup",{
          errorMessage: "Hubo un problema en el servidor"
      }) //estatus code 500, se lanza cuando la verificacion en el try falló

   }

   
}