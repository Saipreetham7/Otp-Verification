const router = require('express').Router();
const authController = require('../controllers/auth');

router.post('/', authController.signUpUser);
router.post('/verify', authController.verifyEmail);

module.exports = router;


// const express = require('express');
// const router = express.Router();

// //import controller
// const {signup, activateAccount} = require('../controllers/auth');

// router.post('/signup', signup);
// router.post('/email-activate',activateAccount);


// module.exports = router;