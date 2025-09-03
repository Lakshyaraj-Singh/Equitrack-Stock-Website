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
    let change=(stockD?.data1?.close-stockD?.data1?.open).toFixed(2);
    if(change){let percentageChange=((change/stockD?.data1?.open)*100).toFixed(2);}
    let percentageChange=((change/stockD?.data1?.open)*100).toFixed(2);
    return (
    <div className="w-screen h-screen absolute z-10 place-content-center place-items-center backdrop-blur-xs inset-0">
    <div className="bg-white w-[50%] p-3 mb-20 shadow-2xl shadow-black rounded ">
    <div className="flex justify-between  rounded-2xl  bg-blue-50 p-3 text-sm">
      <div>
    <img className="w-15 " src={`https://img.logo.dev/${stockDetails?.results.ticker}.com?token=pk_fz4v-CQ2S2eNsQe1uWZjPg`} alt="" />
    <h1 className="font-bold text-xl ">{stockDetails?.results.ticker} </h1>
    <p className="">{stockDetails?.results.name}</p>
      </div>
      <div>
        <h1 className="font-bold text-xl">${stockD?.data1.close}</h1>
        {change>0?<p >{change}$ <span className="text-green-500">+{percentageChange}%</span></p>:<p >{change}$ <span className="text-red-500">{percentageChange}%</span></p>}
      </div>
    </div>
      <p className="text-xs text-gray-500 text-justify  mt-5">{stockDetails?.results?.description.split('.').slice(0, 2).join('.') + '.'}</p>
    </div>
    </div>
  )
}