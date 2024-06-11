const express = require('express');
const router = express.Router();
const middleware = require('./middleware');
const сontroller = require('../controller/settingsController');

module.exports = function(app, logger, mysql) 
{
    let authJwt = middleware.authJwt(logger);
    Object.defineProperty(сontroller, 'logger', {value: logger, ritable: false,enumerable:false});
    Object.defineProperty(сontroller, 'mysql', {value: mysql, ritable: false,enumerable:false});
    
    router.get('/', сontroller.index.bind(сontroller));
    router.post('/', сontroller.setSettings.bind(сontroller));
    router.post('/changelogin', сontroller.changeLogin.bind(сontroller));
    router.post('/changepassword', сontroller.changePassword.bind(сontroller));
    //app.use("/api/settings", authJwt.verifyToken, router);
    app.use("/api/settings", router);
}