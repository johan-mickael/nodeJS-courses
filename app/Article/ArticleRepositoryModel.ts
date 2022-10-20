const mongoose = require('mongoose');

export const ArticleSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    quantity: Number,
    category: String,
})