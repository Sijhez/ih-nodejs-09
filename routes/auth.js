//aqui va todo lo relacionado con registro

const express		= require("express")
const router		= express.Router()

const authController	= require("./../controllers/authController")
const routeGuard = require ("./../middlewares/route-guard")

//crear usuario
//mostrar formulario
router.get("/signup", routeGuard.usuarioNoLoggeado, authController.viewRegister)

//enviar datos a la BD que vienen en el formulario

router.post("/signup", routeGuard.usuarioNoLoggeado, authController.register)


//INICIO DE SESIÓN
//1 Mostramos formulario
router.get("/login", routeGuard.usuarioNoLoggeado, authController.viewLogin)

//2 Respuesta del formulario
router.post("/login", routeGuard.usuarioNoLoggeado, authController.login)

//cerrar sesion :)
router.post("/logout", routeGuard.usuarioLoggeado, authController.logout)

module.exports = router