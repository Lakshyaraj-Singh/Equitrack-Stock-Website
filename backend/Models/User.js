import mongoose, { Schema, Types } from "mongoose";

const stockSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    uppercase: true, 
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  avgBuyPrice: {
    type: Number,
    required: true,
  },
  totalInvested: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

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
  
  balance:{
    type:Number,
    default:100000
  },
  createdAt:{
   type:Date,
   default:Date.now(),
  },
  stocks:[stockSchema]
})

const User=mongoose.model("User",userSchema)

export {User}

