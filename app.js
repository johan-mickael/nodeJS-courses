import { router as shopRouter } from './app/Shop/ShopApi.js'

import express from 'express'
import mongoose from 'mongoose';

const app = express();

const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5wbmgio.mongodb.net/${process.env.MONGO_DATABASE}`;

const connection = async () => {
  await mongoose.connect(URI);
  console.log(`You are now connected to ${process.env.MONGO_DATABASE} database.`)
}

const db = mongoose.connection;

// Shop routes
app.use('/shops', shopRouter);

export { app, connection, db }