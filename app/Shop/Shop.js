import { shopRepositoryModel as shopRepository } from './ShopRepository.js'

export class Shop {
    id
    articles
    name
    address
    ownerName
    shopRepository

    Shop(id) {
        this.id = id
    }

    constructor() {

    }

    async getAll() {
        return await shopRepository.find();
    }

    async create(blog) {
        return await shopRepository.create(blog)
    }

}
