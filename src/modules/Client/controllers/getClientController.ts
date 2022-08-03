import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetClientsService } from "../services/GetClientService";

export class GetClientController {
  async handle(request: Request, response: Response) {
    const getClientUseCase = container.resolve(GetClientsService);
    const client = await getClientUseCase.execute(request);

    return response.json(client);
  }
}
