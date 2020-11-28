const express = require("express");
const routes = express.Router();

const ClienteController = require("./controllers/ClienteController");

routes.get("/clientes", ClienteController.listarTodosClientes);
routes.post("/clientes", ClienteController.criarNovoCliente);

module.exports = routes;
