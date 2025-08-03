import mongoose, { Schema, Types } from "mongoose";



const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  profile:{
    type:String,
  },
  fullname:{
    type:String,
  },
  balance:{
    type:Number,
    default:100000
  },
  createdAt:{
   type:Date,
   default:Date.now(),
  }
})

const User=mongoose.model("User",userSchema)

export  {User}