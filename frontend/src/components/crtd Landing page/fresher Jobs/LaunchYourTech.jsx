import React from 'react';

const LAunchYourTech = () => {
  return (
    <div className='bg-[#3767E2] w-min-screen h-screen text-white'>
     

      <div className='flex justify-center pt-12 '>
       <div className='bg-[#3e80ebf5] backdrop-blur-md  text-white text-xs font-semibold px-6 py-3 h rounded-[50px] shadow-sm'>
  #1 Fresher Hiring Platform
</div>

      </div>

    
      <div className='text-center mt-6 px-4'>
        <h1 className='text-4xl md:text-5xl font-bold'>Launch Your Tech Career</h1>
        <h1 className='text-4xl md:text-5xl font-bold mt-2'>3000+ Immediate Openings</h1>
        <p className='text-sm md:text mt-4 text-blue-100'>
          Direct placement opportunities with top tech companies. No experience needed!
        </p>
      </div>

   
      <div className='flex flex-wrap justify-center gap-3 mt-4 px-4'>
        <span className='text-[#FFFFFF] bg-[#3e80ebf5] px-4 py-2 text-sm rounded-full font-medium'>100+ Client Companies</span>
        <span className='text-[#FFFFFF] bg-[#3e80ebf5] px-4 py-2 text-sm rounded-full font-medium'>Pan India Opportunities</span>
        <span className='text-[#FFFFFF] bg-[#3e80ebf5] px-4 py-2 text-sm rounded-full font-medium'>Immediate Joining</span>
        <span className='text-[#FFFFFF] bg-[#3e80ebf5] px-4 py-2 text-sm rounded-full font-medium'>Zero Placement Fee</span>
      </div>

      {/* Job Cards */}
    
    </div>
  );
};

export default LAunchYourTech;