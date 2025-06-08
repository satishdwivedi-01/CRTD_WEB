
import React from 'react';
import { Clock, Calendar, X } from 'lucide-react';
import CareerGuidanceNavbar from './CareerGuidanceSidenavbar';
import { useNavigate } from 'react-router-dom';


const CareerGuidance = () => {
  const navigate = useNavigate();

  return (

    <div className="flex h-screen">
      <CareerGuidanceNavbar />
      <div className="flex-1 bg-gray-50 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">Career Guidance</h1>
          <p className="text-black">Get personalized career advice from industry experts</p>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex cursor-pointer space-x-6 border-b border-gray-200">
            <button className="pb-2 px-1 text-blue-600 border-b-2 border-blue-600 font-medium">
              My Guidance Request
            </button>

            <button
              className="pb-2 px-1 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => navigate('/requestnewguidance')}
            >
              Request New Guidance
            </button>


          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white  rounded-lg shadow-sm border  p-6 mb-8">
          {/* Resume Review Request */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Resume Review Request</h3>
                <p className="text-sm text-gray-500">Created on June 15, 2025</p>
              </div>
              <span className="bg-blue-100 cursor-pointer text-blue-800 text-xs font-medium px-3 py-2 rounded-full">
                Scheduled
              </span>
            </div>

            <p className="text-gray-700 font-medium mb-4">
              I would like feedback on my resume for frontend developer positions.
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1 font-semibold">
                <Clock size={16} />
                <span>Preferred Time: Weekends, After 5pm</span>
              </div>
              <div className="flex items-center font-semibold space-x-1">
                <Calendar size={16} />
                <span>Scheduled: July 5, 2025 at 19:30</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 mb-3">Assigned Mentor</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="flex w-10 h-10 items-center space-x-2">
                      <img
                        src="team.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>

                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-gray-900">Ravi Kumar</h4>
                    <p className="text-sm text-gray-500">Career mentor</p>
                  </div>
                </div>
                <button className="text-blue-600 cursor-pointer hover:text-blue-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>


          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Career Transition Advice</h3>
                <p className="text-sm text-gray-500">Created on June 20, 2025</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-100 cursor-pointer text-yellow-800 text-xs font-semibold px-3 py-2 rounded-full">
                  Pending
                </span>
                <button className="text-gray-400 hover:text-gray-600">

                </button>
              </div>
            </div>

            <p className="text-gray-700 font-semibold mb-4">
              I am looking to transition from QA to development. Need guidance on the path forward.
            </p>

            <div className="flex items-center font-semibold space-x-1 text-sm text-gray-600">
              <Clock size={16} />
              <span>Preferred Time: Weekdays, Morning</span>
            </div>

            <div className="mt-3 text-right ]">
              <button className="text-gray-600 font-semibold cursor-pointer  hover:text-red-700 text-sm">
                Cancel Request


              </button>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Career Development Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Resume Writing Tips</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to create a resume that stands out to employers.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More →
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-bold  text-lg text-gray-900 mb-2">Interview Preparation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Strategies and tips to excel in technical and HR interviews.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More →
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-bold  text-lg text-gray-900 mb-2">Career Path Planning</h3>
              <p className="text-sm font-normal text-gray-600 mb-3">
                Guide to planning your long-term career growth and advancement.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More →
              </button>
            </div>
          </div>
        </div>


        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 CRTD Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;