const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  home: (req, res) => {

    if(!req.params.category){
      db.ProductCategory.findByPk(1, {include:[{association: 'productos'}]})
    .then(function (categoria) {
      var random_number = Math.floor(Math.random() * categoria.productos.length);
        const selectedProd = categoria.productos[random_number] 
        res.render("main/home", {categoria: categoria, selectedProd});
      })
    }else{
    db.ProductCategory.findByPk(req.params.category, {include:[{association: 'productos'}]})
    .then(function (categoria) {
        var random_number = Math.floor(Math.random() * categoria.productos.length);
        const selectedProd = categoria.productos[random_number] 
        res.render("main/home", {categoria: categoria, selectedProd});
      })
    }
  },
  contactanos: (req,res) => {
    let usuario=req.session.userLogged
      res.render('main/contactanos',{usuario: usuario})
  }
};

module.exports = mainController;
