import { Route, Routes } from "react-router-dom"
import { Watchlist } from "./Watchlist"
import { Summary } from "./Summary"
import { Orders } from "./Orders"
import { Holdings } from "./Holdings"
import { Positions } from "./Positions"
import { Funds } from "./Funds"
import { Apps } from "./Apps"

export const Dashboard = () => {
  return (
    <div className="flex justify-between bg-sky-100    h-[458px]">
        <div className="w-[499px] overflow-y-auto h-full bg-accent-content">
            <Watchlist/>
        </div>
        <div className="w-[61%]  h-[458px] ">

        <Routes>
            <Route path="/" element={<Summary/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/holdings" element={<Holdings/>}/>
            <Route path="/positions" element={<Positions/>}/>
            <Route path="/funds" element={<Funds/>}/>
            
        </Routes>
        </div>
    </div>
  )
}