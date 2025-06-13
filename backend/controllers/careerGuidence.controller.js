import careerGuidence from '../models/CareerGuidence.model.js';

export const careerGuidenceController = async (req, res) => {
  try {
    const { subject, description, preferredTime } = req.body;
    const File = req.file ? req.file.filename : null;

    const newRequest = new careerGuidence({
      subject,
      description,
      preferredTime,
      File
    });

    await newRequest.save();

    res.status(201).json({ message: 'Career guidance request submitted successfully.' });
  } catch (error) {
    console.error('Error in careerGuidenceController:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
