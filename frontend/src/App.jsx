import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'

import './App.css'
import CareerGuidance from './components/Career-Guidance/CareerGuidance'
import RequestNewGuidance from './components/Career-Guidance/RequestNewGuidance'
import AccountSettings from './components/AccountSetting/AccountSetting'
import EducationalInfo from './components/Education/EducationInfo'


function App() {

  return (
    <>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/fresherJobs" element={<FresherJobs />} />
         <Route path="/careerguidance" element={<CareerGuidance />} />
          <Route path="/requestnewguidance" element={<RequestNewGuidance />} />
            <Route path="/accountsetting" element={<AccountSettings />} />
             <Route path="/educationinfo" element={<EducationalInfo />} />
               


      </Routes>

    </>
  )
}

export default App

