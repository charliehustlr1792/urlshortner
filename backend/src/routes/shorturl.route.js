import express from 'express';
import createShortUrl from '../controllers/shorturl.controller.js';
const router = express.Router();

router.post("/",createShortUrl);

export default router