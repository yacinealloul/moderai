"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
//import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';

//import MobileNav from './MobileNav';

const Navbar = () => {
  const  {userId}  = useAuth();
  return (
<nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-500 bg-white/75 backdrop-blur-lg transition-all'>
  <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
  <Link href='/' className='flex z-40 items-center font-semibold'>
  <svg width="43" height="45" viewBox="0 0 86 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14.0348" y="16" width="67" height="65" rx="15" fill="black"/>
<path d="M76.0348 77L76.0348 21" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M19.0348 77L19.0348 21" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M75.0348 77L18.0348 77" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M17.7234 76.6522L5.00001 64.0349" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M5.03484 64L5.03484 6" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M60.0394 5.5L5.03029 5.5" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M11.0348 67L10.0348 21" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M61.0439 13L6.03484 13" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M75.6492 20.4934L61.0348 6" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M20.3516 21.8307L5.73855 7.33948" stroke="black" stroke-width="10" stroke-linecap="round"/>
<path d="M76.0348 21L19.0348 21" stroke="black" stroke-width="10" stroke-linecap="round"/>
<rect x="32.0348" y="37" width="20" height="20" rx="5" fill="white"/>
<rect x="45" y="70" width="25" height="20" rx="5" fill="white"/>
<rect x="65.0348" y="37" width="20" height="20" rx="5" fill="white"/>
</svg>

      <span className='mx-5 align-middle' style={{ alignSelf: 'center' }}>flagged.ai</span> {/* Updated this line */}
    </Link>

    <div className='hidden items-center space-x-4 sm:flex'>
      {!userId ? (
        <>
          <Link href='/how-it-works' passHref>
            <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              How it works
            </span>
          </Link>
          <Link href='/pricing' passHref>
            <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              Pricing
            </span>
          </Link>
          <Link href='/demo' passHref>
            <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              Demo
            </span>
          </Link>
          <Link href='/blog' passHref>
            <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              Blog
            </span>
          </Link>
          <Link href='/sign-in' passHref>
            <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              Sign in
            </span>
          </Link>
          <Link href='/start-for-free' passHref>
            <span className={buttonVariants({ size: 'sm' })}>
              Start for free
            </span>
          </Link>
        </>
      ) : (
        <>
<div className='flex'>
  <Link href='/dashboard' passHref>
    <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
      Dashboard
    </span>
  </Link>
  <Link href='/dashboard/documentation' passHref>
    <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
      Documentation
    </span>
  </Link>
  <Link href='/dashboard/support' passHref>
    <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
      Support
    </span>
  </Link>
  <div className='mr-8'>
  <UserButton  />
  </div>
  <Link href='/'>
  <></>
  </Link>
</div>

        </>
      )}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
