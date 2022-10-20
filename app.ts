import { router as shopRouter } from './app/Shop/ShopRoute'

import express from 'express'
import mongoose from 'mongoose';

const app = express();

const URI = `${process.env.MONGO_DRIVER}://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
console.log(URI)
const connection = () => {
  mongoose.connect(URI)
    .then(() => {
      console.log(`You are now connected to ${process.env.MONGO_DATABASE} database.`);
    }, (err) => {
      console.error(`An error occured when trying to connect to ${process.env.MONGO_DATABASE} database.`);
      throw err;
    });
}

const db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/shops', shopRouter);

export { app, connection, db }