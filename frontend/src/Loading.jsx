import { useEffect } from "react";
import {  UseAnimationFrame } from "./oadingAni";

export const LoginLoading=()=>{
    useEffect(() => {
        // Save current overflow style
        const originalOverflow = document.body.style.overflow;
        
        // Disable scrolling on body
        document.body.style.overflow = 'hidden';
        
        // Re-enable scrolling when component unmounts
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
          <div className="text-black font-mono">
           <UseAnimationFrame/>
            <h1>Logging in...</h1>
            <div className="text-sm font-bold">EquiTrack</div>
          </div>
        </div>
      );

}