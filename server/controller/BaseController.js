const nodemailer = require('nodemailer');
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions/index.js");
const config = require("../../env.config");

class BaseController
{
    async query(query, prepareData = null)
    {
        return new Promise((resolve, reject) => 
        {
            if(!prepareData)
            {
                this.mysql.query(query, function(err, rows, fields) {
                    if(err) reject(err);
                    resolve(rows);
                })
            }
            else
            {
                this.mysql.query(query, prepareData, function(err, rows, fields) {
                    if(err) reject(err);
                    resolve(rows);
                })
            }
            
        });
    }

    sendNotificationForUser(incedentList)
    {
        if(!incedentList.length) return;
        return new Promise(async (resolve, reject) => 
        {
            await this.sendTelegramm(`**Получен сигнал тревоги** \n${incedentList[0][1]}`);
            this.logger.log('отправлено оповещение в в месснджер телеграмм');
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
                    const secret = config.telegramm.app_bot_secret;                
                    const option = {
                        connectionRetries: 5,
                    };
                    const stringSession = new StringSession(secret);
                    this.telegramClient = new TelegramClient(stringSession, apiId, apiHash, option);     
                    this.logger.log(`Создание Тг-клиента успешно завершилось`);
                    await this.telegramClient.start();
                }
                await this.telegramClient.sendMessage(chat_id, { message, parseMode : "markdown" });
                this.logger.log(`отправлено оповещение в месснджер телеграмм`);
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