import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDietsService } from "../services/ListDietService";

export class ListDietsController {
  async handle(request: Request, response: Response) {
    const listDietUseCase = container.resolve(ListDietsService);

    const diets = await listDietUseCase.execute();

    return response.json(diets);
  }
}
