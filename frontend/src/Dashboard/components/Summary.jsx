import { holdings } from "../../data/data"

export const Summary = () => {
  return (
    <div className="flex flex-col pl-5  h-full   bg-amber-50">
        <div className="h-3/5 place-content-center  border-b-[1px]">
            <h1 className="text-3xl">Hi ,User!!</h1>
        </div>
        <div className="h-4/5 border-b-[1px] place-content-center">
            <h1 className="text-3xl font-thin">Equity</h1>
            <div className="flex  gap-30 mt-5  ">
                <div className="flex flex-col justify-between border-r-1 pr-10 ">
                    <h1 className="text-3xl text-blue-900">3.74K</h1>
                    <p>Margin Available</p>
                 
                </div>
               
                <div className="text-gray-600 flex flex-col justify-between  items-left">
                    <p>Margin Used : <span className="font-medium text-black">0</span></p>
                    <p>Opening Balance: <span className="font-medium text-black">3.74K</span></p>
                </div>
            </div>
        </div>
        <div className="h-3/5 place-content-center  ">
            <h1 className="text-3xl font-thin">Holdings ({holdings.length})</h1>
        </div>
    </div>
  )
}