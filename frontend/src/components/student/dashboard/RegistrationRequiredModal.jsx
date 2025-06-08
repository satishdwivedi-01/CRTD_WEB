import React from "react";
import { FiAlertTriangle, FiX, FiCheck } from "react-icons/fi";
import { FaBullseye } from "react-icons/fa";
import ReactDOM from "react-dom";

const RegistrationRequiredModal = ({ open, onClose, onRegister }) => {
  if (!open) return null;

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">

      <div
        className="bg-white rounded-2xl shadow-lg relative flex flex-col items-center"
        style={{
          width: "774px",
          height: "610px",
        }}
      >
        {/* Header */}
        <div className="w-full flex flex-col items-center bg-[#DD2323] rounded-t-2xl pt-6 pb-3 relative">
          <FiAlertTriangle className="text-white text-5xl mb-2" />
          {/* Close Button */}
          <button
            className="absolute right-6 top-6 text-white text-2xl focus:outline-none"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            <FiX />
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center px-8 mt-7 mb-3 w-full">
          <h2 className="text-[#DD2323] font-semibold text-xl mb-1 text-center">
            Action Required !
          </h2>
          <h3 className="font-bold text-xl mb-4 text-center">
            Complete Your Registration First
          </h3>
          <p className="text-gray-500 text-center mb-7 max-w-[500px]">
            Before you apply for this opportunity, please complete the one-time registration payment. Your application cannot be submitted until payment is confirmed.
          </p>
          <div className="flex flex-col w-full max-w-xl">
            <div className="flex items-center mb-3">
              <span className="bg-blue-100 rounded-md p-2 mr-3">
                <FaBullseye className="text-blue-600 text-2xl" />
              </span>
              <span className="font-bold text-gray-800 text-lg">Unlock access to</span>
            </div>
            <ul className="mb-4 pl-12">
              <li className="flex items-center gap-2 mb-2 text-gray-700 text-base">
                <FiCheck className="text-blue-600" /> 3000+ job openings
              </li>
              <li className="flex items-center gap-2 mb-2 text-gray-700 text-base">
                <FiCheck className="text-blue-600" /> Expert career guidance
              </li>
              <li className="flex items-center gap-2 mb-2 text-gray-700 text-base">
                <FiCheck className="text-blue-600" /> Resume & Interview Support
              </li>
              <li className="flex items-center gap-2 mb-2 text-gray-700 text-base">
                <FiCheck className="text-blue-600" /> Direct connections with top tech companies
              </li>
            </ul>
            <span className="text-[#DD2323] text-base pl-12 font-semibold">
              * Complete Your registration now to start applying
            </span>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center gap-8 mt-auto pb-10 w-full">
          <button
            className="bg-[#DD2323] hover:bg-[#c41f1f] text-white px-8 py-3 rounded-lg font-bold text-lg transition"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
            onClick={onRegister}
            type="button"
          >
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationRequiredModal;