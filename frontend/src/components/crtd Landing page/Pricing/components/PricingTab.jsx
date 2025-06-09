import React from 'react'

import Navbar from '../../../Navbar'
import Hero from './Hero'
import PricingPlans from './PricingPlans';
import Choose from './Choose';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Footer from '../../../Footer';

const PricingTab = () => {
  return (
    <div className='pricing'>
      <Navbar />
      <Hero />
      <PricingPlans />
      <Choose />
      <Banner />
      <ContactForm />
     
      <Footer />
    </div>
  )
}

export default PricingTab
