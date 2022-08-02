import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClientsService } from "../services/ListClientService";

export class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientUseCase = container.resolve(ListClientsService);

    const client = await listClientUseCase.execute();

    return response.json(client);
  }
}
