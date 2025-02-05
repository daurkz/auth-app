const express = require('express');
const passport = require('passport');
const router = express.Router();
const validateSignUpData = require('./middlewares/validation');
const { signUp } = require('./controllers/signUp');
const { signIn } = require('./controllers/signIn')



router.post('/api/signup', validateSignUpData, signUp);
router.post('/api/signin', passport.authenticate('local', {failureRedirect: '/login?error=1'}), signIn);


module.exports = router;