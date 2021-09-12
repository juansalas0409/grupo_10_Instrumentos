const express = require ("express");
const app = express();
const path = require("path");
const port = 3000;
const publicPath = path.join(__dirname,"./public")

app.use(express.static(publicPath));
app.listen(port,function(){console.log("Se esta corriendo el servidor en http://localhost:3000")});

app.get("/", function(req,res){res.sendFile(path.join(__dirname,"./views/home.html"))});
app.get("/detalleDeProducto", function(req,res){res.sendFile(path.join(__dirname,"./views/detalleDeProducto.html"))});
app.get("/Carrito", function(req,res){res.sendFile(path.join(__dirname,"./views/carrito.html"))});
app.get("/Login", function(req,res){res.sendFile(path.join(__dirname,"./views/login.html"))});
app.get("/Registro", function(req,res){res.sendFile(path.join(__dirname,"./views/registro.html"))});


