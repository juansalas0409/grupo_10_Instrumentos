const fs = require("fs");
const path = require("path");
const db = require("../database/models");

// const productsFilPath = path.join(__dirname, "../data/productosDB.json");
// const products = JSON.parse(fs.readFileSync(productsFilPath, "utf-8"));

// const usersFilPath = path.join(__dirname, "../data/usersDB.json");
// const users = JSON.parse(fs.readFileSync(usersFilPath, "utf-8"));

const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  home: (req, res) => {
    
    if(req.params.id === null){
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
