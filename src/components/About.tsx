'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const paragraphRef = useRef(null)

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    })

    gsap.from(imageRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    })

    gsap.from(contentRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    })

    gsap.to(paragraphRef.current, {
      keyframes: {
        borderColor: ['#2f2a75', '#ffcc00', '#2f2a75'],
      },
      duration: 2,
      repeat: -1,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <div className='p-4 flex flex-col mt-5'>
      <h1
        ref={headingRef}
        className=' text-white/80 text-[30px] md:text-[40px] ml-4 md:ml-10 text-center md:text-left'
      >
        ABOUT EVOLVE 2.0
      </h1>
      <div
        ref={contentRef}
        className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10'
      >
        <div ref={imageRef}>
          <Image
            src='/twobg.png'
            alt='Logo'
            width={300}
            height={300}
            className='w-[200px] h-[200px] md:w-auto md:h-auto'
          />
        </div>
        <div
          ref={paragraphRef}
          className='w-full md:w-[60%] flex p-4 md:p-5 border ml-0 md:ml-10 text-sm md:text-base'
        >
          <p className='text-white/50 text-justify'>
            Last year marked the successful completion of Evolve 1.0, which included a hackathon competition and awareness sessions conducted at both school and university levels. Building upon that foundation, this year Evolve 2.0 will feature a range of exciting activities as previously showcased.Organized by the undergraduates of the Bachelor of Science in Physics and Electronics degree program at the Faculty of Science, University of Kelaniya, "EVOLVE 2.0" is a project designed to immerse participants in the core aspects of research, problem-solving, and prototype development.
            The key goal of this initiative is to nurture a culture of innovation and critical thinking among students from both schools and universities. As part of the hackathon, a school level category named "Evolve 2.0 Jr." has been introduced. This category aims to give school students a platform to showcase their talents and will be conducted in two phases.<br/><br/>
            All participants, regardless of category, will have the opportunity to attend an awareness session led by industry professionals. These sessions are intended to enhance the students abilities and provide valuable guidance to elevate their projects, giving them a stepping stone toward becoming professionals or even experts in their fields.
            Evolve 2.0 is committed to offering opportunities for all capable students. Therefore, a focused awareness program is being conducted to help students sharpen their skills and better support their innovative projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
