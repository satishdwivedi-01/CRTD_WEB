import React from "react";

const TechCareerSection = () => {
  const jobRoles = [
    {
      title: "Frontend Developer",
      category: "Frontend Development",
      openings: "1000+",
      companies: "25+",
      location: "Pan India",
      package: "3.5-6.0 LPA",
      skills: ["HTML CSS JavaScript", "React"],
    },
    {
      title: "Backend Developer",
      category: "Backend Development",
      openings: "800+",
      companies: "20+",
      location: "Pan India",
      package: "4.0-7.0 LPA",
      skills: ["Node.js Python Java SQL"],
    },
    {
      title: "Mobile App Developer",
      category: "Mobile Development",
      openings: "500+",
      companies: "15+",
      location: "Pan India",
      package: "4.0-8.5 LPA",
      skills: ["React Native Flutter", "Android iOS"],
    },
    {
      title: "Full Stack Developer",
      category: "Full Stack Development",
      openings: "750+",
      companies: "30+",
      location: "Pan India",
      package: "5.0-8.0 LPA",
      skills: ["MERN Stack", "DevOps Cloud", "Database"],
    },
  ];

  return (
    <div className="absolute w-[1317px] h-[629px] top-[531px] left-[200px]">
      {/* Header Section */}
    <div 
  className="absolute"
  style={{
    width: "1037px",
    height: "257px",
    left: "300px",
    top: "30px"
  }}
>
  <div className="mb-8">
    <h2 className="text-4xl font-extrabold text-gray-800 mx-[40px] mb-4">
      Explore Your Tech Career
    </h2>
    <p className="text-4xl text-blue-600 font-extrabold mx-[40px] mb-4">
      3000+ Immediate Openings
    </p>
    <p className="text-lg text-gray-700 ">
      Direct placement opportunities with top tech companies. No experience needed!
    </p>
  </div>
</div>

      {/* Job Cards Grid */}
      {/* <div className="grid grid-cols-2 gap-6">
        {jobRoles.map((job, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.category}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {job.openings} Openings
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Client Companies</p>
                <p className="font-medium">{job.companies}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{job.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Package</p>
                <p className="font-medium">{job.package}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</p>
              <div className="space-y-1">
                {job.skills.map((skill, i) => (
                  <p key={i} className="text-gray-600">{skill}</p>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TechCareerSection;