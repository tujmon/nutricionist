import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDietService } from "../services/GetDietService";

export class GetDietController {
  async handle(request: Request, response: Response) {
    const getDietUseCase = container.resolve(GetDietService);
    const diet = await getDietUseCase.execute(request);

    return response.json(diet);
  }
}
