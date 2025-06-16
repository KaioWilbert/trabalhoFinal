const database = require('../config/database'); 

class OrderProduct {
    constructor() {
        this.model = database.define('orderProduct', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            orderId: {
                type: database.Sequelize.INTEGER,
                allowNull: false
            },
            productId: {
                type: database.Sequelize.INTEGER,
                allowNull: false
            },
            quantity: {
                type: database.Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            }
        });
    }
}

module.exports = (new OrderProduct()).model;
