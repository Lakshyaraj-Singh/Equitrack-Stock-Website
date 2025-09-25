import {Topboard} from "./Topboard"
import {Dashboard} from "./Dashboard"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useTrading } from "../../ContextApi"
import { LoginLoading } from "../../Loading"
export const HomeDash = () => {
   let {setIsLoading,isLoading}=useTrading();
  return (
    <>{isLoading&& <LoginLoading message={` Wait Fetching Information!!`}/>}
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
 </> )
}