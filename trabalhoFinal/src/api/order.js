const controller = require('../controllers/orderControllers');

class orderApi {
    

    async createOrder(req, res) {
        const  user_id = req.body.user_id;
        const  product_id = req.body.product_id;

        try {
            const order = await controller.createOrder(user_id, product_id);
            res.status(201).json(order);
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }



     async buscarorderid(req, res) {
          const { id } = req.params;

         try {
          const order = await controller.buscarorderid(Number(id));
          return res.status(200).json(order);
          } catch (error) {
         return res.status(404).json({ error: error.message });
        }
     }



     async alterarorder(req, res) {
    const { id } = req.params;
    const { user_id, product_id } = req.body;

    try {
      const order = await controller.alterarorder(Number(id), user_id, product_id);
      return res.status(200).send(order);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }



  async deletarorder(req, res) {
    const { id } = req.params;

    try {
      await controller.deletarorder(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }



  async listarorder(req, res) {
    try {
      const order = await controller.listarorder();
      return res.status(200).send(order);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}
module.exports = new orderApi();