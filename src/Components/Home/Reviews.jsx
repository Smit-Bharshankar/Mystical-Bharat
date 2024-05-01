import React from 'react';

const Reviews = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      user: 'Vijay',
      rating: 4,
      reviewText: 'Great experience! Would definitely recommend.',
    },
    {
      id: 2,
      user: 'Ayush',
      rating: 5,
      reviewText: 'Amazing service and quality. Will come back again.',
    },
    {
      id: 3,
      user: 'Shreya',
      rating: 3,
      reviewText: 'Decent experience. Room for improvement.',
    },
    // Add more review objects as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border border-gray-200 rounded-lg p-4 shadow-md"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">{review.user}</h3>
            <span className={`text-lg font-semibold ${getRatingColor(review.rating)}`}>
              {review.rating} ⭐
            </span>
          </div>
          <p className="text-gray-600 mb-4">{review.reviewText}</p>
          {/* You can add additional elements or styles as needed */}
        </div>
      ))}
    </div>
  );
};

// Function to get the color of rating based on the value
const getRatingColor = (rating) => {
  if (rating >= 4) {
    return 'text-green-600'; // Green for high ratings
  } else if (rating >= 3) {
    return 'text-yellow-600'; // Yellow for moderate ratings
  } else {
    return 'text-red-600'; // Red for low ratings
  }
};

export default Reviews;
