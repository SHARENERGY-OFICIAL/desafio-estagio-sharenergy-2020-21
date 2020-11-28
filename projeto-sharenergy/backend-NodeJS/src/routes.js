const express = require("express");
const routes = express.Router();

const ClienteController = require("./controllers/ClienteController");

routes.get("/clientes", ClienteController.listarTodos);

module.exports = routes;
