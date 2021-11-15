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
}};

module.exports = userController;