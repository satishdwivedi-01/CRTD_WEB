import React from 'react';

const SidebarItem = ({ icon: Icon, label, href, isActive = false, badge, isCollapsed = false, status }) => {
  const handleClick = (e) => {
    if (status === 'Locked') {
      e.preventDefault();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group flex items-center justify-between gap-3 px-4 py-2 rounded-lg transition-all duration-200
        ${isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'}
        ${status === 'Locked' ? 'text-gray-400 cursor-not-allowed' : ''}
      `}
    >
      {/* Left side (icon + label) */}
      <div className="flex items-center gap-3 overflow-hidden">
        {Icon && <Icon size={20} className={`${status === 'Locked' ? 'opacity-50' : ''}`} />}
        {!isCollapsed && (
          <span className={`truncate ${status === 'Locked' ? 'opacity-50' : ''}`}>
            {label}
          </span>
        )}
      </div>

      {/* Right side (badge or status) */}
      {!isCollapsed && (
        <div className="flex items-center gap-2">
          {badge && (
            <span className={`
              text-xs px-2 py-0.5 rounded-full font-medium border
              ${badge === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' :
                badge === 'Pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                'bg-gray-100 text-gray-800 border-gray-200'}
            `}>
              {badge}
            </span>
          )}
          {status === 'Locked' && (
            <span className="text-xs text-gray-400 font-medium">Locked</span>
          )}
        </div>
      )}
    </a>
  );
};

export default SidebarItem;
