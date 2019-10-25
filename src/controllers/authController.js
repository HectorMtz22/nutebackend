const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const verifyToken = require('./verfyToken');

const User = require('../models/User');

router.post('/signup', async (req, res, next) => {
    const userCreated = await User.findOne({email: req.body.email});
    if (userCreated) {
        return res.json({ auth: false, token: '' , message: 'Usuario ya existe'});
    } else {
        const { username, email, password } = req.body;
        const user = new User ({
            username,
            email,
            password
        })
        user.password = await user.encryptPassword(user.password);
        await user.save();

        const token = jwt.sign({id: user._id}, process.env.SECRET, {
            expiresIn: 60 * 60 * 24
        })

        res.json({auth: true, token, message: ''});
    }
})

router.get('/me', verifyToken, async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.json({message: 'Usuario no encontrado', auth: false, user: null});
    }
    res.json({auth: true, user});
})

router.post('/signin', async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email})
    if(!user) {
        return res.json({auth: false, token: null, message:'Usuario no encontrado', username: null});
    }
    const passwordIsValid = await user.matchPassword(password);
    if (!passwordIsValid) {
        return res.json({auth: false, token: null, message:'Contraseña incorrecta', username: null});
    }

    const token = jwt.sign({id: user._id}, process.env.SECRET, {
        expiresIn: 60 * 60 * 24
    })

    res.json({auth: true, token, user});
})



module.exports = router;