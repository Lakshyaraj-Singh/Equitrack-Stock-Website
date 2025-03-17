import React from 'react'

export const Cardpeople = () => {
  return (
    <div className='flex justify-between  items-center place-content-center mb-19 flex-col md:flex-row text-white bg-gray-800 p-5  '>
      <div className='flex flex-col gap-3 md:w-1/2 items-center '>

      <img className='rounded-full w-50' src="\nithinKamath.jpg" alt="" />
      <h1 className='font-medium'>Nithin Kamath</h1>
      <p className='text-gray-400'>Founder,CEO</p>

      </div>
      <div className="md:w-1/2 leading-7 p-5">
      <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

Playing basketball is his zen.

Connect on Homepage / TradingQnA / Twitter</p>

      </div>
     </div>
  )
}
