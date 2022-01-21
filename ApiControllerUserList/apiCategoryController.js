const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.ProductCategory
            .findAll()
            .then(category => {
                return res.status(200).json({
                    total: category.length,
                    status:200
                })
            })
    },
    show: (req,res) => {
    db.ProductCategory
        .findByPk(req.params.id, {include:[{association: 'productos'}]})
        .then(category =>{
            return res.status(200).json({
                total: category.productos.length,
                prods: (category.productos),
                name: category.category_name,
                status:200
            })
        })
    }
}