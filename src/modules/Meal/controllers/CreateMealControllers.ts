import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateMealService } from "../services/CreateMealService";

export class CreateMealController {
  async handle(request: Request, response: Response) {
    const { name, fat, calories, carb, protein } = request.body;

    const createNutricionistUseCase = container.resolve(CreateMealService);

    const meal = await createNutricionistUseCase.execute({
      name,
      fat,
      calories,
      carb,
      protein,
    });

    return response.json(meal);
  }
}
