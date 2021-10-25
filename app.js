// Requires
const express = require ("express");
const path = require('path')
const methodOverride = require('method-override')
const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productsRoutes');

const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

// Template Engine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', mainRoutes);
app.use('/products', productRoutes);

// Server
app.listen(process.env.PORT || 3000, function(){console.log("Se esta corriendo el servidor en http://localhost:3000")});