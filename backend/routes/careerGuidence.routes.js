import express from 'express';
import upload from '../middlewares/upload.js';
import  {careerGuidenceController} from "../controllers/careerGuidence.controller.js"



const router = express.Router();


router.post("/sumbit", upload.single('File'), careerGuidenceController);


export default router;