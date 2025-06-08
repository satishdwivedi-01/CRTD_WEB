import React from "react";
import { FaSuitcase } from "react-icons/fa"; // bag/icon for job board
import { FiLock } from "react-icons/fi";    // lock icon

const JobBoardCard = () => (
  <div
    className="bg-white rounded-lg shadow-md flex flex-col p-6"
    style={{
      width: "455px",
      height: "182px",
      position: "absolute",
      top: "1206px",
      left: "380px",
      border: "1.5px solid #E5E7EB",
    }}
  >
    {/* Icon */}
    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mb-4">
      <FaSuitcase className="text-blue-500 text-2xl" />
    </div>
    {/* Title */}
    <h2 className="text-lg font-semibold text-gray-900 mb-1">Job Board</h2>
    {/* Description */}
    <p className="text-sm text-gray-600 mb-2">
      Browse and apply for fresher job opportunities across multiple industries and locations
    </p>
    {/* Lock/Payment */}
    <div className="flex items-center text-xs text-gray-400 mt-auto">
      <FiLock className="mr-1" /> Locked (Requires Payment)
    </div>
  </div>
);

export default JobBoardCard;