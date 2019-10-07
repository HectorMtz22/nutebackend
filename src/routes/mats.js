const { Router } = require('express');
const router = Router();

const { getMats, createMats, deleteMats } = require('../controllers/mats.controller');

router.route('/')
    .get(getMats)
    .post(createMats);

router.route('/:id')
    .delete(deleteMats);

module.exports = router;