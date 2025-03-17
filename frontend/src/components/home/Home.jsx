import React from 'react'
import { HeroImg } from './HeroImg'
import { CallAction } from '../CallAction'
import{Trust} from './Trust'
import { Learn } from './Learn'
import { HeroLeft } from './HeroLeft'
import { Video } from './Video'
import {Footer} from '../Footer'
export const Home = () => {
  return (<>
    <div className='mt-20 '>
    <HeroImg/>
    <CallAction />
    <Trust/>
    <Learn/>
    <HeroLeft/>
    <Video/>
  
    </div>
  </>
  )
}
