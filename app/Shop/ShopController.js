import express from 'express'
import { getAll, create } from './ShopService.js';

const router = express.Router();

router.route('/').get(getAll).post(create);

export { router };