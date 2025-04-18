'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -400 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale:1, duration: 1, ease: 'power3.out', delay: 0.7 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='w-full p-2 mt-6 h-[90vh] flex flex-col md:flex-row gap-8'>
        <div ref={textRef} className='w-full md:w-[50%] p-2 flex flex-col items-center text-center md:text-left'>
            <span className='text-[60px] md:text-[150px] font-bold text-white/30'>EVOLVE</span><br></br>
            <span className='font-bold text-white/50 text-sm md:text-base'>
              Organized by Undergraduates of BSc. in Physics & Electronics degree program
            </span> <br></br>
            <span className='text-xs md:text-sm'>
              collaborate with Electronics Students Society
            </span>
            <div ref={buttonsRef} className='flex md:flex-row gap-5 mt-4'>
                <button className='bg-[#031753] p-2 rounded-md text-white'>About Event</button>
                <button className='border border-[#1b3c9c] p-2 rounded-md text-white'>Gallery</button>
            </div>
        </div>

        <div ref={imageRef} className='w-full md:w-[50%] flex justify-center'>
            <Image src="/roboimg.png" alt="Logo" width={300} height={300} className='md:w-auto md:h-auto'/>
        </div>
    </div>
  )
}

export default Hero