import React from 'react'
import Navbar from '../../Navbar'
import EmpoweringFreshers from './empoweringFreshers'
import StrugglingToLand from './StrugglingToLand'
import AboutUs from './AboutUs'

import WhyChooseUs from './WhyChooseUs'
import Awards from './Awards'
import Impacts from './Impacts'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='bg-white text-black w-[94vw] relative right-[7vw] bottom-[3.7vh] '>

      <div className='bg-white sticky top-0 z-50'>
        <Navbar />
      </div>
      <EmpoweringFreshers />
      <StrugglingToLand />
      <AboutUs />

      <WhyChooseUs />
      <Awards />
      <Impacts />
      <HowItWorks />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default Home
