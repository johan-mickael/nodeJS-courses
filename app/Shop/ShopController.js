import { ShopService } from "./ShopService.js";

export default class ShopController {
    
    shopService
    
    constructor() {
        this.shopService = new ShopService();
    }
    
    getAll = async (req, res) => {
        const data = await this.shopService.getAll();
        res.status(201).json({
            data: data
        });
    }
    
    create = async (req, res) => {
        try {
            await this.shopService.create(req.body);
            res.status(201).json({
                data: req.body,
                message: "New shop saved."
            });
        } catch (err) {
            res.status(500).json({
                error: err.message
            })
            throw err;
        }
    }
}