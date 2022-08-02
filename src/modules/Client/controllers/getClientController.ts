import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetClientsService } from "../services/GetClientService";

export class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientUseCase = container.resolve(GetClientsService);
    const client = await listClientUseCase.execute(request);

    return response.json(client);
  }
}
