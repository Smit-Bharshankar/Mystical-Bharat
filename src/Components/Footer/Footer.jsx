import React from 'react';
import { FaInstagram, FaPinterest, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='relative text-white h-auto bg-blue-950 max-h-full w-full overflow-hidden mt-[100px]'>
      <div className='absolute top-0 left-0  max-h-full w-full overflow-hidden '>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block pt-10 fill-white"></path>
        </svg>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20 mt-20'>

        <div className='flex flex-col gap-5 mb-5'>
          <h2 className='text-3xl text-purple-500'>About Us</h2>
          <div className='flex flex-col'>
            <p>Explore India with Mystical-Bharat - Your ultimate guide to unforgettable holidays in India.</p>
            <p>Discover hidden gems, iconic landmarks, and cultural treasures.</p>
            <p className='text-xl'>Plan your next adventure with us!</p>
          </div>
        </div>

        <div className='flex flex-col mb-5 gap-5 ml-4'>
          <h2 className='text-3xl text-purple-500'>Connect with Us</h2>
          <div className='flex flex-row gap-4'>
            <FaInstagram className='cursor-pointer' size={27} />
            <FaFacebookF className='cursor-pointer' size={25} />
            <FaXTwitter className='cursor-pointer' size={25} />
            <FaPinterest className='cursor-pointer' size={25} />
          </div>
        </div>

        <div className='flex flex-col mb-5 gap-5 mr-4'>
          <h2 className='text-3xl text-purple-500'>Contact Us</h2>
          <div className='text-l'>
            <h2><a href='mailto:mystical-bharat@mystix.in.com'>mystical-bharat@mystix.in.com</a></h2>
            <h2 className='mb-3'>+91-504504-2424</h2>
            <form className="max-w-sm mx-auto">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </form>
          </div>
        </div>

        <div className='flex flex-col mb-5 gap-5'>
          <h2 className='text-3xl text-purple-500'>Get Updates:</h2>
          <form className="max-w-sm mx-auto">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmial.com" />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
          </form>
        </div>

        <div className='flex flex-col gap-5'>
          <br />
          <h2 className='text-l'>© 2024 Mystical-Bharat. All rights reserved. Terms of Service | Privacy Policy</h2>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
