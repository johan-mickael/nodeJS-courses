import mongoose from "mongoose";
import { ArticleSchema } from "../Article/ArticleRepositoryModel";

const shopConfig = {
    id: String,
    name: String,
    address: String,
    ownerName: String,
    articles: [ArticleSchema]
}

const ShopSchema = new mongoose.Schema(shopConfig)

export const ShopModel = mongoose.model('shops', ShopSchema);

export interface Shop {
    id: String,
    name: String,
    address: String,
    ownerName: String
}
