import React from 'react';
import {
  LayoutDashboard,
  User,
  BookOpen,
  Briefcase,
  School,
  Settings,
  LogOut
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const CareerGuidanceNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'DashBoard', route: '/dashboard' },
    { icon: User, label: 'Personal details', route: '/personal-details' },
    { icon: BookOpen, label: 'Educational Info', route: '/educational-info' },
    { icon: Briefcase, label: 'Job Board', route: '/job-board' },
    { icon: School, label: 'Career Guidance', route: '/careerGuidance' },
    { icon: Settings, label: 'Settings', route: '/accountsetting' },
  ];

  return (
    <div className="w-64 bg-white  border-r border-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">CRTD Technologies</h1>
        <p className="text-sm text-gray-500">Connecting freshers</p>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">J</span>
          </div>
          <div>
            <h3 className="font-semibold text text-gray-900">John Francis D'Souza</h3>
            <p className="text-sm font-semibold text-gray-500">john@gmail.com</p>
          </div>
        </div>
        <div className="mt-3 text-sm font-normal bg-gray-200 py-1 px-1 rounded text-gray-500">
          <p>
            Membership Status:{" "}
            <span className="text-green-600 font-semibold">Active</span>
          </p>
          <p>MS Id No: 8520947963</p>
          <p>Valid till: 02-06-2026</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.route;

            return (
              <li key={index}>
                <button
                  onClick={() => navigate(item.route)}
                  className={`w-full text-left font-semibold flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${isActive
                      ? 'bg-green-100 text-green-700 font-semibold border-l-4 border-green-600'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => navigate("/logout")}
          className="flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default CareerGuidanceNavbar;
