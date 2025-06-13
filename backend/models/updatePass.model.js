import mongoose from 'mongoose';

const updatePassSchema = new mongoose.Schema({
  currentPassword: {
    type: String,
    required: [true, 'Current password is required'],
  },
  newPassword: {
    type: String,
    required: [true, 'New password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your new password'],
    validate: {
      validator: function (value) {
        return value === this.newPassword;
      },
      message: 'Passwords do not match',
    },
  },
}, {
  timestamps: true,
});

const UpdatePass = mongoose.model('updatepass', updatePassSchema);

export default UpdatePass;
