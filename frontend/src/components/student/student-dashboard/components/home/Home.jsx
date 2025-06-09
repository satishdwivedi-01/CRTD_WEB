import React from 'react'

import CareerGuidanceNavbar from '../../../../CareerGuidanceSidenavbar'
import ProfileStatus from './ProfileStatus'
import '../../styles/HomeLayout.css' // We'll create this new CSS file

const StudentHome = () => {
  return (
    <div className="home-layout">
      <div className="dashboard-section">
        <CareerGuidanceNavbar />
      </div>
      <div className="profile-status-section">
        <ProfileStatus />
      </div>
    </div>
  )
}

export default StudentHome