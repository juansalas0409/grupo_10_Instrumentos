module.exports =(sequelize, DataTypes)=>{
    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
        },
        birth_date: {
            type: DataTypes.DATEONLY
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        avatar: {
            type: DataTypes.STRING
        }
    
    }
    let config = {
        tablename: 'users',
        timestamps: false
    }
        
    const User = sequelize.define('User',cols, config);
    User.associate= function(models){
        User.belongsTo(models.UserCategory, {
            as: "userCategory",
            foreignKey: "category_id"
        });
        User.hasMany(models.Sale, {
            as: 'sales',
            foreignKey: 'user_id'
        })
    }
    return User
    }