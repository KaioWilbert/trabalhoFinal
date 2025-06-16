const swaggerJsdoc = require('swagger-jsdoc'); // Importa o swagger-jsdoc, que gera a documentação Swagger a partir de comentários JSDoc

const options = {  // Configurações para o Swagger
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Trabalho Final',
      version: '1.0.0',
      description: 'API para atividade.',
      contact: {
        name: 'ajuda',
        email: 'ajuda@atividade.com',
      },
    },
    servers: [  // Define os servidores onde a API está hospedada
      { url: 'http://localhost:3000', description: 'Desenvolvimento' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer', // Tipo de autenticação HTTP Bearer
          bearerFormat: 'JWT', // Formato do token JWT
        }
      }
    },
  },
  apis: ['./src/router/*.js'],    // Caminho para os arquivos que contêm as anotações JSDoc para gerar a documentação
};

const swaggerSpec = swaggerJsdoc(options); // Gera a especificação Swagger a partir das opções definidas

module.exports = swaggerSpec; // Exporta a especificação Swagger para ser usada em outros arquivos, como o servidor Express
