const jwt = require('jsonwebtoken');
const fs = require('fs');
// const { Sequelize } = require('sequelize');
class AuthController
{
    async index(req, res, next)
    {
        try 
        {
            Object.defineProperty(сontroller, 'logger', {
                value: null,
                writable: true,
                enumerable:false
            });

            this.logger = {
                log:(msg) => {console.log(msg)},
                error:(error) =>{console.log(error)},
            }

            return res.status(200).send({});
        } 
        catch (error) 
        {
            this.logger.log(error);
        }
    }

    async login(req, res, next)
    {
        try 
        {
            let {login, password} = JSON.parse(req.rawBody);
            if(!login || !password) throw new Error('Ошибка авторизации');
            if(login!=='admin' || password!=='admin') throw new Error('Ошибка авторизации');
            
            var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            //!!ToDo Сделать проверку данных в базе.
            const {token} = this.createToken({ user: login, ip });            
            this.logger.log('cookie token created successfully');
            return res.status(200).send({access_token: token});
        } 
        catch (error) 
        {
            this.logger.error(error);
            return res.status(200).send({error:error.message});
            //next(error);
        }
    }

    createToken(payload) 
    {
        const privateKey = fs.readFileSync(process.cwd() + '/server/core/keys/private.key');
        //24*60*60
        const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: 24*60*60*1000, subject:"access" });
        return {token};
    }

    badRequest(req, res, logger)
    {
        logger.log(`method : ${req.method} URL: ${req.originalUrl} status 400`);
        logger.error(`method : ${req.method} URL: ${req.originalUrl} message: Bad Request`);
        res.status(400).json({"message": "Bad Request"});
    }
}

module.exports = new AuthController();