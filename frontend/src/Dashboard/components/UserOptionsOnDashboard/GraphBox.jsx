import { useEffect } from "react";
import { useRef } from "react";
export const GraphBox = ({stock,oncloseModal}) => {
    let modalRef=useRef();
    useEffect(() => {
      
        console.log(stock);
    
      
    }, []);
    const close=(e)=>{
        if(modalRef.current==e.target){
            oncloseModal();

        }
    }
    
  return (
    <div ref={modalRef} onClick={close} className="w-screen h-screen  backdrop-blur-xs place-content-center place-items-center absolute  inset-0 z-10 rounded">
        
        <div  className="bg-white w-[60%] mb-20">GRAPH 
            {/* symbol */}{stock.name}
        </div>
    </div>
  )
}