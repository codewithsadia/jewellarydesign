import React from 'react';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className='h-screen p-10 bg-white'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start'>
        
        {/* right Text Section here */}
        <div className='lg:w-1/1 mb-5 lg:mb-0'>
          <h1 className="font-serif font-bold text-[30px] tracking-[0.025em] leading-tight mb-4  hover:text-gray-600">
            IMPECCABLE
            <br />
            CRAFTSMANSHIP AND
            <br />
            FINESSE
          </h1>
          
          <p className="font-Libre Bodoni;
font-size: 29.24px;
font-weight: 500;
line-height: 48.5px;
letter-spacing: m-2.5%;
text-align: left;
 text-35px text-[#787054]  hover:text-gray-900 ">
            An example of intricate workmanship,
            elegant necklaces and long and short chains form a part of our
            desirable collection.
          </p>
          <br/>
          <br/>
          <button className='w-[200px] h-[50px] bg-[#A29875] rounded-lg p-2 text-black  hover:text-gray-600 '>
            EXPLORE NOW
          </button>
        </div>

        {/* left Image Section */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start space-x-6'>
          <Image
            src="/image/lady.svg"
            alt="Lady"
            width={300}  // Adjust to a smaller width if needed
            height={400} // Adjust to a smaller height if needed
            className="rounded-lg"
            />
           </div> 
        </div>
      </div>
  );
};

export default Herosection;
