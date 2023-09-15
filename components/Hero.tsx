import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="bg-blue-900 text-white relative pt-20 pb-32">
        <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-xl">
                ⚙️ AI-Powered Text Processing
            </h1>
            <p className="mb-8 text-lg sm:text-xl max-w-2xl mx-auto">
                Content moderation and data analysis are expensive, time-consuming tasks. Let&apos;s automate it now using leading AI technology.
            </p>
            <a href="/sign-up" className="inline-block bg-white hover:bg-gray-200 text-blue-900 rounded-full py-3 px-6 text-lg sm:py-4 sm:px-8 font-semibold transition transform hover:-translate-y-1 hover:scale-110">
                Get Started
            </a>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>


    </>
  )
}

export default Hero