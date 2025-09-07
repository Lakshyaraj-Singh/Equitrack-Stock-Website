import {User} from "../Models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
export const registerUser=async(req,res)=>{
    const {email,username,password}=req.body;
    try{
        let checkExist=await User.findOne({email})
        if(checkExist){
            return res.status(400).json({message:"User already exists"})
        }
        let hashed= await bcrypt.hash(password,10)
        if(!hashed) return res.status(404).json({message:"error while hashing"})
        const registerNew=new User({
         email,
         username,
         password:hashed
       });
        await registerNew.save()
        return res.status(200).json({message:"User Registered Successfully"})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    
}

export const loginUser=async(req,res)=>{
   let {email,password}=req.body;
   try{
      let checkIfUser=await User.findOne({email});
      if(!checkIfUser) return res.status(404).json({message:"No Such User Exist"})
      let PasswortDecrypt=await bcrypt.compare(password,checkIfUser.password);
      if(!PasswortDecrypt) return res.status(500).json({message:"Not Authorized"});
      let token=jwt.sign({
       userId:checkIfUser._id,
       email:checkIfUser.email
      },process.env.JWT_SECRET,{expiresIn:"24h"});
      
      return res.status(200).json({message:"Succesfully User Logged In",token})
   }

   catch(error){
       res.status(500).json({message:"INTERNAL SERVER ERROR"})
   }

}


