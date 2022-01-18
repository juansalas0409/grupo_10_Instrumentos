const express = require('express')
const routes = express.Router();

const apiController = require('../../ApiControllerUserList/apiControllerUserList');

routes.get('/', apiController.list);
routes.get('/:id', apiController.show);

module.exports = routes;