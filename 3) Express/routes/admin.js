import express from "express";

// we can use the root directory as a base path for the views
import rootDir from "../utils/path.js";

// This router is like a mini express app that can be plugged into another express app.
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile("/views/add-product.html", { root: "." });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

export default router;
