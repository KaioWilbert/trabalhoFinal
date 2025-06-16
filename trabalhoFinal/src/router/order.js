 const Router = require('express').Router;
 const orderApi = require('../api/order');

 const router = Router();

 router.post('/', orderApi.createOrder);
 router.get('/', orderApi.listarorder);  
 router.get('/:id', orderApi.buscarorderid);
 router.put('/:id', orderApi.alterarorder);
 router.delete('/:id', orderApi.deletarorder);

 module.exports = router;

 /**
 * @swagger
 * tags:
 *   name: Order
 *   description: Endpoints relacionados aos pedidos
 */

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - product_id
 *             properties:
 *               user_id:
 *                 type: integer
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 *
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *       400:
 *         description: Erro ao buscar pedidos
 */

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Busca um pedido pelo ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *
 *   put:
 *     summary: Atualiza um pedido existente
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar o pedido
 *
 *   delete:
 *     summary: Remove um pedido
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     responses:
 *       204:
 *         description: Pedido removido com sucesso
 *       400:
 *         description: Erro ao remover o pedido
 */
