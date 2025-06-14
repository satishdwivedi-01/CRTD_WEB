 import mongoose  from 'mongoose';

const EducationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  highestQualification: {
    type: String,
    required: true,
    enum: ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Diploma'],
  },
  collegeName: {
    type: String,
    required: true,
  },
  yearOfPassing: {
    type: Number,
    required: true,
  },
  marksOrCGPA: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    default: [],
  },
  file: {
    type: String, 
    required: true,
  },
  
}, {
  timestamps: true,
});

const Education = mongoose.model('Education', EducationSchema);
export default Education;

