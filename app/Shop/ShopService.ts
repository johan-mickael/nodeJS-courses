import { Shop, ShopModel } from './ShopModel'

export class ShopService {

    async getAll() {
        return await ShopModel.find();
    }

    async create(shop: Shop) {
        return await ShopModel.create(shop);
    }

    async getById(id: string) {
        return await ShopModel.findById(id);
    }

    async update(id: String, shop: Shop) {
        return await ShopModel.findByIdAndUpdate(id, shop)
    }

    async delete(id: String) {
        return await ShopModel.findByIdAndDelete(id);
    }
}
