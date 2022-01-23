const { validationResult } = require("express-validator");
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
    let resultValidation = validationResult(req);
    // console.log(resultValidation)
    //  console.log(req.body)
    

       if (resultValidation.errors.length > 0) {
         return res.render("./products/creacionDeProducto",{
           errors: resultValidation.mapped(),
           oldData: req.body 
          })
       
     
      
    } else  {
    
      db.Producto.create({
       product_name: req.body.nombre,
      price: req.body.precio,
       product_category: req.body.categorias,
       description: req.body.description,
       image: req.file.filename,
     });
     res.redirect("/");
            }
     },
     // edit list
     editList: (req,res) => {
      db.Producto.findAll().then((productos) => 
      res.render("./products/editList", {productos})
      )
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
    let resultValidation = validationResult(req);
    // console.log(resultValidation)
    //  console.log(req.body)
    

       if (resultValidation.errors.length > 0) {
        db.Producto.findByPk(req.params.id)
        .then((productToEdit) => { res.render("./products/edit",{
          errors: resultValidation.mapped(),
          oldData: req.body,
          productToEdit
        })

         
          })} else {

    db.Producto.update({
      product_name: req.body.nombre,
      price: req.body.precio,
      description: req.body.description,
    },
    {
      where:{id: req.params.id}
    })
    res.redirect('/');
  }},

  // delete
  delete: (req, res) => {
    db.Producto.destroy({
      where:{id:req.params.id}
      })
    res.redirect("/");
  },

  carrito: (req, res) => {
    if(req.session.carrito){
    db.Producto.findAll(
      {
        where:{id: {[Op.in]: req.session.carrito }}
      }).then( products => res.render("./products/carrito", {products, toThousand}))
        .catch(error => res.send(error) )}
        else {res.render("./products/carrito")}
    
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

  addProduct: (req, res) => {
      if(req.session && req.session.userLogged){

        req.session.carrito.push(req.params.id);
        // console.log(req.session.carrito);
        db.Producto.findAll(
          {
            where:{id: {[Op.in]: req.session.carrito }}
          }).then( products => res.render("./products/carrito", {products, toThousand}))
            .catch(error => res.send(error) )

      } else { res.redirect("/users/login")}
      

  },

  eliminarDelCarro: (req,res) => {
    let filtrado = req.session.carrito.filter(id =>  id != req.params.id)
    req.session.carrito = filtrado

    db.Producto.findAll(
      {
        where:{id: {[Op.in]: req.session.carrito }}
      }).then( products => res.render("./products/carrito", {products, toThousand}))
        .catch(error => res.send(error) )

  }

};

module.exports = productsController;
