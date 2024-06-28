import express from "express";

const router = express.Router();


// default route is '/'
router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', "views", "shop.html"));
    // OR
    res.sendFile("/views/shop.html", { root: "." });
});

export default router;
