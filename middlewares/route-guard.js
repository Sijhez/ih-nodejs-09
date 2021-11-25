//AREAS PRIVADAS: el usuario debe estar logueado para poder acceder
const usuarioLoggeado = (req, res, next)=>{
    //evaluar si el usuario no esta logueado
    //si no esta logeado, enviarlo a login
    if(!req.session.currentUser){
        res.redirect("/auth/login")
        return

    }
    //si ya esta logeado, enviarlo a la siguiente funcion (controller)
    next()
}
//ÁREAS DE AUTENTICACION: El usuario ya se autenticó y quiere entrar a las áreas de signup y login, 
//lo redirigimos al home
const usuarioNoLoggeado = (req, res, next)=>{
    //evvaluar si esta autenticado
    //si esta autenticado ejecutamos:
    if(req.session.currentUser){
        return res.redirect("")
    }
    //si no esta autenticado, dejarlo pasar al signup o login
    next()
}

module.exports = {
    usuarioLoggeado,
    usuarioNoLoggeado
}