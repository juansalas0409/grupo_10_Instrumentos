const db = require('../database/models')
const Op = db.Sequelize.Op

const apiProductsController = {
  list: (req, res) => {
    db.Producto.findAll()
        .then(resultado => res.status(200).json({
            total: resultado.length,
            data: resultado,
        status: 200}));
      }
  }

module.exports = apiProductsController;