class BaseController
{
    query(query)
    {
        return new Promise((resolve, reject) => 
        {
            this.mysql.query(query, function(err, rows, fields) {
                if(err) reject(err);
                resolve(rows);
            })
        });
    }
}

module.exports = BaseController;