const { body } = require('express-validator')
const validationsLogin = [
    body('email')
        .notEmpty().withMessage('Escribe un email').bail()
        .isEmail().withMessage('Escribe un formato de correo valido'),
    body('contrasena').notEmpty().withMessage('Escribe una contraseña'),
        return true;
    })
]
module.exports = validationsLogin;