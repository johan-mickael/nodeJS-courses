import express, { Router } from 'express'
import { default as ShopController } from './ShopController';

export default class ShopRoute {
    controller: ShopController;

    constructor() {
        this.controller = new ShopController();
    }

    getRouter(): Router {
        const router = express.Router();
        router.route('/').get(this.controller.getAll).post(this.controller.create);
        router.route('/:id').get(this.controller.getById).put(this.controller.update);
        return router;
    }
}