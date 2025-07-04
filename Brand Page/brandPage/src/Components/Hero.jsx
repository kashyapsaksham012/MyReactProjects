import React from 'react'
import { motion } from "motion/react"
import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"
 
const Hero = () => {
  return (
    <div>
      
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        

        <div className="hero-btn">
            <button>Shop Now</button>
            <button className='secondary'>Cateogry</button>
        </div>

        <div className="shopping">
            <p>Also Available on</p>
            <div className="brand-icons">
                <img src="/Images/flipkart.png" alt="flipkart" />
                <img src="/Images/amazon.png" alt="amazon" />
            </div>
            </div>
        </div>

         <LazyMotion features={domAnimation}>
      <m.div
        className="hero-image"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: [0, -5, 5, 0], // nice tilt swing
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          rotate: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <img src="/Images/shoe_image.png" alt="shoe_image" />
      </m.div>
    </LazyMotion>

    </main>

    </div>
  )
}

export default Hero
