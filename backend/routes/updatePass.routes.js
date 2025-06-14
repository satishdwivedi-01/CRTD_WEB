import express from "express";
import {updatePassController} from "../controllers/updatePass.controller.js"

const updaterouter = express.Router();


updaterouter.post("/update", updatePassController);


export default updaterouter;