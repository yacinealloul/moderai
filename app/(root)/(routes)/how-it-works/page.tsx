"use client";
import React from 'react';
import { useAuth } from '@clerk/nextjs';

export default function HowItWorks() {
  const { userId } = useAuth();

  // If a user is logged in, you might want to redirect them to the dashboard or elsewhere as needed.
  // if (userId){
  //   return redirect('/dashboard');
  // }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white relative pt-20 pb-32">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl font-extrabold leading-tight mb-4 drop-shadow-xl">
          Here&apos;s how it works 👋
          </h1>
          <p className="mb-8 text-xl max-w-2xl mx-auto">Learn how moder.ai can transform your approach to text processing.
.</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-10 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                {/* Add icons or images for each step */}
                Icon/Image
              </div>
              <h3 className="text-3xl font-bold mb-4">1. Input</h3>
              <p>Submit your text to our API endpoint, and let our system do its magic.</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                Icon/Image
              </div>
              <h3 className="text-3xl font-bold mb-4">2. Analysis</h3>
              <p>Our GPT-4 backed AI system analyzes text content in real-time.</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                Icon/Image
              </div>
              <h3 className="text-3xl font-bold mb-4">3. Results</h3>
              <p>Receive detailed results within milliseconds..</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-10 text-center">Why use moder.ai ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">🔍 Accuracy</h3>
              <p>Our AI-supervised algorithms are prepared with vast multilingual datasets, ensuring 100% accurate results.</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">💨 Speed</h3>
              <p>Receive results within milliseconds, making it efficient for any workflow.</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">🚀 Scalability</h3>
              <p>Our customisable system scales with your needs. It has no rate limit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10">Ready to take that leap ?</h2>
          <a href="/signup" className="inline-block bg-white hover:bg-gray-200 text-blue-900 rounded-full py-4 px-8 text-xl font-semibold transition transform hover:-translate-y-1 hover:scale-110">
            Get Started
          </a>
        </div>
      </section>

    </div>
  );
}
