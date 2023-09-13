import React from 'react'

const PricingPanel = () => {
  return (
    <div>
        <div className="min-h-screen flex justify-center items-center">
  <div className="">
    <div className="text-center font-semibold">
      <h1 className="text-5xl">
        <span className="text-blue-700 tracking-wide">Flexible </span>
        <span>Plans</span>
      </h1>
      <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
        Choose a plan that works best for you and
        <br /> your team.
      </p>
    </div>
    <div className="pt-24 flex flex-row gap-1">
      <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
        <h1 className="text-black font-semibold text-2xl">Basic</h1>
        <p className="pt-2 tracking-wide">
          <span className="text-gray-400 align-top">$ </span>
          <span className="text-3xl font-semibold">10</span>
          <span className="text-gray-400 font-medium">/ user</span>
        </p>
        <hr className="mt-4 border-1" />
        <div className="pt-8">
          <p className="font-semibold text-gray-400 text-left">
            <span className="material-icons align-middle">done</span>
            <span className="pl-2">
              Get started with <span className="text-black">messaging</span>
            </span>
          </p>
          <p className="font-semibold text-gray-400 text-left pt-5">
            <span className="material-icons align-middle">done</span>
            <span className="pl-2">
              Flexible <span className="text-black">team meetings</span>
            </span>
          </p>
          <p className="font-semibold text-gray-400 text-left pt-5">
            <span className="material-icons align-middle">done</span>
            <span className="pl-2">
              <span className="text-black">5 TB</span> cloud storage
            </span>
          </p>
          <a href="#" className="">
            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
              <span className="font-medium">Choose Plan</span>
              <span className="pl-2 material-icons align-middle text-sm">
                east
              </span>
            </p>
          </a>
        </div>
      </div>
  
      <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
        <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
        <p className="pt-2 tracking-wide">
          <span className="text-gray-400 align-top">$ </span>
          <span className="text-3xl font-semibold">35</span>
          <span className="text-gray-400 font-medium">/ user</span>
        </p>
        <hr className="mt-4 border-1" />
        <div className="pt-8">
          <p className="font-semibold text-gray-400 text-left">
            <span className="material-icons align-middle">done</span>
            <span className="pl-2">
              All features in <span className="text-black">Startup</span>
            </span>
          </p>
          <p className="font-semibold text-gray-400 text-left pt-5">
            <span className="material-icons align-middle">done</span>
            <span className="pl-2">
              Growth <span className="text-black">oriented</span>
            </span>
          </p>
          <p className="font-semibold text-gray-400 text-left pt-5">
            <span className="material-icons align-middle">done</span>
            <span className="pl-2">
              <span className="text-black">Unlimited</span> cloud storage
            </span>
          </p>
          <a href="#" className="">
            <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
              <span className="font-medium">Choose Plan</span>
        
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default PricingPanel;