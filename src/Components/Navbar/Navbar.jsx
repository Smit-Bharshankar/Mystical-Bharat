import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-5 bg-gray-200  font-poppins shadow bg-opacity-65 md:flex md:items-center md:justify-between'>
      <div>
        <span className='text-2xl font-sedan cursor-pointer'>
          <img className='h-10 inline mr-3' src="https://w7.pngwing.com/pngs/663/305/png-transparent-daenerys-targaryen-house-targaryen-sigil-decal-sticker-showcase-dragon-heart-logo-thumbnail.png" />
          Mystical-Bharat
        </span>

        <span>
          
        </span>
      </div>

      <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white md:bg-transparent md:bg-opacity-65 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-[-400px] ease-in-out duration-300'>
        <li className='mx-4  my-6 md:my-0'>
          <NavLink to="/" className='text-xl hover:text-cyan-500 duration-500'>
            Home
          </NavLink>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <NavLink to="/explore" className='text-xl hover:text-cyan-500 duration-500'>
            Explore
          </NavLink>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <NavLink to="/plans" className='text-xl font-poppins hover:text-cyan-500 duration-500'>
            Plans
          </NavLink>
        </li>
        <div className='mx-4 '>
          <button className='bg-slate-900 px-4 py-2 font-poppins text-white rounded-lg duration-500 hover:bg-black '>
            Sign-Up
          </button>
        </div>
      </ul>
      
    </nav>
  )
}

export default Navbar
