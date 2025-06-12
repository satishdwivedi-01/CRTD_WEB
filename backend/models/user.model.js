import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: {
    type: String,
    required: true,
    minlength: [6, "Phone number must be at least 6 characters long"]
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"]
  },
  status: {
    type: String,
    enum: ["active", "inActive"],
    default: 'inActive'
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;


