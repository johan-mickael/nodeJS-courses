import { shopModel } from './ShopModel'

export class ShopService {

    constructor() {}

    async getAll() {
        return await shopModel.find();
    }

    async create(blog:any) {
        return await shopModel.create(blog)
    }

}
