module.exports =(sequelize, DataTypes)=>{
    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        category_name: {
            type: DataTypes.STRING,
        },
    }
    let config = {
        tablename: 'user_categories',
        timestamps: false
    }
        
    const UserCategory = sequelize.define('UserCategory',cols, config);

    UserCategory.associate = function(models){
        UserCategory.hasMany(models.User, {
            as: "users",
            foreignKey: "category_id"
        })
    }
    
    return UserCategory
    
    }