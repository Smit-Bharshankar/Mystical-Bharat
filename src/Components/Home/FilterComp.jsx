import React, { useState } from 'react'
import Data from './Data'
import Card from './Card'

export default function FilterComp() {

    const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter data based on selected category
  const filteredData = selectedCategory ? Data.filter(item => item.category === selectedCategory) : Data;

  return (
    <div className="container mx-auto ">
  {/* Filter buttons */}
  <div className="flex justify-center space-x-4 mb-4">
    <button onClick={() => setSelectedCategory(null)} className="px-4 py-2 cursor-pointer text-black rounded-mdhover:text-blue-700 hover:underline transition-all duration-500 ease-in-out focus:outline-none focus:text-rose-700 ">All</button>
    <button onClick={() => setSelectedCategory('North-East')} className="px-4 py-2 cursor-pointer text-black rounded-mdhover:text-blue-700 hover:underline transition-all duration-500 ease-in-out focus:outline-none focus:text-rose-700">North-East</button>
    <button onClick={() => setSelectedCategory('East')} className="px-4 py-2 cursor-pointer text-black rounded-mdhover:text-blue-700 hover:underline transition-all duration-500 ease-in-out focus:outline-none focus:text-rose-700">East</button>
    <button onClick={() => setSelectedCategory('West')} className="px-4 py-2 cursor-pointer text-black rounded-mdhover:text-blue-700 hover:underline transition-all duration-500 ease-in-out focus:outline-none focus:text-rose-700">West</button>
    <button onClick={() => setSelectedCategory('North')} className="px-4 py-2 cursor-pointer text-black rounded-mdhover:text-blue-700 hover:underline transition-all duration-500 ease-in-out focus:outline-none focus:text-rose-700">North</button>
    <button onClick={() => setSelectedCategory('South')} className="px-4 py-2 cursor-pointer text-black rounded-mdhover:text-blue-700 hover:underline transition-all duration-500 ease-in-out focus:outline-none focus:text-rose-700">South</button>

  </div>

  {/* Grid of cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-2">
    {filteredData.map(item => (
      <Card key={item.id} item={item} />
    ))}
  </div>
</div>
  )
}
