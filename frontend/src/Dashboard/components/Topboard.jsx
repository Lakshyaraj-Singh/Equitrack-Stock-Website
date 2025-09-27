import { watchlist } from "../../data/data"
import { Menu } from "./Menu"

export const Topboard = () => {
    return (
        <div>
            <div className="flex pt-3 bg-sky-100 justify-between  ">
                 <div className="left w-3/7 z-1 shadow-[0.5px_0px_4px_rgba(0,0,0,0.1)]  shadow-sky-950  bg-accent-content text-white">
                 <div className="topl flex text-xs py-4 px-7 bg-amber-600 justify-evenly items-center">
                    <div className="w-fit flex space-x-3  ">
                        <p className="font-medium">S&P 500 </p>
                        
                    </div>
                    <div className=" flex space-x-3">
                        <p className="font-medium">NASDAQ</p>
                       
                    </div>
                </div>
                <div className="bottl flex items-center p-3 gap-4 ">
                    <label className="input w-full bg-transparent border-none outline-0">
                        <svg className="h-[1em]  opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow " placeholder="Search eg: Infy, BSE, NIFTY FUT Weekly, Gold MCX" />

                    </label>
                    <p className="text-sm text-gray-200">50</p>
                </div>
                 </div>
                 <div className="rightmenu w-2/3 ">
                  <Menu/>
                 </div>

            </div>

        </div>
    )
}