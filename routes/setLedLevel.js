var express = require('express');
var router = express.Router();
// const SerialPort = require("serialport").SerialPort;

// const serialport = new SerialPort({
//     path:'COM3', 
//     baudRate : 9600
// });

// let openPort = function() 
// {
//     return new Promise((resolve, reject) => 
//     {
//         serialport.on('open', (err) => {
//             if(err) reject(false);
//             resolve(true);
//         });
//     });
// }

/* GET users listing. */
router.post('/', async function(req, res, next) {
    try 
    {
        // if (!serialport.isOpen) await openPort();
        // serialport.write(req.body.ledLevel);
        res.send({data:'success'});
    } catch (error) {
        res.send({error : error.message});
    }
});

module.exports = router;