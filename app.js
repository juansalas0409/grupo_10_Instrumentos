// Requires
const express = require ("express");
const path = require('path')
const methodOverride = require('method-override');
const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require('./routes/usersRoutes');
const apiUserRoutes = require('./routes/juanApiRoute/apiRoutesUser');
const apiProductRoutes = require('./routes/juanApiRoute/apiRoutesProduct');
const session = require('express-session');
const cookies = require('cookie-parser');
const User = require('./models/User');
const userLoggedMiddleware = require( "./middlewares/userLoggedMiddleware");
const bd = require("./database/models")

const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "Shh, es secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);


// Template Engine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/api/users', apiUserRoutes);
app.use('/api/products', apiProductRoutes);

// Server
app.listen(process.env.PORT || 3000, function(){console.log("Se esta corriendo el servidor en http://localhost:3000")});

console.log(bd.User);
