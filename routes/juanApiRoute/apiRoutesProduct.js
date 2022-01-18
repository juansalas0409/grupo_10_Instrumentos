
const express =  require('express');
const routes = express.Router();
const apiProductController = require("../../ApiControllerUserList/apiProductController")

routes.get('/', apiProductController.list);//guestMiddleware,

module.exports = routes