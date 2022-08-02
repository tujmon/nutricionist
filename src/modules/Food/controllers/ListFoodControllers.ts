import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListFoodsService } from "../services/ListFoodService";

export class ListFoodsController {
  async handle(request: Request, response: Response) {
    const listFoodUseCase = container.resolve(ListFoodsService);

    const foods = await listFoodUseCase.execute();

    return response.json(foods);
  }
}
