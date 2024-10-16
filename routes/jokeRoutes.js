const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * /api/v1/jokes:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - setup
 *               - punchline
 *             properties:
 *               setup:
 *                 type: string
 *               punchline:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée
 */
router.post('/', jokeController.addJoke);

/**
 * @swagger
 * /api/v1/jokes:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
router.get('/', jokeController.getAllJokes);

/**
 * @swagger
 * /api/v1/jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Blague aléatoire
 *       404:
 *         description: Aucune blague trouvée
 */
router.get('/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /api/v1/jokes/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la blague
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', jokeController.getJokeById);

module.exports = router;
