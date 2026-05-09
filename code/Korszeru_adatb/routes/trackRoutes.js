import { Router } from "express";
import * as ctrl from "../controllers/trackController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Tracks
 *     description: Track CRUD műveletek
 *   - name: Stats
 *     description: Statisztikák
 */

/**
 * @swagger
 * /api/tracks/stats/genres:
 *   get:
 *     summary: Műfaj statisztikák
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Sikeres lekérdezés
 */
router.get("/stats/genres", ctrl.getStats);

/**
 * @swagger
 * /api/tracks/stats/top-artists:
 *   get:
 *     summary: Top 10 előadó 7 napos stream alapján
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Sikeres lekérdezés
 */
router.get("/stats/top-artists", ctrl.getTopArtists);

/**
 * @swagger
 * /api/tracks/stats/minmax:
 *   get:
 *     summary: Legmagasabb és legalacsonyabb stream szám
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Sikeres lekérdezés
 */
router.get("/stats/minmax", ctrl.getMinMax);

/**
 * @swagger
 * /api/tracks:
 *   get:
 *     summary: Összes track listázása (max 50)
 *     tags: [Tracks]
 *     responses:
 *       200:
 *         description: Sikeres lekérdezés
 *   post:
 *     summary: Új track létrehozása
 *     tags: [Tracks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - track_name
 *               - artist_name
 *             properties:
 *               track_name:
 *                 type: string
 *               artist_name:
 *                 type: string
 *               streams:
 *                 type: number
 *               stream_change:
 *                 type: number
 *               7day:
 *                 type: number
 *               genre:
 *                 type: string
 *               country:
 *                 type: string
 *               pos:
 *                 type: number
 *               days:
 *                 type: number
 *               viral_score:
 *                 type: number
 *               trend:
 *                 type: string
 *               popularity_category:
 *                 type: string
 *               longevity:
 *                 type: string
 *     responses:
 *       201:
 *         description: Track létrehozva
 */
router.get("/", ctrl.getAll);
router.post("/", ctrl.create);

/**
 * @swagger
 * /api/tracks/{id}:
 *   get:
 *     summary: Egy track lekérése ID alapján
 *     tags: [Tracks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sikeres lekérdezés
 *       404:
 *         description: Track nem található
 *   put:
 *     summary: Track frissítése
 *     tags: [Tracks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Frissítve
 *       404:
 *         description: Track nem található
 *   delete:
 *     summary: Track törlése
 *     tags: [Tracks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Törölve
 *       404:
 *         description: Track nem található
 */

router.get("/:id", ctrl.getById);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

export default router;