//imports
const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")

const routeGuard = require("./../middlewares/route-guard")

console.log("El routeguard importado es:", routeGuard.usuarioLoggeado)
//ruteo
                //uso de middlewares de ruta
router.get("/profile", routeGuard.usuarioLoggeado ,usersController.profile)
//PATRÓN DE AUTENTIFICACION: Verificar la identidad de una persona ante un software


module.exports = router