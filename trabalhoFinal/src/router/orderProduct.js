const Router = require('express').Router;
const orderProductApi = require('../api/orderProduct');

const router = Router();

router.post('/', orderProductApi.createOrderProduct);          
router.get('/', orderProductApi.listarOrderProducts);         
router.get('/:id', orderProductApi.buscarOrderProductId);  
router.put('/:id', orderProductApi.alterarOrderProduct);     
router.delete('/:id', orderProductApi.deletarOrderProduct);   

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: OrderProduct
 *   description: Endpoints relacionados à associação entre pedidos e produtos
 */

/**
 * @swagger
 * /api/orderProduct:
 *   post:
 *     summary: Cria uma nova associação entre pedido e produto
 *     tags: [OrderProduct]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - order_id
 *               - product_id
 *               - quantity
 *             properties:
 *               order_id:
 *                 type: integer
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 example: 2
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Associação criada com sucesso
 *       500:
 *         description: Erro interno do servidor
 *
 *   get:
 *     summary: Lista todas as associações de pedido-produto
 *     tags: [OrderProduct]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *       400:
 *         description: Erro ao buscar associações
 */

/**
 * @swagger
 * /api/orderProduct/{id}:
 *   get:
 *     summary: Busca uma associação por ID
 *     tags: [OrderProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da associação
 *     responses:
 *       200:
 *         description: Associação encontrada
 *       404:
 *         description: Associação não encontrada
 *
 *   put:
 *     summary: Atualiza uma associação existente
 *     tags: [OrderProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da associação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: integer
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 example: 3
 *               quantity:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Associação atualizada com sucesso
 *       400:
 *         description: Erro ao atualizar a associação
 *
 *   delete:
 *     summary: Remove uma associação
 *     tags: [OrderProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da associação
 *     responses:
 *       204:
 *         description: Associação removida com sucesso
 *       400:
 *         description: Erro ao remover a associação
 */