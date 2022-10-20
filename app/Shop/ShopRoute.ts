import express, { Router } from 'express'
import { default as ShopController } from './ShopController';

export default class ShopRoute {
    controller: ShopController;
    router: Router;

    constructor() {
        this.controller = new ShopController();
        this.router = express.Router();
    }

    getRouter(): Router {
        this.router.route('/')
            .get(this.controller.getAll)
            .post(this.controller.create);
        this.router.route('/:id')
            .get(this.controller.getById)
            .put(this.controller.update)
            .delete(this.controller.delete);
        return this.router;
    }
}