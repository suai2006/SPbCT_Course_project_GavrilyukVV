class AuthController
{
    async index(req, res, next)
    {
        try 
        {
            res.render('login', { title: 'Аторизация' });
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
    async login(req, res, next)
    {
        try 
        {
            console.log(555)
            var randomNumber=Math.random().toString();
            randomNumber=randomNumber.substring(2,randomNumber.length);
            res.cookie('jwt',randomNumber, { maxAge: 900000, httpOnly: true });
            console.log('cookie created successfully');
            res.redirect('/');
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    async logout(req, res, next)
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

module.exports = new AuthController();