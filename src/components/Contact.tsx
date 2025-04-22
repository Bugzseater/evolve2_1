'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {

  useEffect(() => {
    gsap.fromTo(
      '.contact-title',
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
        },
      }
    )
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const name = (form.name as unknown as HTMLInputElement).value
    const email = (form.email as HTMLInputElement).value
    const message = (form.message as HTMLTextAreaElement).value

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxi7RQ3pjKyo2ioH0_SVkRasvLPL7EPpzlfxor7UFnx58TTtsnBy8yJKRYDBKEK5CJmtw/exec', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await response.json()
      if (result.status === 'success') {
        alert('Message sent successfully!')
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send the message. Please check your internet connection and try again.')
    }
  }

  return (
    <div className='p-1 flex flex-col mt-10'>
      <h1 className='text-white/80 contact-title text-[30px] md:text-[60px] ml-4 md:ml-10 text-center md:text-left mb-8'>Contact Us</h1>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 max-w-[600px] mx-auto bg-white/10 p-6 rounded-lg shadow-lg md:w-[80%]'>
        
        <div className='text-white/50 flex flex-col'>
          <label htmlFor="name" className='mb-2 text-lg font-semibold'>Name</label>
          <input type="text" id="name" name="name" required className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>

        <div className='text-white/50 flex flex-col'>
          <label htmlFor="email" className='mb-2 text-lg font-semibold'>Email</label>
          <input type="email" id="email" name="email" required className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>

        <div className='text-white/50 flex flex-col'>
          <label htmlFor="message" className='mb-2 text-lg font-semibold'>Message</label>
          <textarea id="message" name="message" required className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-[150px]'></textarea>
        </div>

        <button type="submit" className='bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300'>
          Send
        </button>
      </form>
    </div>
  )
}


export default Contact