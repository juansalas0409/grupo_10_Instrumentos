const { body } = require('express-validator')
const path = require('path')
const validationsEdit = [
    body('nombre').notEmpty().withMessage('Escribe un nombre').bail().isLength({min:5, max: undefined}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body('precio').notEmpty().withMessage('Escribe un precio').bail().isNumeric().withMessage("Debe ingresar un valor numérico"),
    body('description').notEmpty().withMessage('Elige una descripción').bail().isLength({min:20, max: undefined}).withMessage("Este campo debe tener al menos 20 caracteres")
    
]

module.exports = validationsEdit;