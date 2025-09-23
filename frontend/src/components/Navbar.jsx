import React from 'react'
import {Link} from "react-router"
import { Fade, RevealFade } from './Framer'
export const Navbar = () =>{
  const navlinks=( <>
    <li><Link to="/signup" >Signup </Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/product" >Products</Link></li>
       
          <li><Link to="/pricing" >Pricing</Link></li>
          <li><Link to="/support">Support</Link></li>
  </>)

  return (
    <div className="navbar relative  py-3 px-2 bg-base-100 shadow-sm">
    <div className="navbar-start">
        <Fade><Link to="/"><img className=' md:hidden w-56 absolute top-2' src="/equitrack-high-resolution-logo-transparent (1).png"  alt="equitrack" /></Link>  </Fade>  
      <div className="dropdown  ">
        

        <div tabIndex={0} role="button" className="btn ml-70 btn-ghost    lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-13 w-13 font-extrabold  " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm flex flex-row bg-sky-100 dropdown-content rounded-box z-1 mt-3 w-[400px] text-3xl p-2 shadow">
          {navlinks}
        </ul>
      </div>
<Fade duration={0.7}><Link to="/"><img className='hidden lg:block' src="/equitrack-high-resolution-logo-transparent (1).png" style={{width:"30%"}} alt="EquiTack" /></Link>
  </Fade>
    </div>
    <div className="navbar-end  md:justify-center hidden lg:flex">
      <ul className="menu space-x-4 font-medium text-[15px]  menu-horizontal px-1">
       {navlinks}
      </ul>
    </div>
   
  </div>
  )

}