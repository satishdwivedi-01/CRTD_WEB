import { Routes, Route } from 'react-router-dom'


import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'
import './App.css'
import DashboardLayout from './components/student/dashboard/DashboardLayout'
import Meeting from './components/student/dashboard/Meeting'

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

     
  )
}

export default App
