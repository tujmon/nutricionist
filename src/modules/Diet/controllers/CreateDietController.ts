import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDietService } from "../services/CreateDietService";

export class CreateDietController {
  async handle(request: Request, response: Response) {
    const {   calories,
      fat,
      carb,
      protein,
      type,
      clientId,
      meals} = request.body;

    const createNutricionistUseCase = container.resolve(CreateDietService);

    const diet = await createNutricionistUseCase.execute({
      calories,
      fat,
      carb,
      protein,
      type,
      clientId,
      meals
    });

    return response.json(diet);
  }
}
