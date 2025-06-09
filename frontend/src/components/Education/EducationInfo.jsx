import React, { useState } from 'react';
import { AlertCircle, Upload } from 'lucide-react';
import CareerGuidanceNavbar from '../CareerGuidanceSidenavbar';

const EducationalInfo = () => {
    const [resume, setResume] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) {
            setResume(file);
            setIsModalOpen(false);
        } else {
            alert("File size should be 10MB or less");
        }
    };

    return (
        <div className="flex h-screen">
            <CareerGuidanceNavbar />

            <div className="bg-white rounded-lg w-[150vh] mt-4 ml-15 border border-gray-200 p-6">


                <div className="bg-orange-50 border border-orange-200  rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                        <div>
                            <p className="text-lg font-medium text-orange-600">Your profile is incomplete</p>
                            <p className="text-sm text-orange-400">Please complete your profile to access all features.</p>
                        </div>
                    </div>

                </div>



                <div className="mb-6">
                    <h2 className="text-3xl mt-4 font-semibold text-gray-900 mb-2">Educational Information</h2>
                    <p className="text-gray-600">Please provide your academic background and skills</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Highest Qualification */}
                    <div className="space-y-2">
                        <label htmlFor="qualification" className="block text-black font-medium">Highest Qualification</label>
                        <select id="qualification" className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Qualification</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="phd">PhD</option>
                            <option value="diploma">Diploma</option>
                        </select>
                    </div>

                    {/* College/University Name */}
                    <div className="space-y-2">
                        <label htmlFor="college" className="block text-black font-medium">College/University Name</label>
                        <input type="text" id="college" placeholder="Enter college or university name"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Year of Passing */}
                    <div className="space-y-2">
                        <label htmlFor="year" className="block text-black font-medium">Year of Passing</label>
                        <select id="year" className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                    {/* Marks/CGPA */}
                    <div className="space-y-2">
                        <label htmlFor="marks" className="block text-black font-medium">Marks/CGPA</label>
                        <input type="text" id="marks" placeholder="Enter Percentage or CGPA"
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Skills */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="skills" className="block text-black font-medium">Skills (select multiple)</label>
                        <input type="text" id="skills" placeholder="Search skills to add..."
                            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    {/* Upload Resume (Trigger Box) */}
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="resume-upload" className="block text-black font-medium">Upload Resume</label>
                        <div
                            className="border-2 flex items-center gap-2 border text-black border-gray-300 rounded-lg px-4 py-2 max-w-md w-[22vh] cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Upload className="w-5 h-5 text-black" />
                            <span className="text-black text-sm">{resume ? resume.name : "Choose File"}</span>
                        </div>
                    </div>
                </div>

                {/* Confirm Button */}
                <div className="gap-4 mt-8">
                    <button className="flex-1 bg-blue-600 ml-[110vh] font-semibold text-white rounded px-4 py-3 hover:bg-blue-700 transition">
                        Confirm your Details
                    </button>
                </div>

                <hr />

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">© 2025 CRTD Technologies. All rights reserved.</p>
                </div>
            </div>

            {/* Resume Upload Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50">
                    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-black "> File Upload</h2>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            className="block w-full text-black border border-gray-300 rounded-md p-6 mb-4"
                        />

                        <p className="text-sm text-gray-500 mb-4 text-center">
                            Format accepted are  Only PDF or DOC (Max 10MB)
                        </p>

                        <div className="flex gap-10 justify-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    document.getElementById("resume-upload-hidden").click();
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hidden Fallback Input (not needed now but safe to include) */}
            <input
                id="resume-upload-hidden"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleResumeUpload}
            />
        </div>
    );
};

export default EducationalInfo;
