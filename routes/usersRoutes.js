const express =  require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path')

const { body } = require('express-validator')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../public/images/users')
        cb(null, folder )
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadFile = multer({storage});

const validations = [
    body('nombre').notEmpty().withMessage('Escribe un nombre'),
    body('apellido').notEmpty().withMessage('Escribe un apellido'),
    body('fecha').notEmpty().withMessage('Elige una fecha'),
    body('categoria').notEmpty().withMessage('Escribe una categoria'),
    body('contrasena').notEmpty().withMessage('Escribe una contraseña'),
    body('email')
        .notEmpty().withMessage('Escribe un email').bail()
        .isEmail().withMessage('Escribe un formato de correo valido'),
    body('nombreDeUsuario').notEmpty().withMessage('Escribe un nombre de usuario'),
    body('avatar').custom((value, { req }) => {
        let files = req.file;

        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        

        if(!files) {
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(files.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archiio permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }


        return true;
    })
]

const guestMiddleware = function (req, res, next){
    if(req.session.userLogged){
        return res.redirect('/')
    }
    next();
};

const authMiddleware = function (req, res, next){
    if(!req.session.userLogged){
        return res.redirect('/users/login')
    }
}

const userController = require('../controllers/userControllers');
const { Router } = require('express');

routes.get('/login', guestMiddleware, userController.login);
routes.post('/login', userController.loginProcess);

routes.get('/register', guestMiddleware, userController.register);
routes.post('/register', uploadFile.single('avatar'), validations, userController.processRegister);

routes.get('/profile', authMiddleware, userController.profile);
Router.get('/logout/', userController.logout)

module.exports = routes