// pages/index.tsx
"use client";
import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'


import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'




export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const {userId} = useAuth();


  const handleTest = () => {
    setResponse(`Your simulated response based on: ${input}`);
  };

  return (
    <div>
        {/*
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased">
    
      <Hero />
      <Playground />
      <Features />
      <Ressources /> 
      <Footer />

    
    </div>
      */}
    <div className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            flagged.ai is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Moderate your{' '}
          <span className='text-blue-600'>message</span>{' '}
          in seconds.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          flagged.ai allows you to have a view with any
          type of message. Simply send a request to our service and get an answer.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </div>

      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-1 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src={'/image.png'}
                    alt='product preview'
                    width={1080}
                    height={720}
                    quality={100}
                    className='rounded-md bg-transparent p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Automatize your moderation now
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Analyze words has never been
              easier than with Flagged.ai.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Either starting out with a free plan or
                choose one of our{' '}
                <Link
                  href='/pricing'
                  className='text-blue-700 underline underline-offset-2'>
                  plan
                </Link>
                .
              </span>
            </div>
          </li>

          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Send your first request
              </span>
              <span className='mt-2 text-zinc-700'>
                It&apos;s that simple. Try out Flagged.ai today -
                it really takes less than a second.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/image2.png'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
        <br />
        <section className="bg-zinc-100 py-8 px-4 rounded-xl">
        <div className="container mx-auto rounded-xl">
            <h2 className="text-2xl font-semibold text-center text-zinc-800 mb-6">What Our Users Say</h2>
            <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="md:flex-1 mb-6 md:mb-0">
                    <div className="p-4 border border-zinc-300 rounded-lg">
                        <p className="text-zinc-700 italic">"Using flagged.ai to moderate my chat has helped a lot to manage my community. The accuracy and efficiency are unmatched."</p>
                        <div className="mt-4">
                            <span className="font-medium text-zinc-800">Judith Doe</span>
                            <span className="text-sm text-zinc-600"> - Streamer</span>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1">
                    <div className="p-4 border border-zinc-300 rounded-lg">
                        <p className="text-zinc-700 italic">"I was skeptical at first, but flagged.ai proved to be a game-changer for my business. Highly recommend!"</p>
                        <div className="mt-4">
                            <span className="font-medium text-zinc-800">Harry Penguin</span>
                            <span className="text-sm text-zinc-600"> - Indie Hacker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <footer className='bg-current/10 py-6 mt-8'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                    <span className='text-xl font-semibold'>TrueLabs AI LLC</span>
                </div>
                <div className='flex space-x-4'>
                    <a href='/about' className='text-blue-400 hover:text-blue-300'>About Us</a>
                    <a href='/contact' className='text-blue-400 hover:text-blue-300'>Contact</a>
                    <a href='/terms' className='text-blue-400 hover:text-blue-300'>Terms of Service</a>
                    <a href='/privacy' className='text-blue-400 hover:text-blue-300'>Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>

      </div>
    
    </div>
    );
    
    

}
