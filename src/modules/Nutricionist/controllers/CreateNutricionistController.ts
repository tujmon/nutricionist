import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateNutricionistService } from "../services/CreateNutricionistService";

export class CreateNutricionistController {
  async handle(request: Request, response: Response) {
    const { name, telephone, email, cnn } = request.body;

    const createNutricionistUseCase = container.resolve(
      CreateNutricionistService
    );

    const nutricionist = await createNutricionistUseCase.execute({
      name,
      telephone,
      email,
      cnn,
    });

    return response.json(nutricionist);
  }
}
