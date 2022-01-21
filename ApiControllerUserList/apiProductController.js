const db = require('../database/models')
const Op = db.Sequelize.Op

const apiProductsController = {
  list: (req, res) => {
    db.Producto.findAll( )
        .then(resultado => res.status(200).json({
            total: resultado.length,
            data: resultado,
        status: 200}));
  },
  show: (req, res) => {
      db.Producto.findByPk(req.params.id,  {include:[{association: 'categoria'}]})
          .then(product =>{
              return res.status(200).json({
                id: product.id,
                name: product.product_name,
                price: product.price,
                category: product.categoria.category_name,
                description: product.description,
                image: "http://localhost:3000/images/products/" + product.image,
                totalCatrgorias: product.categoria.length
              })
          })
  }
  }

module.exports = apiProductsController;