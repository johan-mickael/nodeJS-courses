import { Shop } from "./Shop.js";

const shop = new Shop();

export const getAll = async (req, res) => {
    const data = await shop.getAll();
    res.status(201).json({
        data: data
    });
}

export const create = async (req, res) => {
    try {
        const shop = await shop.create(req);
        res.status(201).json({
            data: shop,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}