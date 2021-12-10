const fs = require("fs");
const path = require("path");

const productsFilPath = path.join(__dirname, "../data/productosDB.json");
const products = JSON.parse(fs.readFileSync(productsFilPath, "utf-8"));

const usersFilPath = path.join(__dirname, "../data/usersDB.json");
const users = JSON.parse(fs.readFileSync(usersFilPath, "utf-8"));

const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  home: (req, res) => {
    let categoria = req.params.category
    let prods = products.filter(elements => elements.category == categoria);
    var random_number = Math.floor(Math.random() * prods.length);
    const selectedProd = prods[random_number] 
    
    res.render("main/home", {selectedProd, products, categoria, toThousand});
  },
  contactanos: (req,res) => {
    let usuario=req.session.userLogged
      res.render('main/contactanos',{usuario: usuario})
  }
};

module.exports = mainController;
