
import { Routes, Route, Link } from 'react-router-dom'


import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'
import AllContactUs from './components/crtd Landing page/contact Us/AllContactUs'
import PricingTab from './components/crtd Landing page/Pricing/components/PricingTab'
// import './App.css'
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


      {/* Landing Pages */}

      <Route path="/" element={< Home />} />
      <Route path="/fresherJobs" element={<FresherJobs />} />
      <Route path="/contact-us" element={<AllContactUs />} />
      <Route path="/pricing" element={<PricingTab />} />


      {/* Student Pages */}
      <Route path="/personal-details" element={<PersonalDetails />} />
      <Route path="/editprofile" element={<ConfirmPersonalDetails />} />

      <Route path="/careerguidance" element={<CareerGuidance />} />
      <Route path="/requestnewguidance" element={<RequestNewGuidance />} />

      <Route path="/educational-info" element={<EducationalInfo />} />

      <Route path="/accountsetting" element={<AccountSettings />} />

      <Route path="/job-board" element={<Job />} />
      <Route path="/Popup" element={<Popup />} />

      {/* Dashboard + pay-now */}
      <Route path="/dashboard/pay-now" element={<DashboardLayout />}>
        <Route path="/dashboard/pay-now" element={<Meeting />} />
        {/* Add more nested routes here if needed */}
      </Route>



    </Routes>



  )
}


export default App;


