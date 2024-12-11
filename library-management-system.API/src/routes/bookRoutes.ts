import express from "express";
import { BookController } from "../controllers/bookController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();
const bookController = new BookController();

/**
 * @swagger
 * tags:
 *   name: Book
 *   description: Book endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - Book_ID
 *         - Student_ID
 *         - Title
 *         - Author
 *         - Publisher
 *         - Year_of_Publication
 *         - Available_Copies
 *         - Total_Copies
 *         - Category_ID
 *         - Shelf_ID
 *       properties:
 *         Book_ID:
 *           type: number
 *           description: Unique identifier for the book
 *         Student_ID:
 *           type: number
 *           description: Unique identifier for the student
 *         Title:
 *           type: string
 *           description: Title of the book
 *         Author:
 *           type: string
 *           description: Author of the book
 *         Publisher:
 *           type: string
 *           description: Publisher of the book
 *         Year_of_Publication:
 *           type: string
 *           format: date
 *           description: Publication year of the book
 *         Available_Copies:
 *           type: number
 *           description: Number of available copies
 *         Total_Copies:
 *           type: number
 *           description: Total number of copies
 *         Category_ID:
 *           type: number
 *           description: Identifier for the book category
 *         Shelf_ID:
 *           type: number
 *           description: Identifier for the shelf
 */

/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: Create a new book
 *     tags: [book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       409:
 *         description: Book ID already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book ID already exists
 *
 *   get:
 *     summary: Get all books
 *     tags: [book]
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
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Book'
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
 * /api/book/{id}:
 *   get:
 *     summary: Get book by ID
 *     tags: [book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *
 *   put:
 *     summary: Update book
 *     tags: [book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Title:
 *                 type: string
 *               Author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *
 *   delete:
 *     summary: Delete book
 *     tags: [book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */

// Routes
router.post("/api/book", authMiddleware, bookController.createBook); // Create a new book
router.get("/api/book", authMiddleware, bookController.getAllBooks); // Retrieve all books
router.get("/api/book/:id", authMiddleware, bookController.getBookById); // Retrieve a specific book by ID
router.put("/api/book/:id", authMiddleware, bookController.updateBook); // Update a book by ID
router.delete("/api/book/:id", authMiddleware, bookController.deleteBook); // Delete a book by ID

export default router;
