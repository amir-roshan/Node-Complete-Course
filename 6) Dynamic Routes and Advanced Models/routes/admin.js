import express from "express";
import * as productsController from '../controllers/admin.js';

// This router is like a mini express app that can be plugged into another express app.
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.get('/admin-product-list', productsController.getProducts);

export default router;

