import express from 'express'
import { getAll } from './ShopService.js';

const router = express.Router();

router.get('/', getAll);

export {
    router
};