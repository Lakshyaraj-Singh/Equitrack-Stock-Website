import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import toast, { Toaster } from 'react-hot-toast';
import { LeftReveal,Fade } from "./components/Framer";

export const AppLayout = () => {
  return (
    <div>
      <Toaster position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default" />
      <Navbar />
      <Outlet />

      <Fade duration={1}><Footer /></Fade>
    </div>
  )
}