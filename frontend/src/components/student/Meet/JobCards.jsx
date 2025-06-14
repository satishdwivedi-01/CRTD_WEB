import React, { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaCode,
  FaChevronRight,
  FaChevronLeft,
  FaGlobe,
} from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import RegistrationRequiredModal from "./RegistrationRequiredModal";

const jobsSet1 = [
  {
    title: "Frontend Developer",
    subtitle: "Frontend Development",
    icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
    openings: "1000+",
    companies: "25+",
    location: "Pan India",
    package: "3.5-6.0 LPA",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Developer",
    subtitle: "Backend Development",
    icon: <FaServer className="text-green-500 text-2xl" />,
    openings: "800+",
    companies: "20+",
    location: "Pan India",
    package: "4.0-7.0 LPA",
    skills: ["Node.js", "Python", "Java", "SQL"],
  },
  {
    title: "Mobile App Developer",
    subtitle: "Mobile Development",
    icon: <FaMobileAlt className="text-purple-500 text-2xl" />,
    openings: "500+",
    companies: "15+",
    location: "Pan India",
    package: "4.0-6.5 LPA",
    skills: ["React Native", "Flutter", "Android", "iOS"],
  },
  {
    title: "Full Stack Developer",
    subtitle: "Full Stack Development",
    icon: <FaCode className="text-orange-500 text-2xl" />,
    openings: "750+",
    companies: "30+",
    location: "Pan India",
    package: "5.0-8.0 LPA",
    skills: ["MERN Stack", "DevOps", "Cloud", "Database"],
  },
];

const jobsSet2 = [
  {
    title: "Java Developer",
    subtitle: "Java Developer",
    icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
    openings: "1000+",
    companies: "25+",
    location: "Pan India",
    package: "3.5-6.0 LPA",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Python Developer",
    subtitle: "Python Development",
    icon: <FaServer className="text-green-500 text-2xl" />,
    openings: "800+",
    companies: "20+",
    location: "Pan India",
    package: "4.0-7.0 LPA",
    skills: ["Node.js", "Python", "Java", "SQL"],
  },
  {
    title: "UI Developer",
    subtitle: "Mobile Development",
    icon: <FaMobileAlt className="text-purple-500 text-2xl" />,
    openings: "500+",
    companies: "15+",
    location: "Pan India",
    package: "4.0-6.5 LPA",
    skills: ["React Native", "Flutter", "Android", "iOS"],
  },
  {
    title: "Data Analyst",
    subtitle: "Full Stack Development",
    icon: <FaGlobe className="text-orange-500 text-2xl" />,
    openings: "750+",
    companies: "30+",
    location: "Pan India",
    package: "5.0-8.0 LPA",
    skills: ["MERN Stack", "DevOps", "Cloud", "Database"],
  },
];


const JobCards = () => {
  const [showSecondSet, setShowSecondSet] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const jobs = showSecondSet ? jobsSet2 : jobsSet1;

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      {/* Cards Section */}
<div className="relative mt-[400px] px-6" style={{ marginLeft: "100px" }}>        <div className="overflow-x-auto whitespace-nowrap scroll-hide">
          <div className="flex gap-4 w-max">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg transition-shadow shrink-0"
                style={{
                  width: "239px",
                  height: "382px",
                  marginTop: "26px",
                  boxShadow: "0px 0px 10px 0px #00000040",
                }}
              >
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-gray-100 rounded-full">{job.icon}</div>
                        <div>
                          <h2 className="text-base font-bold text-gray-800">{job.title}</h2>
                          <p className="text-sm text-gray-600">{job.subtitle}</p>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {job.openings}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm mb-3">
                      <p className="flex justify-between text-xs">
                        <span className="text-gray-500">Client Companies</span>
                        <span className="font-medium">{job.companies}</span>
                      </p>
                      <p className="flex justify-between text-xs">
                        <span className="text-gray-500">Location</span>
                        <span className="font-medium">{job.location}</span>
                      </p>
                      <p className="flex justify-between text-xs">
                        <span className="text-gray-500">Package</span>
                        <span className="font-medium">{job.package}</span>
                      </p>
                      <p className="flex justify-between text-xs">
                        <span className="text-gray-500">Experience</span>
                        <span className="font-medium">0–2 years</span>
                      </p>
                    </div>
                    <div className="mb-2">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-sm font-medium"
                    onClick={() => setModalOpen(true)}
                  >
                    Apply Now <FiLock />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {!showSecondSet && (
          <div
            onClick={() => setShowSecondSet(true)}
            className="absolute bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100"
            style={{
              width: "35px",
              height: "35px",
              top: "192px",
              right: "10px",
              zIndex: 10,
            }}
          >
            <FaChevronRight className="text-gray-600" />
          </div>
        )}

        {/* Left Arrow */}
        {showSecondSet && (
          <div
            onClick={() => setShowSecondSet(false)}
            className="absolute bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100"
            style={{
              width: "35px",
              height: "35px",
              top: "192px",
              left: "10px",
              zIndex: 10,
            }}
          >
            <FaChevronLeft className="text-gray-600" />
          </div>
        )}
      </div>

      {/* Modal with overlay */}
{modalOpen && (
      <RegistrationRequiredModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onRegister={() => {
          setModalOpen(false);
      // Add redirect or other logic here
    }}
  />
)}



    </>
  );
};

export default JobCards;
