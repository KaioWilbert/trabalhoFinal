const controller = require('../controllers/productControllers');

class productApi {

  
    async createProduct(req, res) {
        const  name = req.body.name;
        const  price = req.body.price;
        const  categoria_id = req.body.categoria_id;

        try {
            const product = await controller.createProduct(name, price, categoria_id);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }


     async buscarproductid(req, res) {
    const { id } = req.params;

    try {
      const product = await controller.buscarproductid(Number(id));
      return res.status(200).json(product);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }


   async alterarproduct(req, res) {
    const { id } = req.params;
    const { name, price, categoria_id } = req.body;

    try {
      const product = await controller.alterarproduct(Number(id), name, price, categoria_id);
      return res.status(200).send(product);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }


  async deletarproduct(req, res) {
    const { id } = req.params;

    try {
      await controller.deletarproduct(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  
  async listarproduct(req, res) {
  try {
    const products = await controller.listarproduct();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}
}

module.exports = new productApi();