import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetMealService } from "../services/GetMealService";

export class ListMealController {
  async handle(request: Request, response: Response) {
    const listMealUseCase = container.resolve(GetMealService);
    const meal = await listMealUseCase.execute(request);

    return response.json(meal);
  }
}
