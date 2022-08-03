import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetFoodService } from "../services/GetFoodService";

export class GetFoodController {
  async handle(request: Request, response: Response) {
    const getFoodUseCase = container.resolve(GetFoodService);
    const food = await getFoodUseCase.execute(request);

    return response.json(food);
  }
}
