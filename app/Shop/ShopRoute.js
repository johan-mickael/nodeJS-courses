import express from 'express'
import { default as ShopService } from './ShopController.js';

const router = express.Router();

const shopService = new ShopService();

router.route('/').get(shopService.getAll).post(shopService.create);

export { router };