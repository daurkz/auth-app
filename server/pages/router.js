const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {user: req.user ? req.user : {}})
    // console.log(user)
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/signin', (req, res) => {
    res.render('signin')
})

router.get('/profile', (req, res) => {
    res.render('profile', {user: req.user ? req.user : {}})
})


module.exports = router;