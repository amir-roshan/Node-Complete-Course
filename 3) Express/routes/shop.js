import express from "express";

const router = express.Router();

// default route is '/'
router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

export default router;
