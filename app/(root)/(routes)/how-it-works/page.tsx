"use client";
import React from 'react';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image';

export default function HowItWorks() {
  const { userId } = useAuth();

  // If a user is logged in, you might want to redirect them to the dashboard or elsewhere as needed.
  // if (userId){
  //   return redirect('/dashboard');
  // }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 z-10">
          <p className="text-sm font-semibold text-gray-700">
            How it works 👋
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl z-10">
          Our AI transforms your approach to text processing
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg z-10">
          Submit any text to our API endpoint, and let our system do its magic. We use a GPT-4 powered AI model to ensure solid pattern detection in any situation.
        </p>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 px-6 lg:px-8 text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Our guarantees
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cutting-edge features that smarten your text processing tasks
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Real-time Analysis</h3>
              <p className="text-gray-600">Analyze texts on-the-fly with minimal delay and no rate limit, enhancing user experience</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">User Dashboard</h3>
              <p className="text-gray-600">Access insights, analytics, and feedback all in one centralized user dashboard</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Top-tier Security</h3>
              <p className="text-gray-600">We prioritize your data&apos;s safety. Rely on our robust security features to keep your information private.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 px-6 lg:px-8 text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              What our users say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <blockquote className="text-gray-600 italic">&quot;Using flagged.ai has drastically improved our moderation workflow. It&apos;s the best tool on the market!&quot;</blockquote>
              <cite className="mt-4 block font-bold">- Morad Abdouraguimov, Developer</cite>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <blockquote className="text-gray-600 italic">&quot; I was skeptical at first, but now I can&apos;t imagine our processes without flagged.ai. Highly recommended!&quot;</blockquote>
              <cite className="mt-4 block font-bold">- Jamie Mcfany, Product Manager</cite>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}
