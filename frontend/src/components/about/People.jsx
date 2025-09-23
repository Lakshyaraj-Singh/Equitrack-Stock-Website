import React from 'react'
import {Cardpeople} from './Cardpeople'
import { Fade, LeftReveal } from '../Framer'
export const People = () => {
  return (
    <div className='md:p-7 '>
      <Fade><h1 className='text-center font-semibold text-4xl p-15'>People</h1></Fade>
      <LeftReveal >

      <Cardpeople/>
      </LeftReveal>
      
       
         </div>
     
      
    
  )
}
