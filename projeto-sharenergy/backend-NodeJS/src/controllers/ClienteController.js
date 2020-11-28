const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente");

module.exports = {
  async listarTodosClientes(req, res) {
    const clientes = await Cliente.find();

    return res.json(clientes);
  },
};
