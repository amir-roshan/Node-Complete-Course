import express from "express";
import * as productsController from '../controllers/products.js';

const router = express.Router();

// default route is '/'
router.get('/', productsController.getProducts);

export default router;
