import Job from "../models/Job.model.js";

export const createJob = async (req, res) => {
  try {
    const { jobTitle, openings, clientCompany, location, package: salary, requiredSkills } = req.body;

    if (!jobTitle || !openings || !clientCompany || !location || !salary || !requiredSkills) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = new Job({
      jobTitle,
      openings,
      clientCompany,
      location,
      package: salary,
      requiredSkills,
    });

    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
