import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [username, setUsername] = useState('Sign-Up');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('formData'));
    if (userData) {
        setUsername(userData.username); // Update setUsername with userData.username
    }
}, [username]);

  return (
    <>
      <div className='min-h-[100vh] flex flex-col font-poppins '>
      
        <div className='z-50 sticky top-0'>
      <Navbar username={username}/>
        </div>
      
      <div>
      <Outlet/>
      </div>

      <div className=''>
    <Footer/>
      </div>

    </div>
    </>
  )
}

export default App
