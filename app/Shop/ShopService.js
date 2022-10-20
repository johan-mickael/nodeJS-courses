import { shopModel } from './ShopModel.js'

export class ShopService {
    id
    articles
    name
    address
    ownerName
    shopModel

    constructor() {
        this.shopModel = shopModel;
    }

    async getAll() {
        return await this.shopModel.find();
    }

    async create(blog) {
        return await this.shopModel.create(blog)
    }

}
