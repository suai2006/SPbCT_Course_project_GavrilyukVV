const nodemailer = require('nodemailer');
const telegram = require('telegram');
class BaseController
{
    query(query)
    {
        return new Promise((resolve, reject) => 
        {
            this.mysql.query(query, function(err, rows, fields) {
                if(err) reject(err);
                resolve(rows);
            })
        });
    }

    sendNotificationForUser(incedentList)
    {
        if(!incedentList.length) return;
        return new Promise((resolve, reject) => 
        {
            resolve();
        });
    }

    sendMail(message)
    {
        return new Promise((resolve, reject) => 
        {
            if(!this.emailTransporter) this.emailTransporter = nodemailer.createTransport(this.mailConfig);
            
            let mailOptions = {
                from: config.EMAIL.from,                    
                to: config.EMAIL.to,
                subject: config.EMAIL.subject,
                html: message               
            };

            this.emailTransporter.verify((err, success) =>
            {
                if (err) reject(err);
                this.emailTransporter.sendMail(mailOptions, (error, info) => 
                {
                    let success = false;
                    if(error) resolve({success});
                    success = true;
                    resolve({success});
                });
            });
        });
    }

    sendTelegramm()
    {

    }

}

module.exports = BaseController;