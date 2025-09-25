import { useEffect } from "react";
import {  UseAnimationFrame } from "./oadingAni";


export const LoginLoading=({message})=>{
    useEffect(() => {
        
        const originalOverflow = document.body.style.overflow;
        
      
        document.body.style.overflow = 'hidden';
        
        
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }, []);

    return (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: "white",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          color: 'white',
          fontSize: '24px'
        }}>
          <div className="text-black  place-content-center place-items-center font-mono">
       <UseAnimationFrame/>
            <h1 className="mt-5">{message}...</h1>
        <img    className="mt-5 w-86" src="/equitrack-high-resolution-logo-transparent (1).png"  alt="" />
          </div>
        </div>
      );

}