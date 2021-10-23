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
};

module.exports = userController;