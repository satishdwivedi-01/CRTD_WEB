// routes/authRoutes.js
import express from 'express';
import auth from '../middlewares/JwtAuth.js';

const authRouter = express.Router();

authRouter.get('/verify', auth, (req, res) => {
  res.status(200).json({
    message: 'Authenticated',
    user: req.user, // 👈 send decoded user object (e.g., contains userId or email)
  });
});

export default authRouter;
