import mongoose from "mongoose";
import { db, connection } from '../../app.js'

export const ShopSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    ownerName: String
})

export class ShopRepository {
    async getAll() {
        return await mongoose.model('shops', ShopSchema).find();
    }
}
