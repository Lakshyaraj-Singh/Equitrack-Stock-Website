const express= require("express");
const app=express()
const Dotenv=require("dotenv")
Dotenv.config()
const PORT=process.env.PORT || "3004"

let url=process.env.MONGO
const mongoose = require('mongoose');
const main=(url)=>{

    mongoose.connect(url)
    .then((r)=>console.log("connected"))
    .catch((err)=>console.log(err))
}
main(url)

app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`)
   
  
})