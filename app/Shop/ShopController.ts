import { ShopService } from "./ShopService";

export default class ShopController {

    shopService: ShopService

    constructor() {
        this.shopService = new ShopService();
    }

    getAll = async (req: any, res: any) => {
        const data = await this.shopService.getAll();
        res.status(201).json({
            data: data
        });
    }

    create = async (req: any, res: any) => {
        try {
            await this.shopService.create(req.body);
            res.status(201).json({
                data: req.body,
                message: "New shop saved."
            });
        } catch (err: any) {
            res.status(500).json({
                error: err.message
            })
            throw err;
        }
    }
}