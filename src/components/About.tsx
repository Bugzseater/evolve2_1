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
        ABOUT EVOLVE 24
      </h1>
      <div
        ref={contentRef}
        className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10'
      >
        <div ref={imageRef}>
          <Image
            src='/roboimg.png'
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
            The undergraduates of the Bachelor of Science in Physics and
            Electronics degree program in collaboration with the Electronics
            Students Society, Faculty of Science of University of Kelaniya, is
            organizing EVOLVE 24, a project aimed at introducing participants to
            the essence of research, problem-solving, and prototype development.
            The primary objective of this project is to foster a culture of
            innovation and problem solving among students at both school and
            university levels. This competition comprises of a school category
            called Evolve 24 Jr. The main aim of the school category is to
            provide a platform for school students to show their talents.
            Awareness sessions are held for both categories, which are led by
            industry experts, to refine their skills and add that extra sparkle
            to their projects helping them take a step towards becoming a
            professional or even an expert in the industry. The Evolve 24 is all
            about presenting opportunities to all talented students.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
