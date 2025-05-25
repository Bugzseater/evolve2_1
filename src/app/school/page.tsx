'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { gsap } from 'gsap';
import Navbar from '@/components/Navbar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Price from '@/components/Price';
import Footer from '@/components/Footer';
import Minifooter from '@/components/Minifooter';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyWNmtZE-qf2YFCE-WSrs5y4zm1SE_BTE",
  authDomain: "registrations-7d122.firebaseapp.com",
  projectId: "registrations-7d122",
  storageBucket: "registrations-7d122.firebasestorage.app",
  messagingSenderId: "330137906625",
  appId: "1:330137906625:web:142aa4388df7e2c92a9340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Page() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [msg, setMsg] = useState('');

  useEffect(() => {
    gsap.from('.page-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.content-section', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    gsap.from('.form-section', { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Prepare members array if needed
      const members = Array.from({ length: 4 }, (_, i) => ({
        name: formData[`member_${i + 2}_name`] || '',
      }));
      const data = {
        school_name: formData.school_name || '',
        tutor_name: formData.tutor_name || '',
        tutor_contact: formData.tutor_contact || '',
        team_name: formData.team_name || '',
        leader_name: formData.leader_name || '',
        leader_contact: formData.leader_contact || '',
        members,
      };
      await addDoc(collection(db, 'schools'), data);
      setMsg('Registration successful!');
      (e.target as HTMLFormElement).reset();
      setFormData({});
    } catch (error) {
      let errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      if (
        errorMsg.includes('Missing or insufficient permissions') ||
        errorMsg.includes('permission-denied')
      ) {
        errorMsg = 'You do not have permission to write to the database. Please contact the site administrator.';
      }
      setMsg('Error: ' + errorMsg);
      alert('Error: ' + errorMsg);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#080111] min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-8 p-4 text-center page-title">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Welcome to School Registration</h1>
        <p className="mt-4 text-sm md:text-base text-gray-300">
          <a
            href="/Booklet_SC.pdf"
            download
            className="inline-block px-6 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 transition-all duration-200 glassmorphism"
          >
            Download Proposal
          </a>
        </p>
      </div>
      <div>
        <Price/>
      </div>
      <div className="w-full max-w-6xl mt-10 p-4 bg-white/5 rounded-lg shadow-md form-section">
        <h1 className="text-white/50 text-3xl md:text-4xl font-bold text-center mb-6">Registration</h1>
        <form
          name="School_Registration"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onSubmit={handleSubmit}
        >
          {/* School Information */}
          <div className="content-section">
            <h2 className="text-xl font-semibold mb-4 text-white">School Information</h2>
            <label className="block text-sm font-medium text-white/50">School Name</label>
            <input
              type="text"
              name="school_name"
              placeholder="School Name"
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
            />

            <label className="block text-sm font-medium text-white/50 mt-4">Tutor Name</label>
            <input
              type="text"
              name="tutor_name"
              placeholder="Tutor Name"
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
            />

            <label className="block text-sm font-medium text-white/50 mt-4">Tutor Contact Number</label>
            <input
              type="text"
              name="tutor_contact"
              placeholder="EX: 07xxxxxxxx"
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
            />
          </div>

          {/* Leader Information */}
          <div className="content-section">
            <h2 className="text-xl font-semibold mb-4 text-white">Leader Information</h2>
            <label className="block text-sm font-medium text-white/50">Team Name</label>
            <input
              type="text"
              name="team_name"
              placeholder="Team Name"
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
            />

            <label className="block text-sm font-medium text-white/50 mt-4">Leader Name</label>
            <input
              type="text"
              name="leader_name"
              placeholder="Name"
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
            />

            <label className="block text-sm font-medium text-white/50 mt-4">Leader Contact Number</label>
            <input
              type="text"
              name="leader_contact"
              placeholder="EX: 07xxxxxxxx"
              required
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
            />
          </div>

          {/* Members Information */}
          <div className="content-section">
            <h2 className="text-xl font-semibold mb-4 text-white">Members Information</h2>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="mt-4">
                <label className="block text-sm font-medium text-white/50">
                  Member {i + 2} Name
                </label>
                <input
                  type="text"
                  name={`member_${i + 2}_name`}
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/50 text-white"
                />
              </div>
            ))}
          </div>
          <div className="md:col-span-3 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
        <div id="msg" className="text-center text-red-500 mt-6">{msg}</div>
      </div>

      <Minifooter/>
    </div>
  );
}

export default Page;
