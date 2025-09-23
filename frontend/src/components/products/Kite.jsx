import React from 'react'

import {LeftSide}  from './LeftSide'
import {RightSide}  from './RightSide'
import { RevealFade,Fade, LeftReveal } from '../Framer'
export const Kite = () => {
  return (
    <div className='flex flex-col gap-50  md:gap-10 mb-7 p-10'>
      <Fade>

      <LeftSide imgs="./coin.png" para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." title="Track" anc="Try Now →"/>
      </Fade>
   <RevealFade duration={0.5}>
   <RightSide imgs="./console.png" para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." title="Console" anc="Learn more"/>
    </RevealFade> 
   <LeftReveal ><LeftSide imgs="./varsity.png" title="Varsity mobile" para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>
    </LeftReveal> 
    <hr />
    </div>

  )
}
