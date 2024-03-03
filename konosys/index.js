import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connecter from "./database/config.js";

const app=express();

app.get('/',(req,res)=>{
    res.json({'message':"La liste des stagiaires"})
})

app.listen(process.env.PORT,(req,res)=>{
    console.log("le serveur est en ecoute sur le port " + process.env.PORT)
})


