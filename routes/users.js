const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")

router.get("/", usersController.register)
//PATRÓN DE AUTENTIFICACION: Verificar la identidad de una persona ante un software


module.exports = router