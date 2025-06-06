import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 pl-7 pr-12 shadow-lg font-semibold ">
            <div className="flex items-center ">
                <img src="/crtdLogo.png" alt="Logo" className="h-16" />
                <div className='flex flex-col items-start'>
                    <p className="font-bold text-xl">CRTD Technologies</p>
                    <p className="text-sm font-[500]">connecting freshers</p>
                </div>
            </div>
            <ul className="flex gap-12 text-sm font-medium">
                <li><NavLink to="/" className='text-[18px] font-[600]'>Home</NavLink></li>
                <li><NavLink to="/fresherJobs" className='text-[18px] font-[600]'>Fresher Jobs</NavLink></li>
                <li><NavLink to="/services" className='text-[18px] font-[600]'>Services</NavLink></li>
                <li><NavLink to="/pricing" className='text-[18px] font-[600]'>Pricing</NavLink></li>
                <li><NavLink to="/contact" className='text-[18px] font-[600]'>Contact Us</NavLink></li>
            </ul>
            <div className='flex gap-5'>
                <button className=" text-black px-4 py-2 rounded border-2 border-gray-600 w-[9rem] font-semibold text-[18px]">Login</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-[9rem] font-semibold text-[18px]">Register Now</button>
            </div>
        </nav>
    )
}

export default navbar;
