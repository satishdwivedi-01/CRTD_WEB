import express from "express";
import {updatePassController} from "../controllers/updatePass.controller.js"
import auth from "../middlewares/JwtAuth.js";

const passRouter = express.Router();


passRouter.put("/update",auth ,updatePassController);


export default passRouter;