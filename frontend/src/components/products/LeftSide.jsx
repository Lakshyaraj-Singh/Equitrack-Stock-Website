import React from 'react'

export const LeftSide = ({imgs,para,title,anc}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='md:w-2/3'>
      <img src={imgs}alt=""  className=''/>
      </div>
      <div className="md:w-7/12 space-y-7">
      <h1 className='font-medium text-4xl '>{title}</h1>
      <p>{para}</p>
      <a href="">{anc}</a>
      <div className="flex mt-4 gap-3 "><img className="cursor-pointer" src="googlePlayBadge.svg" alt="" /><img className="cursor-pointer" src="appstoreBadge.svg" alt="" /></div>
      </div>
    </div>
  )
}
