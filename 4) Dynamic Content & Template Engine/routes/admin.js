import express from "express";

// we can use the root directory as a base path for the views
import rootDir from "../utils/path.js";

// This router is like a mini express app that can be plugged into another express app.
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product');
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    if (!req.body.title) {
        return res.redirect('/admin/add-product');
    }
    else {
        // this data is inhereted through the server and it is not private
        products.push({ title: req.body.title });
        res.redirect('/');
    }
});

export { router as adminRouter, products };

