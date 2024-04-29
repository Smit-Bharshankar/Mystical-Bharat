import React from 'react';
import Darjeeling from '../../assets/Darjeeling, West Bengal.jpg';
import Gaya from '../../assets/Gaya, Bihar.jpg'
import Bijapur from '../../assets/Bijapur, Karnataka.jpg'


function Topdestinations() {
  return (
    <div className=' bg-gradient-to-br to-[#cf8ddf] from-[#9ededf]'>
      <h1 className='font-bold text-center text-3xl pt-8 pb-4  font-poppins text-black hover:text-gray-800'>Featured Destinations</h1>
      <div className='flex flex-wrap justify-center'>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white border border-gray-700 rounded-lg shadow-sm">
            <img src={Darjeeling} alt="" className="h-64 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Darjeeling</h2>
              <p className="text-gray-600 mb-2">West Bengal</p>
              <p className="text-gray-800 font-poppins">Darjeeling, a picturesque hill station in East India, boasts breathtaking scenery, mesmerizing sunrises, lush tea plantations, and an old-world charm, making it ideal for romantic getaways and nature enthusiasts.</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white border border-gray-700 rounded-lg shadow-sm">
            <img src={Gaya} alt="" className="h-64 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Gaya</h2>
              <p className="text-gray-600 mb-2">Bihar</p>
              <p className="text-gray-800 font-poppins">Gaya, a significant religious site, holds immense spiritual importance for Hindus and Buddhists. It's famous for the Mahabodhi Temple, where Gautama Buddha attained enlightenment, and the Vishnupad Temple, dedicated to Lord Vishnu.</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white border border-gray-700 rounded-lg shadow-sm">
            <img src={Bijapur} alt="" className="h-64 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Bijapur</h2>
              <p className="text-gray-600 mb-2">Karnatake</p>
              <p className="text-gray-800 font-poppins">Bijapur, established in the 10th century, showcases architectural marvels from the Mughal era. Notable landmarks include Gol Gumbaz, Jamiya Masjid, Bara Kaman, and Ibrahim Roza Road.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topdestinations;
