import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDietService } from "../services/GetDietService";

export class ListDietController {
  async handle(request: Request, response: Response) {
    const listDietUseCase = container.resolve(GetDietService);
    const diet = await listDietUseCase.execute(request);

    return response.json(diet);
  }
}
