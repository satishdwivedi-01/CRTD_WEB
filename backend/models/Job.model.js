import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  openings: { type: Number, required: true },
  clientCompany: { type: String, required: true },
  location: { type: String, required: true },
  package: { type: String, required: true },
  requiredSkills: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
