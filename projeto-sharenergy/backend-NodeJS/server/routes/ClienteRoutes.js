const ClienteController = require("../controllers/ClienteController");

module.exports = (app) => {
  app.get("/clientes", ClienteController.listarTodosClientes);
  app.get("/clientes/:id", ClienteController.buscarCliente);
  app.post("/clientes", ClienteController.criarNovoCliente);
  app.put("/clientes/:id", ClienteController.atualizarDadosCliente);
  app.delete("/clientes/:id", ClienteController.deletarCliente);
};
