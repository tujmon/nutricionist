import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAvaliationService } from "../services/GetAvaliationService";

export class ListAvaliationController {
  async handle(request: Request, response: Response) {
    const listAvaliationUseCase = container.resolve(GetAvaliationService);
    const avaliation = await listAvaliationUseCase.execute(request);

    return response.json(avaliation);
  }
}
