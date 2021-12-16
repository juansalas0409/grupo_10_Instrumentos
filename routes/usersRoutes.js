const express =  require('express');
const routes = express.Router();
const multer = require('multer');
const path = require('path')

// ------middlewares -----
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validations = require("../middlewares/validateRegister");

// -------------------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../public/images/users')
        cb(null, folder )
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadFile = multer({storage});



const userController = require('../controllers/userControllers');
const { Router } = require('express');

routes.get('/login', guestMiddleware, userController.login);//guestMiddleware,
routes.post('/login', userController.loginProcess);

routes.get('/register', guestMiddleware, userController.register);// guestMiddleware,
routes.post('/register',userController.processRegister);

// routes.get('/profile', authMiddleware, userController.profile);
// routes.get('/logout', userController.logout)

module.exports = routes