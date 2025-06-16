

import { Routes, Route, Link } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute';


import Home from './components/crtd Landing page/home/Home'
import FresherJobs from './components/crtd Landing page/fresher Jobs/FresherJobs'
import AllContactUs from './components/crtd Landing page/contact Us/AllContactUs'
import PricingTab from './components/crtd Landing page/Pricing/components/PricingTab'
import ServicesTab from './components/crtd Landing page/services/Components/servicesTab'
import LoginPage from './components/crtd Landing page/Login and SignUp/components/LoginPage/LoginPage'
import SignUpPage from './components/crtd Landing page/Login and SignUp/components/SignUp/SignUpPage'



// import './App.css'
import DashboardLayout from './components/student/Meet/DashboardLayout'
import Meeting from './components/student/Meet/Meeting'

import PersonalDetails from './components/student/PersonalDetails/PersonalDetails'
import ConfirmPersonalDetails from './components/student/PersonalDetails/ConfirmPersonalDetails'

import CareerGuidance from './components/student/Career-Guidance/CareerGuidance'
import RequestNewGuidance from './components/student/Career-Guidance/RequestNewGuidance'
import AccountSettings from './components/student/AccountSetting/AccountSetting'
import EducationalInfo from './components/student/Education/EducationInfo'


import Job from './components/student/JobBoard/Job'

import Popup from './components/student/JobBoard/Popup'

import StudentHome from './components/student/student-dashboard/components/home/Home'
import EditDetails from './components/student/PersonalDetails/EditDetails'
import CreateJobForm from './components/admin/CreateJobForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {



  return (

    <>
      <ToastContainer position="bottom-right" />
      <Routes>


        {/* Landing Pages */}

        <Route path="/" element={< Home />} />
        <Route path="/fresherJobs" element={<FresherJobs />} />
        <Route path="/contact-us" element={<AllContactUs />} />
        <Route path="/pricing" element={<PricingTab />} />
        <Route path="/services" element={<ServicesTab />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />


        {/* Student Pages */}
        <Route
          path="/personal-details"
          element={
            <ProtectedRoute>
              {(userData) => <PersonalDetails userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/editprofile"
          element={
            <ProtectedRoute>
              {(userData) => <EditDetails userData={userData} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirmprofile"
          element={
            <ProtectedRoute>
              {(userData) => <ConfirmPersonalDetails userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/careerguidance"
          element={
            <ProtectedRoute>
              {(userData) => <CareerGuidance userData={userData} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/requestnewguidance"
          element={
            <ProtectedRoute>
              {(userData) => <RequestNewGuidance userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/educational-info"
          element={
            <ProtectedRoute>
              {(userData) => <EducationalInfo userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/accountsetting"
          element={
            <ProtectedRoute>
              {(userData) => <AccountSettings userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/job-board"
          element={
            <ProtectedRoute>
              {(userData) => <Job userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/Popup"
          element={
            <ProtectedRoute>
              {(userData) => <Popup userData={userData} />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {(userData) => <StudentHome userData={userData} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/CreateJobForm"
          element={
            <ProtectedRoute>
              {(userData) => <CreateJobForm userData={userData} />}
            </ProtectedRoute>
          }
        />

        {/* Dashboard + pay-now */}
        <Route
          path="/dashboard/pay-now"
          element={
            <ProtectedRoute>
              {(userData) => (
                <DashboardLayout userData={userData}>
                  <Meeting userData={userData} />
                </DashboardLayout>
              )}
            </ProtectedRoute>
          }
        />


      </Routes>

    </>

  )
}


export default App;


