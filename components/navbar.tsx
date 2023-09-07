"use client";
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {
  const { userId } = useAuth();

  return (
  <nav className="top-0 flex items-center justify-between py-4 bg-gray-900 w-full px-4 border-b border-gray-800">
    <div className="text-3xl font-extrabold text-white tracking-wide">
      <Link href="/">
        <span>Moder.ai</span>
      </Link>
    </div>
    {!userId && (
      <div className="flex items-center space-x-6">
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
    )}

    {
      userId && (
      <>
            <div className="flex items-center space-x-6">

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
      
        <UserButton></UserButton>
      </div>
      
      </>
      )
    }
  </nav>
  
  );
};

export default Navbar;
