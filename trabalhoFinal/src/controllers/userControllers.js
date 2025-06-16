const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const SECRET = process.env.JWT_SECRET || "defaultsecret";
const saltRounds = 10;

const userController = {
 
  async createUser(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos obrigatórios");
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("Email já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

  

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
  },

  
  async buscaruserid(id) {
    if (!id) {
      throw new Error("Id é obrigatório");
    }

    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  },

  
  async alteraruser(id, name, email, password) {
    if (!id || !name || !email || !password) {
      throw new Error("Id, nome, email e senha são obrigatórios");
    }

    const user = await this.buscaruserid(id);

    user.name = name;
    user.email = email;
    user.password = await bcrypt.hash(password, saltRounds);
    await user.save();

    return user;
  },


  async deletaruser(id) {
  if (id === undefined) {
    throw new Error("Id é obrigatório");
  }

  const user = await this.buscaruserid(id);
  await user.destroy();
},

  
  async listaruser() {
    return User.findAll();
  },

  // Login
  async login(email, password) {
    if (!email || !password) {
      throw new Error("Email e senha são obrigatórios");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordValida = await bcrypt.compare(password, user.password);

    if (!passwordValida) {
      throw new Error("Senha inválida");
    }

    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: "1h",
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  },
};

module.exports = userController;
