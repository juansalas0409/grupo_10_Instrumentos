const { validationResult } = require('express-validator')

const userController = {
  home: (req, res) => {
    res.render("products/home");
  },
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

    return res.redirect('/')
  }
};

module.exports = userController;
