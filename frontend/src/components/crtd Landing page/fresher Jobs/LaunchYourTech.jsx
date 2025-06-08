import React from 'react';
import { Building2, Globe, Users, UserPlus } from "lucide-react";

const LAunchYourTech = () => {
  return (
    <div className=' w-min-screen h-min-screen text-white'
     style={{
    backgroundImage: 'linear-gradient(to right, #1E3C8F, #2152DA)',
  }}
    >
     
      <div className='flex justify-center pt-12 '>
       <div className='bg-gradient-to-r from-[#1E3C8F] to-[#2152DA] backdrop-blur-md text-white text-xs font-semibold px-6 py-3 h rounded-[50px] shadow-sm'>
  #1 Fresher Hiring Platform
</div>

      </div>

    
      <div className='text-center mt-6 px-4'>
        <h1 className='text-3xl md:text-5xl font-bold'>Launch Your Tech Career</h1>
        <h1 className='text-3xl md:text-5xl font-bold mt-2'>3000+ Immediate Openings</h1>
        <p className='text-sm md:text mt-4 text-blue-100'>
          Direct placement opportunities with top tech companies. No experience needed!
        </p>
      </div>

   {/* jj */}
<div className="max-w-6xl mx-auto flex flex-col item-center md:flex-row flex-wrap justify-center items-center mt-4 gap-4 md:gap-8">

  <div className="flex items-center gap-2 py-2 px-4  w-[200px] h-[40px] rounded-full bg-gradient-to-r from-[#1E3C8F] to-[#2152DA] shadow-md">
  <Building2 size={17} className="text-white/90" />
  <h3 className="text-[13px] text-white font-medium">100+ Client Companies</h3>
</div>


  <div className="flex items-center gap-2 py-2 px-4 w-[200px] h-[40px] rounded-full bg-gradient-to-r from-[#1E3C8F] to-[#2152DA] shadow-md" 
  >
    <Globe size={20} className="text-white/90" />
    <h3 className='text-[13px] text-white'>Pan India Opportunities</h3>
  </div>

  <div className="flex items-center gap-2 py-2 px-4  w-[200px] h-[40px] rounded-full bg-gradient-to-r from-[#1E3C8F] to-[#2152DA] shadow-md"
  >
    <UserPlus size={20} className="text-white/90" />
    <h3 className='text-[13px] text-white'>Immediate Joining</h3>
  </div>

  <div className="flex items-center gap-2 py-2 px-4  w-[200px] h-[40px] rounded-full bg-gradient-to-r from-[#1E3C8F] to-[#2152DA] shadow-md"
  >
    <Users size={20} className="text-white/90" />
    <h3 className='text-[13px] text-white'>Zero Placement Fee</h3>
  </div>

</div>

   <div className='flex flex-col md:flex-row justify-center pt-8 pb-10 items-center gap-10 '>

<div class="w-[239px] h-[382px] rounded-xl bg-white shadow-md p-4 flex flex-col justify-between">

  <div>
    <div class="flex items-center gap-2 mb-2">
      <span class="text-blue-600 text-[18px]">&lt;/&gt;</span>
      <div>
        <h3 class="text-[16px] font-semibold text-gray-900">Frontend Developer</h3>
        <p class="text-[13px] text-gray-500">Frontend Developer</p>
      </div>
    </div>

  
    <div class="space-y-2 mt-3">
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Openings</span>
        <span class="font-medium text-gray-800">1000+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Client Companies</span>
        <span class="font-medium text-gray-800">25+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Location</span>
        <span class="font-medium text-gray-800">Pan India</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Package</span>
        <span class="font-medium text-gray-800">3.5–6.0 LPA</span>
      </div>
    </div>

   
    <div class="mt-3">
      <p class="text-[13px] text-gray-700 font-medium mb-1">Required Skills:</p>
      <div class="flex flex-wrap gap-2">
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">HTML</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">CSS</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">JavaScript</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">React</span>
      </div>
    </div>
  </div>


  <button class="w-full bg-blue-600 text-white text-[14px] font-medium py-2 rounded-md mt-3">
    Apply Now →
  </button>
</div>
  


  <div class="w-[239px] h-[382px] rounded-xl bg-white shadow-md p-4 flex flex-col justify-between">

  <div>
    <div class="flex items-center gap-2 mb-2">
      <span class="">
        <img className='h-[40px] w-[40px] object-center' src="https://www.i-bee.net/wp-content/uploads/2020/04/hub.svg" alt="njbj" />
      </span>
      <div>
        <h3 class="text-[16px] font-semibold text-gray-900">Backend Developer</h3>
        <p class="text-[13px] text-gray-500">Backend Development</p>
      </div>
    </div>

  
    <div class="space-y-2 mt-3">
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Openings</span>
        <span class="font-medium text-gray-800">800+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Client Companies</span>
        <span class="font-medium text-gray-800">20+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Location</span>
        <span class="font-medium text-gray-800">Pan India</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Package</span>
        <span class="font-medium text-gray-800">4.0–7.0 LPA</span>
      </div>
    </div>

   
    <div class="mt-3">
      <p class="text-[13px] text-gray-700 font-medium mb-1">Required Skills:</p>
      <div class="flex flex-wrap gap-2">
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Node.js</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Python</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Java</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">SQL</span>
      </div>
    </div>
  </div>


  <button class="w-full bg-blue-600 text-white text-[14px] font-medium py-2 rounded-md mt-3">
    Apply Now →
  </button>
</div>


  <div class="w-[239px] h-[382px] rounded-xl bg-white shadow-md p-4 flex flex-col justify-between">

  <div>
    <div class="flex items-center gap-2 mb-2">
      <span class="h-[30px] w-[30px]">
        <img src="https://cdn.prod.website-files.com/5d9a902248623ef932d0da66/5f8aee6cc66732ae4894f662_mobile-friendly.svg" alt="" />
      </span>
      <div>
        <h3 class="text-[16px] font-semibold text-gray-900">Mobile App Developer</h3>
        <p class="text-[13px] text-gray-500">Mobile Developement</p>
      </div>
    </div>

  
    <div class="space-y-2 mt-3">
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Openings</span>
        <span class="font-medium text-gray-800">500+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Client Companies</span>
        <span class="font-medium text-gray-800">15+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Location</span>
        <span class="font-medium text-gray-800">Pan India</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Package</span>
        <span class="font-medium text-gray-800">4.0–6.5 LPA</span>
      </div>
    </div>

   
    <div class="mt-3">
      <p class="text-[13px] text-gray-700 font-medium mb-1">Required Skills:</p>
      <div class="flex flex-wrap gap-2">
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">React Native</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Flutter</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Andriod</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">iOS</span>
      </div>
    </div>
  </div>


  <button class="w-full bg-blue-600 text-white text-[14px] font-medium py-2 rounded-md mt-3">
    Apply Now →
  </button>
</div>


  <div class="w-[239px] h-[382px] rounded-xl bg-white shadow-md p-4 flex flex-col justify-between">

  <div>
    <div class="flex items-center gap-2 mb-2">
      <span class="h-[20px] w-[20px] pr-1">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSagPecc8YU0KMsIy8_a9_fsCSqhaXoRIBCGLXtRJP9l4LAY8wn" alt="" />
      </span>
      <div>
        <h3 class="text-[16px] font-semibold text-gray-900">Full Stack Developer</h3>
        <p class="text-[13px] text-gray-500">Full Stack Developer</p>
      </div>
    </div>

  
    <div class="space-y-2 mt-3">
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Openings</span>
        <span class="font-medium text-gray-800">750+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Client Companies</span>
        <span class="font-medium text-gray-800">30+</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Location</span>
        <span class="font-medium text-gray-800">Pan India</span>
      </div>
      <div class="flex justify-between bg-gray-100 px-3 py-2 rounded-md text-[13px] text-gray-600">
        <span>Package</span>
        <span class="font-medium text-gray-800">5.0–8.0 LPA</span>
      </div>
    </div>

   
    <div class="mt-3">
      <p class="text-[13px] text-gray-700 font-medium mb-1">Required Skills:</p>
      <div class="flex flex-wrap gap-2">
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">MernStack</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">DevOps</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Cloud</span>
        <span class="bg-blue-50 text-blue-700 px-2 py-[2px] rounded-md text-[12px]">Database</span>
      </div>
    </div>
  </div>


  <button class="w-full bg-blue-600 text-white text-[14px] font-medium py-2 rounded-md mt-3">
    Apply Now →
  </button>
</div>

   </div>


    </div>
  );
};

export default LAunchYourTech;