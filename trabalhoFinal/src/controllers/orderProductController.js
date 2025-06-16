const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const orderProduct = require('../models/orderProduct');


class OrderProductController {
  async createOrderProduct(order_id, product_id, quantity) {
    if (!order_id || !product_id || quantity === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }

    const newOrderProduct = await orderProduct.create({
      order_id,
      product_id,
      quantity,
    });

    return {
      id: newOrderProduct.id,
      order_id: newOrderProduct.order_id,
      product_id: newOrderProduct.product_id,
      quantity: newOrderProduct.quantity,
    };
  }


  async buscarOrderProductId(id) {
    if (!id) {
      throw new Error("Id é obrigatório");
    }

    const found = await orderProduct.findByPk(id);
    if (!found) {
      throw new Error("Relação não encontrada");
    }

    return found;
  }


  async alterarOrderProduct(id, order_id, product_id, quantity) {
    if (!id || !order_id || !product_id || quantity === undefined) {
      throw new Error("Todos os campos são obrigatórios");
    }

    const found = await this.buscarOrderProductId(id);

    found.order_id = order_id;
    found.product_id = product_id;
    found.quantity = quantity;
    await found.save();

    return found;
  }


  async deletarOrderProduct(id) {
    if (!id) {
      throw new Error("Id é obrigatório");
    }

    const found = await this.buscarOrderProductId(id);
    await found.destroy();
  }


  async listarOrderProducts() {
    return orderProduct.findAll();
  }
}

module.exports = new OrderProductController();
