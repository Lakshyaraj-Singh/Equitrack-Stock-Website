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
              console.log(stockD)
                }
              catch(error){
                  console.log(error)
              }
        }
        
          fetchData();
        
    }, [stock])
    
    
    return (
    <div>
    <h1>{stockD?.symbol}</h1>
    </div>
  )
}