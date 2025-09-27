import { useEffect, useState } from "react";
import { useTrading } from "../../ContextApi";
import { holdingsUser } from "../../USERAPIS/StockApi";

export const Holdings = () => {
   let { tradingData } = useTrading();
   let [holdings, setHoldings] = useState([]);

   useEffect(() => {
     const loadHoldings = async () => {
       try {
         let res = await holdingsUser();
         console.log("ENTERED");
         console.log("holdings:", res.data);
         setHoldings(res.data);
       } catch (error) {
         console.error("Error loading holdings:", error);
       }
     }
     loadHoldings();
   }, [tradingData]);
  
   return (
     <div className="bg-gray-600 h-full px-7 py-2">
       <h1 className="text-center text-4xl font-thin text-white mb-2">Holdings</h1>
       <div className="h-96 overflow-y-auto">
         <table className="table bg-sky-50">
           <thead>
             <tr>
               <th>Name</th>
               <th>Qty.</th>
               <th>Avg.</th>
               <th>LTP</th>
               <th>Curr.value</th>
               <th>P&L</th>
               <th>Net.chng %</th>
               <th>Day.chng</th>
             </tr>
           </thead>
           <tbody className="text-xs">
             {holdings.map((stock, idx) => {
               const ltp = stock?.currValue / stock?.quantity; // Calculate LTP
               const profitLossPercent = ((stock?.change / (stock?.avgPrice * stock?.quantity)) * 100).toFixed(2);
               
               return (
                 <tr key={idx}>
                   <th>{stock?.symbol}</th>
                   <td>{stock?.quantity}</td>
                   <td>{stock?.avgPrice?.toFixed(2)}</td>
                   <td>{ltp?.toFixed(2)}</td>
                   <td>{stock?.currValue?.toFixed(2)}</td>
                   <td className={stock?.isProfit ? "text-green-700 font-medium" : "text-red-500 font-medium"}>
                     {stock?.change?.toFixed(2)}
                   </td>
                   <td className={stock?.isProfit ? "text-green-700 font-medium" : "text-red-500 font-medium"}>
                     {profitLossPercent}%
                   </td>
                   <td className="text-red-500 font-medium">{stock?.change?.toFixed(2)}</td>
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
     </div>
   );
}