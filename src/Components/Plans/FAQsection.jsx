import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Which are the must-visit places in India?',
      answer: 'India has unlimited destinations for tourists to choose from, such as grand mountains in the north and south, forests in central India, quaint beaches, magical nightlife, bustling culture-soaked cities, deserts and historical places of interest in the east and west. Kashmir, Ladakh, Goa, Jaipur, Coorg, Agra, Gokarna, Andaman and Nicobar Islands, Jaisalmer, Kerala, Manali, Mumbai, Kolkata, Delhi and Sikkim are 15 must-visit places in India. Some more popular tourist attractions include Tirthan Valley, Uttarakhand, Lonavala, Varanasi, Assam and Shillong.',
    },
    {
      question: 'How can I do full India tour? ',
      answer: 'India is a vast nation with a huge array of cultural and historical diversity. Hence, to do a full India tour, or "Bharat Darshan," one needs to plan the complete itinerary in advance. It will be convenient if you decide to divide your India tour into four zones: North, South, East, and West. You can then cover one zone at a time. The Himalayan mountains in the north and the pristine beaches and temples in the south should all be a part of your itinerary. From the white Rann of Kutch in the west to the lofty mountains and tea gardens in the east, your India tour will leave you spellbound. Choose your transportation and accommodations well in advance. Touring across India will be most feasible either via roadways or railways. India shares an extensive rail and road network, even in the most remote locations of the country. For accommodation, you can either rely on expensive five-star hotels or on simple hotels, hostels, or Dharamshala.',
    },
    {
      question: 'What is the best time to visit India? ',
      answer: 'The best months to visit India are typically from October to March, during the post-monsoon to winter season, when the weather is pleasant in most parts of the country.',
    },
    {
      question: 'Which is the best site for India tour packages?',
      answer: 'Tour-india is a reputable platform for India tour packages, offering a wide range of options to explore the diverse attractions of the country. They provide customized packages, destination insights, and travel itineraries to help you plan a memorable trip to India. ' ,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
