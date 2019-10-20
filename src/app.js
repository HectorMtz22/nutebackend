const express = require('express');
const cors = require('cors');
const app = express();

    /* Código viejito */
    // const session = require('express-session');
    // const passport = require('passport');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

    /* Código viejito */
    /*
    app.use(session({
        secret: 'mysecretapp',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    */

//routes
app.use('/api/mats', require('./routes/mats'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./controllers/authController'));
// app.use('/api/users', require('./routes/users'));

module.exports = app;