const mainController = {
  home: (req, res) => {
    return res.render("./products/home");
  },
  detalleDeProducto: (req, res) => {
    return res.render("./products/detalleDeProducto");
  },
  carrito: (req, res) => {
    return res.render("./products/carrito");
  },
  login: (req, res) => {
    return res.render("./users/login");
  },
  register: (req, res) => {
    return res.render("./users/registro");
  },
};

module.exports = mainController;