const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a new note with a random cat fact
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created successfully
 */
router.post('/', noteController.createNote);

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get all notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: A list of notes
 */
router.get('/', noteController.getAllNotes);

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Delete a note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to delete
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       404:
 *         description: Note not found
 */
router.delete('/:id', noteController.deleteNote);

/**
 * @swagger
 * /api/notes/search:
 *   get:
 *     summary: Search for notes by text or cat fact
 *     tags: [Notes]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: The text to search for
 *     responses:
 *       200:
 *         description: List of matching notes
 */
router.get('/search', noteController.searchNotes);

module.exports = router;
