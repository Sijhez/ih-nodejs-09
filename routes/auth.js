//aqui va todo lo relacionado con registro

const express		= require("express")
const router		= express.Router()

const authController	= require("./../controllers/authController")


//crear usuario
//mostrar formulario
router.get("/signup", authController.viewRegister)

//enviar datos a la BD que vienen en el formulario

router.post("/signup", authController.register)

module.exports = router