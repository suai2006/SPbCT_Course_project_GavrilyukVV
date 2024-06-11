const express = require('express');
//const {check} = require('express-validator');
const router = express.Router();
const сontroller = require('../controller/authController');

module.exports = function(app, logger) 
{
    Object.defineProperty(сontroller, 'logger', {
        value: logger,
        writable: false,
        enumerable:false
    });
    
    router.post('/login', сontroller.login.bind(сontroller));
    app.use("/api/auth", router);
}