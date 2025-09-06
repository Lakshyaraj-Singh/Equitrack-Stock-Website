import { useState } from "react";
import { watchlist } from "../../data/data"
import { Tooltip, Grow, Fade } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EjectIcon from '@mui/icons-material/Eject';
import CheckIcon from '@mui/icons-material/Check';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import DeleteIcon from '@mui/icons-material/Delete';
import { BuyBox } from "./UserOptionsOnDashboard/BuyBox";
import { SellBox } from "./UserOptionsOnDashboard/SellBox";
import { GraphBox } from "./UserOptionsOnDashboard/GraphBox";
import { StockBox } from "./UserOptionsOnDashboard/StockBox";
export const Watchlist = ({data}) => {
 const realStocks=data.data;
  let stockId;
  const [activeModal, setActiveModal] = useState(null);
  const [selectedStock, setStock] = useState(null);
  const [detail,setDetail]=useState({active:false,name:""})
  //ALL THE FUNCTIONS:::::
  const openModal = (stock, type) => {
    setActiveModal(type);
    setStock(stock);
  }
  const close = () => {
    setActiveModal(null);
    setStock(null);
  
  }
  return (
    <div>
      <div className="flex flex-col     bg-red-400">
        {realStocks.map((stock, idx) => {
          return (
            <WatchListItem stock={stock} key={idx} setDetail={setDetail} onClick={openModal} />
          )
        })}
      </div>
      {activeModal === "buy" && <BuyBox stock={selectedStock} oncloseModal={close} />}
      {activeModal === "sell" && <SellBox stock={selectedStock} oncloseModal={close} />}
      {activeModal === "graph" && <GraphBox stock={selectedStock} oncloseModal={close}/>}
      {detail.active&& <StockBox stock={detail.name} oncloseModal={()=>{setDetail({active:false,name:""})}}/>}
    </div>

)
}

const WatchListItem = ({ stock, onClick ,setDetail}) => {

  let [listActions, setShowListActions] = useState(false)
  let isDown=(stock.c-stock.o>0 ?false:true);
  const detailModalEnabler=async(Stname)=>{
    setDetail({active:true,name:Stname});
  }
  
  const handleEnter = () => {
    setShowListActions(true)
  }
  const handleLeave = () => {
    setShowListActions(false)
  }
  let change=((stock.c-stock.o)/stock.o).toFixed(2);
  let percentageChange=(((stock.c-stock.o)/stock.o)*100).toFixed(2);
  return (
    <>
      <div onClick={()=>detailModalEnabler(stock.T)} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="flex cursor-default justify-between border-[1px] p-4  bg-cyan-900 text-white items-center text-sm">
        <h2 className="font-medium">{stock.T}</h2>
        <div className="flex relative items-center cursor-default justify-between gap-5  text-left  w-fit">
          <p className="w-15">{stock.price}</p>

          {isDown ? <span className="bg-red-700  rotate-180"><EjectIcon style={{ width: "18px" }} /></span > : <span className="bg-green-500"><EjectIcon style={{ width: "18px" }} /></span>}
          <p className={isDown ? "text-red-600 w-10" : "text-green-400  w-10"}>{isDown ?`${percentageChange}%`:`+${percentageChange}%`}</p>

          {listActions && <HoverListAction stock={stock} uid={stock.name} onClick={onClick} />}
        </div>
      </div>
    </>
  )
}

const HoverListAction = ({ uid, stock, onClick }) => {
  const buy = () => {
    onClick(stock, "buy");
  }
  return (
    <>
      <div className="absolute transition-all   w-83 backdrop-blur-sm    p-2 -left-40">
        <span className="flex justify-center gap-5.5">
          <Tooltip
            title="Buy (B)"
            arrow
            placement="top"
            slots={{
              transition: Grow,
            }}
            slotProps={{
              transition: { timeout: 600 }
            }
            }
            onClick={buy}
            className="rounded bg-amber-50 cursor-pointer text-black  py-1 px-2"
          >

            <p >Buy</p>
          </Tooltip>



          <Tooltip
            title="Sell (S)"
            arrow
            placement="top"
            slots={{
              transition: Grow,
            }}
            slotProps={{
              transition: { timeout: 600 }
            }}
            className="bg-red-500 p-1  cursor-pointer  rounded "
          onClick={()=>onClick(stock,"sell")}
          >

            <AssignmentReturnedIcon style={{ width: "50px", height: "30px" }} />
          </Tooltip>

          <Tooltip
            title="Graph (G)"
            arrow
            placement="top"
            slots={{
              transition: Grow,
            }}
            slotProps={{
              transition: { timeout: 600 }

            }}
            
            className="bg-blue-700 rounded cursor-pointer text-2xl"
           onClick={()=>onClick(stock,"graph")}
         >
            <InsertChartIcon style={{ width: "40px", height: "30px" }} />

          </Tooltip>

          <Tooltip
            title="More"
            arrow
            placement="top"
            slots={{
              transition: Grow,
            }}
            slotProps={{
              transition: { timeout: 600 }
            }}
            className="cursor-pointer"
          >
            <MoreHorizIcon />

          </Tooltip>

        </span>

      </div>
    </>
  )
}