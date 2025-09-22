import { motion,useInView, useAnimation } from "motion/react"

import React, { useRef, useEffect } from 'react';
export const RevealFade = ({ children, delay = 0, duration = 0.6 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
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