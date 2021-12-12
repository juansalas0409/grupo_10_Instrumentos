module.exports =(sequelize, DataTypes)=>{
let cols={
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL(10,0),
    },
    product_category: {
        type: DataTypes.BIGINT(11)
    },
    description:{
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
    }

}
let config = {
    tablename: 'products',
    timestamps: false
}
    
const Producto = sequelize.define('Producto',cols, config);
Producto.associate= function(models){
    Producto.belongsToMany(models.Sale, {
        as: 'sales',
        through: 'cart_detail',
        foreignKey: 'product_id',
        otherKey: 'sales_id',
        timestamps: false
    })
    Producto.belongsTo(models.ProductCategory,{
        as:'productsCategories',
        foreignKey: 'product_category'
    })
}
return Producto

}