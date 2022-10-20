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
            console.log(err);
        }
    }

    getById = async (req: any, res: any) => {
        try {
            const id = req.params.id;
            const data = await this.shopService.getById(id);
            res.status(201).json({
                data: data
            });
        } catch (err: any) {
            res.status(500).json({
                error: err.message
            })
            console.log(err);
        }
    }

    update = async (req: any, res: any) => {
        try {
            const id = req.params.id;
            const data = await this.shopService.update(id, req.body);
            res.status(201).json({
                message: `Shop ${data} Updated.`
            });
        } catch (err: any) {
            res.status(500).json({
                error: err.message
            })
            console.log(err);
        }
    }
}