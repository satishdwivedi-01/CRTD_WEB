import express from 'express';
import { applyForJob, getApplications } from '../controllers/application.controller.js';

const router = express.Router();

router.post('/apply', applyForJob);
router.get('/all', getApplications); // optional for admin to view

export default router;
