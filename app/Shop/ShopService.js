import { Shop } from "./Shop.js";

export const getAll = async (req, res) => {
    const shop = new Shop();
    const data = await shop.getAll();
    res.status(201).json({
        data: data
    });
}

export const create = async (req, res) => {
    try {
        const shop = new Shop();
        console.log(req.body)
        await shop.create(req.body);
        res.status(201).json({
            data: req.body,
            message: "New shop saved."
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
        throw err
    }
}