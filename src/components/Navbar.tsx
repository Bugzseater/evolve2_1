'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="shadow-md w-full z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/logoh.png" alt="Logo" width={100} height={40} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-400 font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 font-medium text-gray-700 z-100">
          <Link href="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="block py-2" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
