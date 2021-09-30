const express = require ("express");
const app = express();
const path = require('path')
const routes = require('./routes/mainRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));
app.use('/', routes);

app.listen(process.env.PORT || 3000, function(){console.log("Se esta corriendo el servidor en http://localhost:3000")});