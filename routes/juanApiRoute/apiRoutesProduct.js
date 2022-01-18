
const express =  require('express');
const routes = express.Router();
const apiProductController = require("../../ApiControllerUserList/apiProductController")

routes.get('/', apiProductController.list);//guestMiddleware,
routes.get('/:id', apiProductController.show);

module.exports = routes