import express from "express";
import { products } from "./admin.js";

const router = express.Router();


// default route is '/'
router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', "views", "shop.html"));
    // OR
    console.log(products);
    // the second argument is the data that will be passed to the view
    res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
});

export default router;
