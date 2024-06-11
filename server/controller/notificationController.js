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
                    incedentList.push([isoDateTime, msg, row.id, ]);                    
                }
            }
            let values = incedentList.map(c => 
                {
                    let out = `'${c[0]}', '${c[1]}', ${c[2]}`;
                    return out;
                }).map(c => `(${c})`).join(",");
            let insert = "INSERT INTO `mydb`.`operative` (`datetime`,`message`,`Devices_id`) VALUES" + values;
            let insertQuery = await this.query(insert);
            console.log(insertQuery);
            this.logger.log('получен сигнал');
            return res.status(200).send({succsess:true});
        } 
        catch (error) 
        {
            this.logger.log(error);
        }
    }
}

module.exports = new NotificationController();