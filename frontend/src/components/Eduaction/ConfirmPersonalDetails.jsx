import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Calendar, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SideNavbar from './SideNavbar';

const ConfirmPersonalDetails = () => {
  const [formData, setFormData] = useState({
    emailId: 'john@gmail.com',
    fullName: 'John Francis D\'Souza',
    dateOfBirth: '01-03-2005',
    fatherName: '',
    phoneNumber: '1234567890',
    whatsappNumber: '1234567890',
    birthplaceState: '',
    city: '',
    pinCode: '',
    permanentAddress: '',
    sameAsPermament: false,
    currentState: '',
    currentCity: '',
    currentPinCode: '',
    currentAddress: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };



  
  const handleSubmitbtn = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/confirmprofile'); 
  };

  return (


     <div className="flex h-screen">
        <SideNavbar/>
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="  ml-8 mt-4  w-[150vh]">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
         
          
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
             
             
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm font-medium text-orange-800">Your profile is incomplete</p>
                  <p className="text-sm text-orange-600">Please complete your profile to access all features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border">
          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Personal Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Personal Details</h2>
              <p className="text-sm text-gray-600 mb-6">Please provide your Personal Information</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@gmail.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Francis D'Souza"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="01-03-2005"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Father's Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Permanent Address */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Permanent Address</h2>
              <p className="text-sm text-gray-600 mb-6">Please provide your Permanent Address</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Birthplace State
                  </label>
                  <input
                    type="text"
                    name="birthplaceState"
                    value={formData.birthplaceState}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="State"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="City"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="PIN Code"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Enter your permanent address"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsPermament"
                  name="sameAsPermament"
                  checked={formData.sameAsPermament}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="sameAsPermament" className="text-sm text-gray-700">
                  Check this box if your current address is the same as your permanent address.
                </label>
              </div>
            </div>

            {/* Current Address */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Current Address</h2>
              <p className="text-sm text-gray-600 mb-6">Please provide your Current Address</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current State
                  </label>
                  <input
                    type="text"
                    name="currentState"
                    value={formData.currentState}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="State"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="currentCity"
                    value={formData.currentCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="City"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    name="currentPinCode"
                    value={formData.currentPinCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="PIN Code"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Enter your current address"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">© 2025 CRTD Technologies. All rights reserved.</p>
              <button
              onClick={handleSubmitbtn}
                type="submit"
                className="px-8 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Confirm Your Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConfirmPersonalDetails;
