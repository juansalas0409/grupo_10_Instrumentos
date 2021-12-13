const fs = require("fs");
const path = require("path");

// const productsFilPath = path.join(__dirname, "../data/productosDB.json");
// const products = JSON.parse(fs.readFileSync(productsFilPath, "utf-8"));

const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')

const productsController = {
  products: (req, res) => {
    db.ProductCategory.findByPk(req.params.category, {include:[{association: 'productos'}]})
      .then(function (categoria) {
        res.render('./products/productList.ejs', {categoria: categoria});
      })
  },

  detalleDeProducto: (req, res) => {
    db.Producto.findByPk(req.params.id)
    .then(function (product) {
      res.render("./products/detalleDeProducto", {product, toThousand });
    })
  },

  // create form
  create: (req, res) => {
    res.render("./products/creacionDeProducto");
  },

    // store creation
  store: (req, res) => {
    db.Producto.create({
      product_name: req.body.nombre,
      price: req.body.precio,
      product_category: req.body.categorias,
      description: req.body.description,
      image: req.file.filename,
    });
    res.redirect("/");
  },

  // edit form
  edit: (req, res) => {
    db.Producto.findByPk(req.params.id)
      .then((productToEdit) => {
        res.render("./products/edit", { productToEdit });
  })
},

  // update product
  update: (req, res) => {
    db.Producto.update({
      product_name: req.body.nombre,
      price: req.body.precio,
      product_category: req.body.categorias,
      description: req.body.description,
    },
    {
      where:{id: req.params.id}
    })
    res.redirect('/1');
  },

  // delete
  delete: (req, res) => {
    let id = req.params.id;

    let finalProducts = products.filter((product) => product.id != id);

    fs.writeFileSync(productsFilPath, JSON.stringify(finalProducts, null, " "));

    res.redirect("/");
  },

  carrito: (req, res) => {
    res.render("./products/carrito");
  },

  search: (req, res) => {

    let search = req.query.search;

    console.log(search)

    let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
    
    res.render("./products/search", {products: productsToSearch, search, toThousand});
  },
};

module.exports = productsController;
