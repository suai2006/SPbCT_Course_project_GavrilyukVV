const BaseController = require("./BaseController");
class NotificationController extends BaseController
{
    async index(req, res, next)
    {
        try 
        {
            this.logger.log('получен сигнал');
            let data = req.body.message;
            let date = new Date();
            let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
            let rows = await this.query("select * from `mydb`.`device_list`");
            let incedentList = [];
            for(let row of rows)
            {
                if((data & row.bit) > 0)
                {
                    let msg = `Сработал ${row.device} в помещении ${row.room}`;
                    this.logger.log(msg);
                    incedentList.push([isoDateTime, msg, row.id ]);                    
                }
            }
            if(incedentList.length)
            {
                let values = incedentList.map(c => 
                    {
                        let out = `'${c[0]}', '${c[1]}', ${c[2]}`;
                        return out;
                    }).map(c => `(${c})`).join(",");
                let insert = "INSERT INTO `mydb`.`operative` (`datetime`,`message`,`Devices_id`) VALUES" + values;
                await this.query(insert);
                this.sendNotificationForUser(incedentList).then(() => {
                    this.logger.log('метод sendNotificationForUser завершил работу.');
                });
                this.logger.log('сообщение об инцеденте записано');
            } 
            else
            {

            }
            
            return res.status(200).send({succsess:true});
        } 
        catch (error) 
        {
            this.logger.log(error);
            return res.status(500).send({error:error.message});
        }
    }
}

module.exports = new NotificationController();