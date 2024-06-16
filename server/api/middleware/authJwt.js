const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = (logger) =>
{
    let verifyToken = (req, res, next) => 
    {
        try 
        {
            //получаем токен из кук
            let accessToken = req.cookies.access_token;            
            if (!accessToken) 
            {
                // если не нашли смотрим в заголовках
                if(!req.headers.authorization) throw new Error("Не передан токен доступа");
                let authorization = req.headers.authorization;
                let [key, token] = authorization.split(' ');                
                accessToken = token;
            }
            //если токен пришел в заголовка но не правильно
            if (!accessToken) throw new Error("Не передан токен доступа");
    
            const cert = fs.readFileSync(process.cwd() + '/server/core/keys/public.pem');
            var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            //выполняем верификацию токена
            jwt.verify(accessToken, cert, (err, decoded) => 
            {
                if (err) 
                {
                    //в случае ошибки логируем ее и отправляем код 401
                    logger.log(`method : ${req.method} URL: ${req.originalUrl} status: 401`);
                    logger.log(`method : ${req.method} URL: ${req.originalUrl} message: ${err.message}`);
                    return res.status(401).send({message: "Unauthorized"});                   
                }
                /**
                 * В случае если токен валидный но ip адрес 
                 * авторизации не совпадает с ip запроса, 
                 * считаем это ошибкой
                 */
                if(ip !== decoded.ip) return res.status(401).send({message: "Unauthorized"});

                logger.log(`Верификация пройдена`);                                 
                next();
            });  
        } 
        catch (error) 
        {
            logger.error(error);   
            return res.status(401).send({message: "Unauthorized"});
        }        
    };

    return {
        verifyToken
    }
}
