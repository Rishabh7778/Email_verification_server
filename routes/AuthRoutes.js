const express = require('express')
// const mongoose = require('mongoose');
const { register } = require('../controllers/Auth');
const { verifyEmail } = require('../controllers/Auth');
const route = express.Router();

route.post('/register', register)
route.post('/verifyEmail', verifyEmail)

module.exports = route;
