import React from 'react'

function Card({item}) {
  return (
    <div className="p-4">
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <div className="grid  gap-3">
          <div>
            <img src={item.img} alt={item.title} className="h-64 w-full object-cover rounded-t-lg" />
          

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2">{item.state}</p>
            <p className="text-gray-800 font-poppins">{item.des}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
