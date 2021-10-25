const productos = [
  {
    id: 11,
    categ: "cuerdas",
    producto_destacado: true,
    nombre: "Guitarra Electrica",
    precio: 28000,
    descuento: true,
    porcentaje_descuento: 30,
    desripcion_corta:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, animi rerum debitis ut deleniti expedita repudiandae, est, et possimus vel nostrum? Ratione a atque repellat tempore id quis impedit.',
    img:'guitar-fender.jpg'
  },
  {
    id: 12,
    categ: "cuerdas",
    producto_destacado: false,
    nombre: "Guitarra",
    precio: 25000,
    descuento: false,
    porcentaje_descuento: 0,
    desripcion_corta:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, animi rerum debitis ut deleniti expedita repudiandae, est, et possimus vel nostrum? Ratione a atque repellat tempore id quis impedit.',
    img:'guitar.jpg'
  },
  {
    id: 21,
    categ: "pianos",
    producto_destacado: true,
    nombre: "Piano",
    precio: 100000,
    descuento: true,
    porcentaje_descuento: 10,
    desripcion_corta:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, animi rerum debitis ut deleniti expedita repudiandae, est, et possimus vel nostrum? Ratione a atque repellat tempore id quis impedit.',
    img:'piano.jpg'
  },
  {
    id: 31,
    categ: "viento",
    producto_destacado: true,
    nombre: "Saxofón",
    precio: 59000,
    descuento: false,
    porcentaje_descuento: 0,
    desripcion_corta:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, animi rerum debitis ut deleniti expedita repudiandae, est, et possimus vel nostrum? Ratione a atque repellat tempore id quis impedit.',
    img:'saxofón.jpg'
  },
  {
    id: 41,
    categ: "accesorios",
    producto_destacado: true,
    nombre: "Cable Guitarra",
    precio: 2500,
    descuento: true,
    porcentaje_descuento: 5,
    desripcion_corta:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, animi rerum debitis ut deleniti expedita repudiandae, est, et possimus vel nostrum? Ratione a atque repellat tempore id quis impedit.',
    img:'cableGuitarra.jpg'
  },
];

const mainController = {
  home: (req, res) => {
    res.render("products/home", {productos: productos});
  },
  detalleDeProducto: (req, res) => {
    res.render("./products/detalleDeProducto");
  },
  carrito: (req, res) => {
    res.render("./products/carrito");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/registro");
  },
  search: (req, res) => {
    res.render("./products/search");
  },
};

module.exports = mainController;
