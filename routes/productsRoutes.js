// Require
const { Router } = require('express');
const express =  require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const adminMiddleware = require('../middlewares/adminMiddleware');
const validations = require("../middlewares/validateProducts");

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


routes.get('/search', productsController.search)//adminMiddleware, 

// all products
routes.get('/category/:category', productsController.products)

// detail
routes.get('/detail/:id', productsController.detalleDeProducto);

// Create
routes.get("/create", adminMiddleware, productsController.create );//añadir el adminMiddleware,
routes.post("/",upload.single('image'), validations, productsController.store );

// edit
routes.get('/editList', adminMiddleware, productsController.editList);//añadir el adminMiddleware,
routes.get('/edit/:id', adminMiddleware, productsController.edit);//añadir el adminMiddleware,
routes.patch('/edit/:id', validations, productsController.update);

// delete
routes.delete('/delete/:id', adminMiddleware, productsController.delete); //adminMiddleware,

routes.get('/carrito', productsController.carrito);

// Agregar productos al carrito de compras
routes.post("/detail/:id", productsController.addProduct)


module.exports = routes