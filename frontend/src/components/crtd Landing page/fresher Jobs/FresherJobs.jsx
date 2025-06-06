import React from 'react'
import Navbar from '../../Navbar'
import LaunchYourTech from './LaunchYourTech'
const fresherJobs = () => {
    return (
        <div className='bg-white text-black '>

      <div className='bg-white sticky top-0 z-50'>
        <Navbar />
      </div>
      <div>
        <LaunchYourTech/>
      </div>

    </div>
    )
}

export default fresherJobs
