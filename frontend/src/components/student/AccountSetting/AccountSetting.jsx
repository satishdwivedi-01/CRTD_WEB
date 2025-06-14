
import { useState } from "react";
import { Eye, EyeOff, Calendar } from "lucide-react";
import CareerGuidanceNavbar from "../../StudentSideNavBar";

const AccountSettings = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (


    <div className="flex h-screen">
      <CareerGuidanceNavbar />
      <div className="w-[140vh] ml-20">
         <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account settings and password</p>
          </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
         

          <div className="p-6">
            {/* Account Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@yahoo.co.in"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                  <input
                    type="tel"
                    defaultValue="9676542320"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Membership Status</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="Active"
                      readOnly
                      className="w-full px-3 py-2 pl-10 border border-green-300 bg-green-50 text-green-800 font-semibold rounded-md focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-green-500"></span>
                  </div>
                </div>

              </div>

              {/* Membership Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Calendar size={16} />
                  <span className="font-medium">Membership Valid Till</span>
                </div>
                <p className="text-blue-600 mt-1">02-06-2026</p>
              </div>
            </div>

            {/* Change Password */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Enter your current Password"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter your new Password"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your new Password"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium">
                  Update Password
                </button>
              </div>
            </div>

            {/* Sign Out Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Sign Out</h2>
              <p className="text-gray-600 mb-4">Sign out from your account on this device.</p>
              <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-md transition-colors duration-200 font-medium">
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 CRTD Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
