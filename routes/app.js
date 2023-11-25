const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const middleware = require('./middleware');
const сontroller = require('./appController');

module.exports = function(app, logger) 
{
    let authJwt = middleware.authJwt(logger);
    Object.defineProperty(сontroller, 'logger', {
        value: logger,
        writable: false,
        enumerable:false
    });
    //сontroller.logger = logger;
    router.get('/', сontroller.index.bind(сontroller));
    router.use('/stat', сontroller.stat.bind(сontroller));
    router.use('/objectmap', сontroller.objectmap.bind(сontroller));
    app.use("/", authJwt.verifyToken, router);
}