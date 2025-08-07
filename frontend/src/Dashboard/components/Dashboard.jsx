
import { Outlet } from "react-router-dom"
import { Watchlist } from "./Watchlist"


export const Dashboard = () => {
  return (
    <div className="flex justify-between bg-sky-100    h-[458px]">
        <div className="w-[499px] overflow-y-auto h-full bg-accent-content">
            <Watchlist/>
        </div>
        <div className="w-[61%]  h-[458px] ">

        <Outlet/>
        </div>
    </div>
  )
}