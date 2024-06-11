const express = require('express');
const router = express.Router();
const сontroller = require('../controller/notificationController');

module.exports = function(app, logger, mysql) 
{
    Object.defineProperty(сontroller, 'logger', {value: logger, ritable: false,enumerable:false});
    Object.defineProperty(сontroller, 'mysql', {value: mysql, ritable: false,enumerable:false});
    
    router.post('/', сontroller.index.bind(сontroller));
    app.use("/api/notification", router);
}