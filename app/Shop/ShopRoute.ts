import express, { Router } from 'express'
import { default as ShopController } from './ShopController';

export default class ShopRoute {
    controller: ShopController;

    constructor(){
        this.controller = new ShopController();
    }

    getShopRoute(): Router {
        const router = express.Router();
        router.route('/').get(this.controller.getAll).post(this.controller.create);
        return router;
    }
}