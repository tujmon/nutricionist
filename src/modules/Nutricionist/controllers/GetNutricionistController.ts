import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetNutricionistService } from "../services/GetNutricionistService";

export class GetNutricionistController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;
    const getNutricionistUseCase = container.resolve(GetNutricionistService);
    const nutricionist = await getNutricionistUseCase.execute(email);

    return response.json(nutricionist);
  }
}
