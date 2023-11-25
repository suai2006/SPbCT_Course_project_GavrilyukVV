const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const сontroller = require('./apiController')

/* GET home page. */
router.use('*', сontroller.verify);
router.get('/', сontroller.index);
router.use('/stat', сontroller.stat);
router.use('/objectmap', сontroller.objectmap);

module.exports = router;
