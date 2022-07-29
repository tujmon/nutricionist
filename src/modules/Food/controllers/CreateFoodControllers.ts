import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFoodService } from "../services/CreateFoodService";

export class CreateFoodController {
  async handle(request: Request, response: Response) {
    const { name, fat, calories, carb, protein } = request.body;

    const createNutricionistUseCase = container.resolve(CreateFoodService);

    const food = await createNutricionistUseCase.execute({
      name,
      fat,
      calories,
      carb,
      protein,
    });

    return response.json(food);
  }
}
