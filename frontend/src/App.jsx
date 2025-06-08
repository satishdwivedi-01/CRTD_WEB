import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'

import './App.css'

import PersonalDetails from './components/Eduaction/PersonalDetails'
import ConfirmPersonalDetails from './components/Eduaction/ConfirmPersonalDetails'

import CareerGuidance from './components/Career-Guidance/CareerGuidance'
import RequestNewGuidance from './components/Career-Guidance/RequestNewGuidance'
import AccountSettings from './components/AccountSetting/AccountSetting'


function App() {

  return (
    <>

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
        
        <Route path="/accountsetting" element={<AccountSettings />} />


      </Routes>

    </>
  )
}

export default App;

