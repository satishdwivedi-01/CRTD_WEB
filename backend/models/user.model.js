import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, enum: ["active", "inActive"], default: "inActive" },


  dob: String,
  fathersName: String,
  whatsapp: String,
  
  birthState: String,
  birthCity: String,
  birthPincode: String,
  birthAddress: String,
  
  currentState: String,
  currentCity: String,
  currentPincode: String,
  currentAddress: String,

  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User;


