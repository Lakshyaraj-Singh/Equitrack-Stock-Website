import { useEffect, useState } from "react";

import {useTrading} from "../../ContextApi"
import { holdingsUser } from "../../USERAPIS/StockApi";
export const Holdings = () => {
   let {tradingData}=useTrading();
   let [holdings,setHoldings]=useState([]);
  useEffect(() => {
     const loadHoldings=async()=>{
       let res=await holdingsUser();
       console.log(res.data);
       setHoldings(res.data);
     }
     loadHoldings();
  }, [tradingData])
  
  return (
    <div className="bg-gray-600  h-full px-7 py-2 ">
       <h1 className="text-center text-4xl font-thin  text-white mb-2">Holdings</h1>
    <div className="h-96 overflow-y-auto  ">
  <table className="table bg-sky-50">
    {/* head */}
    <thead>
      <tr>
      {/* name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%", */}
        <th>Name</th>
        <th>Qty.</th>
        <th>Avg.</th>
        <th>LTP</th>
        <th>Curr.value</th>
        <th>P&L</th>
        <th>Net.chng</th>
        <th>Day.chng</th>
      </tr>
    </thead>
    <tbody className="text-xs" >
       {holdings.map((stock,idx)=>{
          // symbol: allStocks[i].symbol,
          // avgPrice: allStocks[i].avgBuyPrice,
          // quantity: allStocks[i].quantity,
          // currValue: response[i].c * quantity,
          // change: currValue - avgPrice * quantity,
          // isProfit: change > 0 ? true : false

      return(<tr>
        <th>{stock.symbol}</th>
        <td>{stock.quantity}</td>
        <td>{stock.avgPrice.toFixed(2)}</td>
        <td>{stock.price.toFixed(2)}</td>
        <td>LTP</td>
        <td>{stock.currValue.toFixed(2)}</td>
        <td className={stock.isProfit? "text-green-700 font-medium":"text-red-500 font-medium" }>{((stock.change)/stock.avgPrice*stock.quantity)*100}</td>
        <td className={"text-red-500 font-medium"}>l</td>
      </tr>)
       })}
      
    </tbody>
  </table>
</div>
    </div>
  )
}