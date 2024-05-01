import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu  , HiX} from "react-icons/hi";
import TourIndia from '../../assets/TourIndia.png'
import TourIndiaWhite from '../../assets/IndiaTourWhite.png'
import TourIndiaBlack from '../../assets/IndiaTourBlack.png'
import { useAuth } from '../AuthContext'


"use client";


const Navbar = () => {
  

  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from local storage
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const { username } = JSON.parse(storedData);
      setUsername(username);
    }
  }, []);


  const [isOpen , setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
<nav className={`p-5 pt-3 pb-2 font-poppins shadow ${showBackground ? "bg-slate-600  " : "bg-rose-400 bg-opacity-100"} bg-opacity-65 md:flex md:items-center md:justify-between`}>
      <div className='flex justify-between items-center'>
      <span className='text-2xl font-sedan cursor-pointer mix-blend-multiply' >
{showBackground ? 
          <img className=' inline mr-3 bg-transparent h-12 ' src={TourIndiaBlack} />
 :
          <img className=' inline mr-3 bg-transparent h-12 ' src={TourIndiaWhite} />
}
          
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
          {username ? (
            <span className=""> {username}</span>
          ) : (
            <a href="/signup" className="">Sign-Up</a>
          )}
        </div>
          </button>
        </NavLink>
      </ul>
      
    </nav>
  )
}

export default Navbar
