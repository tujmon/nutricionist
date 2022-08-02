import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetNutricionistService } from "../services/GetNutricionistService";

export class ListNutricionistController {
  async handle(request: Request, response: Response) {
    const listNutricionistUseCase = container.resolve(GetNutricionistService);
    const nutricionist = await listNutricionistUseCase.execute(request);

    return response.json(nutricionist);
  }
}
