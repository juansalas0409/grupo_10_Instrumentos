const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const Op = db.Sequelize.Op;

const userController = {
  login: (req, res) => {
    res.render("./users/login");
  },

  loginProcess: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userToLogin) => {
      if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.contrasena,
          userToLogin.password
        );
        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          req.session.carrito = [];
          if (req.body.remember_user) {
            res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 });
                      }
          return res.redirect("/users/profile");
        }
        return res.render("./users/login", {
          errors: {
            email: {
              msg: "Las credenciales son inválidas",
            },
          },
        });
      }
      return res.render("./users/login", {
        errors: {
          email: {
            msg: "No se encuentra este email en nuestra base de datos",
          },
        },
      });
    });
  },

  register: (req, res) => {
    res.render("./users/registro");
  },

  // processRegister2: function(req, res){ res.send(req.body) },

  processRegister: (req, res) => {
       let resultValidation = validationResult(req);
      //  console.log(resultValidation)
      //  console.log(req.body.nombre)

       if (resultValidation.errors.length > 0) {
         return res.render("./users/registro", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          
         });
      }
    let emailreg = req.body.email
        
    db.User.findOne({
      where: {
        email: emailreg,
      },
    }).then(userInDB=>{
      if (userInDB) {
        return res.render("./users/registro", {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          oldData: req.body,
        });
      }
  
      db.User.create({
        first_name: req.body.nombre,
        last_name: req.body.apellido,
        email: req.body.email,
        username: req.body.nombreDeUsuario,
        birth_date: req.body.fecha,
        category_id: 2,
        password: bcryptjs.hashSync(req.body.contrasena, 10),
        avatar: req.file.filename
      })
    res.redirect("/users/login");
    }  
    ).catch(function(errors){
      
     res.json(errors);
      
    })},




  profile: (req, res) => {
    return res.render("./users/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("email");
    return res.redirect("/");
  },
};

module.exports = userController;
