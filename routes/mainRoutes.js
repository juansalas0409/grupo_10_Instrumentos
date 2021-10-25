const express =  require('express');

const routes = express.Router();

const mainController = require('../controllers/mainControllers');

routes.get('/', mainController.home);

routes.get('/detail', mainController.detalleDeProducto);

routes.get('/carrito', mainController.carrito);

routes.get('/login', mainController.login);

routes.get('/register', mainController.register);

routes.get('/search', mainController.search)

module.exports = routes

