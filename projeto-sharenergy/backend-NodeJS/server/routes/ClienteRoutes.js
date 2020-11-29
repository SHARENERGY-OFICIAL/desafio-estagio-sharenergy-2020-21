const ClienteController = require("../controllers/ClienteController");
const authMiddleware = require("../middlewares/auth");

module.exports = (app) => {
  app.get("/clientes", authMiddleware, ClienteController.listarTodosClientes);
  app.get("/clientes/:id", authMiddleware, ClienteController.buscarCliente);
  app.post("/clientes", authMiddleware, ClienteController.criarNovoCliente);
  app.put(
    "/clientes/:id",
    authMiddleware,
    ClienteController.atualizarDadosCliente
  );
  app.delete("/clientes/:id", authMiddleware, ClienteController.deletarCliente);
};
