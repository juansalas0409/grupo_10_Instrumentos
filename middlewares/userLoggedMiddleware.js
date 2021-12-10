const User = require ("../models/User")

function userLoggedMiddleware (req, res, next) {
    // ---para la barra de navegacion segun tipo de usuario --
        res.locals.isLogged = false;

        if(req.session && req.session.userLogged){
            res.locals.isLogged = true
            res.locals.userLogged = req.session.userLogged
// 
        }
        // -- para el logueo automatico con cookies--
        let emailInCookie = req.cookies.email
        let userFromCookie = User.findByField("email", emailInCookie)
       

        if(userFromCookie) {
            req.session.userLogged = userFromCookie;

        }

        if(req.session.userLogged){
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;

        }

    

    next();


}




module.exports = userLoggedMiddleware;