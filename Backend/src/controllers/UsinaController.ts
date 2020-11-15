import { Response, Request } from "express";

import DadosUsina from "../database/schemas/DadosUsina";

class UsinaController {
  public static async index(req: Request, res: Response): Promise<Response> {
    const dadosUsina = await DadosUsina.find();

    dadosUsina.sort((data1: any, data2: any) =>
      data1.tempo_h < data2.tempo_h
        ? -1
        : data1.tempo_h === data2.tempo_h
        ? 0
        : 1
    );

    return res.json(dadosUsina);
  }
}

export default UsinaController;
