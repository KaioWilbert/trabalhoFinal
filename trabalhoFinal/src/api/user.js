const controller = require('../controllers/userControllers');

class userApi {


  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await controller.createUser(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  

  async buscaruserid(req, res) {
    const { id } = req.params;

    try {
      const user = await controller.buscaruserid(Number(id));
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }



  async alteraruser(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const user = await controller.alteraruser(Number(id), name, email, password);
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }



  async deletaruser(req, res) {
  const { id } = req.params;

  try {
    await controller.deletaruser(Number(id));
    return res.status(204).send();
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
}



  async listaruser(req, res) {
      try {
        const product = await controller.listaruser();
        return res.status(200).send(product);
      } catch (error) {
        return res.status(400).send({ error: error.message });
      }
    }



  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await controller.login(email, password);
      return res.status(200).send(token);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }
}

module.exports = new userApi();
