import { CallAction } from "../CallAction"

export const Pricing = () => {
  return (
    <div className="w-full" >
        <div className="  pt-18 place-items-center text-white  min-h-96 bg-sky-900   ">
            <h1 className="mb-5 font-bold text-4xl" >Brokerage Charges</h1>
            <p className="text-2xl text-center font-medium">List of everything you may be charged at Upstox.</p>
        </div>
        <div className="flex mb-7 -mt-37 md:-mt-47 mx-auto  flex-col gap-20 justify-center items-center p-10 text-black bg-sky-100 md:w-[1100px] rounded-2xl">
            <div className="flex flex-col  md:flex-row justify-center  items-center gap-15 md:gap-5">
                <div className="flex    w-86 text-center flex-col text-xl md:text-sm  gap-3.5 pt-3  "><h1 className="font-bold text-7xl md:text-6xl ">&#8377;0</h1> <h3 className="font-semibold">AMC*</h3> <p>Account Maintenance Charges(No account maintenance charges for first year)</p></div>
                <div className="flex   w-86 text-center flex-col text-xl  md:text-sm  gap-3.5"><h1 className="font-bold text-7xl md:text-6xl">&#8377;0</h1> <h3 className="font-semibold">Brokerage*</h3> <p>On Mutual Funds and IPOs</p></div>
                <div className="flex   w-86 text-center flex-col text-xl  md:text-sm gap-3.5"><h1 className="font-bold text-7xl md:text-6xl">&#8377;20</h1> <h3 className="font-semibold">AMC*</h3> <p>Maximum brokerage per order</p></div>
            </div> 
            <div className="font-medium"><CallAction/></div>
            <div className="flex gap-3 "><img className="cursor-pointer" src="googlePlayBadge.svg" alt="" /><img className="cursor-pointer" src="appstoreBadge.svg" alt="" /></div>
        </div>
        <hr />

    </div>
    
  )
}