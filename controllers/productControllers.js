const fs = require("fs");
const path = require("path");

const productsFilPath = path.join(__dirname, "../data/productosDB.json");
const products = JSON.parse(fs.readFileSync(productsFilPath, "utf-8"));

const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
  products: (req, res) => {
    res.render('', {products, toThousand})
  },

  detalleDeProducto: (req, res) => {
    let id = req.params.id;
    console.log(id)

    let product = products.find(element => element.id == id);
    console.log(product)
    res.render("./products/detalleDeProducto", {product, toThousand });
  },

  // create form
  create: (req, res) => {
    res.render("");
  },

  // store creation
  store: (req, res) => {
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image: req.file.filename,
    };

    products.push(newProduct);

    fs.writeFileSync(productsFilPath, JSON.stringify(products, null, " "));

    res.redirect("/");
  },

  // edit form
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => products.id == id);
    res.render("./products/edit", { productToEdit });
  },

  // update product
  update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: productToEdit.image,
    };

    let newProducts = products.map((product) => {
      if (product.id == productTodEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilPath, JSON.stringify(newProducts, null, " "));
    res.redirect("/");
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
    res.render("./products/search");
  },
};

module.exports = productsController;
