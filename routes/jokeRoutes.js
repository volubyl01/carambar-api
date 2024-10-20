const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * openapi: 3.0.0
 * swagger: 2.0
 * info:
 *   title: API de blagues Carambar
 *   version: 1.0.0
 *   description: Une API pour gérer les blagues Carambar
 * tags:
 *   - name: Jokes
 *     description: Opérations liées aux blagues
 * paths:
 *   /api/v1/jokes:
 *     post:
 *       summary: Ajoute une nouvelle blague
 *       tags: [Jokes]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - setup
 *                 - punchline
 *               properties:
 *                 setup:
 *                   type: string
 *                 punchline:
 *                   type: string
 *       responses:
 *         '201':
 *           description: Blague créée
 *     get:
 *       summary: Récupère toutes les blagues
 *       tags: [Jokes]
 *       responses:
 *         '200':
 *           description: Liste des blagues
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Joke'
 *   /api/v1/jokes/random:
 *     get:
 *       summary: Récupère une blague aléatoire
 *       tags: [Jokes]
 *       responses:
 *         '200':
 *           description: Blague aléatoire
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Joke'
 *         '404':
 *           description: Aucune blague trouvée
 *   /api/v1/jokes/{id}:
 *     get:
 *       summary: Récupère une blague par son ID
 *       tags: [Jokes]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: integer
 *       responses:
 *         '200':
 *           description: Détails de la blague
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Joke'
 *         '404':
 *           description: Blague non trouvée
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - id
 *         - setup
 *         - punchline
 *       properties:
 *         id:
 *           type: integer
 *           description: L'identifiant unique de la blague
 *         setup:
 *           type: string
 *           description: La mise en place de la blague
 *         punchline:
 *           type: string
 *           description: La chute de la blague
 */
/**
 * @swagger
 * /api/v1/jokes/{id}:
 *   delete:
 *     summary: Supprime une blague par son ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'ID de la blague à supprimer
 *     responses:
 *       200:
 *         description: Blague supprimée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Blague supprimée avec succès
 *       404:
 *         description: Blague non trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.post('/', jokeController.addJoke);
router.get('/', jokeController.getAllJokes);
router.get('/random', jokeController.getRandomJoke);
router.get('/:id', jokeController.getJokeById);
router.delete('/:id', jokeController.deleteJoke);

module.exports = router;
