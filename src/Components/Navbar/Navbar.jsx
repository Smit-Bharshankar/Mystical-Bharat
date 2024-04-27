import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu  , HiX} from "react-icons/hi";



const Navbar = () => {


  const [isOpen , setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };






  return (
    <nav className='p-5 bg-gray-200  font-poppins shadow bg-opacity-65 md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center'>
        <span className='text-2xl font-sedan cursor-pointer'>
          <img className='h-10 inline mr-3' src="https://w7.pngwing.com/pngs/663/305/png-transparent-daenerys-targaryen-house-targaryen-sigil-decal-sticker-showcase-dragon-heart-logo-thumbnail.png" />
          Mystical-Bharat
        </span>

        <span className='text-3xl mx-2 cursor-pointer md:hidden block' onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenu />}
        </span>
      </div>

      <ul className={`md:flex md:items-center md:static bg-white md:bg-transparent md:bg-opacity-65 w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7  ease-in-out duration-300 ${isOpen ? 'top-[80px] opacity-100' : ' hidden md:block top-[-400px] opacity-0 md:opacity-100'}`}>
        <li className='mx-4  my-6 md:my-0'>
          <NavLink to="/" className='text-xl hover:text-cyan-500 duration-500' onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <NavLink to="/explore" className='text-xl hover:text-cyan-500 duration-500' onClick={toggleMenu}>
            Explore
          </NavLink>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <NavLink to="/plans" className='text-xl font-poppins hover:text-cyan-500 duration-500' onClick={toggleMenu}>
            Plans
          </NavLink>
        </li>
        <NavLink to='/signup' className='mx-4 ' onClick={toggleMenu}>

          <button className='bg-slate-900 px-4 overflow-hidden py-2 font-poppins text-white rounded-lg duration-500 hover:bg-black '>
          <div>
            Sign-up
        </div>
          </button>
        </NavLink>
      </ul>
      
    </nav>
  )
}

export default Navbar
