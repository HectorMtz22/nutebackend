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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

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