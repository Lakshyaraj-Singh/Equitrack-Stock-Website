import { motion,useInView, useAnimation, inView } from "motion/react"

import React, { useRef, useEffect } from 'react';
export const RevealFade = ({ children, delay = 0, duration = 0.6 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration, delay }
          }
        }}
      >
        {children}
      </motion.div>
    );
  };
export const Fade = ({ children, delay = 0, duration = 0.6 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0 , y:-10},
          visible: { 
            opacity: 1,
            y:0, 
            
            transition: { duration, delay }
          }
        }}
      >
        {children}
      </motion.div>
    );
  };


export const LeftReveal=({children,duration=0.5,delay=0})=>{
    const ref=useRef();
    let isInView=useInView(ref,{once:true});
    const controls=useAnimation();
    useEffect(() => {
      if(isInView){
        controls.start("visible");
      }
    
     
    }, [isInView,controls])
    return(
        <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
            hidden:{opacity:0, x:-200},
            visible:{opacity:1,x:0,
                transition:{duration,delay}
            }
            
        }}

        >
{children}
        </motion.div>
    )
}