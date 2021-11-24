//imports : Express para framework, connectDB para conexion a base de datos, app
const express = require ("express")
const connectDB = require("./config/db")
const app = express()
const hbs = require("hbs")

require("dotenv").config()
//middlewares
app.use(express.static("public"))

app.set("views", __dirname+"/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.urlencoded({extended:true}))

connectDB()
//rutas
app.use("/auth", require("./routes/auth"))
app.use("/users", require("./routes/users"))
app.use("/", require("./routes/index"))


//server
app.listen(process.env.PORT, ()=>{
    console.log(`Running server on port ${process.env.PORT}`)
})