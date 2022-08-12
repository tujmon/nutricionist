import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetClientsService } from "../services/GetClientService";

export class GetClientController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;
    const getClientUseCase = container.resolve(GetClientsService);
    const client = await getClientUseCase.execute(email);

    return response.json(client);
  }
}
