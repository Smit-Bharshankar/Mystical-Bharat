import React, { useState } from 'react'
import Data from './Destinations'
import Card from './Card'

function FilterDestination() {

    const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter data based on selected category
  const filteredData = selectedCategory ? Data.filter(item => item.category === selectedCategory) : Data;


  return (
    <div>
       <div className="container mx-auto ">
  {/* Filter buttons */}
  <div className="md:flex  w-full justify-center space-x-4 mb-4">
    <button onClick={() => setSelectedCategory('Hill Station')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Hill Station</button>
    <button onClick={() => setSelectedCategory('Heritage')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Heritage</button>
    <button onClick={() => setSelectedCategory('Religious')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Religious</button>
    <button onClick={() => setSelectedCategory('Wildlife')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Wildlife</button>
    <button onClick={() => setSelectedCategory('Nature')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Nature</button>
    <button onClick={() => setSelectedCategory('City')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">City</button>
    {/* <button onClick={() => setSelectedCategory('Lake')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Lake</button> */}
    {/* <button onClick={() => setSelectedCategory('Garden')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Garden</button> */}
    <button onClick={() => setSelectedCategory('Beach')} className="px-4 py-2 cursor-pointer bg-gradient-to-br hover:from-[#c54c4c] hover:to-[#95c13f] from-blue-400 to-green-600 text-white font-medium rounded-3xl focus:text-[#DE3163] focus:font-semibold">Beach</button>

  </div>

  {/* Grid of cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
  {filteredData.map(item => (
    <Card key={item.id} item={item} />
  ))}
</div>
</div>
    </div>
  )
}

export default FilterDestination
