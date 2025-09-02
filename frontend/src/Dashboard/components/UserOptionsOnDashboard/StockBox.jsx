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
    
    let stockDetails=stockD?.data2;
    let change=(stockD?.data1.close-stockD?.data1.open).toFixed(2);
    let percentageChange=((change/stockD?.data1.open)*100).toFixed(2);
    return (
    <div className="w-screen h-screen absolute z-10 place-content-center place-items-center backdrop-blur-xs inset-0">
    <div className="bg-white w-[40%] mb-20 shadow-2xl shadow-black rounded ">
    <div className="flex justify-between text-sm">
      <div>

    <h1 className="font-bold text-lg ">{stockD?.data2?.results.ticker} </h1>
    <p className="">{stockDetails?.results.name}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">${stockD?.data1.close}</h1>
        {change>0?<p >{change}$ <span className="text-green-500">+{percentageChange}%</span></p>:<p >{change}$ <span className="text-red-500">{percentageChange}%</span></p>}
      </div>
    </div>
    </div>
    </div>
  )
}