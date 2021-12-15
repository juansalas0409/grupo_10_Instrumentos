const fs = require("fs");
const path = require("path");
const { brotliDecompressSync } = require("zlib");
const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')
const Op = db.Sequelize.Op

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
      product_name: req.body.name,
      price: req.body.price,
      product_category: req.body.categorias,
      description: req.body.description,
    },
    {
      where:{id: req.params.id}
    })
    res.redirect('/');
  },

  // delete
  delete: (req, res) => {
    db.Producto.destroy({
      where:{id:req.params.id}
      })
    res.redirect("/");
  },

  carrito: (req, res) => {
    res.render("./products/carrito");
  },

  search: (req, res) => {

    let search = req.query.search;

    console.log(search)
    db.Producto.findAll(
      {
        where:{product_name: {[Op.like]:'%'+search+'%'}}
      }
    ).then(function(products){
      res.render("./products/search", {products, search, toThousand});

    })
    
  },
};

module.exports = productsController;
