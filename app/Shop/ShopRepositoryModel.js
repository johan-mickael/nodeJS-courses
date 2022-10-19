import mongoose from "mongoose";
import { db, connection } from '../../app.js'

export const ShopSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    ownerName: String
})

const ShopModel = mongoose.model('shops', ShopSchema);

const shop_obj = new ShopModel();

export const getAll = () => {
    return db.collection('shops').find({}).toArray()
}
