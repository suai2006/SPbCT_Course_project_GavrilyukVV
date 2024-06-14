const BaseController = require("./BaseController");
class ApiController extends BaseController
{
    async index(req, res, next)
    {
        try 
        {
            res.render('index', { title: 'Курсовик' });    
        } 
        catch (error) 
        {
            
        }
    }
    async incedent(req, res, next)
    {
        try 
        {
            // this.logger.error(new Error("Ошибка доступа")); 
            // return res.status(401).send({error: "Ошибка доступа"});
            this.logger.log('Получаем список инцедентов');
            let rows = await this.query("SELECT * FROM mydb.info WHERE id ORDER  BY datetime desc");
            this.logger.log('Список инцедентов получен'); 
            return res.status(200).send({incedents:rows});
        } 
        catch (error) 
        {
            this.logger.log(error); 
            res.status(500).send(error);
        }
    }

    async objectmap(req, res, next)
    {
        try 
        {
            res.render('objectmap', { title: 'Карта объекта' });
        } 
        catch (error) 
        {
            console.log(error);
        }
    
    }
    async setLedLevel(req, res, next)
    {
        try 
        {
            res.clearCookie('jwt');
            res.redirect('/auth');
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
}

module.exports = new ApiController();