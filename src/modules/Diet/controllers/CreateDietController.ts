import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDietService } from "../services/CreateDietService";

export class CreateDietController {
  async handle(request: Request, response: Response) {
    const { calories, type, status, client_id } = request.body;

    const createNutricionistUseCase = container.resolve(CreateDietService);

    const diet = await createNutricionistUseCase.execute({
      calories,
      type,
      status,
      client_id,
    });

    return response.json(diet);
  }
}
