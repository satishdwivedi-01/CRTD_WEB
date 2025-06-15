import React, { useState } from 'react';
import { AlertCircle, Upload } from 'lucide-react';

import axios from 'axios';
import CareerGuidanceNavbar from '../../StudentSideNavBar';


const EducationalInfo = () => {
    const [resume, setResume] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [formData, setFormData] = useState({
        highestEducation: '',
        passingYear: '',
        collegeName: '',
        marksOrCGPA: '',
        skills: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) {
            setResume(file);
            setIsModalOpen(false);
        } else {
            alert("File size should be 10MB or less");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('highestEducation', formData.highestEducation);
        data.append('passingYear', formData.passingYear);
        data.append('collegeName', formData.collegeName);
        data.append('marksOrCGPA', formData.marksOrCGPA);
        data.append('skills', formData.skills);
        data.append('file', resume);

        try {
            const res = await axios.post('http://localhost:3000/education/create', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(res.data);
            setSuccessMessage('Education Details Submitted Successfully!');

            // Clear form
            setFormData({
                highestEducation: '',
                passingYear: '',
                collegeName: '',
                marksOrCGPA: '',
                skills: ''
            });
            setResume(null);

            // Hide message after 2s
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        } catch (err) {
            console.error(err);
            alert('Something went wrong while submitting');
        }
    };

    return (
        <div className="flex h-screen">
            <CareerGuidanceNavbar />

            <div className="bg-white rounded-lg w-[150vh] mt-4 ml-15 border border-gray-200 p-6">
                {/* Success Toast */}
                {successMessage && (
                    <div className="fixed top-5 right-5 z-50 transition-opacity duration-500 ease-in-out bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-out">
                        <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{successMessage}</span>
                    </div>
                )}


                {/* Alert */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                        <div>
                            <p className="text-lg font-medium text-orange-600">Your profile is incomplete</p>
                            <p className="text-sm text-orange-400">Please complete your profile to access all features.</p>
                        </div>
                    </div>
                </div>

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-3xl mt-4 font-semibold text-black mb-2">Educational Information</h2>
                    <p className="text-gray-600">Please provide your academic background and skills</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Qualification */}
                        <div className="space-y-2">
                            <label className="block text-black font-medium">Highest Qualification</label>
                            <select
                                name="highestEducation"
                                value={formData.highestEducation}
                                onChange={handleChange}
                                className="w-full border border-black text-black bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Qualification</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="PhD">PhD</option>
                                <option value="Diploma">Diploma</option>
                            </select>
                        </div>

                        {/* College */}
                        <div className="space-y-2">
                            <label className="block text-black font-medium">College/University Name</label>
                            <input
                                type="text"
                                name="collegeName"
                                value={formData.collegeName}
                                onChange={handleChange}
                                placeholder="Enter college or university name"
                                className="w-full border border-black text-black bg-white rounded px-3 py-2"
                            />
                        </div>

                        {/* Year */}
                        <div className="space-y-2">
                            <label className="block text-black font-medium">Year of Passing</label>
                            <select
                                name="passingYear"
                                value={formData.passingYear}
                                onChange={handleChange}
                                className="w-full border border-black text-black bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                            </select>
                        </div>

                        {/* Marks */}
                        <div className="space-y-2">
                            <label className="block text-black font-medium">Marks/CGPA</label>
                            <input
                                type="text"
                                name="marksOrCGPA"
                                value={formData.marksOrCGPA}
                                onChange={handleChange}
                                placeholder="Enter Percentage or CGPA"
                                className="w-full border border-black text-black bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Skills */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="block text-black font-medium">Skills</label>
                            <input
                                type="text"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                placeholder="Enter skills (comma separated)"
                                className="w-full border border-black text-black bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>


                        {/* Upload Resume (Trigger Box) */}
                        <div className="space-y-2 md:col-span-2">
                            <label htmlFor="resume-upload" className="block text-black font-medium">Upload Resume</label>
                            <div
                                className="border-2 flex items-center gap-2 text-black border-gray-300 rounded-lg px-4 py-2 max-w-md w-[22vh] cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <Upload className="w-5 h-5 text-black" />
                                <span className="text-black text-sm">{resume ? resume.name : "Choose File"}</span>

                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="gap-4 mt-8">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 ml-[110vh] font-semibold text-white rounded px-4 py-3 hover:bg-blue-700 transition"
                            >
                                Confirm your Details
                            </button>
                        </div>
                    </div>
                </form>

                <hr className="my-6" />
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">© 2025 CRTD Technologies. All rights reserved.</p>
                </div>
            </div>

            {/* Resume Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50">
                    <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-black">File Upload</h2>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            className="block w-full text-black border border-black rounded-md p-4 mb-4 bg-white"
                        />

                        <p className="text-sm text-gray-500 mb-4 text-center">
                            Format accepted are only PDF or DOC (Max 10MB)
                        </p>

                        <div className="flex gap-10 justify-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducationalInfo;
