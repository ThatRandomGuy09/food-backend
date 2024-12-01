import { Router } from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
import { updateProfile } from "../controllers/authController.js";
router.post('/signup', registerUser);
router.post('/signin', loginUser);
router.get('/me', protect, getMe);
router.put("/profile", protect, updateProfile);

export default router;