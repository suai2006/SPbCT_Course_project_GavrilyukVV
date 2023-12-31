const jwt = require('jsonwebtoken');
const fs = require('fs');
// const { Sequelize } = require('sequelize');
class AuthController
{
    async index(req, res, next)
    {
        try 
        {
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
            var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            const {token} = this.createToken({ user: login, ip });
            //res.cookie('jwt', token, { maxAge: 24*60*60*1000, httpOnly: true });
            this.logger.log('cookie token created successfully');
            return res.status(200).send({access_token: token});
        } 
        catch (error) 
        {
            this.logger.error(error);
            next(error);
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