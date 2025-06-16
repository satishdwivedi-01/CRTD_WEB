import express from "express";
import { createJob } from "../controllers/job.controller.js";
import auth from "../middlewares/JwtAuth.js";

const router = express.Router();

router.post("/create", createJob);

export default router;
