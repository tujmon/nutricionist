import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetFoodService } from "../services/GetFoodService";

export class ListFoodController {
  async handle(request: Request, response: Response) {
    const listFoodUseCase = container.resolve(GetFoodService);
    const food = await listFoodUseCase.execute(request);

    return response.json(food);
  }
}
