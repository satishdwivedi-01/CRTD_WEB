import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHome, FaBriefcase, FaTools, FaDollarSign, FaAddressCard } from "react-icons/fa";
import { HiAcademicCap, HiUserGroup, HiLightBulb, HiTrendingUp } from "react-icons/hi";
import { MdEmail, MdSend } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";


const Footer = () => {
  return (
<footer className="text-gray-300 py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     
        <div className="space-y-4">
          <div className="flex items-center ">
<img
  src="/crtdLogo.png"
  alt="CRTD Technologies Logo"
  className="absolute w-[132px] h-[18.14px] top-[380px] left-[1264px]"
/>
            <h3 className="text-white text-2xl font-bold">CRTD Technologies</h3>
          </div>
          <p className="text-gray-400">
            Connecting fresh talent with leading tech companies. Your gateway to a successful tech career.
          </p>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <p>contact@crtdtech.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <FaHome className="text-blue-400" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/fresher-jobs" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <FaBriefcase className="text-blue-400" />
                <span>Fresher Jobs</span>
              </a>
            </li>
            <li>
              <a href="/services" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <FaTools className="text-blue-400" />
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="/pricing" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <FaDollarSign className="text-blue-400" />
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <FaAddressCard className="text-blue-400" />
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-4">
          <h4 className="text-white text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Our Services
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="/campus-recruitment" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <HiAcademicCap className="text-blue-400 text-lg" />
                <span>Campus Recruitment</span>
              </a>
            </li>
            <li>
              <a href="/bulk-hiring" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <HiUserGroup className="text-blue-400 text-lg" />
                <span>Bulk Hiring</span>
              </a>
            </li>
            <li>
              <a href="/career-guidance" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <HiLightBulb className="text-blue-400 text-lg" />
                <span>Career Guidance</span>
              </a>
            </li>
            <li>
              <a href="/skill-development" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <HiTrendingUp className="text-blue-400 text-lg" />
                <span>Skill Development</span>
              </a>
            </li>
            <li>
              <a href="/job-placement" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                <FaBriefcase className="text-blue-400" />
                <span>Job Placement</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-blue-500">
            Stay Updated
          </h4>
          <p className="text-gray-400 flex items-start gap-2">
            <BsNewspaper className="text-blue-400 mt-1 flex-shrink-0" />
            <span>Subscribe to our newsletter for the latest job opportunities and career tips.</span>
          </p>
          <form className="space-y-3">
<div className="relative">
  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full pl-10 pr-4 py-2 rounded bg-gray-860 text-gray-800 font-light placeholder:font-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>

            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition w-full flex items-center justify-center gap-2"
            >
              <MdSend />
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
     <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-left text-gray-400 relative">
  
  

  {/* Text */}
  <p>© 2025 CRTD Technologies. All rights reserved.</p>
</div>

    </footer>
  );
};

export default Footer;