const { Router } = require('express');
const router = Router();

const { postUser, postNewUser, getUser, getUserLogout } = require('../controllers/users.controller');
    
router.route('/register')
    .post(postNewUser);

router.route('/login')
    .get(getUser)
    .post(postUser);

router.route('/logout')
    .get(getUserLogout);

module.exports = router;