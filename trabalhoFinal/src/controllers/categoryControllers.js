const bcrypt = require("bcrypt");// Importa biblioteca para criptografia de senhas
const jwt = require("jsonwebtoken"); // Importa bibliotecas para criptografia de senhas e geração de tokens JWT
const Category = require("../models/category"); // Importa o modelo Category, que representa a tabela categorias no banco


class CategoryController { // Classe que encapsula a lógica para manipular categorias no banco
  async createCategory(name) {   // Método para criar uma nova categoria, recebendo o nome
    if (name === undefined) {  // Verifica se o nome foi passado
      throw new Error("Preencha todos os campos obrigatórios");     // Se não, lança erro para avisar que o campo é obrigatório
    }
    const newCategory = await Category.create({   // Cria a categoria no banco via Sequelize
      name,
    });
    return { // Retorna um objeto com os dados da nova categoria criada
      id: newCategory.id,
      name: newCategory.name, 
    };
  }



  async buscarcategoryid(id) { // Busca categoria pelo id
    if (!id) {
      throw new Error("Id é obrigatório");
    }

    const category = await Category.findByPk(id);  // Busca no banco usando chave primária (id)
    if (!category) {
      throw new Error("Categoria não encontrada");
    }

    return category;
  }



  async alterarcategory(id, name) {  // Atualiza uma categoria pelo id e novo nome
    if (!id || !name) {
      throw new Error("Id, nome são obrigatórios");
    }

    const category = await this.buscarcategoryid(id);   // Usa método interno para buscar a categoria e já validar existência

    category.name = name;
    await category.save();    // Salva as alterações no banco

    return category;
  }



  async deletarcategory(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const category = await this.buscarcategoryid(id);
    await category.destroy();
  }



  async listarcategory() {
    return Category.findAll();
  }
}

module.exports = new CategoryController();
