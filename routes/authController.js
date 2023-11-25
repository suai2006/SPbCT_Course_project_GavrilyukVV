const jwt = require('jsonwebtoken');
const fs = require('fs');

class AuthController
{
    async index(req, res, next)
    {
        try 
        {
            res.render('login', { title: 'Аторизация' });
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
            let {login, password} = req.body;
            const {token} = this.createToken({ user: login });
            res.cookie('jwt', token, { maxAge: 24*60*60*1000, httpOnly: true });
            this.logger.log('cookie token created successfully');
            res.redirect('/');
        } 
        catch (error) 
        {
            this.logger.log(error);
        }
    }

    async logout(req, res, next)
    {
        try 
        {
            res.clearCookie('jwt');
            res.redirect('/auth');
        } 
        catch (error) 
        {
            this.logger.log(error);
        }
    }

    createToken(payload) 
    {
        const privateKey = fs.readFileSync(process.cwd() + '/core/keys/private.key');
        //24*60*60
        const token = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: 60, subject:"access" });
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