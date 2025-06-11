import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-4 lg:pl-7 lg:pr-12 shadow-lg font-semibold text-black">
            {/* Logo and Hamburger Menu */}
            <div className="flex items-center w-full lg:w-auto justify-between mb-4 lg:mb-0">
                <div className="flex items-center">
                    <img src="/crtdLogo.png" alt="Logo" className="h-16" />
                    <div className='flex flex-col items-start'>
                        <p className="font-bold text-xl">CRTD Technologies</p>
                        <p className="text-sm font-[500]">connecting freshers</p>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-12 text-sm font-medium">
                <li><NavLink to="/" className='text-[18px] font-[600]'>Home</NavLink></li>
                <li><NavLink to="/fresherJobs" className='text-[18px] font-[600]'>Fresher Jobs</NavLink></li>
                <li><NavLink to="/services" className='text-[18px] font-[600]'>Services</NavLink></li>
                <li><NavLink to="/pricing" className='text-[18px] font-[600]'>Pricing</NavLink></li>
                <li><NavLink to="/contact-Us" className='text-[18px] font-[600]'>Contact Us</NavLink></li>
            </ul>

            {/* Desktop Buttons */}
            <div className='hidden lg:flex gap-5'>
                <NavLink to="/login">
                    <button className="text-black px-4 py-2 rounded border-2 border-gray-600 w-[9rem] font-semibold text-[18px]">
                        Login
                    </button>
                </NavLink>
                <NavLink to="/signUp">
                    <button className="bg-gradient-to-r from-[#0082C1] to-[#033E91] text-white px-4 py-2 rounded w-[10rem] font-semibold text-[18px]">
                        Register Now
                    </button>
                </NavLink>
            </div>

            {/* Mobile Menu - Shows when hamburger is clicked */}
            {isMenuOpen && (
                <div className="lg:hidden w-full mt-4">
                    <ul className="flex flex-col gap-4 text-sm font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className='text-[18px] font-[600] block py-2'
                                onClick={toggleMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/fresherJobs"
                                className='text-[18px] font-[600] block py-2'
                                onClick={toggleMenu}
                            >
                                Fresher Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className='text-[18px] font-[600] block py-2'
                                onClick={toggleMenu}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pricing"
                                className='text-[18px] font-[600] block py-2'
                                onClick={toggleMenu}
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact-Us"
                                className='text-[18px] font-[600] block py-2'
                                onClick={toggleMenu}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className='flex flex-col gap-3 mt-4'>
                        <NavLink to="/login" onClick={toggleMenu}>
                            <button className="text-black px-4 py-2 rounded border-2 border-gray-600 w-full font-semibold text-[18px]">
                                Login
                            </button>
                        </NavLink>
                        <NavLink to="/signUp" onClick={toggleMenu}>
                            <button className="bg-gradient-to-r from-[#0082C1] to-[#033E91] text-white px-4 py-2 rounded w-full font-semibold text-[18px]">
                                Register Now
                            </button>
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;