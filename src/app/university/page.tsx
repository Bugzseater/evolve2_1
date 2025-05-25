'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { gsap } from 'gsap';
import { db } from '@/firebase'; // Make sure firebase.js is configured properly
import { collection, addDoc } from 'firebase/firestore';
import PriceUC from '@/components/PriceUC';
import Minifooter from '@/components/Minifooter';

function Page() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    gsap.from('.page-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.content-section', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    gsap.from('.form-section', { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      university_name: form.university_name.value,
      team_name: form.team_name.value,
      leader_name: form.leader_name.value,
      leader_st_no: form.leader_st_no.value,
      leader_contact: form.leader_contact.value,
      members: [2, 3, 4, 5].map((m) => ({
        name: form[`member_${m}_name`].value,
        student_no: form[`member_${m}_st_no`].value,
      })),
    };

    try {
      await addDoc(collection(db, 'university_registrations'), data);
      setMsg('✅ Registration Successful!');
      form.reset();
    } catch (err) {
      setMsg('❌ Something went wrong. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#080111] min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-8 p-4 text-center page-title">
        <h1 className="text-2xl md:text-4xl font-bold text-white/50">Welcome to the University Registration</h1>
                <p className="mt-4 text-sm md:text-base text-gray-300">
          <a
            href="/Booklet_UC.pdf"
            download
            className="inline-block px-6 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-200 glassmorphism"
          >
            Download Proposal
          </a>
        </p>
      </div>
      <div>
        <PriceUC/>
      </div>

      <div className="w-full max-w-6xl mt-10 p-6 bg-white/5 rounded-lg shadow-md form-section">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white/50">Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-white/50">University and Leader Information</h2>
              <label className="block text-sm font-medium text-white/50 mb-2" htmlFor="university_name">University Name</label>
              <input type="text" id="university_name" name="university_name" required className="w-full p-2 border border-gray-300 rounded-md text-white" />
              
              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="team_name">Team Name</label>
              <input type="text" id="team_name" name="team_name" required className="w-full p-2 border border-gray-300 rounded-md text-white" />

              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="leader_name">Leader Name</label>
              <input type="text" id="leader_name" name="leader_name" required className="w-full p-2 border border-gray-300 rounded-md text-white" />

              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="leader_st_no">Leader Student No</label>
              <input type="text" id="leader_st_no" name="leader_st_no" required className="w-full p-2 border border-gray-300 rounded-md text-white" />

              <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor="leader_contact">Leader Contact Number</label>
              <input type="text" id="leader_contact" name="leader_contact" required className="w-full p-2 border border-gray-300 rounded-md text-white" />
            </div>

            <div className="col-span-1">
              <h2 className="text-xl font-semibold mb-4 text-white/50">Members Information</h2>
              {[2, 3, 4, 5].map((m) => (
                <div key={m} className="mb-4">
                  <label className="block text-sm font-medium text-white/50 mb-2" htmlFor={`member_${m}_name`}>Member {m} Name</label>
                  <input type="text" id={`member_${m}_name`} name={`member_${m}_name`}  className="w-full p-2 border border-gray-300 rounded-md text-white" />
                  
                  <label className="block text-sm font-medium text-white/50 mt-4 mb-2" htmlFor={`member_${m}_st_no`}>Member {m} Student No</label>
                  <input type="text" id={`member_${m}_st_no`} name={`member_${m}_st_no`} className="w-full p-2 border border-gray-300 rounded-md text-white" />
                </div>
              ))}
            </div>
          </div>
          <div id="msg" className="text-center text-white font-medium">{msg}</div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Submit</button>
        </form>
      </div>
      <Minifooter/>
    </div>
  );
}

export default Page;
