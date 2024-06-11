const  authRouter = require(`./auth`);
const  mainRouter = require(`./main`);
const  notificationRouter = require(`./notification`);
const  settingsRouter = require(`./settings`);
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:"754575",
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = function(app, logger) 
{
    authRouter(app, logger, pool);
    notificationRouter(app, logger, pool);
    settingsRouter(app, logger, pool);
    mainRouter(app, logger, pool);
}