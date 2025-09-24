"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export  const UseAnimationFrame=()=> {
    const ref = useRef(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
*/
function StyleSheet() {
    return (
        <style>{`
            .container {
                perspective: 600px;
                width: 120px;
                height: 120px;
            }

            .cube {
                width: 120px;
                height: 120px;
                position: relative;
                transform-style: preserve-3d;
            }

            .side {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: red;
                opacity: 0.6;
            }

            .front {
                transform: rotateY(0deg) translateZ(60px);
                background-color: #14b8a6;
            }
            .right {
                transform: rotateY(90deg) translateZ(60px);
                background-color: #059669;
            }
            .back {
                transform: rotateY(180deg) translateZ(60px);
                background-color: #10b981;
            }
            .left {
                transform: rotateY(-90deg) translateZ(60px);
                background-color: #1f2937;
            }
            .top {
                transform: rotateX(90deg) translateZ(60px);
                background-color: #6ee7b7;
            }
            .bottom {
                transform: rotateX(-90deg) translateZ(60px);
                background-color: #111827;
            }
        `}</style>
    )
}