import mongoose from "mongoose";

const shopConfig = {
    id: String,
    name: String,
    address: String,
    ownerName: String
}

const ShopSchema = new mongoose.Schema(shopConfig)

export const shopModel = mongoose.model('shops', ShopSchema);

export interface Shop {
    id: String,
    name: String,
    address: String,
    ownerName: String
}
