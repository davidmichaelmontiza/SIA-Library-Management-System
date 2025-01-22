import express, { Request, Response } from 'express';

const router = express.Router();

// Create
router.post('/items', (req: Request, res: Response) => {
    // Logic to create an item
});

// Read all
router.get('/items', (req: Request, res: Response) => {
    // Logic to read all items
});

// Read by ID
router.get('/items/:id', (req: Request, res: Response) => {
    // Logic to read an item by ID
});

// Update
router.put('/items/:id', (req: Request, res: Response) => {
    // Logic to update an item by ID
});

// Delete
router.delete('/items/:id', (req: Request, res: Response) => {
    // Logic to delete an item by ID
});

export default router;
