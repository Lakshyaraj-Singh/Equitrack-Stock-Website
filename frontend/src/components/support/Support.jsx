export const Support = () => {
  return (
    <div className="mt-5 p-20  bg-accent-content w-full">
        <h1 className="  font-medium text-3xl mb-5 text-amber-300">Support Portal</h1>
        <div className="flex flex-col gap-15   md:flex-row">
         
        <div className="md:w-1/2 flex flex-col text-2xl gap-7">
             <p className="text-white" >Search for an answer or browse help topics to create a ticket</p>
             <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" className="grow" placeholder="Search" />
 
</label>
<div className="flex gap-3   flex-wrap  text-sm text-amber-400 "><a href="">Track account opening</a><a href=""></a>Track segment activation<a href="">Intraday margins</a><a href="">Kite user manual</a></div>
        </div>
        <div className="md:w-1/2 md:pl-10   text-white flex flex-col gap-15 md:gap-4">
         <h1 className="text-amber-300 font-medium place-self-center md:place-self-end text-3xl md:text-2xl">Track tickets</h1>
         <div className="space-y-3.5 ">
            <h2>Featured</h2>
            <div className="flex flex-col gap-3">
              
               <a href="">1. Revision in tick size for NSE derivatives and cash segment from April 15, 2025</a>
               <a href="">2. Surveillance measure on scrips - March 2025</a>
            </div>
         </div>
        </div>
           
        </div>
    </div>
  )
}