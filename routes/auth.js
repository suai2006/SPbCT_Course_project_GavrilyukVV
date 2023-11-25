const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const сontroller = require('./authController');

module.exports = function(app, logger) 
{
    Object.defineProperty(сontroller, 'logger', {
        value: logger,
        writable: false,
        enumerable:false
    });
    router.get('/',  сontroller.index.bind(сontroller));
    router.post('/login', сontroller.login.bind(сontroller));
    router.use('/logout', сontroller.logout.bind(сontroller));
    app.use("/auth", router);
}