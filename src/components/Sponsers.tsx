'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Sponsers() {
  useEffect(() => {
    // Scroll animation for the h1 element
    gsap.fromTo(
      '.sponsers-title',
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.sponsers-title',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    )

    // Scroll animation for the cards
    gsap.utils.toArray('.sponser-card').forEach((card, index) => {
      gsap.fromTo(
        card as HTMLElement,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: 'top 60%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    })
  }, [])

  return (
    <div className='p-4 flex flex-col mt-10'>
        <h1 className=' text-white/80 sponsers-title text-[30px] md:text-[60px] ml-4 md:ml-10 text-center md:text-left'>Sponsers</h1>
        <div className='flex flex-wrap justify-center gap-4'>
            {/* Modernized card design */}
            <div className='text-white/50 sponser-card flex gap-5 items-center justify-center sm:w-[22%] w-[100%] p-4 bg-white/10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image src="/codegen.png" alt="CodeGen" width={100} height={100} className='rounded-full' />
                <div className='flex flex-col justify-center items-start'>
                    <h3 className='text-lg font-semibold'>Golden Sponser</h3>
                    <h4 className='text-md text-gray-400'>CodeGen</h4>
                </div>
            </div>

            <div className='text-white/50 sponser-card flex gap-5 items-center justify-center sm:w-[22%] w-[100%] p-4 bg-white/10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className=' flex flex-col justify-center items-start'>
                    <h3 className='text-lg font-semibold'>DIGITAL MEDIA</h3>
                    <h4 className='text-md text-gray-400'>HackSL</h4>
                </div>
                <Image src="/hacksl.png" alt="CodeGen" width={100} height={100} className='rounded-full' />
            </div>

            <div className='text-white/50 sponser-card flex gap-5 items-center justify-center sm:w-[22%] w-[100%] p-4 bg-white/10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image src="/ceremoney.png" alt="CodeGen" width={100} height={100} className='rounded-full' />
                <div className=' flex flex-col justify-center items-start'>
                    <h3 className='text-lg font-semibold'>PHOTOGRAPHY</h3>
                    <h4 className='text-md text-gray-400'>Ceremony.LK</h4>
                </div>
            </div>

            <div className='text-white/50 sponser-card flex gap-5 items-center justify-center sm:w-[22%] w-[100%] p-4 bg-white/10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                
                <div className=' flex flex-col justify-center items-start'>
                    <h3 className='text-lg font-semibold'>DIGITAL MEDIA</h3>
                    <h4 className='text-md text-gray-400'>ICT අපි</h4>
                </div>
                <Image src="/ict.png" alt="CodeGen" width={100} height={100} className='rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Sponsers