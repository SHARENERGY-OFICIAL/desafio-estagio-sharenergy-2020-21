import { Router } from "express";

import ClienteRoutes from "./cliente.routes";
import UsinaRoutes from "./usina.routes";

const routes = Router();

routes.use(ClienteRoutes);
routes.use(UsinaRoutes);

export default routes;
