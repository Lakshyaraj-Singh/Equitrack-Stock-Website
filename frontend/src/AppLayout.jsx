import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import toast, { Toaster } from 'react-hot-toast';
import { LeftReveal,Fade } from "./components/Framer";
import { useEffect, useState } from "react";
import { LoginLoading } from "./Loading";

export const AppLayout = () => {
  let [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return (<>
  {isLoading&& <LoginLoading message={"Welcome"}></LoginLoading>}
    <div>
      <Toaster position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default" />
      <Navbar />
      <Outlet />

      <Fade duration={1.2}><Footer /></Fade>
    </div>
    </>)
}