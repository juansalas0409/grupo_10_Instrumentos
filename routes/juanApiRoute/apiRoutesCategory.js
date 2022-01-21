
const express =  require('express');
const routes = express.Router();
const apiCategoryController = require("../../ApiControllerUserList/apiCategoryController")

routes.get('/', apiCategoryController.list);
routes.get('/:id', apiCategoryController.show);


module.exports = routes