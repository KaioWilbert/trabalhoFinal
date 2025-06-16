const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const order = require("../models/order");


class OrderController {
  async createOrder(user_id, product_id) {
    if (user_id === undefined 
        || product_id === undefined) 
        {
      throw new Error("Preencha todos os campos obrigatórios");
    }
    const newOrder = await order.create({
      user_id,
      product_id,
    });
    return {
      id: newOrder.id,
      user_id: newOrder.user_id,
      product_id: newOrder.product_id,
    };
  }

 
    async buscarorderid(id) {
      if (!id) {
        throw new Error("Id é obrigatório");
      }
  
      const order = await order.findByPk(id);////////////////////////
      if (!order) {
        throw new Error("Usuário não encontrado");
      }
  
      return order;
    }



    async alterarorder(id, user_id, product_id) {
        if (!id || !user_id || !product_id) {
          throw new Error("Id são obrigatórios");
        }
    
        const order = await this.buscarorderid(id);
    
        order.user_id = user_id;
        order.product_id = product_id;
       // order.password = await bcrypt.hash(password, saltRounds);
        await order.save();
    
        return order;
      }



      async deletarorder(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const order = await this.buscarorderid(id);
    await order.destroy();
  }



  async listarorder() {
      return order.findAll();//////////////////////
    }
}
module.exports = new OrderController();