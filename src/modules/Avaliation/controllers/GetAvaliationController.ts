import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAvaliationService } from "../services/GetAvaliationService";

export class GetAvaliationController {
  async handle(request: Request, response: Response) {
    const getAvaliationUseCase = container.resolve(GetAvaliationService);
    const avaliation = await getAvaliationUseCase.execute(request);

    return response.json(avaliation);
  }
}
