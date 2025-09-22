import React from 'react'
import { Fade, LeftReveal } from '../Framer'

export const HeroLeft = () => {
  return (
    <div className='px-15 mt-25 py-20 flex flex-col md:flex-row justify-center items-center '>
     <LeftReveal> <div className='left w-fit md:w-1/2 flex gap-5 flex-col'>
      
      <h1 className=' font-medium text-3xl'>Unbeatable pricing</h1>
      <p className='text-gray-500'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <a href="" className='text-blue-500'>See pricing</a>
       
      </div> </LeftReveal>
       <div className="right grid sm:grid-cols-2 gap-3 md:flex justify-evenly ">
        <Fade duration={1.3}><div className='bg-accent-content text-white text-sm rounded-md h-50 flex items-center justify-center flex-col  '><img src="/pricingEquity.svg" alt="" srcset=""  style={{width:"70%"}} /> <p>Free account openings</p>  </div></Fade>
        <Fade duration={1.3}><div className='bg-accent-content pb-4 text-center text-white text-sm rounded-md  h-50 flex items-center justify-center  flex-col  '><img src="/pricingEquity.svg" alt="" srcset=""  style={{width:"70%" ,marginTop:"15px"}} />  <p > Free equity delivery
        and direct mutual funds</p></div></Fade>
        <Fade duration={1.3}><div className='bg-accent-content text-center text-white text-sm rounded-md h-50 flex items-center justify-center flex-col  '><img src="/intradayTrades.svg" alt="" srcset="" style={{width:"70%"}}  /> <p> Intraday and
        F&O</p> </div></Fade>
        <div className='bg-accent-content md:hidden text-center text-white text-sm rounded-md h-50 flex items-center justify-center flex-col  '><img src="/pricing0.svg" alt="" srcset="" style={{width:"70%"}}  /> <p> AMC</p> </div>
       </div>
      </div>
      
  )
}
