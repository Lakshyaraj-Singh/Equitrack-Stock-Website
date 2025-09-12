import { useEffect, useState } from "react";
import { useRef } from "react";
import { useTrading } from "../../../ContextApi"

import toast from "react-hot-toast";
import { buyingStocksAction } from "../../../USERAPIS/StockApi";
export const BuyBox = ({ stock, oncloseModal }) => {
    let { loadPortfolio } = useTrading()
    let [quantity, setQuantity] = useState(1);

    let [totalCost, setTotalCost] = useState(stock?.c || null);
    useEffect(() => {

        const handleShares = () => {
            setTotalCost(quantity * (stock.c));
        }
        handleShares();
    }, [quantity])
    const handleQuantity = (e) => {
        let qty = parseInt(e.target.value);

        setQuantity(qty);
    }

    const handleBuyStock = async () => {
        let symbol = ""
        let data = {
            symbol: stock.T,
            quantity: quantity,
            totalCost: totalCost.toFixed(2)
        }
        let res = await buyingStocksAction(data);
        if (res.status == 200) {
            let resL = await loadPortfolio();
           
                toast.success(`Congratulations Bought ${symbol}`)
                
            
           

        }
        else {
            toast.error("Error Occured");
           
        }
        oncloseModal();
        console.log(res)
    }

    let modalRef = useRef();
    console.log(stock)
    let change = (stock?.c - stock?.o).toFixed(2);

    let percentageChange = ((change / stock?.o) * 100).toFixed(2);



    const close = (e) => {
        if (modalRef.current == e.target) {
            oncloseModal();

        }
    }

    return (
        <div ref={modalRef} onClick={close} className="w-screen h-screen  backdrop-blur-xs place-content-center place-items-center absolute  inset-0 z-10 rounded">

            <div className="bg-white w-[40%] mb-20 shadow-2xl shadow-black">
                Buying
                <div className="flex flex-col gap-5 w-full items-center p-3">
                    {/* stock name and symbol */}
                    <div className="flex justify-between rounded-2xl  bg-blue-100 w-full  p-3">

                        <div className=" flex gap-2 flex-col "><h1 className="font-extrabold text-2xl">{stock.T} </h1>  <p className="text-sm text-gray-500">Buying</p></div>
                        <div className="flex gap-2 flex-col"> <h1 className="font-bold text-2xl">${stock.c}</h1>
                            {change > 0 ? <p   ><span className="bg-black  px-5 rounded-3xl text-xs text-white font-semibold">{Math.abs(change)}$</span> <span className="text-green-500 font-semibold text-xs">+{percentageChange}%</span></p> : <p ><span className="bg-black font-semibold  px-5 rounded-3xl text-xs text-white">{Math.abs(change)}$</span> <span className="text-red-500 text-xs font-semibold">{percentageChange}%</span></p>}</div>
                    </div>

                    {/* Order Type */}
                    <div className="w-full ">
                        <h2 className="text-xs font-bold">Order Type</h2>
                        <select className="bg-gray-100 w-full text-xs rounded-md p-2 " name="Otype" id="Otype"><option className="text-xs" value="Market Order">Market order</option></select>
                        <p className="text-xs text-gray-800 mt-2">Buy immediately at current market price </p>
                    </div>

                    {/* quantity of stock */}
                    <div className="w-full ">
                        <h1 className="text-xs font-bold">Quantity</h1>
                        <input className="bg-gray-100 w-full pl-2 rounded-md" type="number" min={1} onChange={handleQuantity} value={quantity} name="qty" id="qty" />
                    </div>

                    {/* Full summary per share */}
                    <div className="bg-gray-200 rounded-lg p-3 w-full space-y-2.5">
                        <div className="text-xs font-semibold flex justify-between"><h1 className="text-gray-500">Price per share:</h1> <p>{stock.c}</p></div>
                        <div className="text-xs font-semibold  flex justify-between"><h1 className="text-gray-500">Quantity</h1> <p>{quantity} Shares</p></div>
                        <hr />
                        <div className="text-sm flex justify-between"><h1 className="font-bold ">Total Cost:</h1> <p className="font-bold">{totalCost.toFixed(2)}</p></div>

                    </div>

                    {/* actionbuttons */}
                    <div className="text-xs w-full flex justify-evenly gap-1">
                        <button onClick={() => { oncloseModal() }} className="p-2 border-[1px] border-gray-400 rounded-lg  w-full">Cancel</button>
                        <button onClick={handleBuyStock} className="p-2  w-full bg-green-600 text-white rounded-lg "> Buy {quantity} Share</button>
                    </div>
                </div>

            </div>
        </div>
    )
}