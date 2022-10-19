import express from 'express'
import { Shop } from './Shop.js'

const router = express.Router();

router.get('/', (req, res) => {
    const shop = new Shop();
    shop.getAll().then((data) => {
        res.send(data)
    }, (err) => {
        console.log(err);
        throw err;
    })
});

export {
    router
};