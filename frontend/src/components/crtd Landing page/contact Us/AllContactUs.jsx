import React from 'react'
import Hero from './Hero/Hero'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import ContactUs from './ContactUs/ContactUs'


const AllContactUs = () => {
  return (
    <div className='contact'>
      <Navbar />
      <Hero />
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default AllContactUs