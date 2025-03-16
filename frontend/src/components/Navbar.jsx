import React from 'react'

export const Navbar = () => {

  const navlinks=( <>
    <li><a>Signup</a></li>
          <li><a>About</a></li>
          <li><a>Products</a></li>
      
          <li><a>Pricing</a></li>
          <li><a>Support</a></li>
  </>)

  return (
    <div className="navbar py-3 px-2 bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost   lg:hidden">
            <img src="/equitrack-high-resolution-logo-transparent (1).png"  alt="equitrack" />
        </div>
        <ul
          tabIndex={0}
          className="menu font-medium text-[15px]  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {navlinks}
        </ul>
      </div>
      <img className='hidden lg:block' src="/equitrack-high-resolution-logo-transparent (1).png" style={{width:"30%"}} alt="EquiTack" />
    </div>
    <div className="navbar-end  md:justify-center hidden lg:flex">
      <ul className="menu space-x-4 font-medium text-[15px]  menu-horizontal px-1">
       {navlinks}
      </ul>
    </div>
   
  </div>
  )
}
