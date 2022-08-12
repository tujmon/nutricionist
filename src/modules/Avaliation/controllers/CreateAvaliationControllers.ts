import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAvaliationService } from "../services/CreateAvaliationService";

export class CreateAvaliationController {
  async handle(request: Request, response: Response) {
    const { weight, imc, height, fat, clientId, appointmentId, date } =
      request.body;

    const createNutricionistUseCase = container.resolve(
      CreateAvaliationService
    );

    const avaliation = await createNutricionistUseCase.execute({
      weight,
      imc,
      height,
      fat,
      clientId,
      appointmentId,
      date,
    });

    return response.json(avaliation);
  }
}
