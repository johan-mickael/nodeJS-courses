import { Shop } from "./Shop.js";

export const getAll = async (req, res) => {
    const shop = new Shop();
    const data = await shop.getAll();
    res.send(data);
}