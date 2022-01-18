const express = require('express')
const routes = express.Router();

const apiController = require('../../ApiControllerUserList/apiControllerUserList');

routes.get('/users', apiController.list);
routes.get('/users/:id', apiController.show);

module.exports = routes;