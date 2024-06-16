const express = require('express');
const router = express.Router();
const middleware = require('./middleware');
const сontroller = require('../controller/apiController')
module.exports = function(app, logger, mysql) 
{
    let authJwt = middleware.authJwt(logger);
    Object.defineProperty(сontroller, 'logger', {value: logger, ritable: false,enumerable:false});
    Object.defineProperty(сontroller, 'mysql', {value: mysql, ritable: false,enumerable:false});
    
    router.get('/incedent', сontroller.incedent.bind(сontroller));
    app.use("/api", authJwt.verifyToken, router);
    //app.use("/api", router);
}
