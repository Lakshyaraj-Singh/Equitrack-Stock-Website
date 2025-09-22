import React from 'react'
import { HeroImg } from './HeroImg'
import { CallAction } from '../CallAction'
import{Trust} from './Trust'
import { Learn } from './Learn'
import { HeroLeft } from './HeroLeft'
import { Video } from './Video'
import {Footer} from '../Footer'
import { RevealFade } from '../Framer'
export const Home = () => {
  return (<>
    <div className='mt-20 '>
    <RevealFade duration={1.2}>

    <HeroImg/>
    
    <CallAction />
    </RevealFade>
    <RevealFade duration={1}><Trust/></RevealFade>
  
    <Learn/>
    
    <HeroLeft/>
    <Video/>
  
    </div>
  </>
  )
}
