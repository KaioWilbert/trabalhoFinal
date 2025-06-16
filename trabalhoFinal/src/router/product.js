const Router = require('express').Router;
const productApi = require('../api/product');

const router = Router();

router.post('/', productApi.createProduct);
router.get('/', productApi.listarproduct);  
router.get('/:id', productApi.buscarproductid);
router.put('/:id', productApi.alterarproduct);
router.delete('/:id', productApi.deletarproduct);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Endpoints relacionados aos produtos
 */

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Whey Protein
 *               price:
 *                 type: number
 *                 example: 150.5
 *               category_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Dados inválidos
 *
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       400:
 *         description: Erro ao listar produtos
 */

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 *
 *   put:
 *     summary: Atualiza um produto existente
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Whey Protein Isolado
 *               price:
 *                 type: number
 *                 example: 180.75
 *               category_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       400:
 *         description: Erro na atualização
 *
 *   delete:
 *     summary: Remove um produto
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do produto
 *     responses:
 *       204:
 *         description: Produto removido com sucesso
 *       400:
 *         description: Erro ao remover produto
 */
