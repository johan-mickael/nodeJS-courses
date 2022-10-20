import { default as ShopRouter } from './app/Shop/ShopRoute'
import express from 'express'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const shopRouter = new ShopRouter();
app.use('/shops', shopRouter.getRouter());

export { app }