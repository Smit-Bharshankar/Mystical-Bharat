import React from 'react'
import Topdestinations from './Topdestinations'
import FilterDestination from './FilterDestination'
import { FaAngleRight } from "react-icons/fa";
import tourbus from '../../assets/tourbus.jpeg'


function Explore() {
  return (
    <>
      <Topdestinations />

      {/* filtercomp */}
      <div className="pt-10 pb-10 ">
        <div className="w-full flex justify-center">
          <h1 className="pb-8 font-poppins w-[70vw] font-semibold text-l items-center text-center">
            Explore our diverse destinations with ease! Use our filtering
            options to tailor your search based on categories such as nature,
            heritage, beaches, and more. Discover your ideal getaway with just a
            few clicks. Let the adventure begin!
          </h1>
        </div>
        <FilterDestination />
      </div>

      <div className=' bg-rose-50'>
        <h1 className="pb-8  w-full font-poppins  pt-4 pl-12 font-bold text-2xl  text-left">
          Get inspired to plan your trip
        </h1>

        {/* cards */}
        <div className='flex flex-row gap-6  pt-6 pb-4'>

        
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className=" object-cover" src={tourbus} alt="Card" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Experience & Tours</div>
    <p className="text-gray-700 text-base">
    Experience extraordinary adventures, discover new cultures, and create unforgettable memories with our curated travel experiences.    </p>
  </div>
  <div className="px-6 py-4 flex justify-between items-center cursor-pointer ">
    <p className="hover:text-fuchsia-400 font-bold text-fuchsia-500">Learn More</p>
    <FaAngleRight className="text-black" />
  </div>
</div>


<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className=" object-cover aspect-video" src="https://images.unsplash.com/photo-1491451231005-ec20221dd520?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Destination</div>
    <p className="text-gray-700 text-base">
    Embrace new horizons, seek adventure, and unlock unforgettable experiences through travel exploration today!    </p>
  </div>
  <div className="px-6 py-4 flex justify-between items-center cursor-pointer ">
    <p className="hover:text-fuchsia-400 font-bold text-fuchsia-500">Learn More</p>
    <FaAngleRight className="text-black" />
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className=" object-cover aspect-video" src="https://images.unsplash.com/photo-1567994200289-a98293394b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Activities & Attraction</div>
    <p className="text-gray-700 text-base">
    Discover thrilling activities, captivating attractions, and endless adventures awaiting your exploration. Let's embark together!    </p>
  </div>
  <div className="px-6 py-4 flex justify-between items-center cursor-pointer ">
    <p className="hover:text-fuchsia-400 font-bold text-fuchsia-500">Learn More</p>
    <FaAngleRight className="text-black" />
  </div>
</div>


        </div>
      </div>
    </>
  );
}

export default Explore
