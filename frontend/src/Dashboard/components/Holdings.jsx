import { holdings } from "../src/data/data"

export const Holdings = () => {
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
          const currValue=stock.price*stock.qty;
          const isProfit=currValue-stock.avg*stock.qty>0.0;
          

      return(<tr>
        <th>{stock.name}</th>
        <td>{stock.qty}</td>
        <td>{stock.avg.toFixed(2)}</td>
        <td>{stock.price.toFixed(2)}</td>
        <td>{currValue.toFixed(2)}</td>
        <td>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
        <td className={isProfit? "text-green-700 font-medium":"text-red-500 font-medium" }>{stock.net}</td>
        <td className={stock.isLoss?"text-red-500 font-medium":"text-green-700 font-medium"}>{stock.day}</td>
      </tr>)
       })}
      
    </tbody>
  </table>
</div>
    </div>
  )
}