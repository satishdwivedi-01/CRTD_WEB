import React from "react";
import frontend from "../../../assets/frontend.png";
import cross from "../../../assets/cross.png";


const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0  bg-opacity-40 flex justify-center items-center z-50">
      <div className="w-[563px] h-[387px] rounded-[10px] shadow-2xl bg-white relative">
        {/* Header */}
        <div className="flex flex-row justify-between px-[28px] py-[19px]">
          <div className="flex flex-row gap-4 items-center">
            {/* <img src={arrowLeft} alt="back" className="w-5 h-5" /> */}
            <div className="w-8 h-8 bg-[rgba(243,244,246,1)] flex items-center justify-center rounded-[5px]">
              <img src={frontend} alt="frontend" height="15" width="15" />
            </div>
            <h1 className="text-[16px] font-poppins text-[rgba(17,24,39)] font-semibold">
              Frontend Developer
            </h1>
          </div>
          <div className="pt-1 cursor-pointer" onClick={onClose}>
            <img src={cross} alt="cross" height="16" width="16" />
          </div>
        </div>

        {/* Info Row */}
        <div className="flex flex-row justify-between px-[28px]">
          <div>
            <div className="text-xs text-gray-400 font-medium">Salary</div>
       <div className="text-sm font-semibold text-black">₹4-6 LPA</div>

          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Application Deadline</div>
            <div className="text-sm font-semibold text-black">July 30, 2025</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Posted</div>
            <div className="text-sm font-semibold text-black">3 days ago</div>
          </div>
        </div>

        <div className="px-[28px] mt-5">
          <div className="text-[14px] font-poppins text-black font-semibold mb-2">Job Description</div>
          <div className="text-sm text-gray-700 mb-4">
            We are looking for a talented Frontend Developer with knowledge of modern JavaScript frameworks.
          </div>
          <div className="text-[14px] font-poppins text-black font-semibold mb-2">Requirements Skills</div>
          <div className="flex flex-row gap-2 mb-4">
            {["HTML/CSS", "JavaScript", "React", "Responsive Design"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-[rgba(227,227,227,1)] mt-2"></div>

        {/* Apply Now Button */}
        <div className="flex justify-end px-[28px] mt-4">
          <button className="w-[134px] h-[44px] bg-[rgba(37,99,235,1)] flex items-center justify-center rounded-md">
            <span className="text-sm font-poppins text-white font-medium">Apply Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;