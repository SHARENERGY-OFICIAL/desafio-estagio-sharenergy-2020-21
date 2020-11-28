const express = require("express");
const routes = express.Router();

const ClienteController = require("./controllers/ClienteController");

routes.get("/clientes", ClienteController.listarTodosClientes);

module.exports = routes;
