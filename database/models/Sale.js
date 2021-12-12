module.exports =(sequelize, DataTypes)=>{
    let cols={
        sales_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        total_price: {
            type: DataTypes.DECIMAL(10,0),
        },
        total_qty: {
            type: DataTypes.STRING
        }
    }
    let config = {
        tablename: 'sales',
        timestamps: false
    }
        
    const Sale = sequelize.define('Sale',cols, config);
    Sale.associate= function(models){
        Sale.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id',
        })
        Sale.belongsToMany(models.Producto, {
            as: 'productos',
            through: 'cart_detail',
            foreignKey: 'sales_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    
    return Sale
    
    }