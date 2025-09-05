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
    console.log("Dividend data:", stockD?.dividends?.results?.[0]);
console.log("Financial data:", stockD?.financial?.results?.[0]);
    let stockDetails=stockD?.data2;
    let change=(stockD?.data1?.close-stockD?.data1?.open).toFixed(2);
    if(change){let percentageChange=((change/stockD?.data1?.open)*100).toFixed(2);}
    let percentageChange=((change/stockD?.data1?.open)*100).toFixed(2);
    return (
    <div className="w-screen h-screen absolute z-10 place-content-center place-items-center backdrop-blur-xs inset-0">
    <div className="bg-white w-[50%] p-3 mb-20 shadow-2xl shadow-black rounded ">
    <div className="flex justify-between  rounded-2xl  bg-blue-50 p-3 text-sm">
      <div>
    <img className="w-15 " src={`https://img.logo.dev/${stockDetails?.results.name.split(' ')[0]}.com?token=pk_fz4v-CQ2S2eNsQe1uWZjPg`} alt="" />
    <h1 className="font-bold text-xl ">{stockDetails?.results.ticker} </h1>
    <p className="">{stockDetails?.results.name}</p>
      </div>
      <div>
        <h1 className="font-bold text-xl">${stockD?.data1?.close}</h1>
        {change>0?<p >{change}$ <span className="text-green-500">+{percentageChange}%</span></p>:<p >{change}$ <span className="text-red-500">{percentageChange}%</span></p>}
      </div>
    </div>
      <p className="text-xs text-gray-500 text-justify  mt-5">{stockDetails?.results?.description.split('.').slice(0, 2).join('.') + '.'}</p>
     <div>
      <h1>Key Metrics</h1>
      <div className="gridkey grid grid-cols-3 space-y-2.5 mt-2  place-items-center  ">
       
      <div className="gap-3 w-30  place-items-center ">
          <p className="text-gray-500 text-xs   font-semibold">$ Market Cap</p>
          <p className="text-md font-bold">{( Number(stockDetails?.results?.market_cap) / 1000000000).toFixed(2)}B</p>
        </div>
      <div className="gap-3 w-30 place-items-center ">
          <p className="text-gray-500 text-xs  font-semibold">P/E Ratio</p>
          <p className="text-md font-bold">2.83</p>
        </div>
      <div className="gap-3 w-30 place-items-center ">
          <p className="text-gray-500 text-xs  font-semibold">Diviend yield</p>
          <p className="text-md font-bold">2.83</p>
        </div>
      <div className="gap-3 w-30 place-items-center ">
          <p className="text-gray-500 text-xs  font-semibold">Today High</p>
          <p className="text-md font-bold">${stockD?.data1?.high}</p>
        </div>
      <div className="gap-3 w-30 place-items-center ">
          <p className="text-gray-500 text-xs  font-semibold">Today Low</p>
          <p className="text-md font-bold">${stockD?.data1?.low}</p>
        </div>
      <div className="gap-3 w-30 place-items-center ">
          <p className="text-gray-500 text-xs  font-semibold">Avg Volume</p>
          <p className="text-md font-bold">{(stockD?.data1?.volume / 1000000).toFixed(1)}M</p>
        </div>
        
      </div>
     </div>
    </div>
    </div>
  )
}