import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftMenu from './leftMenu';
import All from './All';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftMenu />
      <div className="flex-1 flex flex-col p-6">
        {/* Main Content */}
        <div className="flex-1">
          <Outlet />
        </div>
        {/* Footer */}
        <footer className="mt-auto">
  <div style={{ marginTop: '60px',  marginRight: '60px' }}>
    <All />
  </div>
</footer>
      </div>
    </div>
  );
};

export default DashboardLayout;