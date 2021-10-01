const express =  require('express');

const routes = express.Router();

const mainController = require('../controllers/mainControllers');

routes.get('/', mainController.home);

routes.get('/detalleDeProducto', mainController.detalleDeProducto);

routes.get('/carrito', mainController.carrito);

routes.get('/login', mainController.login);

routes.get('/register', mainController.register);

module.exports = routes