import React from 'react'
import { RevealFade } from '../Framer'

export const Learn = () => {
  return (
    <div className=' place-items-center mt-14 pt-10'>
     <h1 className='text-3xl text-center font-semibold mb-5'>Online Platform ,Multiple Choices !</h1>
     <p>We've got somethong for everyone</p>
     <div className=' font-medium mt-10 grid md:grid-cols-3 grid-cols-1  gap-10'>
        <RevealFade><div className='h-60  hover:shadow-lg hover: shadow-cyan-500/50 transition-all duration-200  w-80 rounded  bg-base-200 gap-3  flex flex-col justify-center items-center'><img src="\multi_funds_icon.png" alt="" srcset=""  style={{width:"40%"}}/><p>Mutual Funds</p></div></RevealFade>
        <RevealFade><div className='h-60  hover:shadow-lg hover: shadow-cyan-500/50  transition-all duration-200  w-80 rounded  bg-base-200 flex gap-3 flex-col justify-center items-center'><img src="/stocks_icon.webp" alt="" srcset="" style={{width:"40%"}} /><p>Stocks</p></div></RevealFade>
        <RevealFade><div className='h-60  hover:shadow-lg hover: shadow-cyan-500/50  transition-all duration-200  w-80 rounded  bg-base-200 flex gap-3 flex-col justify-center items-center'><img src="\currency_icon.webp" alt="" srcset=""  style={{width:"40%"}}/><p>Future & Options</p></div></RevealFade>
        <RevealFade><div className='h-60  hover:shadow-lg hover: shadow-cyan-500/50  transition-all duration-200  w-80 rounded  bg-base-200 flex gap-3 flex-col justify-center items-center'><img src="/future_opt_icon.webp" alt="" srcset="" style={{width:"40%"}} /><p>Commodities</p></div></RevealFade> 
        <RevealFade><div className='h-60  hover:shadow-lg hover: shadow-cyan-500/50   transition-all duration-200 w-80 rounded  bg-base-200 flex gap-3 flex-col justify-center items-center'><img src="\commody_icon.webp" alt="" srcset=""  style={{width:"40%"}}/><p>IPOs</p></div></RevealFade>
        <RevealFade><div className='h-60 hover:shadow-lg hover: shadow-cyan-500/50  transition-all duration-200  w-80 rounded bg-base-200  flex gap-3 flex-col justify-center items-center'><img src="\ipos_icon.webp" alt="" srcset="" style={{width:"40%"}} /><p>Currencies</p></div></RevealFade>
     </div>
     
    </div>
  
  )
} 
