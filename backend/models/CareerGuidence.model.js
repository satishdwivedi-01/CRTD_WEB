import  mongoose  from 'mongoose';

const careerGuidanceSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  File: {
    type: String
  },
  preferredTime: {
    type: String
  }
}, { timestamps: true });

const CareerGuidence = mongoose.model('CareerGuidence', careerGuidanceSchema);
export default CareerGuidence;
