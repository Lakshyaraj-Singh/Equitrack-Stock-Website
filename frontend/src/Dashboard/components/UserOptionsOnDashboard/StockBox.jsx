import { useEffect, useState } from "react"
import { stockDetail } from "../../../USERAPIS/StockApi"

export const StockBox = ({stock}) => {
    let [stockD,setStock]=useState(null)
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

    }, [])
    
    
    return (
    <div></div>
  )
}