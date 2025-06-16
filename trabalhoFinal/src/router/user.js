const Router = require('express').Router;
const userApi = require('../api/user');

const router = Router();

router.post('/login', userApi.login);
router.post('/', userApi.createUser);
router.get('/', userApi.listaruser);  
router.get('/:id', userApi.buscaruserid);
router.put('/:id', userApi.alteraruser);
router.delete('/:id', userApi.deletaruser);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: User
 *   description: Endpoints relacionados aos usuários
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 *
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       400:
 *         description: Erro ao listar usuários
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 *
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Atualizado
 *               email:
 *                 type: string
 *                 example: joao_atualizado@email.com
 *               password:
 *                 type: string
 *                 example: novaSenha123
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Erro na atualização
 *
 *   delete:
 *     summary: Remove um usuário
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       400:
 *         description: Erro ao remover usuário
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       400:
 *         description: Erro de autenticação
 */
