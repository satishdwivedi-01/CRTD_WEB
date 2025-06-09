import React from "react";
import frontend from "../../assets/frontend.png";
import cross from "../../assets/cross.png";

const Popup = () => {
  return (
    <div className="w-[563px] h-[387px] mx-auto mt-10 rounded-[10px] shadow-2xl bg-white">
      {/* Header */}
      <div className="flex flex-row justify-between px-[28px] py-[19px]">
        <div className="flex flex-row gap-4 items-center">
          <div className="w-8 h-8 bg-[rgba(243,244,246,1)] flex items-center justify-center rounded-[5px]">
            <img src={frontend} alt="frontend" height="9" width="15" />
          </div>
          <h1 className="text-[14px] font-poppins text-[rgba(17,24,39)] font-semibold">
            Frontend Developer
          </h1>
        </div>

        <div className="pt-1 cursor-pointer">
          <img src={cross} alt="cross" height="12" width="12" />
        </div>
      </div>

      {/* Info Row */}
      <div className="w-full h-[50px] border-t border-b -mt-1 border-[rgba(227,227,227,1)] bg-[rgba(243,244,246,1)] flex items-center px-6 gap-6">
        {/* Salary Block */}
        <div className="flex flex-col mx-7">
          <h1 className="text-[rgba(157,157,157,1)] text-[14px] font-medium font-poppins">
            Salary
          </h1>
          <h1 className="text-[14px] -mx-1 font-semibold text-black font-poppins ">
            ₹4-6 LPA
          </h1>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] mx-2 h-[50px] bg-[rgba(227,227,227,1)]"></div>

        {/* Example: Location Block (you can change content) */}
        <div className="flex flex-col mx-5">
          <h1 className="text-[rgba(157,157,157,1)] text-[14px] font-medium font-poppins">
          Application Deadline
          </h1>
          <h1 className="text-[14px] mx-4 font-semibold text-black font-poppins">
          July 30, 2025
          </h1>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-[50px] -mx-2 bg-[rgba(227,227,227,1)]"></div>

        {/* Example: Experience Block */}
        <div className="flex flex-col mx-4">
          <h1 className="text-[rgba(157,157,157,1)] mx-1 text-[14px] font-medium font-poppins">
          Posted
          </h1>
          <h1 className="text-[14px] -mx-1 font-semibold text-black font-poppins">
          3 days ago
          </h1>
        </div>
      </div>

      <div className="mt-4">
  <h1 className="mx-12 text-base font-poppins font-semibold text-black">
    Job Description
  </h1>
  <p className="px-12 mt-[10px] text-sm font-poppins font-normal text-gray-700">
    We are looking for a talented Frontend Developer with knowledge
    <br />
    of modern JavaScript frameworks.
  </p>
</div>


  <h1 className="mx-12 py-[11px]  text-base font-poppins font-semibold text-black">
  Requirements Skills
  </h1>
  
<div className="mt-[9px] mx-12 gap-[10px] flex flex-row">
<div className="h-[35px] w-[88px] rounded-[5px] text-center flex justify-center items-center bg-[rgba(243,244,246,1)]">
    <h1 className="text-[14px] font-medium text-[rgba(55,65,81,1)]">HTML/CSS</h1>
</div>
<div className="h-[35px] w-[92px] rounded-[5px] text-center flex justify-center items-center bg-[rgba(243,244,246,1)]">
    <h1 className="text-[14px] font-medium text-[rgba(55,65,81,1)]">JavaScript</h1></div>
<div className="h-[35px] w-[57px] rounded-[5px] text-center flex justify-center items-center bg-[rgba(243,244,246,1)]"><h1 className="text-[14px] font-medium text-[rgba(55,65,81,1)]">React</h1></div>
<div className="h-[35px] w-[148px] rounded-[5px] text-center flex justify-center items-center bg-[rgba(243,244,246,1)]"><h1 className="text-[14px] font-medium text-[rgba(55,65,81,1)]">Responsive Design</h1></div>
</div>

<div className=" w-[563px] h-[1px] bg-[rgba(227,227,227,1)] mt-6 "></div>
   
   <div className="w-[134px] h-[44px] bg-[rgba(37,99,235,1)] mt-3  mx-[400px]  mr-[24px ] flex items-center text-center justify-center  rounded-md  "><h1 className="text-4 font-poppings text-white font-medium flex items-center text-center justify-center">Apply Now</h1></div>

    </div>
  );
};

export default Popup;
