import { useEffect, useState } from "react"
import { stockDetail } from "../../../USERAPIS/StockApi"

export const StockBox = ({stock}) => {
    let [stockD,setStock]=useState(null)
    console.log(stock)
    useEffect(() => {
        const fetchData=async()=>{

            try{
              const res=await stockDetail(stock);
              setStock(res.data);
             
                }
              catch(error){
                  console.log(error)
              }
        }
        
          fetchData();
        
    }, [stock])
    
    
    return (
    <div></div>
  )
}