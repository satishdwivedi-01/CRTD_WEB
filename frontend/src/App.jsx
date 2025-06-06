import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'

import './App.css'

function App() {
  return (
    <>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/fresherJobs" element={<FresherJobs />} />
      </Routes>

    </>
  )
}

export default App

