import express from "express";
import { FineController } from "../controllers/fineController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();
const fineController = new FineController();

/**
 * @swagger
 * tags:
 *   name: Fine
 *   description: Fine endpoints
 */

/**
 * @swagger
 * /api/fine:
 *   post:
 *     summary: Create a new fine
 *     tags: [Fine]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Fine_ID
 *               - Student_ID
 *               - Transaction_ID
 *               - Amount
 *               - Status
 *             properties:
 *               Fine_ID:
 *                 type: number
 *                 description: Unique identifier for the fine
 *                 example: 1001
 *               Student_ID:
 *                 type: number
 *                 description: Identifier for the student associated with the fine
 *                 example: 2001
 *               Transaction_ID:
 *                 type: number
 *                 description: Identifier for the transaction related to the fine
 *                 example: 3001
 *               Amount:
 *                 type: number
 *                 description: Amount of the fine
 *                 example: 50
 *               Status:
 *                 type: string
 *                 description: Status of the fine (e.g., Paid, Unpaid)
 *                 example: "Unpaid"
 *     responses:
 *       201:
 *         description: Fine created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Fine_ID:
 *                   type: number
 *                 Status:
 *                   type: string
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *
 *   get:
 *     summary: Get all fines
 *     tags: [Fine]
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
 *         description: List of fines
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
 *                       Fine_ID:
 *                         type: number
 *                       Student_ID:
 *                         type: number
 *                       Transaction_ID:
 *                         type: number
 *                       Amount:
 *                         type: number
 *                       Status:
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
 * /api/fine/{id}:
 *   get:
 *     summary: Get fine by ID
 *     tags: [Fine]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Fine ID
 *     responses:
 *       200:
 *         description: Fine details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Fine_ID:
 *                   type: number
 *                 Student_ID:
 *                   type: number
 *                 Transaction_ID:
 *                   type: number
 *                 Amount:
 *                   type: number
 *                 Status:
 *                   type: string
 *       404:
 *         description: Fine not found
 *
 *   put:
 *     summary: Update fine
 *     tags: [Fine]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Fine ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Amount:
 *                 type: number
 *               Status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fine updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Fine_ID:
 *                   type: number
 *                 Status:
 *                   type: string
 *       404:
 *         description: Fine not found
 *
 *   delete:
 *     summary: Delete fine
 *     tags: [Fine]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Fine ID
 *     responses:
 *       204:
 *         description: Fine deleted successfully
 *       404:
 *         description: Fine not found
 */

/**
 * @swagger
 * /api/fine/status:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get fine status
 *     tags: [Fines]
 *     responses:
 *       200:
 *         description: Fine status retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Fine_ID:
 *                   type: number
 *                 Status:
 *                   type: string
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */


// Routes
router.post("/api/fine", authMiddleware, fineController.createFine);
router.get("/api/fine", authMiddleware, fineController.getAllFines);
router.get("/api/fine/:id", authMiddleware, fineController.getFineById);
router.put("/api/fine/:id", authMiddleware, fineController.updateFine);
router.delete("/api/fine/:id", authMiddleware, fineController.deleteFine);

export default router;
