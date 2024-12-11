import express from "express";
import { ShelfController } from "../controllers/shelfController";
import { authMiddleware } from "../middleware/authMiddleware";

// Initialize express Router
const router = express.Router();

// Create an instance of ShelfController to handle route logic
const shelfController = new ShelfController();

/**
 * @swagger
 * tags:
 *   name: Shelf
 *   description: Shelf endpoints
 */

/**
 * @swagger
 * /api/shelf:
 *   post:
 *     summary: Create a new shelf
 *     tags: [Shelf]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Shelf_ID
 *               - Shelf_Name
 *               - Category_ID
 *               - Location
 *             properties:
 *               Shelf_ID:
 *                 type: number
 *                 description: Unique identifier for the shelf
 *                 example: 101
 *               Shelf_Name:
 *                 type: string
 *                 description: Name of the shelf
 *                 example: "Science Fiction"
 *               Category_ID:
 *                 type: number
 *                 description: Identifier for the category the shelf belongs to
 *                 example: 10
 *               Location:
 *                 type: string
 *                 description: Location of the shelf
 *                 example: "Aisle 3"
 *     responses:
 *       201:
 *         description: Shelf created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Shelf_ID:
 *                   type: number
 *                 Shelf_Name:
 *                   type: string
 *                 Location:
 *                   type: string
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *
 *   get:
 *     summary: Get all shelves
 *     tags: [Shelf]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of shelves
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Shelf_ID:
 *                         type: number
 *                       Shelf_Name:
 *                         type: string
 *                       Category_ID:
 *                         type: number
 *                       Location:
 *                         type: string
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 */

/**
 * @swagger
 * /api/shelf/{id}:
 *   get:
 *     summary: Get shelf by ID
 *     tags: [Shelf]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shelf ID
 *     responses:
 *       200:
 *         description: Shelf details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Shelf_ID:
 *                   type: number
 *                 Shelf_Name:
 *                   type: string
 *                 Category_ID:
 *                   type: number
 *                 Location:
 *                   type: string
 *       404:
 *         description: Shelf not found
 *
 *   put:
 *     summary: Update shelf
 *     tags: [Shelf]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shelf ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Shelf_Name:
 *                 type: string
 *               Location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Shelf updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Shelf_ID:
 *                   type: number
 *                 Shelf_Name:
 *                   type: string
 *       404:
 *         description: Shelf not found
 *
 *   delete:
 *     summary: Delete shelf
 *     tags: [Shelf]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Shelf ID
 *     responses:
 *       204:
 *         description: Shelf deleted successfully
 *       404:
 *         description: Shelf not found
 */

// Shelf Routes

// POST /api/shelves - Create a new shelf
router.post("/api/shelf", authMiddleware, shelfController.createShelf);

// GET /api/shelves - Retrieve all shelves
router.get("/api/shelf", authMiddleware, shelfController.getAllShelves);

// GET /api/shelves/:id - Retrieve a specific shelf by ID
router.get("/api/shelf/:id", authMiddleware, shelfController.getShelfById);

// PUT /api/shelves/:id - Update a specific shelf by ID
router.put("/api/shelf/:id", authMiddleware, shelfController.updateShelf);

// DELETE /api/shelves/:id - Delete a specific shelf by ID
router.delete("/api/shelf/:id", authMiddleware, shelfController.deleteShelf);


export default router;
