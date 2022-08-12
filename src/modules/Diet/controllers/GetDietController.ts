import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDietService } from "../services/GetDietService";

export class GetDietController {
  async handle(request: Request, response: Response) {
    const { clientId } = request.params;
    const getDietUseCase = container.resolve(GetDietService);
    const diet = await getDietUseCase.execute(+clientId);

    return response.json(diet);
  }
}
