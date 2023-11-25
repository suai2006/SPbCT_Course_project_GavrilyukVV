class ApiController
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
    async stat(req, res, next)
    {
        try 
        {
            res.render('stat', { title: 'Статистика' });
        } 
        catch (error) 
        {
            console.log(error);
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