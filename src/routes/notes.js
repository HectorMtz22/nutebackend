const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, updateNote, deleteNote, deleteNotess } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);
    
router.route('/mat/:mat')
    .delete(deleteNotess);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;