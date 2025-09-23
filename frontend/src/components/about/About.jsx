import React from 'react'
import {People} from './People'
import { Fade, RevealFade } from '../Framer'
export const About = () => {
    return (
        <div>
            
            <div className='h-56 place-items-center place-content-center md:w-2/3 m-auto'>
           <RevealFade duration={1}>

            <h1 className='text-accent-content font-semibold text-center text-xl  md:text-3xl'>We pioneered the discount broking model in India.
                Now, we are breaking ground with our technology.</h1>
           </RevealFade>
            </div>
            <Fade duration={1.2}>
                  <div className='flex md:m-5 p-7 md:p-15 justify-between '>
                <div className="w-1/2 px-4 flex flex-col bg-amber-600 gap-7 leading-6">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="w-1/2  place-items-start px-4 bg-amber-100 flex flex-col gap-7 leading-6">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                   <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p> 
                </div>

            </div>
            </Fade>
          
              <People/>
        </div>
    )
}
