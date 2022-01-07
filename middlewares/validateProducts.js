const { body } = require('express-validator')
const path = require('path')
const validations = [
    body('nombre').notEmpty().withMessage('Escribe un nombre').bail().isLength({min:5, max: undefined}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body('precio').notEmpty().withMessage('Escribe un precio').bail().isNumeric().withMessage("Debe ingresar un valor numérico"),
    body('description').notEmpty().withMessage('Elige una descripción').bail().isLength({min:20, max: undefined}).withMessage("Este campo debe tener al menos 20 caracteres"),
    body('categorias').notEmpty().withMessage('Elige una categoria'),
    body('image').custom((value, { req }) => {
        let files = req.file;

        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        

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