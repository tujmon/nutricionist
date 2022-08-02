import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNutricionistsService } from "../services/ListNutricionistService";

export class ListNutricionistsController {
  async handle(request: Request, response: Response) {
    const listNutricionistUseCase = container.resolve(ListNutricionistsService);

    const Nutricionists = await listNutricionistUseCase.execute();

    return response.json(Nutricionists);
  }
}