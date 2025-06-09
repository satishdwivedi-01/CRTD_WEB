import React from "react";

const RegistrationPendingCard = ({ onPayNow }) => {
  return (
    <div
      className="relative"
      style={{
        width: "998px",
        height: "273px",
        borderRadius: "20px",
        background: "#FFFFFF",
        boxShadow: "0px 2px 12px 0px #0000000A",
        overflow: "hidden",
        top:'250px',
        left:'140px'
      }}
    >
      {/* Banner */}
      <div
        className="flex items-center px-6 py-5"
        style={{
          background: "#FFF8E7",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderLeft: "6px solid #ED9E20",
        }}
      >
        {/* Alert Icon */}
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="mr-3"
        >
          <path
            d="M12 9v4M12 17h.01M21 18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12Z"
            stroke="#ED9E20"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <div className="font-semibold text-[#A05F00] text-base">
            Registration Pending (₹1000)
          </div>
          <div className="text-[#A05F00] text-[15px] leading-tight">
            Complete your payment to unlock job applications and career guidance features.
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="px-8 py-6">
        <div className="text-[20px] text-[#232323] font-medium mb-8" style={{lineHeight: "1.4"}}>
          Your Profile is completed, but you need to make the registration payment to access all features of the platform.
        </div>
        <button
          className="flex items-center px-5 py-2 bg-[#2563EB] hover:bg-[#1e40af] text-white rounded-md font-medium text-base transition-colors"
          style={{
            boxShadow: "0 2px 4px 0 #2563EB1a",
          }}
          onClick={onPayNow}
        >
          Pay Now to Unlock Job Applications
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RegistrationPendingCard;