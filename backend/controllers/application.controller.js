import Application from '../models/application.model.js';
import Job from '../models/Job.model.js';


export const applyForJob = async (req, res) => {
  try {
    const { jobId, name, email, phone, resumeUrl } = req.body;

    // Validate job exists
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const application = new Application({
      job: jobId,
      name,
      email,
      phone,
      resumeUrl,
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (err) {
    res.status(500).json({ message: 'Error applying for job', error: err.message });
  }
};

export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find().populate('job', 'jobTitle clientCompany');
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applications', error: err.message });
  }
};
