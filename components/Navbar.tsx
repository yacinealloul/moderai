"use client";
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const { userId } = useAuth();
  const [isMenuOpen,setMenuOpen] = useState(false);
  return (
  <nav className="top-0 flex items-center justify-between py-4 bg-gray-900 w-full px-4 border-b border-gray-800">
  <div className="text-3xl flex items-center font-extrabold text-white tracking-wide">
    <Link href="/" className='inline-block flex items-center'>
      <svg width="43" height="45" viewBox="0 0 86 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14.0348" y="16" width="67" height="65" rx="15" fill="white"/>
<path d="M76.0348 77L76.0348 21" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M19.0348 77L19.0348 21" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M75.0348 77L18.0348 77" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M17.7234 76.6522L5.00001 64.0349" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M5.03484 64L5.03484 6" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M60.0394 5.5L5.03029 5.5" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M11.0348 67L10.0348 21" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M61.0439 13L6.03484 13" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M75.6492 20.4934L61.0348 6" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M20.3516 21.8307L5.73855 7.33948" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M76.0348 21L19.0348 21" stroke="white" stroke-width="10" stroke-linecap="round"/>
<rect x="32.0348" y="37" width="20" height="20" rx="5" fill="#141524"/>
<rect x="45" y="70" width="25" height="20" rx="5" fill="#141524"/>
<rect x="65.0348" y="37" width="20" height="20" rx="5" fill="#141524"/>
      </svg>
      <span className='mx-5'>moder.ai</span>
      </Link>
    </div>

    {!userId ? (
      <div className="relative md:flex md:items-center">
        {/* Hamburger Button visible only on mobile */}
        <button 
          onClick={() => setMenuOpen(!isMenuOpen)} 
          className="md:hidden px-3 py-2 border rounded text-white border-white"
        >
          ☰
        </button>

        {/* Navigation links for non-logged-in users */}
        <div className={`absolute top-full left-0 w-64 mt-2 flex flex-col space-y-4 bg-gray-900 text-white rounded-lg shadow-lg md:static md:flex-row md:space-x-6 md:w-auto md:space-y-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/how-it-works">
            <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
              How it works
            </span>
          </Link>
          <Link href="/pricing">
            <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
              Pricing
            </span>
          </Link>
          <Link href="/demo">
            <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
              Demo
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
              Blog
            </span>
          </Link>
          <Link href="/sign-in">
            <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150 font-semibold border border-white px-5 py-2 rounded">
              Sign in
            </span>
          </Link>
          <Link href="/start-for-free">
            <span className="text-white text-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 px-6 py-2 rounded-full shadow-md transition transform hover:scale-105">
              Start for free
            </span>
          </Link>
        </div>
      </div>
    ) : (
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/dashboard">
          <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
            Dashboard
          </span>
        </Link>
        <Link href="/dashboard/documentation">
          <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
            Documentation
          </span>
        </Link>
        <Link href="/dashboard/support">
          <span className="text-lg text-white hover:text-gray-400 transition ease-in-out duration-150">
            Support
          </span>
        </Link>
        {/* You can use the UserButton here if it's a component */}
        <UserButton />
      </div>
    )}


  </nav>
  
  );
};

export default Navbar;
