import React from 'react'
import { useNavigate } from 'react-router-dom';
export const CallAction = () => {
let navigate=useNavigate()
  return (
    <div className='flex flex-col  max-w-screen text-center items-center gap-7'>
    <h1 className='font-bold md:text-6xl text-3xl'>Invest in everything</h1>
    <p className='md:text-xl'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button onClick={()=>navigate("/signup")}  className='bg-sky-600 hover:bg-sky-700 hover:shadow hover:shadow-blue-300 transition-all duration-150 text-white py-3 rounded font-bold text-xl w-56 '>Sign up for free</button>
  </div>
  )
}
