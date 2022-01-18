const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.User
            .findAll()
            .then(users => {
                return res.status(200).json({
                    count: users.length,
                    data: users,
                    status: 200
                })
            })
    },

    show: (req, res) =>{
    db.User
        .findByPk(req.params.id)
        .then(users => {
            return res.status(200).json({
                id: users.id,
                first_name: users.first_name,
                last_name: users.last_name,
                email: users.email,
                username: users.username,
                birth_date: users.birth_date,
                avatar: users.avatar
            })
        })
    }
}

