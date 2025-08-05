import axios from "axios"


const api=axios.create({
    baseURL:"http://localhost:3000/api/user"
})



export const login=async(data)=>{
try{
    let res=await api.post("/login",data);
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