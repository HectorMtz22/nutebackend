/*
const passport = require('passport');

const usersCtrl = {};
const User = require('../models/User');

usersCtrl.getUser = passport.authenticate('local', {
    successRedirect: '',
    failureFlash: true
})



usersCtrl.postNewUser = async (req, res) => {
    const {name, email, password, confirm_password} = req.body;
    const errors = [];
    if (name.length <= 0) {
        errors.push({text: 'Insert a name'});
    }
    if (email.length <= 0) {
        errors.push({text: 'Insert a email'});
    }
    if (password != confirm_password) {
        errors.push({text: "Password don't match"});
    }
    if (password.length < 4) {
        errors.push({text: 'Password too short'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {errors, name, email, password, confirm_password});
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'This email already exists');
            res.redirect('/register');
        } else {
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', "You're registered");
            res.redirect('/login');
        }
    }
};


usersCtrl.postUser = passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true
})



usersCtrl.getUserLogout = (req, res) => {
    req.logout();
    res.json({message: 'Logout Successfully!'});
}

module.exports = usersCtrl;
*/