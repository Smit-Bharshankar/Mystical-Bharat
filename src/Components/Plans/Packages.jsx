import React from 'react';


function Packages() {

    const packages = [
        { location: 'Darjeeling', price: '₹ 13,099*', days: '3 Nights / 4 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Konark', price: '₹ 14,999*', days: '4 Nights / 5 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Gaya', price: '₹ 12,499*', days: '2 Nights / 3 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Calangute Beach', price: '₹ 15,999*', days: '5 Nights / 6 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Kaziranga National Park', price: '₹ 16,999*', days: '4 Nights / 5 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Agra', price: '₹ 11,999*', days: '2 Nights / 3 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Bandipur National Park', price: '₹ 17,999*', days: '5 Nights / 6 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
        { location: 'Ooty', price: '₹ 18,999*', days: '6 Nights / 7 Days', inclusion: 'Hotels, Car, Sightseeing, Meals' },
      ];


  return (
    <div>
       <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold pb-6">Popular Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((packages, index) => (
          <div key={index} className="border-2 border-gray-300  bg-rose-100 shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{packages.location}</h2>
            <p className="text-gray-600 pb-2">{packages.price} - {packages.days}</p>
            <p className="text-gray-800 pb-3">{packages.inclusion}</p>
            <a href="#" className="text-blue-500 font-semibold hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Packages



