const express =  require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path')

const mainController = require('../controllers/mainControllers');



routes.get('/', mainController.home);
routes.get('/contacto', mainController.contactanos)
routes.get('/:category', mainController.home)

module.exports = routes
