import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import ContactSection from './ContactUs/ContactSection'
import BusinessConnectForm from './ContactUs/BusinessConnectForm'



const AllContactUs = () => {
  return (
    <div className='contact'>
      <Navbar />
      <ContactSection />
      <BusinessConnectForm />
      <Footer />
    </div>
  )
}

export default AllContactUs