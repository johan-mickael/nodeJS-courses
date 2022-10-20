import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
    id: String,
    name: String,
    address: String,
    ownerName: String
})

export const shopModel = mongoose.model('shops', ShopSchema)
