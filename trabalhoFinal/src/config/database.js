const { Sequelize } = require('sequelize');// Importa o construtor Sequelize da biblioteca sequelize para criar a conexão com o banco

const sequelize = new Sequelize('Atividade', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Cria uma nova instância do Sequelize, configurando a conexão com o banco de dados MySQL:
// - 'Atividade' é o nome do banco de dados
// - 'root' é o usuário do banco (padrão local)
// - '' (string vazia) é a senha (sem senha configurada aqui)
// - host é o endereço do servidor do banco (localhost = sua máquina)
// - dialect define qual tipo de banco você está usando (MySQL nesse caso)

module.exports = sequelize;

// Exporta essa instância para ser usada em outras partes da aplicação para realizar operações no banco