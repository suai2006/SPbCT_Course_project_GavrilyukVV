const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const сontroller = require('./authController')

router.get('/',  сontroller.index);
router.post('/login', сontroller.login);
router.use('/logout', сontroller.logout);

module.exports = router;