import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateNutricionistService } from "../services/CreateNutricionistService";

export class CreateNutricionistController {
  async handle(request: Request, response: Response) {
    const { name, phone, email, cnn, clients, password } = request.body;
    console.log(password);
    const createNutricionistUseCase = container.resolve(
      CreateNutricionistService
    );
    const nutricionist = await createNutricionistUseCase.execute({
      name,
      phone,
      email,
      cnn,
      clients,
      password,
    });

    return response.json(nutricionist);
  }
}
