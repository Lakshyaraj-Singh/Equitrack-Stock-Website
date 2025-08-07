import { positions } from "../../data/data";

export const Positions = () => {
  return (
     <div className="bg-gray-600 h-full px-7 p-2">
      <h1 className="text-center text-4xl font-thin  text-white mb-5">Positions</h1>
     <div className="overflow-y-auto h-96 ">
   <table className="table bg-sky-50">
     {/* head */}
     <thead>
       <tr>
       {/* product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true, */}
         <th>Product</th>
         <th>Name</th>
         <th>Qty.</th>
         <th>Avg.</th>
       
         <th>P&L</th>
         <th>Chg</th>
       </tr>
     </thead>
     <tbody className="text-xs">
        {positions.map((stock,idx)=>{
           const currValue=stock.price*stock.qty;
           const isProfit=currValue-stock.avg*stock.qty>0.0;
           
 
       return(<tr key={idx}>
         <th>{stock.product}</th>
         <th>{stock.name}</th>
         <td>{stock.qty}</td>
         <td>{stock.avg.toFixed(2)}</td>
         <td>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
         {/* <td className={isProfit? "text-green-700 font-medium":"text-red-500 font-medium" }>{stock.net}</td> */}
         <td className={stock.isLoss?"text-red-500 font-medium":"text-green-700 font-medium"}>{stock.day}</td>
       </tr>)
        })}
       
     </tbody>
   </table>
 </div>
     </div>
   )
}