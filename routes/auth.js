const express = require('express');
const { register, signJWTForUser, signIn } = require('../middleware/auth');

const router = new express.Router();

// Only turn on if new Registration required!
// router.post('/register', register, signJWTForUser);

// Sign In
router.post('/', signIn, signJWTForUser);

module.exports = router;
