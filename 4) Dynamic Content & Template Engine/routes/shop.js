import express from "express";
import { products } from "./admin.js";

const router = express.Router();


// default route is '/'
router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', "views", "shop.html"));
    // OR
    console.log(products);
    res.sendFile("/views/shop.html", { root: "." });
});

export default router;
