import React, { useState } from 'react';

import menu from "../../../assets/menu.png";
import person from "../../../assets/person.png";
import education from "../../../assets/education.png";
import job from "../../../assets/job.png";
import setting from "../../../assets/setting.png";
import carrier from "../../../assets/carrier.png";
import signout from "../../../assets/signout.png";
import Frontend from "../../../assets/frontend.png";
import Backend from "../../../assets/backend.png";
import Mobile from "../../../assets/mobile.png";
import fullstack from "../../../assets/fullstack.png";
import lock from "../../../assets/lock.png";

<<<<<<< HEAD:frontend/src/components/student/JobBoard/Job.jsx
import CareerGuidanceNavbar from '../../StudentSideNavBar';
=======
import CareerGuidanceNavbar from '../CareerGuidanceSidenavbar';
import Popup from './Popup';
>>>>>>> 16246f637a5de1ef11fb9fb0283b359d892546aa:frontend/src/components/JobBoard/Job.jsx



const Job = () => {
   const [showPopup, setShowPopup] = useState(false);


  return (
    <>
    <div className="w-full h-[1091px] flex  bg-white">



      <CareerGuidanceNavbar/>

      <div className='ml-[50px] text-black' >
        <div className="mt-7 mx-16">
          <h1 className="text-[24px] font-poppings font-semibold">Job Board</h1>
          <p className="text-[18px] font-poppings font-normal">
            Apply for fresher job opportunities across multiple industries and locations.
          </p>
        </div>

        <div className='flex flex-row gap-2.5 mx-14 mt-10'>
          <div className='w-[239px] h-[382px] bg-white rounded-[10px]  shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5 gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={Frontend} alt='' width="15" height="9" />
              </div>
              {/* Text Section */}
              <div>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)] font-normal'>Frontend Developer</h1>
                <p className='font-poppins text-[12px] -mt-1 font-normal text-[rgba(75,85,99,1)]'>Frontend Developer</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center px-2 text-[rgba(75,85,99,1)] py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center px-2 text-[rgba(75,85,99,1)] py-2.5'>1000+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>25+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center px-2 py-2.5'>3.5-6.0 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] text-[rgba(75,85,99,1)] font-normal font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-2 mx-3.5 mt-1.5'>
              <div className='w-[45px] h-[25px] bg-[rgba(239,246,255,1)] text-[rgba(75,85,99,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>HTML</h1>
              </div>

              <div className='w-[35px] h-[25px] bg-[rgba(239,246,255,1)]  rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>CSS</h1>
              </div>

              <div className='w-[73px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>JavaScript</h1>
              </div>
            </div>

            <div className='w-[45px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md mt-1.5 mx-3.5 flex items-center justify-center'>
              <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>React</h1>
            </div>

             <button
         onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-3 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>

          </div>

          <div className='w-[239px] h-[382px] bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5 gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={Backend} alt='' width="18" height="18" />
              </div>
              {/* Text Section */}
              <div>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)] font-normal'>Backend Developer</h1>
                <p className='font-poppins text-[12px] -mt-1 font-normal text-[rgba(75,85,99,1)]'>Backend Developer</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>800+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>20+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>4.0-7.0 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] font-normal text-[rgba(75,85,99,1)] font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-3 mx-3.5 mt-1.5'>
              <div className='w-[50px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Node.js</h1>
              </div>

              <div className='w-[48px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Python</h1>
              </div>

              <div className='w-[35px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Java</h1>
              </div>


              <div className='w-[36px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md   flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>SQL</h1>
              </div>
            </div>
        <button
         onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-11 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>
          </div>


          <div className='w-[239px] h-[382px] bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5 gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={Mobile} alt='' width="20" height="20" />
              </div>
              {/* Text Section */}
              <div>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)] font-normal'>Mobile App Developer</h1>
                <p className='font-poppins text-[12px] -mt-1 font-normal text-[rgba(75,85,99,1)]'>Mobile Development</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>500+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>15+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>4.0-6.5 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] font-normal text-[rgba(75,85,99,1)] font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-2 mx-3.5 mt-1.5'>
              <div className='w-[73px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>React Native</h1>
              </div>

              <div className='w-[47px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Flutter</h1>
              </div>

              <div className='w-[52px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Android</h1>
              </div>
            </div>

            <div className='w-[36px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md mt-2 mx-3.5 flex items-center justify-center'>
              <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>iOS</h1>
            </div>

           <button
            onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-3 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>
          </div>

          <div className='w-[239px] h-[382px] bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5  gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={fullstack} alt='' width="20" height="20" />
              </div>
              {/* Text Section */}
              <div className=''>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)]  font-normal'>Full Stack Developer</h1>
                <p className='font-poppins -mt-1 text-[12px] font-normal text-[rgba(75,85,99,1)]'>Full Stack Developer</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>750+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>30+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>5.0-8.0 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] text-[rgba(75,85,99,1)] font-normal font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-2 mx-3.5 mt-1.5'>
              <div className='w-[72px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>MERN Stack</h1>
              </div>

              <div className='w-[52px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>DevOps</h1>
              </div>

              <div className='w-[42px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Cloud</h1>
              </div>
            </div>

            <div className='w-[60px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md mt-1.5 mx-3.5 flex items-center justify-center'>
              <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Database</h1>
            </div>

         <button
          onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-3 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>



          </div>



        </div>




        <div className='flex flex-row gap-2.5 mx-14 mt-12'>
          <div className='w-[239px] h-[382px] bg-white rounded-[10px]  shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5 gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={Frontend} alt='' width="15" height="9" />
              </div>
              {/* Text Section */}
              <div>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)] font-normal'>Java Developer</h1>
                <p className='font-poppins text-[12px] -mt-1 font-normal text-[rgba(75,85,99,1)]'>Java Developer</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center px-2 text-[rgba(75,85,99,1)] py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center px-2 text-[rgba(75,85,99,1)] py-2.5'>1000+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>25+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center px-2 py-2.5'>3.5-6.0 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] text-[rgba(75,85,99,1)] font-normal font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-2 mx-3.5 mt-1.5'>
              <div className='w-[45px] h-[25px] bg-[rgba(239,246,255,1)] text-[rgba(75,85,99,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>HTML</h1>
              </div>

              <div className='w-[35px] h-[25px] bg-[rgba(239,246,255,1)]  rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>CSS</h1>
              </div>

              <div className='w-[73px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>JavaScript</h1>
              </div>
            </div>

            <div className='w-[45px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md mt-1.5 mx-3.5 flex items-center justify-center'>
              <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>React</h1>
            </div>

         <button
          onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-3 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>




          </div>

          <div className='w-[239px] h-[382px] bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5 gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={Backend} alt='' width="18" height="18" />
              </div>
              {/* Text Section */}
              <div>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)] font-normal'>Python Developer</h1>
                <p className='font-poppins text-[12px] -mt-1 font-normal text-[rgba(75,85,99,1)]'>Python Developer</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>800+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>20+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>4.0-7.0 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] font-normal text-[rgba(75,85,99,1)] font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-3 mx-3.5 mt-1.5'>
              <div className='w-[50px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Node.js</h1>
              </div>

              <div className='w-[48px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Python</h1>
              </div>

              <div className='w-[35px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Java</h1>
              </div>


              <div className='w-[36px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md   flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>SQL</h1>
              </div>
            </div>
         <button
          onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-11 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>
          </div>


          <div className='w-[239px] h-[382px] bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5 gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={Mobile} alt='' width="20" height="20" />
              </div>
              {/* Text Section */}
              <div>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)] font-normal'>UI Developer</h1>
                <p className='font-poppins text-[12px] -mt-1 font-normal text-[rgba(75,85,99,1)]'>UI Developer</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-center text-[rgba(75,85,99,1)] px-2 py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>500+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>15+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>4.0-6.5 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] font-normal text-[rgba(75,85,99,1)] font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-2 mx-3.5 mt-1.5'>
              <div className='w-[73px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>React Native</h1>
              </div>

              <div className='w-[47px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Flutter</h1>
              </div>

              <div className='w-[52px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Android</h1>
              </div>
            </div>

            <div className='w-[36px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md mt-2 mx-3.5 flex items-center justify-center'>
              <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>iOS</h1>
            </div>

           <button
            onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-3 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>
          </div>

          <div className='w-[239px] h-[382px] bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)]'>

            <div className='flex flex-row mt-5 mx-3.5  gap-2.5'>
              {/* Icon Box */}
              <div className='w-[32px] h-[32px] bg-[rgba(243,244,246,1)] rounded-md flex items-center justify-center'>
                <img src={fullstack} alt='' width="20" height="20" />
              </div>
              {/* Text Section */}
              <div className=''>
                <h1 className='font-poppins text-[14px] text-[rgba(17,24,39,1)]  font-normal'>Data Analyst</h1>
                <p className='font-poppins -mt-1 text-[12px] font-normal text-[rgba(75,85,99,1)]'>Data Analyst</p>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Openings</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>750+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Client Companies</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>30+</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Location</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Pan India</h1>
              </div>
            </div>

            <div className='w-[208px] h-[32px] bg-[rgba(243,244,246,1)] items-center mt-2.5 mx-3.5 text-center justify-center rounded-md'>
              <div className='justify-between  flex flex-row '>
                <h1 className=' text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>Package</h1>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(75,85,99,1)] text-center px-2 py-2.5'>5.0-8.0 LPA</h1>
              </div>
            </div>

            <div className='mt-4 mx-3.5 text-start'><h1 className='text-[10px] text-[rgba(75,85,99,1)] font-normal font-poppins '>Required Skills:</h1></div>

            <div className='flex flex-row gap-2 mx-3.5 mt-1.5'>
              <div className='w-[72px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>MERN Stack</h1>
              </div>

              <div className='w-[52px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>DevOps</h1>
              </div>

              <div className='w-[42px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md flex items-center justify-center'>
                <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Cloud</h1>
              </div>
            </div>

            <div className='w-[60px] h-[25px] bg-[rgba(239,246,255,1)] rounded-md mt-1.5 mx-3.5 flex items-center justify-center'>
              <h1 className='text-[10px] font-normal font-poppins text-[rgba(37,99,235,1)]'>Database</h1>
            </div>

     <button
         onClick={() => setShowPopup(true)}
  className="w-[207px] h-[37px] rounded-md bg-[rgba(36,97,234,1)] flex items-center justify-center mx-4 mt-3 text-white text-[12px] font-poppins font-normal"
>
  Apply Now
</button>





          </div>



        </div>


        <div className="text-gray-500 text-sm font-medium font-poppings mx-[334px] mt-[105px] mb-[60px]">
          © 2025 CRTD Technologies. All rights reserved.
        </div>




      </div>
    </div>
     {showPopup && <Popup onClose={() => setShowPopup(false)} />}

 </>


  );
};

export default Job;
