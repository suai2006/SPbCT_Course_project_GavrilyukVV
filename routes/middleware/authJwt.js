const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = (logger) =>
{
    let verifyToken = (req, res, next) => 
    {
        const sessionToken = req.cookies['jwt'];
        if (!sessionToken) 
        {
            if(req.xhr)
            {
                return res.status(401).send({message: "Unauthorized"});
            }
            res.redirect('/auth');
        }
        else 
        {
            const cert = fs.readFileSync(process.cwd() + '/core/keys/public.pem');
            var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            jwt.verify(sessionToken, cert, (err, decoded) => {
                if (err) 
                {
                    logger.log(`method : ${req.method} URL: ${req.originalUrl} status: 401`);
                    logger.log(`method : ${req.method} URL: ${req.originalUrl} message: ${err.message}`);
                    if(req.xhr)
                    {
                        return res.status(401).send({message: "Unauthorized"});
                    }
                    else
                    {
                        res.clearCookie('jwt');
                        res.redirect('/auth');
                        return;
                    }                    
                }

                if(ip !== decoded.ip)
                {
                    res.clearCookie('jwt');
                    res.redirect('/auth');
                    return;
                }                                
                next();
            });
        }
    };

    return {
        verifyToken
    }
}
