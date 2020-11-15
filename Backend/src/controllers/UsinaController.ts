import { Response, Request } from "express";

import DadosUsina from "../database/schemas/DadosUsina";

class UsinaController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const dadosUsina = await DadosUsina.find();

    return res.json(dadosUsina);
  }
}

export default UsinaController;
