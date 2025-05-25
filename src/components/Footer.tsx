'use client';
import React from 'react';
import Link  from 'next/link';

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-[#010511] text-white">
      {/* Left Section: Logo */}
      <div className="mb-4 md:mb-0">
        <img src="/Evolve2.0official6.png" alt="Logo" className="h-10" />
      </div>

      {/* Middle Section: Social Media Links */}
      <div className="flex gap-4 mb-4 md:mb-0">
        <a href="https://www.facebook.com/share/1CSdtnBZri/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
        <a href="https://www.instagram.com/evolve_bype?igsh=MTNqZG42ejd3ODkweQ==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
        <a href="https://www.linkedin.com/in/evolvebype?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">LinkedIn</a>
      </div>

      {/* Right Section: Navigation Bar */}
      <nav className="flex md:flex-row gap-4">
        <Link href="/school" className="text-gray-300 hover:underline">School</Link>
        <Link href="/university" className="text-gray-400 hover:underline">University</Link>
        <Link href="/" className="text-gray-500 hover:underline">Gallery</Link>
      </nav>
    </footer>
  );
}

export default Footer;