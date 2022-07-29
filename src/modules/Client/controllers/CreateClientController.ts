import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientService } from "../services/CreateClientService";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, telephone, email } = request.body;

    const createClientUseCase = container.resolve(CreateClientService);

    const client = await createClientUseCase.execute({
      name,
      telephone,
      email,
    });

    return response.json(client);
  }
}
