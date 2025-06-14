import mongoose from 'mongoose';
import Education from '../models/Education.model.js';

export const createEducation = async (req, res) => {
  console.log("yes its working now")
  // try {
    const {
      highestEducation,
      collegeName,
      passingYear,
      marksOrCGPA,
      skills,
    } = req.body;

    const resumePath = req.file ? req.file.path : null;

    if (!resumePath) {
      return res.status(400).json({ message: "Resume is required." });
    }

    const newEdu = new Education({
      userId: new mongoose.Types.ObjectId(), // If no auth yet
      highestQualification: highestEducation,
      collegeName,
      yearOfPassing: passingYear,
      marksOrCGPA,
      skills: skills ? skills.split(',') : [],
      file: resumePath,
    });

    await newEdu.save();

    res.status(201).json({ message: "Education Info Saved", data: newEdu });
  // } catch (error) {
  //   console.error("Error:", error.message);
  //   res.status(500).json({ message: "Server Error" });
  // }
};

export const getEducation = async (req, res) => {
  try {
    const data = await Education.find({ userId: new mongoose.Types.ObjectId() });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
