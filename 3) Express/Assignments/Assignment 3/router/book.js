import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
    res.sendFile("/views/book.html", { root: "." });
});

router.post('/user', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

export default router;