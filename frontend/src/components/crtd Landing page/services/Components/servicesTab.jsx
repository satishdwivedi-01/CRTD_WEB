import React from 'react'
import Navbar from '../../../Navbar'

import HeroSection from './HeroSection'
import CServices from './CServices'
import Reason from './Reason'

import Footer from '../../../Footer'

const servicesTab = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CServices />
      <Reason />
      <Footer /> 
    </div>
  )
}

export default servicesTab
