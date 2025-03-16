import React from 'react'
import { HeroImg } from './HeroImg'
import { CallAction } from '../CallAction'
import{Trust} from './Trust'
export const Home = () => {
  return (<>
    <div className='mt-20  '>
    <HeroImg/>
    <CallAction />
    <Trust/>
    </div>
  </>
  )
}
