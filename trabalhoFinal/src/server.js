const express = require('express'); // Importa o framework Express, usado para criar o servidor web
const database = require('./config/database');  // Importa a configuração do banco de dados Sequelize

const swaggerUi = require('swagger-ui-express');    // Importa o Swagger UI para documentação da API
const swaggerSpecs = require('./config/swagger');  // Importa as especificações do Swagger, que descrevem a API

// Importa as rotas de cada entidade
const userRouter = require('./router/user');
const productRouter = require('./router/product');
const categoryRouter = require('./router/category');
const orderRouter = require('./router/order');
const orderProduct = require('./router/orderProduct.js');  
  

console.log('Starting server...');
const app = express(); // Cria uma instância da aplicação Express


app.use(express.json()); // Middleware que permite o Express entender requisições com corpo JSON
  

// Importa o Swagger para documentação da API
// O Swagger é uma ferramenta que permite descrever, consumir e visualizar APIs RESTful
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.get('/', (req, res) => { // Rota base apenas para teste
  res.send('BEM VINDO!');
});

// Define os prefixos para cada conjunto de rotas da API
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/category', categoryRouter);
app.use('/api/orderProduct', orderProduct); 


// Sincroniza os modelos Sequelize com o banco de dados
// 'force: false' garante que as tabelas não sejam recriadas toda vez que rodar
database.sync( { force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });