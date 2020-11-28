const express = require("express");
const routes = express.Router();

const ClienteController = require("./controllers/ClienteController");

routes.get("/clientes", ClienteController.listarTodosClientes);
routes.get("/clientes/:id", ClienteController.buscarCliente);
routes.post("/clientes", ClienteController.criarNovoCliente);
routes.put("/clientes/:id", ClienteController.atualizarDadosCliente);
routes.delete("/clientes/:id", ClienteController.deletarCliente);

module.exports = routes;
