let logger = console;

process.on('unhandledRejection', (reason, promise) => {
    logger.error(`Unhandled Rejection at: ${promise} reason:${reason}`);
    setTimeout(() => process.exit(1), 0)
});
process.on('uncaughtException', (err, origin) => {
    logger.error(`Caught exception: ${err}, Exception origin: ${origin}`);
    setTimeout(() => process.exit(1), 0)
});

const config = require("./env.config");
const Logger = require('./server/core/logger');
logger = new Logger(config, 'service');
const SerialPort = require("serialport").SerialPort;
const axios = require('axios');

const serialport = new SerialPort({
    path:'COM3', 
    baudRate : 9600
});

serialport.on('data', async (data) => {
    try 
    {
        let bit = parseInt(data.toString());
        let config = 
        {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:3000/api/notification',
            headers: { 
                'Content-Type': 'application/json'                    
            },
            data : {message: bit}
        };
        let response = await axios.request(config);    
        console.log(response.data);  
    } 
    catch (error) 
    {
        logger.error(error);
    }
});