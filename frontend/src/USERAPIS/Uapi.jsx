import axios from "axios"
import { useNavigate } from "react-router-dom";

const api=axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
        ? "https://your-backend.vercel.app/api/user" 
        : "/api/user"
})



export const login=async(data)=>{
try{
    let res=await api.post("/login",data);
    localStorage.setItem("token",res.data.token)
    return res;
}
catch(error){
    return error
}
}
export const register=async(data)=>{
try{
    let res=await api.post("/register",data);
    return res;
}
catch(error){
    return error
}
}
export const logout=()=>{
    try{
     let navigate=useNavigate();
     localStorage.removeItem("token")
     navigate("/login")

    }
    catch(error){
        return error
    }
}