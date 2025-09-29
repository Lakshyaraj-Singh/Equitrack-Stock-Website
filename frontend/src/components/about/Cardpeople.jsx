import React from 'react'
import { RevealFade } from '../Framer'

export const Cardpeople = () => {
  return (
    <div className='flex justify-between  items-center place-content-center mb-19 flex-col md:flex-row text-white bg-gray-800 p-5  '>
      <div className='flex flex-col gap-3 md:w-1/2 items-center '>

     <img className='rounded-full w-55 h-55 brightness-93' src="\ata1685939522265.jpg" alt="" />
      <h1 className='font-medium'>Lakshyaraj Singh Ranawat</h1>
      <p className='text-gray-400'>MERN Developer</p>
      

      </div>
      <div className="md:w-1/2 leading-7 p-5">
      <p>
        Lakshyaraj bootstrapped and built EquiTrack during his third year of B.Tech CSE at VIT Bhopal to overcome the hurdles he faced as an aspiring developer and markets enthusiast. Today, the project brings a clean, fast experience for tracking portfolios — watchlists, holdings, orders, positions, funds — along with an intuitive summary and interactive charts.

        He runs a YouTube channel to share motivation and learning. Obsessed with clarity and execution, he learns fast and ships useful tools regularly.

        Tech used: React (Vite), React Router, Tailwind/MUI, Framer Motion, Axios, Highcharts, Node.js, Express, MongoDB, JWT.
      </p>

      </div>
     </div>
  )
}
