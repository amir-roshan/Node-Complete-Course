import express from "express";
import * as productsController from '../controllers/user.js';

const router = express.Router();

// default route is '/'
router.get('/', productsController.getProducts);
router.get('/products', productsController.getAllProducts);
router.get('/products/:productId', productsController.getProduct); // A dynamic route - : tells express that it is a dynamic route. - dynamic segment should be the last segment in the route.
router.get('/cart', productsController.getCart);
router.get('/orders', productsController.getOrders);

export default router;
