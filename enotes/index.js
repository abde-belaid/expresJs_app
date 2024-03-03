import express from "express";
import dotenv from "dotenv";
import connecter from "./database/config.js";
import FiliereRouter from "./routers/FiliereRoute.js";
dotenv.config()
import methodOverride from "method-override";
import multer from 'multer'

const app = express();

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", FiliereRouter)
app.set('view engine', 'ejs')




app.use(express.static("public"))

app.listen(process.env.PORT, (req, res) => {
    console.log("le serveur est en ecoute sur le port " + process.env.PORT)
})



