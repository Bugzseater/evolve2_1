'use client';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Page() {
  useEffect(() => {
    // GSAP Animations
    gsap.from('.page-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.content-section', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    gsap.from('.form-section', { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-4">
      <Navbar />
      <div className="flex flex-col items-center bg-[#080111] mt-8 p-4 text-center page-title">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Welcome to the School Page</h1>
        <p className="mt-4 text-sm md:text-base text-gray-300">
          This is a placeholder for school-related content.
        </p>
      </div>
      <div className="w-full max-w-6xl mt-10 p-4 bg-white/5 rounded-lg shadow-md form-section">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Registration</h1>
        <form name="School_Registration" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* School Information */}
          <div className="content-section">
            <h2 className="text-xl font-semibold mb-4">School Information</h2>
            <label htmlFor="schoolname" className="block text-sm font-medium text-gray-700">
              School Name
            </label>
            <input
              type="text"
              id="schoolname"
              name="school_name"
              placeholder="School Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="tutorname" className="block text-sm font-medium text-gray-700 mt-4">
              Tutor Name
            </label>
            <input
              type="text"
              id="tutorname"
              name="tutor_name"
              placeholder="Tutor Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="tcontact" className="block text-sm font-medium text-gray-700 mt-4">
              Tutor Contact Number
            </label>
            <input
              type="text"
              id="tcontact"
              name="tutor_contact"
              placeholder="EX: 07xxxxxxxx"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Leader Information */}
          <div className="content-section">
            <h2 className="text-xl font-semibold mb-4">Leader Information</h2>
            <label htmlFor="teamname" className="block text-sm font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="text"
              id="teamname"
              name="team_name"
              placeholder="Team Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="leadername" className="block text-sm font-medium text-gray-700 mt-4">
              Leader Name
            </label>
            <input
              type="text"
              id="leadername"
              name="leader_name"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="lcontact" className="block text-sm font-medium text-gray-700 mt-4">
              Leader Contact Number
            </label>
            <input
              type="text"
              id="lcontact"
              name="leader_contact"
              placeholder="EX: 07xxxxxxxx"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Members Information */}
          <div className="content-section">
            <h2 className="text-xl font-semibold mb-4">Members Information</h2>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="mt-4">
                <label
                  htmlFor={`member_${i + 2}_name`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Member {i + 2} Name
                </label>
                <input
                  type="text"
                  id={`member_${i + 2}_name`}
                  name={`member_${i + 2}_name`}
                  placeholder="Name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </form>
        <div id="msg" className="text-center text-red-500 mt-6"></div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Page;