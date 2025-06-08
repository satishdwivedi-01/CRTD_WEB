
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  User, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '#',
      isActive: true
    },
    {
      icon: User,
      label: 'Personal details',
      href: '#',
      isActive: false,
      badge: 'Completed'
    },
    {
      icon: GraduationCap,
      label: 'Educational Info',
      href: '#',
      isActive: false,
      badge: 'Pending'
    },
    {
      icon: Briefcase,
      label: 'Job Board',
      href: '#',
      isActive: false,
      status: 'Locked'
    },
    {
      icon: Users,
      label: 'Career Guidance',
      href: '#',
      isActive: false,
      status: 'Locked'
    },
    {
      icon: Settings,
      label: 'Settings',
      href: '#',
      isActive: false
    }
  ];

  return (
    <div className={`bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-blue-600">CRTD Technologies</h1>
              <p className="text-xs text-gray-500">Connecting Freshers</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
      </div>

      {/* Profile Section */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={20} className="text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                John Francis D'Souza
              </h3>
              <p className="text-xs text-gray-500 truncate">
                john@gmail.com
              </p>
            </div>
          </div>


           {!isCollapsed && (
        <div className="p-2 mt-4 rounded  bg-gray-100">
          <div className="">
            <div className="text-xs text-gray-500 mb-1">Membership Status</div>
            <div className="text-sm font-medium text-red-600">Inactive</div>
          </div>
        </div>



      )}
        </div>
      )}

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={item.isActive}
            badge={item.badge}
            status={item.status}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      {/* Sign Out */}
      <div className="p-2 border-t border-gray-200">
        <SidebarItem
  icon={LogOut}
  label="Sign Out"
  href="#"
  isActive={false}
  isCollapsed={isCollapsed}
  variant="danger"
  className="text-red-600 hover:text-red-800 font-semibold"
/>

      </div>

     
    
    </div>
  );
};

export default Sidebar;
