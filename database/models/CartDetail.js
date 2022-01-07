module.exports =(sequelize, DataTypes)=>{
    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        sales_id: {
            type: DataTypes.INTEGER,
        },
        product_id: {
            type: DataTypes.INTEGER,
        }
    }
    let config = {
        tablename: 'cart_detail',
        timestamps: false
    }
        
    const CartDetail= sequelize.define('CartDetail',cols, config);
    
    return CartDetail;
    

}