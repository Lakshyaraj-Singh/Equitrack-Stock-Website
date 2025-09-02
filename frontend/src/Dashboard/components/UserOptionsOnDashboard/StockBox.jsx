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
             console.log(res.data)
                }
              catch(error){
                  console.log(error)
              }
        }
        
          fetchData();
        
    }, [stock])
    
    
    return (
    <div className="w-screen h-screen absolute z-10 place-content-center place-items-center backdrop-blur-xs inset-0">
    <div className="bg-white w-[40%] mb-20 shadow-2xl shadow-black rounded ">
    <div>
    <h1>{stockD?.symbol} </h1>

    </div>
    </div>
    </div>
  )
}