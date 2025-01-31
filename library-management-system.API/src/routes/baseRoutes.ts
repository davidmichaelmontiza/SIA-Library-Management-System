import { Book } from "../models/bookModel";
import { Category } from "../models/categoryModel";
import { Fine } from "../models/fineModel";
import { Librarian } from "../models/librarianModel";
import { Shelf } from "../models/shelfModel";
import { Transaction } from "../models/transactionModel";
import { Router } from 'express';

class BaseRoutes<T> {
    private router: Router;
    private model: any;

    constructor(model: any) {
        this.router = Router();
        this.model = model;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/', this.create);
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getById);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }

    private create = async (req: any, res: any) => {
        const item = await this.model.create(req.body);
        res.status(201).json(item);
    };

    private getAll = async (req: any, res: any) => {
        const items = await this.model.find();
        res.status(200).json(items);
    };

    private getById = async (req: any, res: any) => {
        const item = await this.model.findById(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.status(200).json(item);
    };

    private update = async (req: any, res: any) => {
        const item = await this.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).send('Item not found');
        res.status(200).json(item);
    };

    private delete = async (req: any, res: any) => {
        const item = await this.model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.status(204).send();
    };

    public getRouter() {
        return this.router;
    }
}

const bookRoutes = new BaseRoutes(Book).getRouter();
const categoryRoutes = new BaseRoutes(Category).getRouter();
const fineRoutes = new BaseRoutes(Fine).getRouter();
const librarianRoutes = new BaseRoutes(Librarian).getRouter();
const shelfRoutes = new BaseRoutes(Shelf).getRouter();
const transactionRoutes = new BaseRoutes(Transaction).getRouter();

export { bookRoutes, categoryRoutes, fineRoutes, librarianRoutes, shelfRoutes, transactionRoutes };
