const { validationResult } = require('express-validator')
const fs = require("fs");
const path = require("path");

const usersFilPath = path.join(__dirname, "../data/usersDB.json");
const users = JSON.parse(fs.readFileSync(usersFilPath, "utf-8"));

const userController = {
  
  login: (req, res) => {
    res.render("./users/login");
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

    else {
        
            let newUser = {
              id: users[users.length - 1].id + 1,
              first_name: req.body.nombre,
              last_name: req.body.apellido,
              email:req.body.email,
              nombreDeUsuario: req.body.nombreDeUsuario,
              password: req.body.contrasena,
              category:  req.body.categoria,
              fechaDeNac: req.body.fecha,
              image: req.file.filename,
            };
        
            users.push(newUser);
        
            fs.writeFileSync(usersFilPath, JSON.stringify(users, null, " "));
        
            res.redirect("/")
    
    
  }
  

}};

module.exports = userController;