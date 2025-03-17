import React from 'react'
import { Kite } from './Kite'

export const Product = () => {
  return (
    <div> 
      <div className='header text-center min-h-96 space-y-3.5 place-items-center place-content-center'>
          <h1 className='font-semibold text-4xl md:text-5xl'>EquiTrack Products</h1>
          <p className='text-xl'>Sleek, modern, and intuitive trading platforms</p>
          <p className='text-sm cursor-pointer text-gray-600'>Check out our investment offerings →</p>
      </div>
      <Kite/>
    </div>
  )
}
