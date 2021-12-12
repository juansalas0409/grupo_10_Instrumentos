module.exports =(sequelize, DataTypes)=>{
    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        category_name: {
            type: DataTypes.STRING,
        }
    }
    let config = {
        tablename: 'product_categories',
        timestamps: false
    }
        
    const ProductCategory = sequelize.define('ProductCategory',cols, config);
    ProductCategory.associate= function(models){
        ProductCategory.hasMany(models.Producto, {
            as:'productos',
            foreignKey: 'product_category'
        })
    }
    return ProductCategory;
    
}