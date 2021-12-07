const { body } = require('express-validator')
const path = require('path')
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

module.exports = validations;