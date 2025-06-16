const Router = require('express').Router; // Importa o método Router do Express para criar rotas
const categoryApi = require('../api/category');  // Importa a classe que contém os métodos da API relacionados à categoria

const router = Router();  // Cria uma instância do roteador do Express

router.post('/', categoryApi.createCategory);
router.get('/', categoryApi.listarcategory);  
router.get('/:id', categoryApi.buscarcategoryid);
router.put('/:id', categoryApi.alterarcategory);
router.delete('/:id', categoryApi.deletarcategory);

module.exports = router;  // Exporta as rotas para serem usadas no app principal

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Endpoints relacionados às categorias
 */

/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Suplementos
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       400:
 *         description: Dados inválidos
 *
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Lista de categorias
 */

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: Busca uma categoria pelo ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 *
 *   put:
 *     summary: Atualiza uma categoria existente
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Roupas
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *       404:
 *         description: Categoria não encontrada
 *
 *   delete:
 *     summary: Remove uma categoria
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Categoria removida com sucesso
 *       404:
 *         description: Categoria não encontrada
 */
