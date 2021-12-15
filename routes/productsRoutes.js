// Require
const { Router } = require('express');
const express =  require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
// const adminMiddleware = require('../middlewares/adminMiddleware');

// Storage
const storage = multer.diskStorage({
    destination:function (req, file, cb){
        cb(null, path.join(__dirname, '../public/images/products'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-img${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage});

// Controller
const productsController = require('../controllers/productControllers.js');

routes.get('/search',  productsController.search)//adminMiddleware, 

// all products
routes.get('/category/:category', productsController.products)

// detail
routes.get('/detail/:id', productsController.detalleDeProducto);

// Create
routes.get("/create", productsController.create );//añadir el adminMiddleware,
routes.post("/",upload.single('image'), productsController.store );

// edit
routes.get('/edit/:id', productsController.edit);//añadir el adminMiddleware,
routes.patch('/edit/:id',productsController.update);

// delete
routes.delete('/delete/:id', productsController.delete); //adminMiddleware,

routes.get('/carrito', productsController.carrito);

module.exports = routes