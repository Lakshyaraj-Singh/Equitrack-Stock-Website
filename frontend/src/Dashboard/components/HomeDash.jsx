import {Topboard} from "./Topboard"
import {Dashboard} from "./Dashboard"
import { Outlet } from "react-router-dom"
export const HomeDash = () => {
  return (
    <div>
     
      <Topboard/>
      
      <Outlet/>
    </div>
  )
}