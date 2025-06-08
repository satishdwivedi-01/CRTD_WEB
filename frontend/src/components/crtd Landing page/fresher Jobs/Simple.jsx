import React from 'react'

const Simple = () => {
  return (


    <div className='main w-full h-screen flex  items-center justify-center bg-white'>

<div
  className="h-[650px] w-[320px] md:w-[920px] md:h-[450px] flex flex-col py-12 rounded-[10px] gap-5 items-center shadow-xl"
  style={{
    backgroundImage: 'linear-gradient(to right, #1E3C8F, #2152DA)',
  }}
>
<h1 className='text-white text-[26px] item-center md:text-[29px] font-semibold'>Simple and Transparent Registration</h1>



<div className="box h-[120px] w-[230px] md:h-[68px] md:w-[500px] bg-[#2152DA] py-6 px-4 rounded-[10px]">

<div className='flex items-center gap-1.5 '>
      <img className='w-[25px] h-[25px]' src="/crtd icon.png" alt="CRT Icon" />

<h3 className='text-[17px] bold text-white'>One-time registration fee valid for 1 full year</h3>
</div>

  
</div>

<div className="box h-[auto] w-[230px] md:h-[68px] md:w-[500px] bg-[#2152DA] py-2 px-4 rounded-[10px]">

<div className='flex items-center gap-1.5'>
      <img className='w-[25px] h-[25px]' src="/crtd icon.png" alt="CRT Icon" />

<h3 className='text-[17px]  bold text-white'>Zero placements charges- we bill companies,not candidates</h3>
</div>

  
</div>


<div className="box  h-[120px] w-[230px] md:h-[68px] md:w-[500px] bg-[#2152DA] py-4 px-4 rounded-[10px]">

<div className='flex items-center gap-1.5'>
      <img className='w-[22px] h-[22px]' src="/crtd icon.png" alt="CRT Icon" />

<h3 className='text-[17px] bold text-white'>Free career guidance throughout your journey</h3>
</div>

  
</div>

</div>



    </div>
  )
}

export default Simple