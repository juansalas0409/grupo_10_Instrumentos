const mainController = {
  home: (req, res) => {
    res.render("products/home");
  },
  detalleDeProducto: (req, res) => {
    res.render("./products/detalleDeProducto");
  },
  carrito: (req, res) => {
    res.render("./products/carrito");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/registro");
  },
  search: (req, res) => {
    res.render("./products/search")
  }
};

module.exports = mainController;