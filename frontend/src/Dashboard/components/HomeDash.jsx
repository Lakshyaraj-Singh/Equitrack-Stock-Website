import {Topboard} from "./Topboard"
import {Dashboard} from "./Dashboard"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
export const HomeDash = () => {
  return (
    <div>
     <Toaster position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
         />
      <Topboard/>
      
      <Outlet/>
    </div>
  )
}