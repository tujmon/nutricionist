import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAvaliationService } from "../services/CreateAvaliationService";

export class CreateAvaliationController {
  async handle(request: Request, response: Response) {
    const { weight, bmi, size, fat, client_id, appointment_id, date } =
      request.body;

    const createNutricionistUseCase = container.resolve(
      CreateAvaliationService
    );

    const avaliation = await createNutricionistUseCase.execute({
      weight,
      bmi,
      size,
      fat,
      client_id,
      appointment_id,
      date,
    });

    return response.json(avaliation);
  }
}
