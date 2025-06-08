import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'

import './App.css'
import PersonalDetails from './components/Eduaction/PersonalDetails'
import ConfirmPersonalDetails from './components/Eduaction/ConfirmPersonalDetails'
import EditDetails from './components/Eduaction/EditDetails'

function App() {
  return (
    <>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/fresherJobs" element={<FresherJobs />} />
        <Route path="/person" element={<PersonalDetails />} />
                   <Route path="//confirmprofile" element={<ConfirmPersonalDetails />} />
                     <Route path="/editprofile" element={<EditDetails />} />
      </Routes>

    </>
  )
}

export default App;

