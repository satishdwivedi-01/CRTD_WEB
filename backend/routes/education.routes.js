
import express from 'express';
import upload from '../middlewares/upload.js';

import {
  createEducation,
  getEducation,
} from '../controllers/Education.controllers.js';

const router = express.Router();

router.post(
  '/create',
  upload.single('file'),(req, res, next) => {
    console.log("DEBUG req.file:", req.file);
    console.log("DEBUG req.body:", req.body);
    next();
  },
  createEducation
);

router.get('/get', getEducation);

export default router;
