import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientService } from "../services/CreateClientService";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
      name,
      phone,
      email,
      nutricionistId,
      avaliations,
      password,
      appointments,
      diets,
    } = request.body;

    const createClientUseCase = container.resolve(CreateClientService);

    const client = await createClientUseCase.execute({
      name,
      phone,
      email,
      nutricionistId,
      avaliations,
      appointments,
      password,
      diets,
    });

    return response.json(client);
  }
}
