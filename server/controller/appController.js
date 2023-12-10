class AppController
{
    async index(req, res, next)
    {
        try 
        {
            res.render('index', { title: 'Курсовик' });    
        } 
        catch (error) 
        {
            next(error);
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
            next(error);
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
            next(error);
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
            next(error);
        }
    }
}

module.exports = new AppController();