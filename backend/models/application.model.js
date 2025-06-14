import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resumeUrl: { type: String }, // Optional if you want file upload
  createdAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
