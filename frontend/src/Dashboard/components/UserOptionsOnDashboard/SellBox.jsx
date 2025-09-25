import { useEffect, useState } from "react";
import { useRef } from "react";
import { sellingStocksAction, userStockD } from "../../../USERAPIS/StockApi";
import toast from "react-hot-toast";
import { useTrading } from "../../../ContextApi";
import { LoginLoading } from "../../../Loading";
export const SellBox = ({stock,oncloseModal}) => {
   let {setIsLoading,isLoading}=useTrading();
  let [userSt,setUserSt]=useState({});
  let [quantity,setQuantity]=useState(1);
  let [totalValue,setTotalValue]=useState(500);
  let { loadPortfolio } = useTrading()
    let modalRef=useRef();
    useEffect(() => {
        const loadUsersStockData=async()=>{
          const res=await userStockD(stock.T);
          
         setUserSt(res.data[0])
         console.log(res.data[0]);
        }
        loadUsersStockData()
       
    
      
    }, []);

    useEffect(()=>{
      const handleShares = () => {
        setTotalValue(quantity * (stock.c));
    }
    handleShares();
    },[quantity])

    const handleQuantity=(e)=>{
      let qty = parseInt(e.target.value);

      setQuantity(qty);
    }
    const close=(e)=>{
        if(modalRef.current==e.target){
            oncloseModal();

        }
    }

    const handleBuyStock = async () => {
      let symbol = ""
      let data = {
          symbol: stock.T,
          quantity: quantity,
          totalValue: totalValue.toFixed(2)
      }
      setIsLoading(true)
      let res = await sellingStocksAction(data);
      if (res.status == 200) {
          
          let resL = await loadPortfolio();
          setIsLoading(false)
              toast.success(`Congratulations Sold ${symbol}`)
              
          
         

      }
      else {
        setIsLoading(false)
          toast.error("Error Occured");
         
          
      }
      oncloseModal();
      console.log(res)
  }

    let change = (stock?.c - stock?.o).toFixed(2);

    let percentageChange = ((change / stock?.o) * 100).toFixed(2);
    let canBuy=userSt.quantity-quantity>=0?true:false
    let gainL=(quantity*stock.c-userSt.avgBuyPrice*quantity).toFixed(2);
    let gainLp=(Math.abs(gainL)/userSt.avgBuyPrice*quantity)*100
  return (
    <> {isLoading&& <LoginLoading message={` Selling ${stock.T}!!`}/>}
    
    <div ref={modalRef} onClick={close} className="w-screen h-screen  backdrop-blur-xs place-content-center place-items-center absolute  inset-0 z-10 rounded">
        
        <div className="bg-white w-[40%] mb-20 shadow-2xl shadow-black">
                
                <div className="flex flex-col gap-5 w-full items-center p-3">
                    {/* stock name and symbol */}
                    <div className="flex justify-between rounded-2xl  bg-blue-100 w-full  p-3">

                        <div className=" flex gap-2 flex-col "><h1 className="font-extrabold text-2xl">{stock.T}</h1>  <p className="text-sm text-gray-700">Selling</p> <p className="text-xs text-gray-600">You Own {userSt.quantity} shares @{(userSt.avgBuyPrice)} avg</p></div>
                        <div className="flex gap-2 flex-col"> <h1 className="font-bold text-2xl">{stock.c}</h1> 
                        {change > 0 ? <p   ><span className="bg-black  px-5 rounded-3xl text-xs text-white font-semibold">{Math.abs(change)}$</span> <span className="text-green-500 font-semibold text-xs">+{percentageChange}%</span></p> : <p ><span className="bg-black font-semibold  px-5 rounded-3xl text-xs text-white">{Math.abs(change)}$</span> <span className="text-red-500 text-xs font-semibold">{percentageChange}%</span></p>}
                        </div>
                        
                        
                    </div>

                    {/* Order Type */}
                    <div className="w-full ">
                        <h2 className="text-xs font-bold">Order Type</h2>
                        <select className="bg-gray-100 w-full text-xs rounded-md p-2 " name="Otype" id="Otype"><option className="text-xs" value="Market Order">Market order</option></select>
                        <p className="text-xs text-gray-700 mt-2">Sell immediately at current market price </p>
                    </div>

                  {/* quantity of stock */}
                   <div className="w-full ">
                    <h1 className="text-xs font-bold">Quantity</h1>
                    <input className="bg-gray-100 w-full pl-2 rounded-md" type="number" min={1} value={quantity}  onChange={handleQuantity}  name="qty" id="qty" />
                    <p className="text-xs text-gray-700 ">available shares {userSt.quantity-quantity}</p>
                    </div> 
                  
                  {/* Full summary per share */}
                  <div className="bg-gray-200 rounded-lg p-3 w-full space-y-2.5">
                    <div className="text-xs font-semibold flex justify-between"><h1 className="text-gray-500">Price per share:</h1> <p>{stock.c}</p></div>
                    <div className="text-xs font-semibold  flex justify-between"><h1 className="text-gray-500">Quantity</h1> <p>{quantity}Shares</p></div>
                    <div className="text-xs font-semibold  flex justify-between"><h1 className="text-gray-500">Cost basis</h1> <p>{quantity*stock.c}</p></div>
                    <hr />
                    <div className="text-sm flex justify-between"><h1 className="font-bold ">Total Proceeds:</h1> <p className="font-bold">{quantity*stock.c}</p></div>
                    <div className="text-xs font-semibold  flex justify-between"><h1 className="text-gray-500 text-xs">gain/loss</h1>{gainL>0?<p className="text-green-500">+{gainLp}%</p>:<p className="text-red-400">{gainLp}%</p>} </div>
                  </div>
                  <p className="text-xs font-semibold py-1 px-2  w-full bg-gray-300 rounded-2xl ">Ater sales you will have {userSt.quantity-quantity}</p>
                  {/* actionbuttons */}
                  <div className="text-xs w-full flex justify-evenly gap-1">
                    <button onClick={()=>{oncloseModal()}} className="p-2 border-[1px] border-gray-400 rounded-lg  w-full">Cancel</button>
                    {canBuy?
                   
                    <button className="p-2  w-full bg-red-600 text-white rounded-lg font-semibold " onClick={handleBuyStock}>Sell {quantity} Shares</button>
                  : <button className="p-2  w-full bg-red-300 text-white rounded-lg font-semibold  " disabled>Sell {quantity} Shares</button>
                  }
                    
                  </div>
                  {!canBuy&& <p className="text-xs font-semibold py-1 px-2 bg-gray-200 rounded-2xl ">Dont'have enough shares</p>}
                </div>

            </div>
    </div>
    </>)
}