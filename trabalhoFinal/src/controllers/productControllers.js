const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("../models/product");


class ProductController {
  async createProduct(name, price, category_id) {
    if (name === undefined || price === undefined || category_id === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newProduct = await Product.create({
      name,
      price,
      category_id,
    });
    return {
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
      category_id: newProduct.category_id,
    };
  }

  async buscarproductid(id) {
    if (!id) {
      throw new Error("Id é obrigatório");
    }

    const productInstance = await Product.findByPk(id);
    if (!productInstance) {
      throw new Error("Produto não encontrado");
    }

    return productInstance;
  }

  async alterarproduct(id, name, price, category_id) {
    if (!id || !name || !price || !category_id) {
      throw new Error("Id, nome, preço e categoria são obrigatórios");
    }

    const productInstance = await this.buscarproductid(id);

    productInstance.name = name;
    productInstance.price = price;
    productInstance.category_id = category_id;
    await productInstance.save();

    return productInstance;
  }

  async deletarproduct(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const productInstance = await this.buscarproductid(id);
    await productInstance.destroy();
  }

  async listarproduct() {
    return Product.findAll();
  }
}

module.exports = new ProductController();
