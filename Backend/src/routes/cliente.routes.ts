import { Router } from "express";

import ClienteController from "../controllers/ClienteController";

const clienteRouter = Router();

clienteRouter.get("/clientes", ClienteController.index);
clienteRouter.put("/clientes", ClienteController.update);

export default clienteRouter;
