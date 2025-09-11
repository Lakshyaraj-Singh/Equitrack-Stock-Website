import { holdings } from "../../data/data"
import {useTrading} from "../../ContextApi"
export const Summary = () => {
   
    let {tradingData}=useTrading();
    let marginAvailabe=tradingData.balance.toFixed(2);
    let marginUsed=tradingData.totalInvestment;
  return (
    <div className="flex flex-col pl-5  h-full   bg-amber-50">
        <div className="h-3/5 place-content-center  border-b-[1px]">
            <h1 className="text-3xl">Hi ,{tradingData.user}!!</h1>
        </div>
        <div className="h-4/5 border-b-[1px] place-content-center">
            <h1 className="text-3xl font-thin">Equity</h1>
            <div className="flex  gap-30 mt-5  ">
                <div className="flex flex-col justify-between border-r-1 pr-10 ">
                    <h1 className="text-3xl text-blue-900">${marginAvailabe}k</h1>
                    <p>Margin Available</p>
                 
                </div>
               
                <div className="text-gray-600 flex flex-col justify-between  items-left">
                    <p>Margin Used : <span className="font-medium text-black">${marginUsed}K</span></p>
                    <p>Total Profit: <span className={`font-medium ${tradingData.change>0? 'text-green-500':'text-red-500'}`}>{tradingdata.change>0?"+":""}${Math.abs(tradingdata.change)}</span></p>
                </div>
            </div>
        </div>
        <div className="h-3/5 place-content-center  ">
            <h1 className="text-3xl font-thin">Holdings ({tradingData.stocks?tradingData.stocks.length:0})</h1>
            {tradingData.stocks && tradingData.stocks.length > 0 ? (
                    <div className="mt-3 text-sm text-gray-600">
                        <p>Total Investment: ${(tradingData.totalInvestment.toFixed(2))}K</p>
                        <p>Total Stocks: {tradingData.stocks.length} different companies</p>
                    </div>
                ) : (
                    <p className="mt-3 text-gray-500">No holdings yet. Start investing!</p>
                )}
        </div>
    </div>
  )
}