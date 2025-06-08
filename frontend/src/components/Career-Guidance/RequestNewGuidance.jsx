
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import CareerGuidanceNavbar from '../CareerGuidanceSidenavbar';


const RequestNewGuidance = () => {
  const [activeTab, setActiveTab] = useState('request');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { subject, description, preferredTime });
  };

  const navigate = useNavigate();

  return (

    <div className="flex h-screen">
      <CareerGuidanceNavbar />
      <div className="flex-1 bg-gray-50 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Career Guidance</h1>
          <p className="text-black">Get personalized career advice from industry experts</p>
        </div>


        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-6 border-b border-gray-200">

            <button
              className={`pb-2 px-1 cursor-pointer font-medium ${activeTab === 'my-requests'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => {
                setActiveTab('my-requests');
                navigate('/careerGuidance'); // 🔁 redirect to the route
              }}
            >
              My Guidance Request
            </button>


            <button
              className={`pb-2 px-1 cursor-pointer font-medium ${activeTab === 'request'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              onClick={() => {
                setActiveTab('request');
                navigate('/requestnewguidance'); // ⬅️ Navigate to the route
              }}
            >
              Request New Guidance
            </button>


          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <div className="bg-blue-200 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-blue-900">How Career Guidance Works:</h3>
              <span className=" text-blue-800 text font-medium px-2.5 py-0.5 rounded-full">
                Scheduled
              </span>
            </div>

            <ul className="space-y-2 text-blue-700">
              <li>• Submit your guidance request with specific questions or topics</li>
              <li>• Our team will assign an expert career mentor based on your needs</li>
              <li>• You'll receive a scheduled time for your guidance session</li>
              <li>• Sessions take place via video call and last approximately 30-45 minutes</li>
            </ul>
          </div>

          {/* Request Form */}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl   mx-auto">
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Eg. Career Guidance"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border text-black border-gray-400 rounded-md px-4 py-2 focus:outline-none "
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Describe what you need..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border text-black border-gray-400 rounded-md px-1 py-1 min-h-[30px] focus:outline-none "
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label htmlFor="time" className="text-sm font-medium text-gray-700 mb-2 block">
                Preferred Time for Guidance
              </label>
              <input
                id="time"
                type="text"
                placeholder="Eg. Weekdays after 5pm"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none "
              />
            </div>

            {/* Upload Resume */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Upload Resume (Optional)
              </label>

              <div className="border-2 flex border  mt-4 border-gray-400 rounded-lg p-3 w-35 h-14 ">
                <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />

                {/* Hidden file input */}
                <input
                  type="file"
                  id="resume"
                  onChange={(e) => console.log("Selected file:", e.target.files[0])}
                  className="hidden"
                />

                {/* Label as button for input click */}
                <label
                  htmlFor="resume"
                  className="text-black hover:text-blue-700 font-medium text-sm cursor-pointer"
                >
                  Choose file
                </label>
              </div>
            </div>


            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-6 py-2 border font-medium border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 font-medium  text-white rounded-md hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </div>
          </form>


        </div>

        {/* Career Development Resources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Career Development Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Resume Writing Tips</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to create a resume that stands out to employers.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold  text-lg text-gray-900 mb-2">Interview Preparation</h3>
              <p className="text-sm text-gray-600 mb-3">
                Strategies and tips to excel in technical and HR interviews.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More
              </button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold  text-gray-900 mb-2">Career Path Planning</h3>
              <p className="text-sm text-gray-600 mb-3">
                Guide to planning your long-term career growth and advancement.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 CRTD Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default RequestNewGuidance;
