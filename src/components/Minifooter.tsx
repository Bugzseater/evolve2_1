'use client';
import React from 'react';
import Image from 'next/image'

function Minifooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-10 p-4 bg-[#010511] text-white">
      {/* Left Section: Logo */}
    <div className="mb-4 md:mb-0">
      <Image src="/Evolve2.0official6.png" alt="Logo" width={150} height={60} />
    </div>

      {/* Middle Section: Social Media Links */}
      <div className="flex gap-4 mb-4 md:mb-0">
        <a href="https://www.facebook.com/share/1CSdtnBZri/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
        <a href="https://www.instagram.com/evolve_bype?igsh=MTNqZG42ejd3ODkweQ==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
        <a href="https://www.linkedin.com/in/evolvebype?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Minifooter;