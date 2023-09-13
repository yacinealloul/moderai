import React from 'react'

const Features = () => {
  return (
    <>
    <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-10">Features Overview</h2>
          <div className="flex justify-around">
            <div className="transition duration-500 ease-in-out transform hover:rotate-12">Icon: Voice Recognition</div>
            <div className="transition duration-500 ease-in-out transform hover:rotate-12">Icon: Text Moderation</div>
            <div className="transition duration-500 ease-in-out transform hover:rotate-12">Icon: Image Moderation</div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Features