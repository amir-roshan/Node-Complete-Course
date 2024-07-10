import express from "express";
import * as productsController from '../controllers/user.js';

const router = express.Router();

// default route is '/'
router.get('/', productsController.getProducts);
router.get('/products', productsController.getAllProducts);
router.get('/cart', productsController.getCart);

export default router;
