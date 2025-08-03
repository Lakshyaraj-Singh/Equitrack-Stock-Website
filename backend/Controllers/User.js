import {User} from "../Models/User.js"
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

