
import { Routes, Route, Link } from 'react-router-dom'


import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'
import './App.css'
import DashboardLayout from './components/student/dashboard/DashboardLayout'
import Meeting from './components/student/dashboard/Meeting'

import PersonalDetails from './components/PersonalDetails/PersonalDetails'
import ConfirmPersonalDetails from './components/PersonalDetails/ConfirmPersonalDetails'

import CareerGuidance from './components/Career-Guidance/CareerGuidance'
import RequestNewGuidance from './components/Career-Guidance/RequestNewGuidance'
import AccountSettings from './components/AccountSetting/AccountSetting'
import EducationalInfo from './components/Education/EducationInfo'


import Job from './components/JobBoard/Job'

import Popup from './components/JobBoard/Popup'


function App() {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/fresherJobs" element={<FresherJobs />} />


    {/* Dashboard + Menu Layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Meeting />} />
        {/* Add more nested routes here if needed */}
      </Route>
    </Routes>

      {/* Define Routes */}
    
      {/* Landing Pages */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/fresherJobs" element={<FresherJobs />} />

         

        {/* Student Pages */}
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/confirmprofile" element={<ConfirmPersonalDetails />} />
       
        <Route path="/careerguidance" element={<CareerGuidance />} />
        <Route path="/requestnewguidance" element={<RequestNewGuidance />} />
          
        <Route path="/educational-info" element={<EducationalInfo />} />
        
        <Route path="/accountsetting" element={<AccountSettings />} />

        <Route path="/job-board" element={<Job />} />
        <Route path="/Popup" element={<Popup />} />



      </Routes>


     
  )
}


export default App;


