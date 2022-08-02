import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListMealsService } from "../services/ListMealService";

export class ListMealsController {
  async handle(request: Request, response: Response) {
    const listMealUseCase = container.resolve(ListMealsService);

    const meals = await listMealUseCase.execute();

    return response.json(meals);
  }
}