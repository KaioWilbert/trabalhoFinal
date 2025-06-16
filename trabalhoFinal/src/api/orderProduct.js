const controller = require('../controllers/orderProductController');

class orderProductApi {


  async createOrderProduct(req, res) {
    const  order_id = req.body.order_id;
        const  product_id = req.body.product_id;
        const  quantity = req.body.quantity;

    try {
      const relation = await controller.createOrderProduct(order_id, product_id, quantity);
      return res.status(201).json(relation);
    } catch (error) {
      console.error('Error creating Relation:', error);
      return res.status(500).json({ error: error.message });
    }
  }



  async buscarOrderProductId(req, res) {
    const { id } = req.params;

    try {
      const relation = await controller.buscarOrderProductId(Number(id));
      return res.status(200).json(relation);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }



  async alterarOrderProduct(req, res) {
    const { id } = req.params;
    const { order_id, product_id, quantity } = req.body;

    try {
      const updated = await controller.alterarOrderProduct(Number(id), order_id, product_id, quantity);
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }



  async deletarOrderProduct(req, res) {
    const { id } = req.params;

    try {
      await controller.deletarOrderProduct(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }



  async listarOrderProducts(req, res) {
    try {
      const list = await controller.listarOrderProducts();
      return res.status(200).json(list);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new orderProductApi();
