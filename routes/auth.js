const express = require('express');
const { register, signJWTForUser, signIn } = require('../middleware/auth');

const router = new express.Router();

// Registration
router.post('/auth/register', register, signJWTForUser);

// Sign In
router.post('/auth', signIn, signJWTForUser);

module.exports = router;
