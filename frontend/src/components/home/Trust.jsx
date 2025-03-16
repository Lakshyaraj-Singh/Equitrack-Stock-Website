import React from 'react'

export const Trust = () => {
  return (
    <div className='mt-30 max-w-screen   flex flex-col md:flex-row items-center  h-fit  '>
      <div className="left md:w-1/2 w-fit text-left pl-5 md:pl-14 bg-accent-content py-5  text-white flex flex-col gap-10">
        <h1 className='font-medium text-3xl  md:text-4xl'>Trust with confidence</h1>
         <div>
             <h2 className='font-bold  text-[20px]  mb-3'>Customer-first always</h2>
             <p>That's why 1.5+ crore customers trust Equitrack with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
         </div>
         <div>
             <h2 className='font-bold text-[20px] mb-3'>No spam or gimmicks</h2>
             <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
         </div>
         <div>
             <h2 className='font-bold text-[20px] mb-3'>The EquiTrack universe</h2>
             <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
         </div>
         <div>
             <h2 className='font-bold mb-3 text-[20px]'>Do better with money</h2>
             <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
         </div>
         
      </div>
      <div className="right md:pl-10 w-fit md:w-2/3"><img src="/ecosystem.png" alt="ecosystem"  /></div>
    </div>
  )
}
