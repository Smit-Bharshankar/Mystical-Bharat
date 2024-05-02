import React from 'react'
import Packages from './Packages'
import PackageFilter from './PackageFilter'
import destinations from '../Explore/Destinations'
import facebook from '../../assets/icons8-facebook-64.png'
import youtube from '../../assets/icons8-youtube-64.png'
import instagram from '../../assets/icons8-instagram-64.png'
import github from '../../assets/icons8-github-64.png'
import twitter from '../../assets/icons8-twitter-squared-64.png'
import FAQSection from './FAQsection'





function Plans() {
  return (
    <>
    
    <div class="relative  ">

  {/* <!-- Content --> */}
  <div class=" top-0 left-0 w-full">
    <h1 class="text-3xl pt-6 pl-6 font-bold">Explore Our Tour Plans</h1>
   

    <div class=" mt-4 pt-3 bg-slate-100 ">
      <h1 class="pl-4 text-l text-justify font-semibold text-green-500 ">Our Trusted Partners -</h1>
      <div class="flex pt-5 w-full h-[120px] flex-wrap justify-around flex-row">
    <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer">
        <img class="h-10 p-2 shadow-md bg-white border-2 border-slate-600 border-opacity-70 rounded-md cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/bookingcom.svg" alt="Booking.com" />
    </a>
    <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer">
        <img class="h-12 p-2 shadow-md bg-white border-2 border-slate-600 border-opacity-70 rounded-md cursor-pointer" src="https://cdn.worldvectorlogo.com/logos/tripadvisor-1.svg" alt="Tripadvisor" />
    </a>
    <a href="https://www.yatra.com/" target="_blank" rel="noopener noreferrer">
        <img class="h-12 p-2 shadow-md bg-white border-2 border-slate-600 border-opacity-70 rounded-md cursor-pointer" src="https://seeklogo.com/images/Y/yatra-com-logo-CB875FB0D6-seeklogo.com.png" alt="Yatra" />
    </a>
    <a href="https://www.makemytrip.com/" target="_blank" rel="noopener noreferrer">
        <img class="h-12 p-2 shadow-md bg-white border-2 border-slate-600 border-opacity-70 rounded-md cursor-pointer" src="https://seeklogo.com/images/M/makemytrip-logo-797F76C823-seeklogo.com.png" alt="MakeMyTrip" />
    </a>
</div>
    </div>
  </div>
  <div className=' bg-teal-100 bg-opacity-40'>
    <div className='pl-4 pr-4'>

        <Packages/>
    </div>

          </div>
</div>
 
<div className='w-[70vw] mb-8 mx-auto'>

<h1 className='text-2xl text-center mt-8 mb-4 font-medium'>Connect with Us</h1>
<div className='flex flex-wrap  gap-8 md:gap-0 justify-evenly'>

<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <img className='cursor-pointer' src={facebook} alt="Facebook" />
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <img className='cursor-pointer' src={youtube} alt="YouTube" />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img className='cursor-pointer' src={instagram} alt="Instagram" />
  </a>
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <img className='cursor-pointer' src={github} alt="GitHub" />
  </a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
    <img className='cursor-pointer' src={twitter} alt="Twitter" />
  </a>

</div>
</div>
        

            <div className='pl-4 pr-4'>
       <PackageFilter destination={destinations} />   

            </div>

            <div className='pl-4 pr-4'>
              <FAQSection />
            </div>

</>
  )
}

export default Plans
