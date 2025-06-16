const controller = require('../controllers/categoryControllers'); // Importa o módulo que contém a lógica de negócio para categorias

class CategoryApi {  // Importa o módulo que contém a lógica de negócio para categorias
  

  async createCategory(req, res) {    // Método assíncrono para criar uma nova categoria
    const name = req.body.name;  // Pega o nome da categoria enviado no corpo da requisição
    
    try {
      const category = await controller.createCategory(name);// Chama a função do controller para criar a categoria no banco de dados
      res.status(201).json(category);    // Envia resposta com status 201 (Criado) e os dados da categoria criada em JSON
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Internal server error' }); // Envia resposta com status 500 (Erro servidor) e mensagem de erro
    }
  }



  async buscarcategoryid(req, res) {    // Busca uma categoria pelo ID recebido na URL
    const { id } = req.params;    // Extrai o ID dos parâmetros da rota
    try {
      const category = await controller.buscarcategoryid(Number(id));//Chama o controller para buscar convertendo o ID para número   
      return res.status(200).json(category);     // Retorna a categoria com status 200 (OK)
    } catch (error) {
      return res.status(404).json({ error: error.message });  // Retorna erro 404 (Não encontrado) se a categoria não existir
    }
  }



  async alterarcategory(req, res) {  // Atualiza uma categoria pelo ID com o novo nome enviado no corpo
    const { id } = req.params;
    const { name } = req.body;
    try {
    
      const category = await controller.alterarcategory(Number(id), name);   // Chama o controller para alterar a categoria
      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });   // Em caso de erro (ex: dados inválidos), retorna status 400 com erro
    }
  }



  async deletarcategory(req, res) {  // Deleta uma categoria pelo ID passado na URL
    const { id } = req.params;
    try {
      await controller.deletarcategory(Number(id));   // Chama o controller para deletar a categoria
      return res.status(204).send();  // Retorna status 204 (No Content), que indica sucesso sem conteúdo para retornar
    } catch (error) {
      return res.status(400).json({ error: error.message });    // Se der erro (ex: ID não existe), retorna status 400 com erro
    }
  }


  
  async listarcategory(req, res) {
    try {
      const category = await controller.listarcategory();  // Chama o controller que retorna todas as categorias
      return res.status(200).json(category);   // Retorna a lista com status 200
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CategoryApi();  // Exporta uma instância da classe para ser usada nas rotas
