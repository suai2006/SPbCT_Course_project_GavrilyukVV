const BaseController = require("./BaseController");
class SettingsController extends BaseController
{
    async index(req, res, next)
    {
        try 
        {
            this.logger.log('Получаем справочник настроек');
            let rows = await this.query("select * from `mydb`.`settings_list`");
            this.logger.log('Cправочник настроек получен');            
            return res.status(200).send({settings:rows});
        } 
        catch (error) 
        {
            this.logger.log(error);
            return res.status(500).send({error});
        }
    }
    async setSettings(req, res, next)
    {
        
        try 
        {
            let {id, value} = req.body;                
            let rows = await this.query("UPDATE `mydb`.`settings` SET `value`="+value+" WHERE `id`="+id);
            this.logger.log('Запрос выполнен успешно');            
            return res.status(200).send({seccsess:true});
        } 
        catch (error) 
        {
            this.logger.error(error);
            return res.status(500).send({error:error.message});
        }
    }
    async changeLogin(req, res, next)
    {
        try 
        {
            let {login} = req.body;
            if(!login) return res.status(200).send({seccsess: false});
            console.log(login);
            return res.status(200).send({seccsess: true});
        } 
        catch (error) 
        {
            this.logger.error(error);
            return res.status(500).send({error:error.message});
        }
        
    }
    async changePassword(req, res, next)
    {

    }
}

module.exports = new SettingsController();