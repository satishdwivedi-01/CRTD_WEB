import React from "react";

const PaymentPendingBanner = ({ onPayNow }) => {
  return (
    <div
      className="flex items-start bg-[#EFF6FF] rounded-lg"
      style={{
        width: "986px",
        height: "121px",
        position: "absolute",
        top: "126px",
        left: "380px",
        overflow: "hidden",
      }}
    >
      {/* Blue left border */}
      <div
        style={{
          width: "8px",
          height: "100%",
          background: "#60A5FA", // Tailwind blue-400
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      />
      {/* Content */}
      <div className="pl-5 pt-6 pb-6 pr-8 flex flex-col justify-center w-full">
        <div className="text-[#1E40AF] font-medium text-base">
          Registration payment pending
        </div>
        <div className="text-[#2563EB] text-sm mt-1">
          Complete your payment to unlock all features.
        </div>
        <button
          onClick={onPayNow}
          className="flex items-center text-[#2563EB] text-sm mt-2 underline hover:text-[#1E40AF] font-normal w-fit"
          style={{ padding: 0, background: "none", border: "none" }}
        >
          Pay Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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

export default PaymentPendingBanner;