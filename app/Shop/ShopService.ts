import { shopModel } from './ShopModel'

export class ShopService {
    shopModel

    constructor() {
        this.shopModel = shopModel;
    }

    async getAll() {
        return await this.shopModel.find();
    }

    async create(blog:any) {
        return await this.shopModel.create(blog)
    }

}
