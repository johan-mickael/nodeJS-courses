import { Shop, shopModel } from './ShopModel'

export class ShopService {

    async getAll() {
        return await shopModel.find();
    }

    async create(shop: Shop) {
        return await shopModel.create(shop);
    }

    async getById(id: string) {
        return await shopModel.findById(id);
    }

    async update(id: String, shop: Shop) {
        return await shopModel.findByIdAndUpdate(id, shop)
    }
}
