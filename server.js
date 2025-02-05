
const express = require('express');
const path = require('path');
const connectDB = require('./server/config/db');
const session = require('express-session');
const mongooseStorage = require('connect-mongo');
const passport = require('passport');

const app = express();
const PORT = 9090;
connectDB();
require('./server/config/passport')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use(session({
    name: 'decodeBlog.session',
    secret: 'Keyboard Cat',
    resave: false,
    saveUninitialized: false,
    store: mongooseStorage.create({
        mongoUrl: process.env.mongoStore_URI
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 7
    }
}));

app.use(passport.initialize());
app.use(passport.session())


app.use(require('./server/pages/router'))
app.use(require('./server/auth/router'))

app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}`)
})