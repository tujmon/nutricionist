import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvaliationsService } from "../services/ListAvaliationService";

export class ListAvaliationController {
  async handle(request: Request, response: Response) {
    const listAvaliationUseCase = container.resolve(ListAvaliationsService);
    const avaliation = await listAvaliationUseCase.execute();

    return response.json(avaliation);
  }
}
