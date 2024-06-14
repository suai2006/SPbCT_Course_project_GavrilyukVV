const nodemailer = require('nodemailer');
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions/index.js");
const config = require("../../env.config");

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
            let mailConfig = 
            {
                host: config.EMAIL.host,
                secure : true,
                auth : {
                    user: config.EMAIL.address,
                    pass: config.EMAIL.password
                }
            };

            if(!this.emailTransporter) this.emailTransporter = nodemailer.createTransport(mailConfig);
            
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

    sendTelegramm(message)
    {
        return new Promise(async (resolve, reject) => 
        {
            try 
            {
                this.logger.log(`Начинается создание Тг-клиента`);
                const chat_id = config.telegramm.chat_id;
                if(!this.telegramClient)
                {
                    const apiId = config.telegramm.app_api_id;
                    const apiHash = config.telegramm.app_api_hash;
                    const secret = config.telegramm.app_api_secret;                
                    const option = {
                        connectionRetries: 5,
                    };
                    const stringSession = new StringSession(secret);
                    this.telegramClient = new TelegramClient(stringSession, apiId, apiHash, option);     
                    this.logger.log(`Создание Тг-клиента успешно завершилось`);
                    await this.telegramClient.start();
                }
                await this.telegramClient.sendMessage(chat_id, { message });
                this.logger.log(`сообщение отправлено`);
                resolve();
            } 
            catch (error) 
            {
                this.logger.error(error);
                resolve()
            }            
        });
    }

}

module.exports = BaseController;