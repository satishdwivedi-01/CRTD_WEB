import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById
} from "../controllers/userController.js";

const Userrouter = express.Router();

Userrouter.post("/register", registerUser);
Userrouter.post("/login", loginUser);
Userrouter.get("/getUsers", getAllUsers);
Userrouter.get("/getUserById/:id", getUserById);

export default Userrouter;

