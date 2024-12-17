import express from 'express';

import { createUser } from '../controllers/userController.js';

const router = express.Router();

// POST: Create a new user inquiry
router.post("/contact-us", createUser);

export default router;  