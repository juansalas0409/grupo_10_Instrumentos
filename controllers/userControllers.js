const { validationResult } = require('express-validator')
const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');

const User = require('../models/User')

const usersFilPath = path.join(__dirname, "../data/usersDB.json");
const users = JSON.parse(fs.readFileSync(usersFilPath, "utf-8"));

const userController = {
  
  login: (req, res) => {
    res.render("./users/login");
  },

  loginProcess: (req, res) => {
    let userToLogin = User.findByField('email', req.body.email)

    if(userToLogin){
      let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)

      if (isOkThePassword){
        delete userToLogin.contrasena;

        req.session.userLogged = userToLogin;

        if(req.body.remember_user) {
          res.cookie('email', req.body.email, {maxAge: (1000 * 60) * 60})
        }
        return res.redirect('/users/profile');
      }

      return res.render("./users/login", {
        errors: {
          email: {
            msg: 'Las credenciales son inválidas'
          }
        }
      })

    }

    return res.render("./users/login", {
      errors: {
        email: {
          msg: 'No se encuentra este email en nuestra base de datos'
        }
      }
    })
  },

  register: (req, res) => {
    res.render("./users/registro");
  },

  processRegister: (req, res) => {
    let resultValidation = validationResult(req)

    if (resultValidation.errors.length > 0) {
      return res.render("./users/registro", {
        errors: resultValidation.mapped(),
        oldData: req.body
      })
    }

    let userInDB = User.findByField('email', req.body.email)

    if(userInDB){
      return res.render("./users/registro", {
        errors: {
          email:{
            msg: 'Este email ya está registrado'
          }
        },
        oldData: req.body
      })
    }

    let userToCreate = {
      ...req.body,
      contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
      avatar: req.file.filename
    }

  let userCreated = User.create(userToCreate);
  
  res.redirect("/users/login");

},

  profile: (req, res) => {
    return res.render('/users/profile.ejs', {
      user: req.session.userLogged
    })
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCooki('email')
    return res.redirect('/')
  }
};

module.exports = userController;