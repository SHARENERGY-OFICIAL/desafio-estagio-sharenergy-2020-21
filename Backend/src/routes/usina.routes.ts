import { Router } from "express";

import UsinaController from "../controllers/UsinaController";

const usinaRouter = Router();

usinaRouter.get("/usina", UsinaController.index);

export default usinaRouter;
