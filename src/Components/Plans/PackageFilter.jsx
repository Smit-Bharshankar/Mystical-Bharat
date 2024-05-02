import React, { useState } from 'react';

const PackageFilter = ({ destination }) => {
  function currencyFormat(num) {
    const numericValue = Number(num); // Convert the value to number
    if (isNaN(numericValue)) {
      // If not a valid number, return an empty string or the original value
      return "";
    } else {
      // Format the number as Indian currency without decimal places
      return "₹" + Math.round(numericValue).toLocaleString('en-IN');
    }
  }

  const [themeFilter, setThemeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const handleThemeFilter = (event) => {
    setThemeFilter(event.target.value);
  };

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  const filteredDestinations = destination.filter((item) => {
    const themeMatch = item.category.toLowerCase().includes(themeFilter.toLowerCase());
    const priceMatch = item.price >= parseInt(priceFilter);

    // Apply both theme and price filters
    return (!themeFilter || themeMatch) && (!priceFilter || priceMatch);
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Explore Packages</h1>

      <div className="flex justify-evenly mb-4">
        <div className="mr-4">
          <label className="mr-2 text-xl">Theme:</label>
          <select
            className="border rounded-lg p-2"
            value={themeFilter}
            onChange={handleThemeFilter}
          >
            <option value="">All</option>
            <option value="Hill Station">Hill Station</option>
            <option value="Heritage">Heritage</option>
            <option value="Beach">Beach</option>
            <option value="Wildlife">Wildlife</option>
            <option value="Religious">Religious</option>
            <option value="Nature">Nature</option>
            <option value="City">City</option>
          </select>
        </div>
        <div>
          <label className="mr-2 text-xl">Price Range:</label>
          <select
            className="border rounded-lg p-2"
            value={priceFilter}
            onChange={handlePriceFilter}
          >
            <option value="">All</option>
            <option value="10000">₹10,000+</option>
            <option value="20000">₹20,000+</option>
            <option value="30000">₹30,000+</option>
            <option value="40000">₹40,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-lg rounded-lg p-4 flex"
          >
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.state}</p>
              <p className="text-gray-800">
                {currencyFormat(item.price)} - {item.duration} Nights /{" "}
                {parseInt(item.duration) + 1} Days
              </p>
              <p className="mt-4 text-gray-800 text-sm">{item.features.join(', ')}</p>
              <a
                href="#"
                className="text-indigo-500 font-semibold hover:underline mt-4 block"
              >
                Learn More
              </a>
            </div>
            <div className="ml-4">
              <img
                className="w-24 h-24 object-cover rounded-lg"
                src={item.img}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageFilter;
