import React from 'react';
let mountpic = "https://images.unsplash.com/photo-1619796696652-a29a854f21a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let tajpic = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Home = () => {
  return (
    <div className=''>

              {/* Top Section */}
      <div className='relative'>
        <div className='w-full mt-6 relative flex justify-center items-center'>
          <img src={tajpic} alt="" className='w-[80vw] h-[80vh] rounded-lg object-cover' />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
          <h1 className='text-white text-xl  font-poppins'>
            Embark on unforgettable journeys with us, exploring destinations that inspire and captivate travelers worldwide.
          </h1>
        </div>
      </div>


      <div className='flex flex-col justify-center items-center h-40 my-10 mt-20'>
        <h1 className='font-bold text-5xl font-poppins'>You'll fall in love with India</h1>
        <h1 className='mt-6 tracking-wide font-serif font-light'>Explore India from Kashmir to Kaniyakumari</h1>
      </div>


    </div>
  );
};

export default Home;
