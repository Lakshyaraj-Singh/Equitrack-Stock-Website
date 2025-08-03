import { useState } from "react";
import { watchlist } from "../src/data/data"
import { Tooltip,Grow,Fade } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EjectIcon from '@mui/icons-material/Eject';
import CheckIcon from '@mui/icons-material/Check';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import DeleteIcon from '@mui/icons-material/Delete';
export const Watchlist = () => {
  return (
    <div>
      <div className="flex flex-col     bg-red-400">
           {watchlist.map((stock,idx)=>{
             return (
               <WatchListItem stock={stock} key={idx}/>
           )
           })}
      </div>
    </div>
  )
}

const WatchListItem=({stock})=>{
    let [listActions,setShowListActions]=useState(false)

    const handleEnter=()=>{
      setShowListActions(true)
    }
    const handleLeave=()=>{
      setShowListActions(false)
    }
     return(
      <>
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="flex cursor-default justify-between border-[1px] p-4  bg-cyan-900 text-white items-center text-sm">
          <h2 className="font-medium">{stock.name}</h2>
          <div className="flex relative items-center cursor-default justify-between gap-5  text-left  w-fit">
            <p className="w-15">{stock.price}</p>
            
            {stock.isDown?<span className="bg-red-700  rotate-180"><EjectIcon style={{width:"18px"}}/></span >:<span className="bg-green-500"><EjectIcon style={{width:"18px"}}/></span>}
            <p className={stock.isDown?"text-red-600 w-10":"text-green-400  w-10"}>{stock.percent}</p>
          
        {listActions && <HoverListAction uid={stock.name}/> }
          </div>
      </div>
      </>
     )
}

const HoverListAction=({uid})=>{
    return(
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
          transition:{timeout:600}
        }}
        className="rounded bg-amber-50 cursor-pointer text-black  py-1 px-2"
        >
     
          <p>Buy</p>
        </Tooltip>
       


        <Tooltip
        title="Sell (S)"
        arrow
        placement="top"
        slots={{
          transition: Grow,
        }}
        slotProps={{
          transition:{timeout:600}
        }}
        className="bg-red-500 p-1  cursor-pointer  rounded "
        >
         
        <AssignmentReturnedIcon style={{width:"50px" ,height:"30px"}} />
        </Tooltip>

        <Tooltip
        title="Graph (G)"
        arrow
        placement="top"
        slots={{
          transition: Grow,
        }}
        slotProps={{
          transition:{timeout:600}

        }}
        className="bg-blue-700 rounded cursor-pointer text-2xl"
        >
         <InsertChartIcon style={{width:"40px" ,height:"30px"}}/>

        </Tooltip>

        <Tooltip
        title="More"
        arrow
        placement="top"
        slots={{
          transition: Grow,
        }}
        slotProps={{
          transition:{timeout:600}
        }}
        className="cursor-pointer"
        >
        <MoreHorizIcon/>

        </Tooltip>

         </span>
        
      </div>
      </>
    )
}