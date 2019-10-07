const express = require('express');
const cors = require('cors');
const app = express();

    /* Código viejito */
    const session = require('express-session');
    const flash = require('connect-flash');
    const passport = require('passport');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

    /* Código viejito */
    app.use(session({
        secret: 'mysecretapp',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    //Global Variables
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        res.locals.user = req.user || null;
        next();
    });

//routes
app.use('/api/mats', require('./routes/mats'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));

module.exports = app;