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
        }
    }
    async setSettings(req, res, next)
    {
        this.logger.log('Получаем на изменение настроек');
    }
    async changeLogin(req, res, next)
    {

    }
    async changePassword(req, res, next)
    {

    }
}

module.exports = new SettingsController();