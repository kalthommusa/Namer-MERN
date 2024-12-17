import express from 'express';

import { getProducts } from '../controllers/productController.js';

const router = express.Router();

// GET: Fetch all products (right now there is only one product) 
router.get('/', getProducts);

export default router;