import express from 'express'
import { Shop } from './Shop.js'

const router = express.Router();

router.get('/', async (req, res) => {
    const shop = new Shop();
    const data = await shop.getAll();
    res.send(data);
});

export {
    router
};