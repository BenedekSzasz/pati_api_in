import { Router } from "express";
const router = Router();

router.get('/test', (req, res) => {
    res.send('Mükszik');
})

export default router;