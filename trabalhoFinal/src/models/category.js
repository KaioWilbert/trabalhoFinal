const database = require('../config/database');   // Campo id do tipo inteiro, chave primária e autoincrementável

class Category {
    constructor() {
        this.model = database.define('category', {  // Define o modelo 'category' no Sequelize
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true  // Campo id do tipo inteiro, chave primária e autoincrementável
            },
            name: {
                type: database.Sequelize.STRING,
                allowNull: false  // Campo name do tipo string, não pode ser nulo (obrigatório)
            },
        
        });
    }
}

module.exports = (new Category()).model;  // Exporta a instância do modelo 'category' para ser usada em outras partes da aplicação