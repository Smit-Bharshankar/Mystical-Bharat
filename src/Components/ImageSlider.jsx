import React, { useEffect, useState } from 'react';
import { FaCaretLeft , FaCaretRight } from "react-icons/fa";


const ImageSlider = ({ ImageURL }) => {
    const [Imgindex , setImgindex] = useState(0)

    const shownextImg = () => {
        setImgindex(index => {
            if(index === ImageURL.length - 1) return 0;
            return index + 1;
        });
    }
    
    const showprevImg = () => {
        setImgindex(index => {
            if(index === 0) return ImageURL.length - 1;
            return index - 1;
        });
    }

    useEffect(() => {
        const interval = setInterval(shownextImg, 3000);
        return () => clearInterval(interval); // Clean up function to clear the interval
    }, [Imgindex]);


  return (
    <div className='w-full h-full relative'>
        <div className='w-full h-full overflow-hidden flex'>
            {ImageURL.map(url => (
                <img  key={url} className='h-full w-full object-cover block flex-shrink-0 flex-grow-0 transition-transform duration-500  ease-in-out' src={url} alt="" style={{ transform: `translateX(-${Imgindex * 100}%)` }} />

            ))}
        </div>
      <div className=''>
      <button onClick={shownextImg} className='block absolute top-0 bottom-0 p-4 cursor-pointer z-10 left-0 hover:bg-black hover:bg-opacity-20 ease-in-out' ><FaCaretLeft  size={40}  className='text-white'/></button>
      <button onClick={showprevImg} className='block absolute top-0 bottom-0 p-4 cursor-pointer z-10 right-0 hover:bg-black hover:bg-opacity-20 ease-in-out'><FaCaretRight size={40}  className='text-white '/></button>
      </div>
    </div>
  );
};

export default ImageSlider;

