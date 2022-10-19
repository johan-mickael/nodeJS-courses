import { ArticleSchema } from '../Article/ArticleRepositoryModel';

const mongoose = require('mongoose');

export const ShopSchema = new mongoose.Schema({
    id: Number,
    name: String,
    articles: [ArticleSchema],
    address: String,
    ownerName: String,
    ShopRepositoryModel
})

const ShopModel = mongoose.model('Shop', ShopSchema);

const shop_obj = new ShopModel({
    id: 1,
    name: "First shop",
    address: "Paris First Shop, 75020",
    ownerName: "Adam"
});

shop_obj.save(err => {
    if (err) {
        console.error('Save recountered a problem.')
        throw err;
    }
})
