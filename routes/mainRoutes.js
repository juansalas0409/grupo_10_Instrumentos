const express =  require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path')

const { body } = require('express-validator')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/users')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadFile = multer({storage});

const validations = [
    body('nombre').notEmpty().withMessage('Escribe un nombre'),
    body('fecha').notEmpty().withMessage('Elige una fecha'),
    body('domicilio').notEmpty().withMessage('Escribe un domicilio'),
    body('contrasena').notEmpty().withMessage('Escribe una contraseña'),
    body('email')
        .notEmpty().withMessage('Escribe un email').bail()
        .isEmail().withMessage('Escribe un formato de correo valido'),
    body('nombreDeUsuario').notEmpty().withMessage('Escribe un nombre de usuario'),
    body('avatar').custom((value, { req }) => {
        let files = req.file;

        let acceptedExtensions = ['.jpg', '.png', '.gif']

        if(!files) {
            throw new Error('Tienes que subir una imagen');
        }else{
            if (!acceptedExtensions.includes()) {
                throw new Error(`Las extensiones de archiio permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }


        return true;
    })
]

const mainController = require('../controllers/mainControllers');

routes.get('/', mainController.home);

routes.get('/login', mainController.login);

routes.get('/register', mainController.register);
routes.post('/register', uploadFile.single('avatar'), validations, mainController.processRegister);

module.exports = routes
