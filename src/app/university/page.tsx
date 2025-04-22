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
    <div className="w-full flex flex-col items-center bg-[#080111]">
      <Navbar />
      <div className="flex flex-col items-center mt-8 p-4 text-center page-title">
        <h1 className="text-2xl md:text-4xl font-bold text-white/50">Welcome to the University Page</h1>
        <p className="mt-4 text-sm md:text-base text-white/50">
          This is a placeholder for university-related content.
        </p>
      </div>
      <div className="w-full max-w-6xl mt-10 p-6 bg-white/5 rounded-lg shadow-md form-section">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white/50">Registration</h1>
        <form name="University_Registration" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* University and Leader Information */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-white/50">University and Leader Information</h2>
              <label className="block text-sm font-medium text-white/50 mb-2" htmlFor="university_name">
                University Name
              </label>
              <input
                type="text"
                id="university_name"
                name="university_name"
                placeholder="University Name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="team_name">
                Team Name
              </label>
              <input
                type="text"
                id="team_name"
                name="team_name"
                placeholder="Team Name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="leader_name">
                Leader Name
              </label>
              <input
                type="text"
                id="leader_name"
                name="leader_name"
                placeholder="Name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="leader_st_no">
                Leaders Student No
              </label>
              <input
                type="text"
                id="leader_st_no"
                name="leader_st_no"
                placeholder="Student No"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="leader_contact">
                Leader Contact Number
              </label>
              <input
                type="text"
                id="leader_contact"
                name="leader_contact"
                placeholder="EX: 07xxxxxxxx"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Members Information */}
            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4 text-white/50">Members Information</h2>
              {[2, 3, 4, 5].map((member) => (
                <div key={member} className="mb-4">
                  <label
                    className="block text-sm font-medium text-white/50 mb-2"
                    htmlFor={`member_${member}_name`}
                  >
                    Member {member} Name
                  </label>
                  <input
                    type="text"
                    id={`member_${member}_name`}
                    name={`member_${member}_name`}
                    placeholder="Name"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label
                    className="block text-sm font-medium text-white/50 mt-4 mb-2"
                    htmlFor={`member_${member}_st_no`}
                  >
                    Member {member} Student No
                  </label>
                  <input
                    type="text"
                    id={`member_${member}_st_no`}
                    name={`member_${member}_st_no`}
                    placeholder="Student No"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div id="msg" className="text-center text-red-500"></div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;