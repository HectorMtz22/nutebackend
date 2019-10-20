const { Router } = require('express');
const router = Router();
const verifyToken = require('../controllers/verfyToken');

const { getNotes, createNote, getNote, updateNote, deleteNote, deleteNotess } = require('../controllers/notes.controller');

router.route('/')
    .get(verifyToken, getNotes)
    .post(verifyToken, createNote);
    
router.route('/mat/:mat')
    .delete(verifyToken, deleteNotess);

router.route('/:id')
    .get(verifyToken, getNote)
    .put(updateNote)
    .delete(verifyToken, deleteNote);

module.exports = router;