import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetMealService } from "../services/GetMealService";

export class GetMealController {
  async handle(request: Request, response: Response) {
    const getMealUseCase = container.resolve(GetMealService);
    const meal = await getMealUseCase.execute(request);

    return response.json(meal);
  }
}
