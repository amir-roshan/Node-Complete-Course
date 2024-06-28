import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/views/library.html', { root: "." });
});

export default router;