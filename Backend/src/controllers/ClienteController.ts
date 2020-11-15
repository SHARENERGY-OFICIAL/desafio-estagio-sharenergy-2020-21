import { Response, Request } from "express";

import DadosCliente from "../database/schemas/DadosCliente";

class ClienteController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const dadosCliente = await DadosCliente.find();

    return res.json(dadosCliente);
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const { numeroCliente, nomeCliente, usinas } = req.body;

    await DadosCliente.updateOne({ numeroCliente }, { nomeCliente, usinas });

    const dadosCliente = await DadosCliente.findOne({ numeroCliente });

    return res.json(dadosCliente);
  }
}

export default ClienteController;
