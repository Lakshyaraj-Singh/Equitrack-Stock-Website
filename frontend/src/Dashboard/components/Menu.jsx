import { Link } from "react-router-dom"
import { logout } from "../../USERAPIS/Uapi"

export const Menu = () => {
    const navLinks=(<>
     <li><Link to="/dashboard" >Dashboard</Link></li>
     <li><Link to="/dashboard/orders" >Orders</Link></li>
     <li><Link to="/dashboard/holdings" >Holdings</Link></li>
     <li><Link to="/dashboard/positions" >Positions</Link></li>
     <li><Link to="/dashboard/funds" >Funds</Link></li>
     <li className="bg-red-500"><Link onClick={()=>{logout()}} >Logout</Link></li>
        
    </>)      
  return (
    <div className="">
        <div className="navbar h-25 mt-3 bg-base-100 shadow-sm border-b-1">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
    <img className='hidden lg:block' src="/equitrack-high-resolution-logo-transparent (1).png" style={{width:"55%"}} alt="EquiTack" />
  </div>
  <div className="navbar-end w-full hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      {navLinks}
    </ul>
  </div>

</div>
    </div>
  )
}