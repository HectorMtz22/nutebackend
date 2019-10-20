const { Router } = require('express');
const router = Router();
const verifyToken = require('../controllers/verfyToken');

const { getMats, createMats, deleteMats } = require('../controllers/mats.controller');

router.route('/')
    .get(verifyToken, getMats)
    .post(verifyToken, createMats);

router.route('/:id')
    .delete(verifyToken, deleteMats);

module.exports = router;