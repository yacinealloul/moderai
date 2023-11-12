"use client";

import React,{useEffect,useState} from 'react';
import MobileNav from './MobileNavbar';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
//import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';

//import MobileNav from './MobileNav';

const Navbar = () => {
  const  {userId}  = useAuth();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    // Initial check
    checkMobile();

    // Add a resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return <MobileNav userId={userId} />;
  }
  return (
<nav className='sticky h-14 inset-x-0 top- z-30 w-full border-b border-gray-500 bg-white/75 backdrop-blur-lg transition-all'>
  <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
  <Link href='/' className='flex z-40 items-center font-extrabold'>


      <h1 className='text-xl mx-10'>flagged.ai</h1> 
    </Link>

    <div className='hidden items-center space-x-4 sm:flex'>
      {!userId ? (
        <>
 

  

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

  <Link href='/pricing' passHref>
            <span className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
              Pricing
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
