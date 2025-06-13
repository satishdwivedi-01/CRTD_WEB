import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    openings: "",
    clientCompany: "",
    location: "",
    package: "",
    requiredSkills: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      openings: parseInt(formData.openings),
      requiredSkills: formData.requiredSkills.split(",").map(skill => skill.trim()),
    };

    try {
      const res = await axios.post("http://localhost:3000/jobs/create", payload, {
        withCredentials: true,
      });
toast.info("Job Created Successfully");
      console.log(res.data);
    } catch (error) {
      toast.info("Error creating job");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-10">
  <input
    name="jobTitle"
    value={formData.jobTitle}
    onChange={handleChange}
    placeholder="Job Title"
    className="w-full border p-2 text-black placeholder-black"
  />
  <input
    name="openings"
    type="number"
    value={formData.openings}
    onChange={handleChange}
    placeholder="Openings"
    className="w-full border p-2 text-black placeholder-black"
  />
  <input
    name="clientCompany"
    value={formData.clientCompany}
    onChange={handleChange}
    placeholder="Client Company"
    className="w-full border p-2 text-black placeholder-black"
  />
  <input
    name="location"
    value={formData.location}
    onChange={handleChange}
    placeholder="Location"
    className="w-full border p-2 text-black placeholder-black"
  />
  <input
    name="package"
    value={formData.package}
    onChange={handleChange}
    placeholder="Package"
    className="w-full border p-2 text-black placeholder-black"
  />
  <input
    name="requiredSkills"
    value={formData.requiredSkills}
    onChange={handleChange}
    placeholder="Required Skills (comma-separated)"
    className="w-full border p-2 text-black placeholder-black"
  />
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
    Create Job
  </button>
</form>
  );
};

export default CreateJobForm;
