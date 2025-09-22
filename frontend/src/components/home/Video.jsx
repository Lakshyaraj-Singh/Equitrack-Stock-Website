import React from 'react'
import { CallAction } from '../CallAction'

export const Video = () => {
  return (
    <div className=' relative h-[700px] md:h-fit    place-items-center ' >
     <video className='object-cover  w-full h-full md:w-fit md:h-fit'  autoPlay muted loop style={{filter:"brightness(50%)" }} >
         <source src="src\assets\21117-315137086_small.mp4"  type="" />
       </video>
       <div className='absolute top-1/2  text-white  left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

       <CallAction/>
       </div>
       <div className='absolute h-fit md:h-30  md:w-full place-items-center pt-11  bottom-0 left-0 bg-white'>
        <img className='md:h-13  h-7' src="\pressLogos.png" alt="" />
       </div>
    </div>
  )
}
